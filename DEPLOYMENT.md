# 🚀 Deployment Guide

Complete guide to deploy your portfolio to production environments.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are configured
- [ ] MongoDB connection is working
- [ ] Contact form has been tested
- [ ] All personal information is updated
- [ ] Profile photo is added
- [ ] Social links are correct
- [ ] No console errors when running `npm run dev`
- [ ] Build passes: `npm run build`

---

## 🌐 Deployment Options

### 1. **Vercel** (Recommended - Best for Next.js)

#### Pros:
- Seamless Next.js integration
- Automatic deployments from Git
- Free tier with great performance
- CDN included
- Serverless functions built-in
- Excellent uptime

#### Cons:
- Limited free tier (1000 function invocations/month)
- Requires GitHub account

#### Setup Instructions:

**Step 1: Prepare Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**Step 2: Connect to Vercel**
1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Click "Import Git Repository"
4. Paste your repository URL
5. Click "Import"

**Step 3: Configure Environment**
1. Go to "Settings" → "Environment Variables"
2. Add variables:
   ```
   MONGODB_URI = your_mongodb_connection_string
   ADMIN_KEY = your_secret_admin_key
   NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
   ```

**Step 4: Deploy**
1. Click "Deploy"
2. Wait 2-5 minutes for deployment
3. Access your live site at: `https://your-project.vercel.app`

**Step 5: Custom Domain (Optional)**
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

---

### 2. **Netlify**

#### Pros:
- Free tier with 100GB bandwidth
- Easy deployment
- Great analytics
- Good performance

#### Cons:
- Slightly slower than Vercel for Next.js
- Requires separate serverless function setup

#### Setup Instructions:

**Step 1: Create Netlify Account**
- Go to [netlify.com](https://netlify.com)
- Sign up with GitHub

**Step 2: Deploy**
1. Click "New site from Git"
2. Select your repository
3. Configure build:
   - Build command: `npm run build`
   - Publish directory: `.next`

**Step 3: Environment Variables**
1. Go to Site settings
2. Click "Build & deploy" → "Environment"
3. Add your environment variables

**Step 4: Deploy**
- Click "Deploy site"
- Netlify will deploy automatically

---

### 3. **AWS Amplify**

#### Pros:
- Free tier with 1GB storage
- Integrated with AWS ecosystem
- Good for scaling

#### Cons:
- More complex setup
- Higher learning curve

#### Quick Setup:
```bash
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

---

### 4. **DigitalOcean App Platform**

#### Pros:
- Simple pricing
- Good performance
- Full control

#### Cons:
- Minimum cost ($12/month)
- Less integrated than Vercel

#### Setup:
1. Create account on [digitalocean.com](https://digitalocean.com)
2. Create new App
3. Connect GitHub repository
4. Set build command: `npm run build`
5. Add environment variables
6. Deploy

---

### 5. **Self-Hosted (VPS)**

#### Pros:
- Full control
- Custom configuration
- Privacy

#### Cons:
- Requires Linux knowledge
- Manual maintenance
- More expensive

#### Setup Example (Ubuntu VPS):

```bash
# SSH into your server
ssh root@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Clone repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start

# Save PM2 startup
pm2 startup
pm2 save

# Install Nginx
sudo apt-get install nginx

# Configure Nginx (reverse proxy)
# Edit /etc/nginx/sites-available/default
# Add your domain and point to localhost:3000
```

---

## 🔐 Production Security Checklist

- [ ] Use strong `ADMIN_KEY` (minimum 32 characters)
- [ ] Enable HTTPS/SSL (automatic with Vercel)
- [ ] Set `NODE_ENV=production`
- [ ] Restrict MongoDB IP access
- [ ] Enable rate limiting (consider adding)
- [ ] Keep dependencies updated
- [ ] Enable CORS if needed
- [ ] Remove sensitive logs
- [ ] Use environment variables for all secrets
- [ ] Enable database backups

---

## 📊 Monitoring & Analytics

### Vercel Analytics
```
Settings → Analytics
- View real-time metrics
- Monitor performance
- Track deployments
```

### Google Analytics (Optional)

Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* Your content */}
        <GoogleAnalytics gaId="YOUR_GA_ID" />
      </body>
    </html>
  )
}
```

### MongoDB Monitoring
- Use MongoDB Atlas charts
- Set up email alerts
- Monitor connection count
- Track storage usage

---

## 🔄 Continuous Deployment (CD)

### Automatic Deployments

**Vercel** (Automatic):
- Every push to main branch triggers deployment
- Preview deployments for PRs
- Automatic rollbacks on failure

### Manual Deployment

**Build locally before pushing:**
```bash
npm run build
npm run lint

# If no errors, push
git push
```

---

## 🆘 Common Deployment Issues

### Issue: Build Fails with "Not Found"

**Cause:** Missing environment variables

**Fix:**
```bash
# Verify env variables
echo $MONGODB_URI
echo $ADMIN_KEY

# Re-deploy with correct variables
```

### Issue: Contact Form Not Working

**Cause:** MongoDB URI incorrect or server unreachable

**Fix:**
1. Test MongoDB connection locally: `npm run dev`
2. Check MongoDB Atlas IP whitelist
3. Verify MONGODB_URI is correct

### Issue: Slow Performance

**Causes:**
- Large images
- Unoptimized assets
- Poor database queries

**Fixes:**
```bash
# Build analysis
npm install --save-dev @next/bundle-analyzer

# Run build
npm run analyze
```

### Issue: CORS Errors

**Cause:** Frontend and API on different domains

**Fix:** Add CORS headers to API route:
```tsx
export async function POST(request: NextRequest) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
  };
  // ... handler code
}
```

---

## 🔄 Update & Maintenance

### Keep Dependencies Updated

```bash
# Check for updates
npm outdated

# Update all
npm update

# Update specific package
npm install package-name@latest

# Rebuild and test
npm run build
npm run dev
```

### Deploy Updates

```bash
git add .
git commit -m "Update dependencies"
git push

# Vercel/Netlify will auto-deploy
```

---

## 📝 Database Backups

### MongoDB Atlas Backups

1. Go to "Backups" in cluster settings
2. Enable automatic backups (enabled by default)
3. Review backup schedule
4. Test restore process monthly

---

## ✅ Post-Deployment

After successful deployment:

1. ✅ Test all links
2. ✅ Test contact form
3. ✅ Check mobile responsiveness
4. ✅ Verify analytics working
5. ✅ Monitor error logs
6. ✅ Set up email notifications for errors
7. ✅ Share with friends/colleagues

---

## 📞 Support Resources

- **Vercel Support:** https://vercel.com/support
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **MongoDB Support:** https://www.mongodb.com/support
- **Community:** https://github.com/vercel/next.js/discussions

---

## 🎯 Performance Optimization

### Before Deployment

```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse https://localhost:3000

# Next.js built-in analyzer
npm run build
npm run analyze
```

### Optimize Images

```bash
# Images should be under 100KB
# Use modern formats: WebP, AVIF
# Use Next.js Image component
```

### Caching Strategy

Add to `next.config.ts`:
```typescript
export default {
  headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' }
        ]
      }
    ]
  }
}
```

---

**Your portfolio is now live! 🚀**
