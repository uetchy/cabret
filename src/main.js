import app from 'app';
import BrowserWindow from 'browser-window';
import CrashReporter from 'crash-reporter';
CrashReporter.start();

var mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
    frame: false
  });

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Open the devtools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
