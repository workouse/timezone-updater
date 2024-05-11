const express = require('express');
const { createEventAdapter } = require('@slack/events-api');
const { WebClient } = require('@slack/web-api');
const moment = require('moment-timezone');
//load env with dotenv
require('dotenv').config();


const app = express();
const web = new WebClient(process.env.SLACK_BOT_TOKEN);
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);

//route 
app.use('/slack/events', slackEvents.requestListener());


//event listener
slackEvents.on('message', async (event) => {
  const messageText = event.text;
  const user = event.user;

  const date = extractDate(messageText); //time in Istanbul timezone

  if (date) {
    console.log("date info catched");
    const timeInLondon = moment(date).tz('Europe/London').format('LLL'); // receiver timezone

    const users = await web.conversations.members({
      channel: event.channel
    });

    //filter out user from users - optional
    /*
    const index = users.members.indexOf(user);
    if (index > -1) {
      users.members.splice(index, 1);
    }
    */

    try {
      await Promise.all(users.members.map(async (user) => {
          await sendEphemeralMessage(event.channel, user, `Time in London: ${timeInLondon}`);
          console.log('Time in London: ', timeInLondon);
          console.log('Time in Istanbul: ', date);
          console.log("ephmeral message sent to user");
          console.dir(user);
      }));
    } catch (error) {
      console.error(error);
    }
  }
});

async function sendEphemeralMessage(channel, user, message) {
  try {
    await web.chat.postEphemeral({
      text: message,
      channel,
      user
    });
  } catch (error) {
    console.error(error);
  }
}

function extractDate(message) {
  const regex = /(\d{4}-\d{2}-\d{2}\ \d{2}:\d{2})/; // YYYY-MM-DD HH:MM
  const match = message.match(regex);

  if (match) {
    return moment(match[0]);
  } else {
    return null;
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

