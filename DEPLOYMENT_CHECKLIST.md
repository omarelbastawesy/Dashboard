# 📋 Deployment Checklist

Use this checklist to ensure you don't miss any steps when deploying to Netlify.

---

## ✅ Pre-Deployment Checklist

### MongoDB Atlas Setup

- [ ] Created MongoDB Atlas account
- [ ] Created a free M0 cluster
- [ ] Created database user with username and password
- [ ] Saved credentials securely
- [ ] Whitelisted all IPs (0.0.0.0/0) in Network Access
- [ ] Obtained connection string
- [ ] URL-encoded special characters in password (if any)

### GitHub Setup

- [ ] Created GitHub repository
- [ ] Verified `.env` is in `.gitignore`
- [ ] Committed all code changes
- [ ] Pushed code to GitHub
- [ ] Verified `.env.example` is committed (for documentation)

### Environment Variables Ready

- [ ] `MONGO_URL` - MongoDB connection string
- [ ] `JWT_SECRET` - Random secret key (32+ characters)
- [ ] `NODE_VERSION` - Set to 20

---

## ✅ Deployment Checklist

### Netlify Configuration

- [ ] Logged into Netlify
- [ ] Connected GitHub repository
- [ ] Verified build command: `npm run build`
- [ ] Verified publish directory: `.next`
- [ ] Added all environment variables
- [ ] Clicked "Deploy site"

### Post-Deployment

- [ ] Build completed successfully
- [ ] Site is accessible via Netlify URL
- [ ] Tested user registration
- [ ] Tested user login
- [ ] Verified data in MongoDB Atlas
- [ ] Checked Netlify function logs for errors
- [ ] API routes working correctly

---

## 🔍 Testing Checklist

After deployment, test these features:

- [ ] Homepage loads correctly
- [ ] Registration form works
- [ ] Login form works
- [ ] Dashboard displays correctly
- [ ] API endpoints respond correctly
- [ ] Database operations work (CRUD)
- [ ] Images load properly
- [ ] Responsive design works on mobile

---

## 🚨 If Something Goes Wrong

1. **Check Netlify Deploy Logs**
   - Go to Deploys → Latest deploy → Deploy log
2. **Check Function Logs**
   - Go to Functions → Function log
3. **Check MongoDB Atlas**
   - Verify Network Access settings
   - Check database user credentials
4. **Verify Environment Variables**
   - Site settings → Environment variables
   - Make sure no typos in variable names
5. **Redeploy**
   - Deploys → Trigger deploy → Clear cache and deploy site

---

## 📝 Quick Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Git commands
git add .
git commit -m "Your message"
git push

# Install Netlify plugin
npm install -D @netlify/plugin-nextjs
```

---

## 🔗 Important URLs

- **MongoDB Atlas:** https://cloud.mongodb.com
- **Netlify Dashboard:** https://app.netlify.com
- **GitHub Repository:** https://github.com/YOUR_USERNAME/YOUR_REPO
- **Your Deployed Site:** https://your-site.netlify.app

---

**Last Updated:** January 20, 2026
