# Requirements
- Node.js (v16)
- npm
- ngrok (for testing)

# Create a slack app

- Go to https://api.slack.com/apps?new_app=1
- Click on "Create New App"
- Click the "From manifest" tab
- Select workspace and click "Next"
- Copy the content of the file slack_app_manifest.json , update domain name and paste it in the "App manifest" field
- Click "Create" 
- Click "Install to Workspace"
- Click "Allow"

# Update environment variables

- Go to https://api.slack.com/apps
- Click on the app you created
- Click on "OAuth & Permissions"
- Copy the "Bot User OAuth Token" and update the value of `SLACK_BOT_TOKEN` in the .env file
- Click on "Basic Information"
- Copy the "Signing Secret" and update the value of `SLACK_SIGNING_SECRET` in the .env file

# Add app to channel 

- Go to channel you want to add the app to
- Click on the channel name
- Click on `Integrations`
- Search for the app you created and click on it
- Click on `Add to channel`




# Install dependencies
```bash
npm install
```

# Run application
```bash 
npm run start
```

# Update nginx configuration

- Update the server_name in the file `nginx.conf` with your domain name
- link the file `nginx.conf` to the sites-enabled directory
- Restart nginx




