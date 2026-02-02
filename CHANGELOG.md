# Changelog

All notable changes to the Gang Sheet Generator project.

## [1.0.0] - 2026-02-01

### ✨ Features Added

#### Core Functionality
- **Multi-Image Support** - Upload and arrange up to 5 different images on one sheet
- **Paper Size Options** - A4 (210×297mm), A3 (297×420mm), A2 (420×594mm)
- **Smart Layout Engine** - Automatically arranges images left-to-right, top-to-bottom
- **Live Preview** - Real-time visual preview of the gang sheet layout
- **High-Quality Export** - Export at 300 DPI in JPEG, PDF, or PNG formats

#### Image Controls
- **Custom Dimensions** - Set exact width and height for each image independently
- **Unit Conversion** - Work in mm, cm, inches, or pixels with instant conversion
- **Aspect Ratio Lock** - Toggle to maintain image proportions when resizing
- **Spacing Control** - Adjustable gap between images (0-50mm)
- **Copy Counter** - Set 1-100 copies per image with +/- buttons

#### Advanced Features
- **Fill Sheet Button** - Automatically calculate how many copies fit at current dimensions
- **Individual Image Selection** - Click any uploaded image to edit its specific settings
- **Image Thumbnails** - Visual preview of each uploaded image with dimensions shown
- **Remove Individual Images** - Delete specific images without clearing everything
- **Clear All Button** - Quick reset to start fresh

#### User Experience
- **Google Sign-In** - Simple one-click authentication with Google OAuth
- **Save Gang Sheets** - Store your configurations for later use
- **Profile Management** - View saved sheets, account statistics
- **Donate Button** - Support the project with optional donations
- **Tab Navigation** - Generator, Saved Sheets, and Profile tabs
- **Responsive Design** - Works on desktop and tablet devices

#### Technical Features
- **No Paywall** - All features completely free to use
- **Client-Side Only** - No backend required, works offline after loading
- **LocalStorage Persistence** - Saves user data and sheets locally
- **300 DPI Export** - Professional print quality
- **Multiple Format Support** - Accept PNG, PDF, JPG, and other image formats

### 🎨 UI/UX Improvements
- Clean, modern interface with Tailwind CSS
- Intuitive drag-free workflow
- Color-coded buttons for different actions
- Visual feedback for selected images
- Loading states and smooth transitions
- Mobile-optimized input types (decimal keyboard)

### 🔧 Technical Details
- Single HTML file architecture (easy deployment)
- React 18 for reactive UI
- jsPDF for PDF generation
- html2canvas for high-quality rendering
- Google OAuth integration
- Modular function design

### 📝 Documentation
- Comprehensive README.md with feature list
- Detailed SETUP.md with step-by-step instructions
- Code comments throughout
- Google OAuth setup guide
- Troubleshooting section

## Development History

### Phase 1: Basic Generator (Initial)
- Single image upload
- Fixed dimensions
- Basic A4 layout
- Simple export

### Phase 2: Enhanced Controls
- Multiple paper sizes (A4, A3, A2)
- Custom dimensions input
- Aspect ratio lock
- Spacing control

### Phase 3: Multi-Image Support
- Upload up to 5 different images
- Individual image controls
- Smart layout algorithm
- Copy counter per image

### Phase 4: User Experience
- Google authentication
- Save/load gang sheets
- Profile page
- Donation support

### Phase 5: Advanced Features
- Unit conversion (mm/cm/in/px)
- Fill sheet calculation
- Image preview thumbnails
- Clear functionality

### Phase 6: Polish & Optimization
- Removed premium restrictions
- Added visual feedback
- Improved input responsiveness
- Fixed file input reset
- Enhanced preview system

## Known Issues & Solutions

### Fixed Issues
✅ Input lag when typing dimensions - Fixed with string state management  
✅ Can't delete last digit in number input - Fixed by using text input  
✅ File input doesn't reset - Fixed with manual reset  
✅ Preview doesn't update on paper size change - Fixed with reactive layout  
✅ Premium paywall - Removed, all features free  

### Current Limitations
⚠️ Maximum 5 images per sheet (by design for simplicity)  
⚠️ LocalStorage size limit (~5-10MB depending on browser)  
⚠️ Large images (>10MB) may slow preview rendering  
⚠️ No drag-and-drop reordering yet  

## Future Roadmap

### Version 1.1 (Planned)
- [ ] Drag-and-drop image positioning
- [ ] Image rotation controls
- [ ] Custom paper sizes
- [ ] Bleed/margin settings
- [ ] Undo/redo functionality

### Version 1.2 (Planned)
- [ ] Backend API integration
- [ ] Cloud storage for saved sheets
- [ ] Real payment processing
- [ ] User account management
- [ ] Share gang sheets via link

### Version 2.0 (Future)
- [ ] Bulk upload (10+ images)
- [ ] Template library
- [ ] Collaboration features
- [ ] Mobile app (React Native)
- [ ] Print shop integration

## Breaking Changes

None yet - Version 1.0.0 is the initial release.

## Migration Guide

N/A - This is the first version.

## Contributors

- Primary Developer: Built with Claude (Anthropic AI)
- Designed for: Sticker makers, print businesses, and creative professionals

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for beautiful styling
- jsPDF for PDF generation capabilities
- Google for OAuth authentication
- All the sticker makers who inspired this tool

---

**Note:** This changelog follows [Keep a Changelog](https://keepachangelog.com/) format.
