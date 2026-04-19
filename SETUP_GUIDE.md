# 🚀 Quick Start Guide - Tejas Portfolio Website

## ✅ Prerequisites

Before you start, make sure you have:
- **Node.js 18+** installed ([Download](https://nodejs.org))
- **MongoDB Atlas account** (free tier available) ([Sign up](https://www.mongodb.com/cloud/atlas))
- **Git** installed ([Download](https://git-scm.com))
- **Text editor** (VS Code recommended)

---

## 🔧 Step-by-Step Setup

### Step 1: Install Project Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- MongoDB & Mongoose
- And more...

**Installation time:** 2-5 minutes

---

### Step 2: Setup MongoDB

#### Option A: Using MongoDB Atlas (Recommended - Free)

1. **Create Account:**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free
   - Create a new organization and project

2. **Create a Cluster:**
   - Click "Create" → "Database"
   - Choose **Free Tier (M0)**
   - Select your region closest to you
   - Click "Create Cluster"
   - Wait for cluster to deploy (5-10 minutes)

3. **Create Database User:**
   - In the left menu, click "Security" → "Database Access"
   - Click "Add New Database User"
   - Create username and password
   - Save credentials safely
   - Click "Add User"

4. **Add IP Whitelist:**
   - Go to "Security" → "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String:**
   - Go back to "Clusters" 
   - Click "Connect" on your cluster
   - Select "Drivers"
   - Copy your connection string
   - It will look like:
     ```
     mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
     ```

#### Option B: Using Local MongoDB

```bash
# Windows (if using MongoDB installer)
# MongoDB will run automatically

# macOS (using Homebrew)
brew services start mongodb-community

# Linux (Ubuntu/Debian)
sudo systemctl start mongod
```

Local connection string:
```
mongodb://localhost:27017/portfolio
```

---

### Step 3: Configure Environment Variables

1. **Open `.env.local` file in project root**
2. **Update with your information:**

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/portfolio?retryWrites=true&w=majority

# Admin Key (create a strong secret)
ADMIN_KEY=your-strong-secret-key-12345-change-this!

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Replace:**
- `YOUR_USERNAME` - Your MongoDB Atlas username
- `YOUR_PASSWORD` - Your MongoDB Atlas password
- `YOUR_CLUSTER` - Your cluster name
- `your-strong-secret-key-12345-change-this!` - Any strong random string

---

### Step 4: Customize Your Information

Edit these files to add your personal information:

#### `components/Hero.tsx`
- Update your name and title
- Modify social links
- Change tagline and descriptions

#### `components/About.tsx`
- Update about section
- Add your profile photo
- Modify quick facts

#### `components/Skills.tsx`
- Add your skills
- Customize skill categories
- Change colors

#### `components/Projects.tsx`
- Add your projects
- Update descriptions
- Change project links

#### `components/Achievements.tsx`
- Add your awards
- Update years
- Customize descriptions

#### `components/Contact.tsx`
- Update contact email
- Change phone number
- Modify location

---

### Step 5: Add Your Profile Photo

1. **Save your photo as:**
   - `public/images/profile.jpg` (or any size)

2. **Update `components/About.tsx`:**
   ```tsx
   // Replace the placeholder div with:
   <Image 
     src="/images/profile.jpg" 
     alt="Profile" 
     width={256} 
     height={256}
   />
   ```

---

### Step 6: Run Development Server

```bash
npm run dev
```

**Expected output:**
```
> next dev

  ▲ Next.js 16.2.4
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1.2s
```

**Open your browser:** [http://localhost:3000](http://localhost:3000)

You should see your portfolio with the intro animation! 🎉

---

## 🧪 Testing the Contact Form

1. Navigate to the Contact section
2. Fill in the form with test data
3. Click "Send Message"
4. You should see a success message
5. Check MongoDB Atlas:
   - Go to your cluster
   - Click "Browse Collections"
   - You should see your message in the "Contact" collection

---

## 🚀 Deployment to Vercel (Production)

### Prerequisites
- GitHub account
- Vercel account (free)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website commit"

# Create main branch
git branch -M main

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "New Project"**
3. **Select your GitHub repository**
4. **Configure Project:**
   - Framework: Next.js (should auto-detect)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

5. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add each variable:
     ```
     MONGODB_URI = your-connection-string
     ADMIN_KEY = your-admin-key
     NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
     ```

6. **Click "Deploy"**
7. **Wait for deployment** (2-5 minutes)

### Step 3: Configure Custom Domain (Optional)

1. **After deployment, go to project settings**
2. **Click "Domains"**
3. **Add your custom domain**
4. **Follow DNS setup instructions**

---

## 🔍 Troubleshooting

### Issue: "MongoDB connection refused"
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:**
- Ensure MongoDB is running
- Check `.env.local` has correct connection string
- Verify MongoDB Atlas IP whitelist includes your IP

### Issue: "MONGODB_URI is undefined"
```
Error: MONGODB_URI is not defined
```
**Solution:**
- Restart dev server: `npm run dev`
- Verify `.env.local` file exists in root directory
- Check file is not in `.gitignore`

### Issue: "Port 3000 already in use"
```
Error: Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:**
```bash
# Kill the process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Then restart
npm run dev
```

### Issue: "Styles not loading"
```
Tailwind CSS styles not applied
```
**Solution:**
- Clear browser cache: Ctrl+Shift+Delete
- Restart dev server
- Run: `npm install`

---

## 📦 Build for Production

```bash
npm run build
npm start
```

This will:
1. Compile TypeScript
2. Optimize assets
3. Generate static pages
4. Create production bundle

---

## 📋 Customization Checklist

- [ ] Updated name and title in Hero
- [ ] Added profile photo
- [ ] Updated About section
- [ ] Added your skills
- [ ] Listed your projects
- [ ] Added achievements
- [ ] Updated contact information
- [ ] Changed social links
- [ ] Set up MongoDB connection
- [ ] Tested contact form
- [ ] Deployed to Vercel

---

## 📚 Useful Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **MongoDB Docs:** https://docs.mongodb.com
- **Vercel Docs:** https://vercel.com/docs

---

## 🆘 Need Help?

- Check the README.md for more detailed documentation
- Review component files for inline comments
- Test each section individually
- Check browser console for errors (F12)
- Verify all environment variables are set

---

## ✨ Next Steps After Setup

1. ✅ Customize all content
2. ✅ Test contact form
3. ✅ Deploy to Vercel
4. ✅ Share your portfolio!
5. ✅ Monitor form submissions in MongoDB

---

**Happy coding! 🚀** 

Built with ❤️ using Next.js, React, and Tailwind CSS
