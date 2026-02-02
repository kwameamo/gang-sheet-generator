# Deployment Guide

Deploy your Gang Sheet Generator to production in minutes!

## Quick Deploy Options

### 🚀 Netlify (Recommended - Easiest)

**Why Netlify:**
- Free tier available
- Automatic HTTPS
- CDN included
- Easy custom domains
- One-click deploy from GitHub

**Steps:**

1. **Push to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings: (leave empty for static site)
   - Click "Deploy site"

3. **Configure**
   - Site name: `gang-sheet-generator` (or your choice)
   - Custom domain: Add your domain in settings
   - HTTPS: Automatic!

4. **Update Google OAuth**
   - Add to authorized origins: `https://your-site.netlify.app`
   - Update Client ID in code if needed

**Your app is live!** 🎉

---

### ▲ Vercel (Great for React)

**Why Vercel:**
- Excellent performance
- Built for React apps
- Free tier
- Global CDN
- Automatic deployments

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd gang-sheet-generator
   vercel
   ```

3. **Follow prompts:**
   - Set up and deploy? Yes
   - Which scope? Your account
   - Link to existing project? No
   - Project name? gang-sheet-generator
   - Directory? ./
   - Override settings? No

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

**Your app is live at:** `https://gang-sheet-generator.vercel.app`

---

### 📄 GitHub Pages (100% Free)

**Why GitHub Pages:**
- Completely free
- Simple setup
- Good for open source
- No server needed

**Steps:**

1. **Create gh-pages branch**
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Folder: / (root)
   - Save

3. **Wait 1-2 minutes**

**Your app is live at:** `https://YOUR_USERNAME.github.io/gang-sheet-generator/gang-sheet-generator.html`

**Custom Domain:**
- Add CNAME file with your domain
- Configure DNS settings
- Enable HTTPS in settings

---

### ☁️ Cloudflare Pages

**Why Cloudflare:**
- Fast global CDN
- Free tier
- Excellent performance
- DDoS protection

**Steps:**

1. **Push to GitHub** (if not done)

2. **Create Pages Project**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect to GitHub
   - Select repository
   - Build settings: None (static site)
   - Deploy

3. **Configure Domain**
   - Custom domain in settings
   - Cloudflare handles DNS automatically

**Your app is live!**

---

## Traditional Hosting

### cPanel / Shared Hosting

**Steps:**

1. **Upload Files**
   - Log into cPanel
   - File Manager
   - Upload `gang-sheet-generator.html`

2. **Access**
   - `https://yourdomain.com/gang-sheet-generator.html`

3. **Optional: Set as Index**
   - Rename to `index.html`
   - Access at `https://yourdomain.com`

---

### AWS S3 + CloudFront

**For high-traffic production:**

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://gang-sheet-generator
   aws s3 cp gang-sheet-generator.html s3://gang-sheet-generator/
   ```

2. **Enable Static Hosting**
   - Bucket → Properties → Static website hosting
   - Index document: gang-sheet-generator.html

3. **Create CloudFront Distribution**
   - Origin: S3 bucket
   - SSL Certificate: Request via ACM
   - CNAME: yourdomain.com

4. **Update DNS**
   - Point domain to CloudFront

**Cost:** ~$0.50-5/month depending on traffic

---

## Production Checklist

Before deploying, ensure:

### ✅ Configuration
- [ ] Google OAuth Client ID updated
- [ ] Production domain added to OAuth origins
- [ ] Meta tags updated (title, description, OG tags)
- [ ] Analytics added (Google Analytics, etc.)
- [ ] Error tracking setup (Sentry, etc.)

### ✅ Performance
- [ ] Test on slow connections
- [ ] Check mobile responsiveness
- [ ] Verify all exports work
- [ ] Test with large images
- [ ] Test in multiple browsers

### ✅ Security
- [ ] HTTPS enabled
- [ ] Content Security Policy headers
- [ ] No sensitive data in code
- [ ] Input validation working
- [ ] CORS configured if needed

### ✅ SEO (Optional)
- [ ] Meta description
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Sitemap.xml
- [ ] Robots.txt

---

## Environment Configuration

### Adding Environment Variables

Create different versions for dev/prod:

**gang-sheet-generator.html** (Production)
```javascript
const GOOGLE_CLIENT_ID = "YOUR_PRODUCTION_CLIENT_ID";
const ENV = "production";
```

**gang-sheet-generator-dev.html** (Development)
```javascript
const GOOGLE_CLIENT_ID = "YOUR_DEV_CLIENT_ID";
const ENV = "development";
```

Or use build process to replace values:

```bash
# Using sed (Linux/Mac)
sed 's/YOUR_CLIENT_ID/actual-client-id/g' gang-sheet-generator.html > dist/index.html
```

---

## Custom Domain Setup

### Netlify
1. Netlify Dashboard → Domain settings
2. Add custom domain
3. Configure DNS:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

### Vercel
1. Vercel Dashboard → Domains
2. Add your domain
3. Configure DNS (Vercel provides exact records)

### GitHub Pages
1. Add CNAME file to repo:
   ```
   yourdomain.com
   ```
2. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   ```

