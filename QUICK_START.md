# 🚀 Quick Start: Deploy to Netlify

**Time Required:** ~15 minutes

---

## Step 1: Fix MongoDB Connection (2 minutes)

Your current MongoDB connection has an authentication error. You need to:

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Verify your username and password
3. Update `.env` with correct credentials:
   ```env
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/?appName=Dashboard
   ```

**Test locally:**

```bash
npm run dev
```

Visit http://localhost:3000 and try to register/login.

---

## Step 2: Push to GitHub (3 minutes)

```bash
# Add all files
git add .

# Commit changes
git commit -m "Prepare for Netlify deployment with MongoDB Atlas"

# Create GitHub repo (if not exists)
# Go to https://github.com/new

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**⚠️ IMPORTANT:** Make sure `.env` is NOT pushed (it should be in `.gitignore`)

---

## Step 3: Deploy to Netlify (10 minutes)

### 3.1 Connect Repository

1. Go to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select your repository

### 3.2 Configure Build

- Build command: `npm run build`
- Publish directory: `.next`
- Click **"Show advanced"**

### 3.3 Add Environment Variables

Click **"New variable"** and add:

| Key            | Value                            |
| -------------- | -------------------------------- |
| `MONGO_URL`    | Your MongoDB connection string   |
| `JWT_SECRET`   | A random secret (32+ characters) |
| `NODE_VERSION` | `20`                             |

**Generate JWT_SECRET:**

```bash
# Windows PowerShell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

### 3.4 Deploy

Click **"Deploy site"** and wait 2-5 minutes.

---

## Step 4: Test Your Site (2 minutes)

1. Visit your Netlify URL (e.g., `https://your-site.netlify.app`)
2. Try to register a new user
3. Try to log in
4. Check if dashboard loads

---

## ✅ Success Checklist

- [ ] Local development works (no MongoDB errors)
- [ ] Code pushed to GitHub
- [ ] `.env` is NOT in GitHub
- [ ] Netlify site deployed successfully
- [ ] Registration works on live site
- [ ] Login works on live site
- [ ] Data appears in MongoDB Atlas

---

## 🆘 Troubleshooting

### "MongoServerError: bad auth"

→ Wrong username/password. Check MongoDB Atlas credentials.

### "Module not found" on Netlify

→ Clear cache and redeploy: Deploys → Trigger deploy → Clear cache and deploy site

### API routes return 404

→ Make sure `@netlify/plugin-nextjs` is installed and `netlify.toml` exists

### Environment variables not working

→ Go to Site settings → Environment variables → Verify all are added → Redeploy

---

## 📖 Need More Details?

- **Full Guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Checklist:** See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
- **Project Info:** See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

---

**Good luck! 🎉**
