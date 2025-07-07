# LG Mobile Detailing Website

A modern, responsive website for LG Mobile Detailing - Atlanta's premier mobile car detailing service.

## 🚗 Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Mobile Responsive**: Optimized for all devices and screen sizes
- **Interactive Elements**: Auto-scrolling reviews, before/after slider
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Fast Performance**: Optimized images and code splitting
- **Contact Forms**: Booking and contact forms with validation
- **Social Integration**: Links to Instagram, TikTok, and Google Business

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Netlify** for hosting and deployment

## 📱 Pages

- **Home**: Hero section, services overview, testimonials
- **Services**: Detailed service packages and pricing
- **Gallery**: Before/after transformations and work examples
- **Book Now**: Appointment booking form

## 🚀 Deployment

### Netlify Deployment

This site is optimized for Netlify deployment with the following features:

1. **Automatic Builds**: Connected to GitHub for automatic deployments
2. **Client-side Routing**: `_redirects` file handles React Router
3. **Performance Optimization**: 
   - Source maps disabled for production
   - Aggressive caching for static assets
   - Security headers configured
4. **SEO Ready**: Sitemap, robots.txt, and meta tags included

### Manual Deployment Steps

1. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

2. **Environment Variables** (if needed):
   - Add any required environment variables in Netlify dashboard

3. **Custom Domain** (optional):
   - Add your custom domain in Netlify settings
   - Update DNS records as instructed

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Test the build locally
npx serve -s build
```

## 📊 Performance Features

- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Automatic code splitting with React Router
- **Caching**: Aggressive caching for static assets
- **Security**: Security headers and CSP configuration
- **PWA Ready**: Manifest file for mobile app-like experience

## 🔧 Configuration Files

- `netlify.toml`: Netlify deployment configuration
- `public/_redirects`: Client-side routing support
- `public/robots.txt`: Search engine crawling instructions
- `public/sitemap.xml`: Site structure for search engines
- `public/manifest.json`: PWA configuration

## 📞 Contact

- **Phone**: (470) 428-6540
- **Email**: info@lgmobiledetailing.com
- **Hours**: Monday - Sunday, 8:00 AM - 8:00 PM
- **Service Area**: Atlanta, GA & surrounding areas

## 🌟 Business Features

- **Mobile Service**: We come to you - no need to drive anywhere
- **Professional Equipment**: Premium products and tools
- **Flexible Scheduling**: 7 days a week, 12 hours a day
- **Multiple Service Levels**: Basic, Premium, and Full Detail packages
- **Specialized Services**: Ceramic coating, paint correction, interior deep cleaning

---

Built with ❤️ for LG Mobile Detailing
