# MongoDB Atlas Setup for Contact Form

## Quick Setup Guide

Your portfolio project is now configured to use MongoDB Atlas for storing contact messages. Follow these steps to complete the setup:

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create a Free Cluster
1. After logging in, click "Create a Deployment"
2. Choose the **Free Tier** (M0)
3. Select your preferred region (closer to your users is better)
4. Click "Create Deployment"
5. Wait for the cluster to be provisioned (usually 5-10 minutes)

### Step 3: Create Database User
1. In the left sidebar, go to **Database Access**
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Enter a username (e.g., `portfolio-user`)
5. Enter a strong password (save it securely!)
6. Click "Add User"

### Step 4: Allow Network Access
1. Go to **Network Access** in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (or specify your IP)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to **Databases** in the left sidebar
2. Click "Connect" on your cluster
3. Select "Drivers" → "Node.js" → "4.x or later"
4. Copy the connection string (it looks like: `mongodb+srv://...`)
5. Replace `<password>` with your actual database user password
6. Replace `<username>` with your database username

### Step 6: Update Environment Variable
1. Open `.env.local` in the project root
2. Replace the `MONGODB_URI` value with your connection string
3. Save the file

Example:
```
MONGODB_URI=mongodb+srv://portfolio-user:your-password@cluster-name.mongodb.net/portfolio-contacts?retryWrites=true&w=majority
```

### Step 7: Test the Connection
1. Make sure your development server is running (`npm run dev`)
2. Navigate to the contact form on your portfolio
3. Fill out the form and submit
4. Check MongoDB Atlas dashboard → Collections to see your submission

## Important Notes

- **Database Name**: `portfolio-contacts`
- **Collection Name**: `contacts`
- Keep your connection string secure, never commit it to public repositories
- MongoDB Atlas free tier has 512MB storage limit (plenty for contact submissions)
- Connections are optimized for serverless functions and Next.js hot reloads

## Troubleshooting

### Connection Refused Error
- Check if network access is allowed in MongoDB Atlas
- Verify your connection string has the correct username and password

### "MONGODB_URI is not defined" Error
- Make sure `.env.local` file exists in the project root
- Restart your development server after adding the connection string

### Contact Form Not Submitting
- Check browser console for errors
- Open the Network tab in DevTools to see API response
- Check MongoDB Atlas connection status

## Contact Schema

Your submissions are stored with the following fields:
- `name`: Your name (max 100 characters)
- `email`: Your email address (validated format)
- `subject`: Subject of your message (max 200 characters)
- `message`: Your message (10-5000 characters)
- `createdAt`: Timestamp when submitted
- `updatedAt`: Timestamp when last updated

## Next Steps

- View your submissions in MongoDB Atlas → Collections → contacts
- Export data as JSON/CSV for backups
- Consider setting up email notifications for new contacts
