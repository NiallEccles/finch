const { app, BrowserWindow } = require("electron");
const windowStateKeeper = require("electron-window-state");
const Store = require("electron-store");
let win;
const store = new Store();

try {
  require("electron-reloader")(module);
} catch (_) {}

app.on("ready", function () {
  // Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
  });

  // Create the window using the state information
  win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (win.maximized) {
    mainWindow.maximize();
  }

  win.loadFile("index.html");

  // Let us register listeners on the window, so we can update the state
  // automatically (the listeners will be removed when the window is closed)
  // and restore the maximized or full screen state
  mainWindowState.manage(win);

  //check and seed preferences here
  if (!store.get("preferences")) {
    store.set("preferences", { notifications: true });
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
