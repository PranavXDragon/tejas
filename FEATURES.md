# ✨ Features & Customization Guide

Complete documentation of all features and how to customize them.

---

## 🎯 Core Features

### 1. **Premium Intro Animation**
- **File:** `components/Intro.tsx`
- **Duration:** 3 seconds
- **Features:**
  - Animated logo with 3D rotation
  - Letter-by-letter name reveal
  - Progress bar animation
  - Particle effects
  - Smooth fade transitions

**Customize:**
```tsx
// Change duration (in components/Intro.tsx)
useEffect(() => {
  const timer = setTimeout(() => {
    setIsComplete(true);
    onComplete();
  }, 3000); // Change this value (in milliseconds)
```

### 2. **Sticky Navbar**
- **File:** `components/Navbar.tsx`
- **Features:**
  - Sticky positioning
  - Scroll detection
  - Mobile menu toggle
  - Theme switcher
  - Smooth navigation links

**Customize:**
```tsx
// Change navbar items
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Add more items here
];
```

### 3. **Hero Section**
- **File:** `components/Hero.tsx`
- **Features:**
  - Animated greeting
  - Typing animation
  - CTA buttons
  - Social links
  - Scroll indicator

**Customize:**
```tsx
// Update social links
const socialLinks = [
  { icon: GitBranch, href: 'https://your-github', label: 'GitHub' },
  // Update URLs
];
```

### 4. **About Section**
- **File:** `components/About.tsx`
- **Features:**
  - Profile photo placeholder
  - Personal introduction
  - Quick facts cards
  - Hover animations

**Customize:**
```tsx
// Update quick facts
<div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
  <p className="text-sm text-gray-600 dark:text-gray-400">Your Label</p>
  <p className="font-semibold text-gray-900 dark:text-white">Your Value</p>
</div>
```

### 5. **Skills Section**
- **File:** `components/Skills.tsx`
- **Features:**
  - 6 categorized skill groups
  - Hover animations
  - Icon representations
  - Color-coded categories

**Add/Modify Skills:**
```tsx
const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'TypeScript'], // Add your skills
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more categories
];
```

### 6. **Projects Showcase**
- **File:** `components/Projects.tsx`
- **Features:**
  - Project cards with images
  - Tech stack display
  - Project highlights
  - GitHub and demo links
  - Hover effects

**Add Projects:**
```tsx
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description here',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/...',
    live: 'https://...',
    image: '📱', // Use emoji or image
    highlights: ['Feature 1', 'Feature 2'],
  },
];
```

### 7. **Achievements Section**
- **File:** `components/Achievements.tsx`
- **Features:**
  - Achievement cards
  - Years displayed
  - Icons
  - Color-coded by type

**Add Achievements:**
```tsx
const achievements = [
  {
    icon: Trophy,
    title: 'Your Achievement',
    description: 'Description here',
    year: '2024',
    color: 'from-yellow-400 to-orange-500',
  },
];
```

### 8. **Contact Form**
- **File:** `components/Contact.tsx`
- **Features:**
  - Form validation
  - MongoDB storage
  - Success/error messages
  - Loading state
  - Multiple contact methods

**Features:**
- Real-time validation
- Error handling
- Success notifications
- Loading indicator
- Responsive design

### 9. **Particle Background**
- **File:** `components/ParticleBackground.tsx`
- **Features:**
  - Dynamic particle animation
  - Smooth movement
  - Responsive sizing
  - Opacity fade effects

**Customize:**
```tsx
// Change particle count
const particleCount = 50; // Increase/decrease

// Change particle color
ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`; // Change RGB values
```

### 10. **Footer**
- **File:** `components/Footer.tsx`
- **Features:**
  - Quick links
  - Social links
  - Copyright info
  - Made with love

---

## 🎨 Theme System

### Available Themes

Edit `components/ThemeToggle.tsx`:

```tsx
const themes = ['light', 'dark', 'gradient', 'neon'];
```

### Create Custom Theme

1. **Add to theme array:**
```tsx
const themes = ['light', 'dark', 'gradient', 'neon', 'custom'];
```

2. **Add CSS in `app/globals.css`:**
```css
body.theme-custom {
  @apply bg-gradient-to-br from-color1 to-color2 dark:from-color3 dark:to-color4;
}
```

3. **Update components to respect theme:**
```tsx
// Use Tailwind classes that adapt to dark mode
className="dark:text-white text-gray-900"
```

---

## 🎬 Animation Customization

### Framer Motion Animations

**In any component:**
```tsx
import { motion } from 'framer-motion';

// Stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Change delay between children
    },
  },
};

