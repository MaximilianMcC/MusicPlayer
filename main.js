// Imports
const { app, BrowserWindow } = require("electron");
const path = require("path");

//!DEBUG:
require("electron-reload")(__dirname);


// Make the main window where the app is
const createWindow = () => {

	const mainWindow = new BrowserWindow({
		width: 900,
		height: 600,
		autoHideMenuBar: true,
		resizable: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true
		},
		icon: "./assets/img/icon.png"
	});

	// Load the HTML file
	mainWindow.loadFile("./app/index.html");

	// Remove the menu, and disable inspect
	//! DEBUG mainWindow.setMenu(null);
}

// When the app has loaded
app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		// Make a window for mac
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	})
});


// Close the window 
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});