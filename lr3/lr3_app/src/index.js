const { app, BrowserWindow } = require('electron');
const path = require('path');
const os  = require('os-utils');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 400,
    icon: __dirname + "/walli.png",
    webPreferences: {
      nodeIntegration: true
    }
  });

  setInterval(() => {
    os.cpuUsage(function(v) {
    mainWindow.webContents.send("cpu", v * 100);    
    mainWindow.webContents.send("mem", os.freememPercentage() * 100);
    mainWindow.webContents.send("total-mem", os.totalmem() / 1024);
    });
  }, 1000);

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  os.cpuUsage(function(v) {
    console.log("CPU Usage (%): " + v * 100);
    mainWindow.webContents.send("cpu", v * 100);
    console.log("Mem Usage (%): " + os.freememPercentage() * 100);
    mainWindow.webContents.send("mem", os.freememPercentage() * 100);
    console.log("Total Mem (GB): " + os.totalmem() / 1024);
    mainWindow.webContents.send("total-mem", os.totalmem() / 1024);
    console.log("Platform: " + os.platform());
    });
    
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