// Animate on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }} // Triggers when in view
  viewport={{ once: true }}
>
  Content
</motion.div>

// Hover animations
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Clickable
</motion.div>
```

### Tailwind CSS Animations

```tsx
// Using Tailwind animations
className="animate-pulse" // Pulsing
className="animate-bounce" // Bouncing
className="animate-spin" // Spinning

// Custom animations (in globals.css)
@keyframes customAnimation {
  0% { /* start */ }
  100% { /* end */ }
}

.animate-custom {
  animation: customAnimation 2s ease-in-out infinite;
}
```

---

## 🎯 Color Scheme Customization

### Tailwind Colors

All components use Tailwind's color system:

```tsx
// Blue shades
from-blue-400 to-blue-600
text-blue-500
bg-blue-100

// Purple shades
from-purple-500 to-purple-600
text-purple-400
bg-purple-900

// Custom colors (in tailwind.config.ts)
```

### Change Primary Color

1. **Find all gradient references:**
   ```tsx
   // Search for: "from-blue-"
   // Replace with: "from-YOUR_COLOR-"
   ```

2. **Update in `tailwind.config.ts`:**
   ```js
   theme: {
     colors: {
       'custom': {
         '50': '#f0f9ff',
         '500': '#0ea5e9',
         '600': '#0284c7',
       }
     }
   }
   ```

---

## 📱 Responsive Design

### Breakpoints (Built-in Tailwind)

```tsx
// Mobile-first approach
className="flex"           // Default (mobile)
className="md:flex"        // Tablet (768px+)
className="lg:flex"        // Desktop (1024px+)
className="xl:flex"        // Large (1280px+)
```

### Test Responsive Design

1. **In browser DevTools:**
   - Press F12
   - Click device icon (top-left)
   - Select device or drag to resize

2. **Test sizes:**
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px

---

## 🔐 Database Customization

### Add New Data Collections

**Create new model** (`models/YourModel.ts`):
```ts
import mongoose from 'mongoose';

const YourSchema = new mongoose.Schema(
  {
    field1: String,
    field2: Number,
  },
  { timestamps: true }
);

export default mongoose.models.YourModel || mongoose.model('YourModel', YourSchema);
```

### Create New API Endpoint

**Create route** (`app/api/your-endpoint/route.ts`):
```ts
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import YourModel from '@/models/YourModel';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const data = await request.json();
    const result = await YourModel.create(data);
    
    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error message' },
      { status: 500 }
    );
  }
}
```

---

## 📊 Adding Analytics

### Google Analytics

```tsx
// In app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_ID" />
      </body>
    </html>
  )
}
```

### Track Custom Events

```tsx
// In components
import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric)
  })
}
```

---

## 🔧 Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image'

<Image
  src="/images/profile.jpg"
  alt="Profile"
  width={256}
  height={256}
  quality={75} // 0-100
  priority // Load immediately
/>
```

### Code Splitting

```tsx
import dynamic from 'next/dynamic'

// Lazy load component
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

### Caching

```tsx
// In API routes
export const revalidate = 3600; // Cache for 1 hour

// In components
<motion.div
  // Use built-in Framer Motion caching
/>
```

---

## 🚀 Advanced Customizations

### Add Blog Section

1. Create `components/Blog.tsx`
2. Create `models/BlogPost.ts`
3. Create `app/api/blog/route.ts`
4. Add to home page

### Add Admin Dashboard

1. Create `app/admin/layout.tsx`
2. Add authentication
3. Create forms to manage content
4. Connect to MongoDB

### Add Comment System

1. Create `models/Comment.ts`
2. Create `app/api/comments/route.ts`
3. Add comment form to projects

### Add Email Notifications

```tsx
// Install: npm install nodemailer

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Send email on form submission
```

---

## 📚 Component Reusability

### Common Patterns

**Animated Container:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

**Gradient Text:**
```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
```

**Hover Card:**
```tsx
<motion.div
  whileHover={{ y: -10, scale: 1.02 }}
  className="p-6 rounded-lg shadow-lg"
>
  Card content
</motion.div>
```

---

## 🎓 Learning Resources

- **Framer Motion:** https://www.framer.com/motion/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Next.js:** https://nextjs.org/docs
- **MongoDB:** https://docs.mongodb.com
- **React:** https://react.dev

---

## 💡 Tips & Tricks

1. **Use browser DevTools** to inspect and debug
2. **Test on mobile early** and often
3. **Keep animations subtle** for professional look
4. **Use meaningful colors** for each section
5. **Test form validation** thoroughly
6. **Monitor performance** regularly
7. **Keep dependencies updated** for security

---

**Customize with confidence! 🎨**
