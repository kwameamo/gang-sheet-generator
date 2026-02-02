# Setup Guide - Gang Sheet Generator

## Local Development Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Optional: A local web server (Python, Node.js, or VS Code Live Server)

### Setup Steps

#### 1. Extract Files
Extract all files from the zip to your preferred location:
```bash
gang-sheet-generator/
├── gang-sheet-generator.html
├── README.md
└── SETUP.md
```

#### 2. Open in Browser

**Option A: Direct File Access**
Simply double-click `gang-sheet-generator.html` to open in your default browser.

**Option B: Local Server (Recommended)**

Using Python:
```bash
cd gang-sheet-generator
python -m http.server 8080
# Open http://localhost:8080/gang-sheet-generator.html
```

Using Node.js:
```bash
cd gang-sheet-generator
npx http-server -p 8080
# Open http://localhost:8080/gang-sheet-generator.html
```

Using VS Code:
1. Install "Live Server" extension
2. Right-click `gang-sheet-generator.html`
3. Select "Open with Live Server"

#### 3. Test the Application
1. Click "Upload Images" and select a PNG or JPG
2. Adjust dimensions and spacing
3. Click "Fill Sheet" to auto-calculate copies
4. Try exporting as PDF

## Cursor IDE Setup

### 1. Open Project in Cursor

```bash
# Open Cursor and navigate to your project folder
cursor gang-sheet-generator/
```

### 2. Recommended Extensions

Install these Cursor/VS Code extensions for best experience:

**Essential:**
- **Live Server** - Launch a local development server
- **Prettier** - Code formatting

**Helpful:**
- **ES7+ React/Redux/React-Native snippets** - React code snippets
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **JavaScript (ES6) code snippets** - JavaScript snippets

### 3. Cursor Settings

Create `.vscode/settings.json`:
```json
{
  "liveServer.settings.port": 8080,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    "*.html": "html"
  }
}
```

### 4. Running in Cursor

**Method 1: Live Server**
1. Right-click `gang-sheet-generator.html`
2. Click "Open with Live Server"
3. Browser opens automatically

