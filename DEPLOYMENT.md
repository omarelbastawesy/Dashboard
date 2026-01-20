# 🚀 Deployment Guide: Next.js Dashboard to Netlify with MongoDB Atlas

This guide will walk you through deploying your Next.js Dashboard application to Netlify with MongoDB Atlas as your database.

---

## 📋 Prerequisites

Before you begin, make sure you have:

- A [GitHub](https://github.com) account
- A [Netlify](https://netlify.com) account
- A [MongoDB Atlas](https://cloud.mongodb.com) account

---

## 🗄️ Step 1: Set Up MongoDB Atlas

### 1.1 Create a MongoDB Cluster

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign in or create a new account
3. Click **"Build a Database"**
4. Choose **"M0 FREE"** tier
5. Select your preferred cloud provider and region
6. Click **"Create Cluster"**

### 1.2 Create a Database User

1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter a username and generate a secure password
5. **IMPORTANT:** Save these credentials securely!
6. Set user privileges to **"Read and write to any database"**
7. Click **"Add User"**

### 1.3 Configure Network Access

1. In the left sidebar, click **"Network Access"**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - This is necessary for Netlify's serverless functions
4. Click **"Confirm"**

### 1.4 Get Your Connection String

1. Go back to **"Database"** in the left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Driver: Node.js"** and **"Version: 5.5 or later"**
5. Copy the connection string (it looks like this):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<username>` with your database username
7. Replace `<password>` with your database password
8. **IMPORTANT:** If your password contains special characters (@, #, !, etc.), you need to URL encode them:
   - `@` → `%40`
   - `#` → `%23`
   - `!` → `%21`
   - Use [URL Encoder](https://www.urlencoder.org/) if needed

---

## 📦 Step 2: Prepare Your Project for GitHub

### 2.1 Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Dashboard project"
```

### 2.2 Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Name your repository (e.g., `dashboard-app`)
4. Choose **"Private"** or **"Public"**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### 2.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**⚠️ IMPORTANT:** Make sure your `.env` file is NOT pushed to GitHub! It should be listed in `.gitignore`.

---

## 🌐 Step 3: Deploy to Netlify

### 3.1 Connect Your Repository

1. Go to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select your repository from the list

### 3.2 Configure Build Settings

Netlify should auto-detect Next.js. Verify these settings:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Base directory:** (leave empty)

### 3.3 Add Environment Variables

**CRITICAL STEP:** Before deploying, add your environment variables:

1. Click **"Show advanced"** → **"New variable"**
2. Add the following variables:

| Key            | Value                          | Example                                                          |
| -------------- | ------------------------------ | ---------------------------------------------------------------- |
| `MONGO_URL`    | Your MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/?appName=Dashboard` |
| `JWT_SECRET`   | A random secret string         | `your_super_secret_jwt_key_here_123456`                          |
| `NODE_VERSION` | `20`                           | `20`                                                             |

**How to generate a secure JWT_SECRET:**

```bash
# On Windows (PowerShell)
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})

# Or use an online generator: https://randomkeygen.com/
```

### 3.4 Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (2-5 minutes)
3. Once deployed, you'll get a URL like: `https://your-site-name.netlify.app`

---

## ✅ Step 4: Verify Deployment

### 4.1 Test Your Application

1. Visit your Netlify URL
2. Try to register a new user
3. Try to log in
4. Check if data is being saved to MongoDB Atlas

### 4.2 Check MongoDB Atlas

1. Go to your MongoDB Atlas dashboard
2. Click **"Browse Collections"**
3. You should see your database and collections with data

### 4.3 Check Netlify Logs

If something isn't working:

1. Go to your Netlify dashboard
2. Click on your site
3. Go to **"Deploys"** → Click on the latest deploy
4. Check **"Deploy log"** for build errors
5. Go to **"Functions"** → **"Function log"** for runtime errors

---

## 🔧 Troubleshooting

### Issue: "MongoServerError: bad auth"

**Solution:** Your MongoDB username or password is incorrect. Double-check your credentials and update the `MONGO_URL` environment variable in Netlify.

### Issue: "MongooseError: Operation buffering timed out"

**Solution:**

- Check if your IP is whitelisted in MongoDB Atlas (Network Access)
- Ensure you selected "Allow Access from Anywhere" (0.0.0.0/0)

### Issue: "Module not found" errors

**Solution:**

- Make sure all dependencies are in `package.json`
- Redeploy the site from Netlify dashboard

### Issue: Environment variables not working

**Solution:**

- Go to Netlify → Site settings → Environment variables
- Make sure all variables are added correctly
- Redeploy the site (Deploys → Trigger deploy → Deploy site)

### Issue: API routes returning 404

**Solution:**

- Make sure `@netlify/plugin-nextjs` is configured in `netlify.toml`
- Check that your Next.js version is compatible with Netlify

---

## 🔄 Updating Your Deployment

Every time you push changes to GitHub, Netlify will automatically rebuild and deploy your site.

```bash
git add .
git commit -m "Your commit message"
git push
```

---

## 🎯 Next Steps

1. **Custom Domain:** Add a custom domain in Netlify settings
2. **SSL Certificate:** Netlify provides free SSL automatically
3. **Environment-Specific Variables:** Set up different environments (staging, production)
4. **Monitoring:** Set up error tracking with Sentry or LogRocket
5. **Performance:** Enable Netlify Analytics

---

## 📚 Additional Resources

- [Netlify Next.js Documentation](https://docs.netlify.com/frameworks/next-js/overview/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)

---

## 🆘 Need Help?

If you encounter any issues:

1. Check the Netlify deploy logs
2. Check the MongoDB Atlas logs
3. Review this guide again
4. Contact support or ask in developer communities

---

**Good luck with your deployment! 🚀**
