# Requirements
- Node.js (v16)
- npm
- ngrok (for testing)

# Create a slack app
1- Go to https://api.slack.com/apps?new_app=1
2- Click on "Create New App"
3- Click the "From manifest" tab
4- Select workspace and click "Next"
5- Copy the content of the file slack_app_manifest.json , update domain name and paste it in the "App manifest" field
6- Click "Create" 
7- Click "Install to Workspace"
8- Click "Allow"

# Update environment variables
1- Go to https://api.slack.com/apps
2- Click on the app you created
3- Click on "OAuth & Permissions"
4- Copy the "Bot User OAuth Token" and update the value of `SLACK_BOT_TOKEN` in the .env file
5- Click on "Basic Information"
6- Copy the "Signing Secret" and update the value of `SLACK_SIGNING_SECRET` in the .env file

# Add app to channel 
1- Go to channel you want to add the app to
2- Click on the channel name
3- Click on `Integrations`
4- Search for the app you created and click on it
5- Click on `Add to channel`




# Install dependencies
```bash
npm install
```

# Run application
```bash 
npm run start
```

# Update nginx configuration
1- Update the server_name in the file `nginx.conf` with your domain name
2- link the file `nginx.conf` to the sites-enabled directory
3- Restart nginx




