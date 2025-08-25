# BloomIntel AI - Business Solutions Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-blue?logo=tailwindcss)](https://tailwindcss.com/)

> Transform your business with AI automation, intelligent workflows, and predictive infrastructure. Deploy AI agents that learn, adapt, and optimize operations 24/7.

## 🌟 Features

- **🎨 Modern Design**: Glassmorphism UI with Radix UI components
- **🚀 High Performance**: Optimized with Next.js 15 and React 19
- **📱 Responsive**: Mobile-first design that works on all devices
- **🔍 SEO Optimized**: Comprehensive meta tags and structured data
- **🎯 Consultation Booking**: Advanced form with validation and backend integration
- **⚡ Fast Loading**: Image optimization and lazy loading
- **🛡️ Error Handling**: Comprehensive error boundaries and fallbacks
- **🌐 3D Visualization**: Interactive 3D models with Model Viewer

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **3D Models**: [Google Model Viewer](https://modelviewer.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- pnpm 8.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bloomintel/bloomintel-website.git
   cd bloomintel-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bloomintel-ai/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── consultation/  # Consultation form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── booking/          # Consultation booking
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI primitives
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks
```

## 🎨 Key Components

### 🏠 Homepage Sections
- **Hero**: Main landing with 3D model and CTA buttons
- **Stats**: Company metrics and trust indicators
- **Technology Stack**: AI services and capabilities showcase

### 📋 Consultation Form
- **Validation**: Client-side and server-side validation
- **UI/UX**: Glassmorphism design with smooth animations
- **Backend**: Next.js API route with error handling
- **Success State**: Confirmation with visual feedback

### 🔧 UI Components
- **Error Boundaries**: Comprehensive error handling
- **Glass Cards**: Glassmorphism design system
- **Model Viewer**: Lazy-loaded 3D model component
- **Toast Notifications**: User feedback system

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
   ```bash
   npx vercel
   ```

2. **Configure environment variables**
   - Set up domain configuration
   - Add analytics tracking codes
   - Configure email service

3. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance Optimizations

- ✅ **Image Optimization**: Next.js Image component with WebP/AVIF support
- ✅ **Code Splitting**: Automatic route-based splitting
- ✅ **Lazy Loading**: 3D models and non-critical components
- ✅ **Bundle Analysis**: Package optimization and tree shaking
- ✅ **Font Optimization**: Preloaded Google Fonts with display swap
- ✅ **Compression**: Gzip compression enabled

## 🛡️ Error Handling

- **Error Boundaries**: Catch and handle React errors gracefully
- **API Error Handling**: Proper HTTP status codes and error messages
- **Form Validation**: Client-side and server-side validation
- **Fallback UI**: Loading states and error fallbacks

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# General
NEXT_PUBLIC_SITE_URL=https://bloomintel.ai
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Email Service (optional)
EMAIL_SERVICE_API_KEY=your-email-service-key
EMAIL_FROM=noreply@bloomintel.ai
EMAIL_TO=business@bloomintel.ai

# CRM Integration (optional)
CRM_API_KEY=your-crm-api-key
CRM_ENDPOINT=https://api.yourcrm.com
```

### Customization

1. **Colors**: Update `app/globals.css` for color scheme
2. **Content**: Modify component content in `components/sections/`
3. **Styling**: Customize Tailwind config in `tailwind.config.ts`
4. **Metadata**: Update SEO data in `app/layout.tsx`

## 🧪 Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm type-check   # Run TypeScript checker
pnpm clean        # Clean build artifacts
```

### Code Quality

- **ESLint**: Code linting with Next.js config
- **TypeScript**: Full type safety
- **Prettier**: Code formatting (configure as needed)
- **Husky**: Git hooks for pre-commit checks

## 📈 Analytics & Monitoring

1. **Google Analytics**: Add tracking ID to environment variables
2. **Performance Monitoring**: Built-in Next.js analytics
3. **Error Tracking**: Integrate with Sentry or similar service
4. **Uptime Monitoring**: Set up monitoring for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved by BloomIntel.

## 📞 Support

- **Website**: [https://bloomintel.ai](https://bloomintel.ai)
- **Email**: [business@bloomintel.ai](mailto:business@bloomintel.ai)
- **Phone**: [909-206-2727](tel:909-206-2727)

---

**Built with ❤️ by the BloomIntel Team** 