---

## SSL/HTTPS

All recommended platforms provide free SSL:
- **Netlify:** Automatic via Let's Encrypt
- **Vercel:** Automatic
- **Cloudflare Pages:** Automatic
- **GitHub Pages:** Enable in settings

For custom hosting:
- Use [Let's Encrypt](https://letsencrypt.org/)
- Or CloudFlare (free plan includes SSL)

---

## Monitoring & Analytics

### Google Analytics

Add to `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible (Privacy-friendly)

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Error Tracking (Sentry)

```html
<script src="https://browser.sentry-cdn.com/7.0.0/bundle.min.js"></script>
<script>
  Sentry.init({
    dsn: "YOUR_SENTRY_DSN",
    environment: "production"
  });
</script>
```

---

## Continuous Deployment

### Automatic Deploys with Netlify

1. Connect GitHub repo
2. Every push to `main` auto-deploys
3. Pull requests get preview URLs
4. Rollback anytime from dashboard

### GitHub Actions Deploy

Create `.github/workflows/deploy.yml`:

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
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod
```

---

## Rollback Strategy

### Netlify/Vercel
- Dashboard → Deploys → Click previous deploy → Publish

### GitHub Pages
```bash
git revert HEAD
git push origin gh-pages
```

### Manual Hosting
- Keep backups of each version
- Upload previous version

---

## Performance Optimization

### CDN Configuration
All recommended platforms include CDN, but you can add:
- Cloudflare (free tier)
- AWS CloudFront
- Fastly

### Caching Headers
For traditional hosting, add `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### Compression
Enable Gzip/Brotli (most platforms do this automatically)

---

## Backup Strategy

### Automated Git Backups
```bash
# Daily backup script
#!/bin/bash
cd /path/to/repo
git add .
git commit -m "Automated backup $(date)"
git push origin backup
```

### Download Production Backups
- Netlify: Download deploy in dashboard
- Vercel: Download deployment
- GitHub: Clone repository

---

## Costs Comparison

| Platform | Free Tier | Paid Plans | Best For |
|----------|-----------|------------|----------|
| **Netlify** | 100GB bandwidth | $19/mo | Most users |
| **Vercel** | 100GB bandwidth | $20/mo | React apps |
| **GitHub Pages** | Unlimited (public) | N/A | Open source |
| **Cloudflare Pages** | Unlimited | $20/mo | High traffic |
| **AWS S3+CloudFront** | 12mo free | ~$1-10/mo | Scalability |

**Recommendation:** Start with Netlify or Vercel free tier.

---

## Support & Maintenance

### Monitoring Checklist
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure alerts for errors
- [ ] Monitor performance (PageSpeed Insights)
- [ ] Check analytics weekly
- [ ] Review user feedback

### Update Strategy
1. Test changes locally
2. Deploy to preview/staging
3. Test preview deployment
4. Merge to main (auto-deploy to prod)
5. Monitor for issues
6. Rollback if needed

---

## Next Steps After Deployment

1. **Share your app!**
   - Social media
   - Product Hunt
   - Reddit communities
   - Email list

2. **Collect feedback**
   - Add feedback form
   - Monitor support requests
   - Track feature requests

3. **Iterate**
   - Fix bugs
   - Add features
   - Improve performance

---

**Congratulations! Your app is live!** 🚀

For issues, check platform documentation:
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
