# Gang Sheet Generator

A professional web application for creating gang sheets (multiple images laid out on a single sheet for printing). Perfect for sticker makers, print-on-demand businesses, and anyone who needs to optimize their printing layouts.

![Gang Sheet Generator](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

## 🌟 Features

### Core Functionality
- ✅ **Multi-Image Support** - Upload up to 5 different images per sheet
- ✅ **Paper Sizes** - A4, A3, and A2 formats
- ✅ **Smart Layout** - Automatic arrangement of images on the sheet
- ✅ **Custom Dimensions** - Set exact sizes for each image
- ✅ **Unit Conversion** - Work in mm, cm, inches, or pixels (300 DPI)
- ✅ **Spacing Control** - Adjustable gaps between images
- ✅ **Aspect Ratio Lock** - Maintain proportions when resizing

### Advanced Features
- ✅ **Fill Sheet** - Automatically calculate how many copies fit
- ✅ **Copy Counter** - Set 1-100 copies per image
- ✅ **Live Preview** - See your layout in real-time
- ✅ **Multi-Format Export** - JPEG, PDF, and PNG at 300 DPI
- ✅ **Save & Load** - Store gang sheets for later use
- ✅ **Google Sign-In** - Simple authentication
- ✅ **Donation Support** - Free to use with optional donations

## 📁 Project Structure

```
gang-sheet-generator/
├── gang-sheet-generator.html    # Main application (self-contained)
├── README.md                     # This file
└── SETUP.md                      # Detailed setup instructions
```

## 🚀 Quick Start

### Option 1: Direct Use (No Setup Required)
Simply open `gang-sheet-generator.html` in any modern web browser. The app is completely self-contained with no dependencies or build steps needed.

### Option 2: Local Development Server
For the best development experience:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx http-server -p 8080

# Then open http://localhost:8080/gang-sheet-generator.html
```

## 🔧 Configuration

### Google OAuth Setup (Optional)
To enable Google Sign-In:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins:
   - `http://localhost:8080` (for local dev)
   - Your production domain
6. Copy the Client ID
7. Replace in `gang-sheet-generator.html` line 51:
   ```javascript
   const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com";
   ```

### Payment Integration (Future)
The donate button is currently a placeholder. To integrate real payments:

1. Sign up for [Stripe](https://stripe.com/), [PayPal](https://paypal.com/), or [Buy Me a Coffee](https://www.buymeacoffee.com/)
2. Update the `handleDonate` function (around line 195)
3. Replace the alert with actual payment gateway redirect

## 💡 How to Use

### Basic Workflow
1. **Upload Images** - Click to upload PNG, PDF, or other image formats (up to 5)
2. **Set Dimensions** - Choose your preferred unit and set size for each image
3. **Adjust Spacing** - Set the gap between images
4. **Select Paper Size** - Choose A4, A3, or A2
5. **Fill Sheet** - Click to auto-calculate copies that fit
6. **Export** - Download as JPEG, PDF, or PNG

### Multi-Image Workflow
1. Upload first image → set dimensions → set copy count
2. Upload second image → set different dimensions → set copy count
3. Continue for up to 5 different images
4. Preview shows all images arranged optimally
5. Export includes all images in one gang sheet

## 🛠️ Technology Stack

- **React 18** - UI framework (loaded via CDN)
- **Tailwind CSS** - Styling
- **jsPDF** - PDF generation
- **html2canvas** - Canvas rendering
- **Google OAuth** - Authentication
- **LocalStorage** - Data persistence

## 📊 Data Storage

Currently uses browser `localStorage`:
- User authentication data
- Saved gang sheets (per user)
- User preferences

**Production Note:** Replace localStorage with a proper backend (see Future Enhancements).

## 🔮 Future Enhancements

### High Priority
- [ ] Backend API (Node.js/Express or Firebase)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real payment processing (Stripe)
- [ ] Cloud storage for saved sheets
- [ ] Drag-and-drop image reordering
- [ ] Custom paper sizes
- [ ] Bleed/margin controls

### Medium Priority
- [ ] Image rotation
- [ ] Bulk upload (more than 5 images)
- [ ] Template library
- [ ] Duplicate detection
- [ ] Print preview mode
- [ ] Keyboard shortcuts

### Low Priority
- [ ] Dark mode
- [ ] Mobile app (React Native)
- [ ] Batch export
- [ ] Image editing tools
- [ ] Collaboration features
- [ ] Analytics dashboard

## 🐛 Known Issues

1. **File Input Reset** - File input is manually reset after upload to allow same file re-selection
2. **Large Images** - Very large images (>10MB) may slow down preview rendering
3. **Browser Limits** - LocalStorage limited to ~5-10MB depending on browser
4. **PDF Export** - Very complex layouts may take a few seconds to generate

## 🤝 Contributing

This is currently a single-file application for easy deployment. When contributing:

1. Test changes in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Ensure mobile responsiveness
3. Maintain the single-file architecture (unless refactoring)
4. Keep all dependencies on CDN (no npm builds required)
5. Comment complex logic clearly

## 📝 Development Notes

### Code Organization
The HTML file is structured in this order:
1. **Meta & Dependencies** (lines 1-50)
2. **React State & Config** (lines 51-100)
3. **Authentication Functions** (lines 101-200)
4. **Image Handling Functions** (lines 201-400)
5. **Layout Calculation** (lines 401-500)
6. **Export Functions** (lines 501-600)
7. **UI Components** (lines 601-1100)
8. **Render** (line 1100+)

### Key Functions
- `calculateLayout()` - Arranges images on paper
- `exportSheet()` - Generates high-res output
- `handleUnitChange()` - Converts between measurement units
- `autoFillSheet()` - Calculates optimal copy count

### State Management
All state is managed with React hooks:
- `useState` for local state
- `useEffect` for side effects
- `useRef` for canvas references

## 📄 License

This project is currently unlicensed. Add a license file if distributing publicly.

## 🙏 Credits

- Built with React, Tailwind CSS, and modern web technologies
- Icons from Heroicons
- Inspired by the needs of sticker makers and print professionals

## 📧 Support

For issues or questions:
1. Check the documentation in this README
2. Review the code comments
3. Test in latest Chrome/Firefox first
4. Check browser console for errors

---

**Version:** 1.0.0  
**Last Updated:** February 1, 2026  
**Status:** Production Ready  
**Maintenance:** Active
