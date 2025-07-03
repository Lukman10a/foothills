# 🚀 Foothills Booking Engine Deployment Checklist

## 📋 Pre-Deployment Setup

### ✅ Booking Engine Repository
- [ ] Create GitHub repository: `foothills-booking-engine`
- [ ] Push booking engine code to GitHub
- [ ] Verify all files are committed

### ✅ Main Site Updates
- [ ] Update redirect URLs to production subdomain
- [ ] Commit and push main site changes

## 🌐 Vercel Deployment Steps

### Step 1: Deploy Booking Engine
- [ ] Go to Vercel Dashboard
- [ ] Click "New Project"
- [ ] Import `foothills-booking-engine` from GitHub
- [ ] Framework: Next.js (auto-detected)
- [ ] Click "Deploy"
- [ ] Note the temporary URL (e.g., `foothills-booking-engine-abc123.vercel.app`)

### Step 2: Configure Subdomain
- [ ] In booking engine project → Settings → Domains
- [ ] Click "Add Domain"
- [ ] Enter: `booking.foothills.vercel.app`
- [ ] Click "Add"
- [ ] Wait for DNS verification (5-10 minutes)

### Step 3: Verify Setup
- [ ] Test: `https://booking.foothills.vercel.app`
- [ ] Verify booking engine loads correctly
- [ ] Test search functionality

## 🔗 Integration Testing

### Test Complete User Flow
- [ ] Visit main site: `https://foothills.vercel.app`
- [ ] Use search form (enter location, dates, guests)
- [ ] Verify redirect to: `https://booking.foothills.vercel.app/search`
- [ ] Test property search and filtering
- [ ] Complete booking flow
- [ ] Verify booking confirmation

### Test Individual Components
- [ ] Search page loads with parameters
- [ ] Property listings display correctly
- [ ] Booking form validation works
- [ ] Confirmation page shows booking details
- [ ] Help page accessible

## 📊 Post-Deployment

### Monitoring Setup
- [ ] Enable Vercel Analytics
- [ ] Set up error tracking
- [ ] Monitor conversion funnel

### Documentation
- [ ] Update README with live URLs
- [ ] Document deployment process
- [ ] Create troubleshooting guide

## 🔧 Troubleshooting

### Common Issues
- **Domain not working**: Check DNS propagation (wait 10-15 minutes)
- **Redirect not working**: Verify URLs in main site code
- **Build errors**: Check Vercel build logs
- **CORS issues**: Verify domain configuration

### Support Resources
- Vercel Documentation: https://vercel.com/docs
- Domain Configuration: https://vercel.com/docs/concepts/projects/domains
- Next.js Deployment: https://nextjs.org/docs/deployment

---

## 🎯 Final URLs

**Production Setup:**
- **Main Site**: `https://foothills.vercel.app`
- **Booking Engine**: `https://booking.foothills.vercel.app`

**User Journey:**
1. User visits main site
2. Uses search form
3. Redirects to booking engine subdomain
4. Completes booking
5. Returns to main site (optional)

---

**Status**: Ready for deployment! 🚀 