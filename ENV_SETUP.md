# Environment Variables Setup Guide

This guide explains how to securely configure Firebase credentials using environment variables for production deployment.

## Why Use Environment Variables?

✅ **Security**: Keep API keys out of public code  
✅ **Flexibility**: Different configs for dev/staging/production  
✅ **Best Practice**: Industry standard for sensitive data  
✅ **Safety**: No accidental commits of secrets  

---

## Local Development Setup

### Option 1: Direct Configuration (Quick Start)

For local testing only, replace the placeholders in `gang-sheet-generator.html`:

```javascript
// Around line 85 in the HTML file
return {
    apiKey: "YOUR_ACTUAL_API_KEY_HERE",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    // ... etc
};
```

⚠️ **Never commit this file to a public repository!**

---

### Option 2: Environment Variables (Recommended)

#### Step 1: Create env-config.js

Create a new file `env-config.js` in the same directory:

```javascript
// env-config.js
window.ENV = {
    FIREBASE_API_KEY: "AIzaSy...",
    FIREBASE_AUTH_DOMAIN: "your-project.firebaseapp.com",
    FIREBASE_PROJECT_ID: "your-project-id",
    FIREBASE_STORAGE_BUCKET: "your-project.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "123456789",
    FIREBASE_APP_ID: "1:123456789:web:abc123"
};
```

#### Step 2: Add to .gitignore

```bash
# .gitignore
env-config.js
.env
.env.local
```

#### Step 3: Load in HTML

Add before the closing `</body>` tag:

```html
<script src="env-config.js"></script>
<script type="text/babel">
    // Your app code here
</script>
```

The app will automatically use `window.ENV` values if available!

---

## Production Deployment

### Netlify

#### Option 1: Environment Variables (Recommended)

1. Go to your Netlify dashboard
2. Site Settings → Build & Deploy → Environment
3. Click "Add variable"
4. Add these variables:

```
FIREBASE_API_KEY = AIzaSy...
FIREBASE_AUTH_DOMAIN = your-project.firebaseapp.com
FIREBASE_PROJECT_ID = your-project-id
FIREBASE_STORAGE_BUCKET = your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID = 123456789
FIREBASE_APP_ID = 1:123456789:web:abc123
```

5. Create `netlify.toml` in your project:

```toml
[build]
  command = "node inject-env.js"
  publish = "."

[build.environment]
  NODE_VERSION = "18"
```

6. Create `inject-env.js`:

```javascript
const fs = require('fs');

const envConfig = `
window.ENV = {
    FIREBASE_API_KEY: "${process.env.FIREBASE_API_KEY}",
    FIREBASE_AUTH_DOMAIN: "${process.env.FIREBASE_AUTH_DOMAIN}",
    FIREBASE_PROJECT_ID: "${process.env.FIREBASE_PROJECT_ID}",
    FIREBASE_STORAGE_BUCKET: "${process.env.FIREBASE_STORAGE_BUCKET}",
    FIREBASE_MESSAGING_SENDER_ID: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
    FIREBASE_APP_ID: "${process.env.FIREBASE_APP_ID}"
};
`;

fs.writeFileSync('env-config.js', envConfig);
console.log('Environment config injected successfully!');
```

7. Update HTML to load the injected config:

```html
<script src="env-config.js"></script>
```

---

### Vercel

1. Go to Project Settings → Environment Variables
2. Add each Firebase variable:

```
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APP_ID
```

3. Create `vercel.json`:

```json
{
  "buildCommand": "node inject-env.js",
  "outputDirectory": "."
}
```

4. Use the same `inject-env.js` script from Netlify above

---

### GitHub Pages

Since GitHub Pages doesn't support server-side environment variables, use GitHub Secrets with Actions:

1. Go to Settings → Secrets → Actions
2. Add each Firebase variable as a secret
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Inject Environment Variables
        run: |
          cat > env-config.js << EOF
          window.ENV = {
              FIREBASE_API_KEY: "${{ secrets.FIREBASE_API_KEY }}",
              FIREBASE_AUTH_DOMAIN: "${{ secrets.FIREBASE_AUTH_DOMAIN }}",
              FIREBASE_PROJECT_ID: "${{ secrets.FIREBASE_PROJECT_ID }}",
              FIREBASE_STORAGE_BUCKET: "${{ secrets.FIREBASE_STORAGE_BUCKET }}",
              FIREBASE_MESSAGING_SENDER_ID: "${{ secrets.FIREBASE_MESSAGING_SENDER_ID }}",
              FIREBASE_APP_ID: "${{ secrets.FIREBASE_APP_ID }}"
          };
          EOF
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

---

## Security Best Practices

### ✅ DO:

- Use environment variables in production
- Add env files to `.gitignore`
- Use different configs for dev/staging/prod
- Rotate API keys if exposed
- Enable Firebase security rules

### ❌ DON'T:

- Commit real API keys to Git
- Share `.env` files publicly
- Use production keys in development
- Hardcode secrets in public repos
- Reuse keys across projects

---

## Verification

### Check if Environment Variables are Working

Open browser console and type:

```javascript
console.log(window.ENV);
```

You should see your Firebase config (without exposing it in the HTML source).

---

## Troubleshooting

### "Firebase not initialized"

**Cause**: Environment variables not loaded  
**Solution**: Check that `env-config.js` is loaded before your app script

### "ENV is not defined"

**Cause**: `window.ENV` not set  
**Solution**: Verify inject script ran successfully in build logs

### "Invalid API key"

**Cause**: Wrong API key in environment  
**Solution**: Double-check Firebase console for correct key

---

## Example .gitignore

```
# Environment files
.env
.env.local
.env.production
env-config.js

# Firebase
.firebase/
firebase-debug.log

# Dependencies
node_modules/

# OS files
.DS_Store
Thumbs.db
```

---

## Quick Reference

| Platform | Setup Method | Difficulty |
|----------|-------------|------------|
| Local Dev | env-config.js | ⭐ Easy |
| Netlify | Environment Variables + Build Script | ⭐⭐ Medium |
| Vercel | Environment Variables + Build Script | ⭐⭐ Medium |
| GitHub Pages | GitHub Actions | ⭐⭐⭐ Advanced |

---

## Need Help?

- Firebase Console: https://console.firebase.google.com/
- Netlify Docs: https://docs.netlify.com/environment-variables/overview/
- Vercel Docs: https://vercel.com/docs/environment-variables
- GitHub Actions: https://docs.github.com/en/actions

---

**Security Reminder**: Never commit `env-config.js` or `.env` files to version control!
