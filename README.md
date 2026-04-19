# 🚀 Tejas Kailas Ingole - Professional Portfolio Website

A stunning, production-ready portfolio website built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **MongoDB**. Features smooth animations, dark/light modes, responsive design, and a functional contact form.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-06B6D4?style=for-the-badge&logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-13AA52?style=for-the-badge&logo=mongodb)

---

## ✨ Features

- 🎨 **Premium UI/UX** - Modern design with smooth animations
- 🎬 **Intro Animation** - Eye-catching loading animation
- 🌙 **Multiple Themes** - Dark, Light, Gradient, Neon, Glassmorphism
- 📱 **Fully Responsive** - Mobile-first design
- ✉️ **Contact Form** - Full-stack with MongoDB storage
- 🎯 **Smooth Scrolling** - Scroll-triggered animations
- 🌐 **SEO Optimized** - Meta tags and structured data
- 🔧 **Type-Safe** - TypeScript throughout
- ⚡ **Fast** - Optimized performance
- 🎪 **Particle Animation** - Dynamic background effects

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Animations
- **next-themes** - Theme management
- **Lucide React** - Icons

### Backend & Database
- **Node.js** - Runtime
- **Next.js API Routes** - Serverless functions
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** 18+ and npm
- **MongoDB** (local or MongoDB Atlas)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment Variables

Create a `.env.local` file:
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
ADMIN_KEY=your-secret-admin-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 3: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📝 Customization

### Update Your Information
- **Hero**: `components/Hero.tsx` - Name, title, social links
- **About**: `components/About.tsx` - Personal info
- **Skills**: `components/Skills.tsx` - Add your skills
- **Projects**: `components/Projects.tsx` - Your projects
- **Achievements**: `components/Achievements.tsx` - Awards & recognitions
- **Contact**: `components/Contact.tsx` - Contact details

### Profile Photo
1. Add your image to `/public/images/`
2. Update the About component

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy!

### Environment Variables for Production
- `MONGODB_URI` - MongoDB Atlas connection string
- `ADMIN_KEY` - Strong secret key
- `NEXT_PUBLIC_SITE_URL` - Your production domain

---

## 📁 Project Structure

```
├── app/
│   ├── api/contact/route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Intro.tsx
│   └── ParticleBackground.tsx
├── lib/
│   └── mongodb.ts
├── models/
│   ├── Contact.ts
│   └── PortfolioData.ts
└── .env.local
```

---

## 🗄️ Database Schema

### Contact Collection
```javascript
{
  name: String,
  email: String,
  message: String,
  status: String ('new' | 'read' | 'replied'),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

---

## 📱 API Endpoints

### POST `/api/contact`
Submit contact form

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message"
}
```

### GET `/api/contact`
Fetch messages (requires `x-admin-key` header)

---

## 🎨 Customizing Themes

Available themes (in `components/ThemeToggle.tsx`):
- light
- dark
- gradient
- neon

---

## 🔐 Security

- Never commit `.env.local`
- Use strong `ADMIN_KEY` values
- Validate all inputs server-side
- Restrict MongoDB IP access
- Enable HTTPS in production

---

## 📈 Production Checklist

- [ ] Update all personal information
- [ ] Add profile photo
- [ ] Add resume PDF
- [ ] Update social links
- [ ] Configure MongoDB Atlas
- [ ] Set strong `ADMIN_KEY`
- [ ] Update `NEXT_PUBLIC_SITE_URL`
- [ ] Test contact form
- [ ] Deploy to Vercel
- [ ] Configure custom domain

---

## 👤 Author

**Tejas Kailas Ingole**
- 📧 [tejasingole912@gmail.com](mailto:tejasingole912@gmail.com)
- 🔗 [GitHub](https://github.com/tejass-06)
- 💼 [LinkedIn](https://www.linkedin.com/in/tejas-ingole-73585232b)
- 🐦 [Twitter](https://x.com/Tejass_i06)

---

**Built with ❤️ using Next.js, React, Tailwind CSS, and Framer Motion**