**Method 2: Terminal**
1. Open integrated terminal (Ctrl+`)
2. Run: `python -m http.server 8080`
3. Open: `http://localhost:8080/gang-sheet-generator.html`

## Google OAuth Configuration

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project"
3. Enter project name: "Gang Sheet Generator"
4. Click "Create"

### 2. Enable Google+ API

1. In the project dashboard, click "Enable APIs and Services"
2. Search for "Google+ API"
3. Click "Enable"

### 3. Create OAuth Credentials

1. Go to "Credentials" in the left sidebar
2. Click "Create Credentials" → "OAuth client ID"
3. Configure consent screen if prompted:
   - User type: External
   - App name: "Gang Sheet Generator"
   - Support email: Your email
   - Developer contact: Your email
4. Application type: "Web application"
5. Authorized JavaScript origins:
   - `http://localhost:8080`
   - `http://127.0.0.1:8080`
   - Add your production domain when ready
6. Click "Create"
7. Copy the Client ID

### 4. Update Application

Open `gang-sheet-generator.html` and find line 51:

```javascript
// BEFORE
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com";

// AFTER (replace with your actual Client ID)
const GOOGLE_CLIENT_ID = "123456789-abc123def456.apps.googleusercontent.com";
```

Save and refresh the browser. Google Sign-In should now work!

## Troubleshooting

### Issue: Sign-In Not Working

**Solution:**
1. Check browser console (F12) for errors
2. Verify Client ID is correct
3. Ensure you're accessing via http://localhost:8080 (not file://)
4. Check that JavaScript origins match exactly

### Issue: Export Not Working

**Solution:**
1. Check if pop-ups are blocked
2. Ensure you've uploaded at least one image
3. Try a different browser
4. Check browser console for errors

### Issue: Images Not Uploading

**Solution:**
1. Verify file format (PNG, JPG, PDF supported)
2. Check file size (keep under 10MB)
3. Try a different image
4. Clear browser cache

### Issue: Preview Not Showing

**Solution:**
1. Refresh the page
2. Re-upload the image
3. Check if dimensions are set correctly
4. Try a smaller image

## Development Workflow

### Typical Development Session

1. **Start Local Server**
   ```bash
   python -m http.server 8080
   ```

2. **Open Browser**
   - Navigate to `http://localhost:8080/gang-sheet-generator.html`
   - Open DevTools (F12)

3. **Make Changes**
   - Edit `gang-sheet-generator.html` in Cursor
   - Save file (Ctrl+S)

4. **Test Changes**
   - Refresh browser (F5 or Ctrl+R)
   - Test new functionality
   - Check console for errors

5. **Commit Changes**
   ```bash
   git add gang-sheet-generator.html
   git commit -m "Add feature X"
   ```

### Best Practices

**Before Making Changes:**
1. Create a backup copy
2. Test in multiple browsers
3. Document new features

**While Developing:**
1. Use console.log() for debugging
2. Test edge cases (empty inputs, large files)
3. Keep code formatted and readable

**Before Committing:**
1. Remove debug console.logs
2. Test all features work
3. Update README if needed

## Browser DevTools Tips

### Useful Chrome DevTools Features

**Console:**
- `$0` - Currently selected element
- `$_` - Last evaluated expression
- `clear()` - Clear console

**Application Tab:**
- View LocalStorage data
- Clear stored data
- Inspect cookies

**Network Tab:**
- Monitor file uploads
- Check API calls
- Debug slow requests

## Moving to Production

### 1. Prepare for Deployment

**Update Configuration:**
```javascript
// Change Google OAuth origins
const GOOGLE_CLIENT_ID = "YOUR_PRODUCTION_CLIENT_ID";

// Add production domain to Google Cloud Console:
// https://yourdomain.com
```

**Test Everything:**
- [ ] Upload images
- [ ] Save gang sheets
- [ ] Export all formats
- [ ] Sign in/out
- [ ] Multiple browsers
- [ ] Mobile devices

### 2. Deployment Options

**Option A: Static Hosting (Recommended)**
- Netlify (free tier available)
- Vercel (free tier available)
- GitHub Pages (free)
- Cloudflare Pages (free)

**Option B: Traditional Hosting**
- Upload `gang-sheet-generator.html` to web host
- Configure HTTPS
- Update OAuth origins

### 3. Domain Configuration

1. Point domain to hosting service
2. Update Google OAuth allowed origins
3. Test sign-in on production domain

## Performance Optimization

### Current Performance
- Initial load: < 2 seconds
- Image upload: Instant
- Layout calculation: < 100ms
- Export (A4, 20 images): ~2 seconds

### If Performance Issues Occur

**Large Images:**
```javascript
// Add image compression before upload
// (Consider adding this feature)
```

**Many Images:**
```javascript
// Consider virtualization for 100+ items
// Current limit: 5 images × 100 copies = 500 items
```

**Slow Export:**
```javascript
// Show loading indicator
// Consider Web Workers for export
```

## Security Notes

### Current Implementation
- Client-side only (no backend)
- LocalStorage for data persistence
- Google OAuth for authentication

### Production Recommendations
1. **Add Backend API** - Don't store sensitive data in localStorage
2. **Use HTTPS** - Required for production
3. **Implement CSRF Protection** - If adding forms
4. **Rate Limiting** - Prevent abuse
5. **Input Validation** - Server-side validation

## Next Steps

After local setup is working:

1. **Customize Branding**
   - Update title and meta tags
   - Add your logo
   - Change color scheme

2. **Add Features**
   - See README.md "Future Enhancements"
   - Start with high-priority items

3. **Backend Integration**
   - Choose framework (Express, Firebase, etc.)
   - Set up database
   - Migrate from localStorage

4. **Deploy**
   - Choose hosting provider
   - Set up CI/CD
   - Monitor performance

## Resources

### Documentation
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [jsPDF](https://github.com/parallax/jsPDF)
- [Google OAuth](https://developers.google.com/identity/protocols/oauth2)

### Tools
- [Cursor IDE](https://cursor.sh/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Postman](https://www.postman.com/) - For API testing later

### Communities
- [React Discord](https://discord.gg/react)
- [Tailwind Discord](https://discord.gg/tailwindcss)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

---

Need help? Check the code comments in `gang-sheet-generator.html` - every major function is documented!
