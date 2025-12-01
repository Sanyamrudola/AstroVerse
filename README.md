# AstroVerse - Your Cosmic Companion

A React-based astrology application that provides insights based on Vedic/Indian Astrology, Western Astrology, Numerology, and Chinese Astrology.

## Features

- 📝 **Profile Management**: Create and manage multiple user profiles
- 🔮 **Multi-System Dashboard**: View astrological insights from 4 different systems
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 💾 **Local Storage**: Profiles persist across sessions

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** - [Download here](https://code.visualstudio.com/)

## Complete Setup Instructions (Step-by-Step)

### Step 1: Install Node.js

1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the installation wizard
4. Verify installation by opening Command Prompt/Terminal and typing:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Create Your Project Folder

1. Open **VS Code**
2. Go to **File → Open Folder**
3. Create a new folder on your computer named `astroverse` (lowercase, no capitals)
   - Example: `C:\Users\YourName\Desktop\astroverse` or `~/Documents/astroverse`
4. Select and open this folder in VS Code

### Step 3: Create React App

1. In VS Code, open the **integrated terminal**:
   - Go to **View → Terminal** (or press `` Ctrl+` `` on Windows/Linux or `` Cmd+` `` on Mac)

2. In the terminal, type the following command and press Enter:
   ```bash
   npx create-react-app .
   ```
   
   **Note:** The `.` (dot) at the end means "create the app in the current folder"
   
3. Wait for the installation to complete (this may take 2-5 minutes)

### Step 4: Install Additional Dependencies

Once the React app is created, run this command in the terminal:
```bash
npm install react-router-dom react-icons
```

### Step 5: Copy the Project Files

Now you need to replace and add files. I'll guide you through each one:

#### A. Delete the default files you won't need:
In VS Code's file explorer (left sidebar), **delete** these files:
- `src/App.css`
- `src/App.test.js`
- `src/logo.svg`
- `src/reportWebVitals.js`
- `src/setupTests.js`

#### B. Create the folder structure:
In the `src` folder, create these new folders:
- Right-click on `src` folder → **New Folder** → name it `components`
- Create another folder: `pages`
- Create another folder: `context`
- Create another folder: `utils`
- Create another folder: `styles`

Your `src` folder should now look like this:
```
src/
├── components/
├── pages/
├── context/
├── utils/
├── styles/
├── App.js
├── index.js
└── index.css
```

#### C. Copy the files:

1. **Replace `public/index.html`**: Copy the HTML code provided below

2. **Replace `src/index.js`**: Copy the code provided below

3. **Replace `src/App.js`**: Copy the code provided below

4. **Create `src/styles/App.css`**: 
   - Right-click on `styles` folder → **New File** → name it `App.css`
   - Copy all the CSS code provided below

5. **Create `src/context/ProfileContext.js`**:
   - Right-click on `context` folder → **New File** → name it `ProfileContext.js`
   - Copy the ProfileContext code

6. **Create component files** (in `src/components/` folder):
   - Create `Navbar.js` and copy the code
   - Create `ProfileCard.js` and copy the code
   - Create `ProfileForm.js` and copy the code
   - Create `DashboardCard.js` and copy the code

7. **Create page files** (in `src/pages/` folder):
   - Create `Home.js` and copy the code
   - Create `ProfileManagement.js` and copy the code
   - Create `Dashboard.js` and copy the code
   - Create `About.js` and copy the code

8. **Create `src/utils/astrologyData.js`**:
   - Right-click on `utils` folder → **New File** → name it `astrologyData.js`
   - Copy the astrologyData code

### Step 6: Run Your App

1. In the VS Code terminal, type:
   ```bash
   npm start
   ```

2. Wait a few seconds. The app will automatically open in your default browser at `http://localhost:3000`

3. If it doesn't open automatically, manually open your browser and go to `http://localhost:3000`

### Step 7: Start Using AstroVerse! 🎉

- The app should now be running
- Any changes you make to the code will automatically refresh in the browser
- To stop the app, press `Ctrl+C` in the terminal

## Final Project Structure

Your complete folder structure should look like this:

```
astroverse/
├── node_modules/          (created automatically)
├── public/
│   ├── index.html         (modified by you)
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProfileCard.js
│   │   ├── ProfileForm.js
│   │   └── DashboardCard.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ProfileManagement.js
│   │   ├── Dashboard.js
│   │   └── About.js
│   ├── context/
│   │   └── ProfileContext.js
│   ├── utils/
│   │   └── astrologyData.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js             (modified by you)
│   ├── index.js           (modified by you)
│   └── index.css
├── package.json
└── README.md              (this file)
```

## VS Code Tips & Tricks

### Recommended Extensions:
1. **ES7+ React/Redux/React-Native snippets** - Fast code snippets
2. **Prettier - Code formatter** - Auto-format your code
3. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags

To install extensions:
- Click the Extensions icon in VS Code sidebar (or press `Ctrl+Shift+X`)
- Search for the extension name
- Click **Install**

### Useful Keyboard Shortcuts:
- **Ctrl+`** (backtick): Open/close terminal
- **Ctrl+B**: Toggle sidebar
- **Ctrl+P**: Quick file search
- **Alt+Up/Down**: Move line up/down
- **Ctrl+/**: Comment/uncomment line
- **Ctrl+S**: Save file (auto-refreshes the browser)

## Available Commands

Run these commands in the VS Code terminal:

- **`npm start`** - Start development server (runs the app)
- **`npm run build`** - Create production build (for deployment)
- **`npm test`** - Run tests
- **Ctrl+C** - Stop the development server

## How to Use AstroVerse

1. **Home Page**: 
   - Landing page with app overview
   - Click on navigation links to explore

2. **Profile Management**: 
   - Click "Profiles" in the navigation
   - Click "Add New Profile" button
   - Fill in: Name, Date of Birth, Time of Birth, Place of Birth
   - Click "Create Profile"
   - You can create multiple profiles
   - Edit or delete profiles as needed
   - Select a profile to make it active

3. **Dashboard**: 
   - Click "Dashboard" in the navigation
   - View insights from all 4 astrology systems
   - Data is based on the active profile
   - Currently shows mock/demo data

4. **About**: 
   - Learn about different astrology systems
   - Understand what each system represents

## Troubleshooting

### Problem: Port 3000 is already in use

**Solution (Windows):**
```bash
set PORT=3001 && npm start
```

**Solution (Mac/Linux):**
```bash
PORT=3001 npm start
```

### Problem: Module not found errors

**Solution:**
```bash
npm install
```

### Problem: Changes not showing in browser

**Solution:**
1. Save the file (`Ctrl+S`)
2. If still not working, stop the server (`Ctrl+C`) and restart (`npm start`)
3. Hard refresh the browser (`Ctrl+Shift+R` or `Ctrl+F5`)

### Problem: Terminal not opening in VS Code

**Solution:**
- Go to **View** → **Terminal**
- Or press `` Ctrl+` ``

### Problem: npm command not recognized

**Solution:**
- Make sure Node.js is installed properly
- Restart VS Code
- Restart your computer
- Reinstall Node.js

## Building for Production

When you're ready to deploy your app:

```bash
npm run build
```

This creates an optimized `build/` folder with all your files ready for deployment.

## Data Storage

- All profiles are stored in your browser's **localStorage**
- Data persists even after closing the browser
- Data is stored locally on your computer only
- To clear data: Open browser DevTools → Application → Local Storage → Clear

## Future Enhancements (Ideas)

- [ ] Backend API integration for real astrological calculations
- [ ] User authentication and accounts
- [ ] Advanced birth charts and visualizations
- [ ] PDF report generation
- [ ] Share insights on social media
- [ ] Daily horoscope feature
- [ ] Compatibility checker
- [ ] Transit predictions

## Notes

⚠️ **Important**: This is a frontend-only application with mock data. The astrological calculations are simplified examples. For production use, you'll need to integrate with proper astrological calculation APIs or libraries.

## Need Help?

- React Documentation: [https://react.dev/](https://react.dev/)
- VS Code Documentation: [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs)
- Node.js Documentation: [https://nodejs.org/docs/](https://nodejs.org/docs/)

## License

MIT License - Feel free to use this project for personal or commercial purposes.

---

**Happy Coding! 🔮✨**

AstroVerse - Your journey through the cosmos
Created by Sanyamrudola

astroverse/
├── node_modules/
├── public/
│   └── index.html ✏️ (modified)
├── src/
│   ├── components/
│   │   ├── Navbar.js ✨ (new)
│   │   ├── ProfileCard.js ✨ (new)
│   │   ├── ProfileForm.js ✨ (new)
│   │   └── DashboardCard.js ✨ (new)
│   ├── pages/
│   │   ├── Home.js ✨ (new)
│   │   ├── ProfileManagement.js ✨ (new)
│   │   ├── Dashboard.js ✨ (new)
│   │   └── About.js ✨ (new)
│   ├── context/
│   │   └── ProfileContext.js ✨ (new)
│   ├── utils/
│   │   └── astrologyData.js ✨ (new)
│   ├── styles/
│   │   └── App.css ✨ (new)
│   ├── App.js ✏️ (modified)
│   ├── index.js ✏️ (modified)
│   └── index.css
├── package.json
└── README.md