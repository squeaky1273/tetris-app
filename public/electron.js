const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680,
    webPreferences: {
      nodeIntegration: true
  }
});
// mainWindow.loadURL(
//   //       url.format({
//   //         pathname: path.join(__dirname, 'index.html'),
//   //         protocol: 'file:',
//   //         slashes: true
//   //       })
//   //     )
 mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'index.html')}`);
  if (isDev) {
    // Open the DevTools.
    // BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    // Open Chrome web inspector for debug and development
    // mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


// const path = require('path');
// const url = require('url');
// const isDev = require('electron-is-dev');
// ​
// const {
//   app,
//   BrowserWindow
// } = require('electron');
// ​
// let mainWindow;
// ​
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 900,
//     height: 680,
//     icon: path.join(__dirname + 'public/icons/192x192.png'),
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })
// ​
//   // mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
// ​
//   if (isDev) {
//     mainWindow.loadURL('http://localhost:3000')
// ​
// //     const {
// //       default: installExtension,
// //       REACT_DEVELOPER_TOOLS,
// //       REDUX_DEVTOOLS
// //     } = require('electron-devtools-installer')
// // ​
// //     app.whenReady().then(() => {
// //     const extensions = [REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS]
// // ​
// //     installExtension(extensions, {
// //         allowFileAccess: true,
// //         forceDownload: true
// //       })
// //       .then((name) => {
// //         console.log(`Added Extension: ${name}`)
// //         })
// //       .catch((err) => console.log('An error occurred: ', err));
// //     })
// //     .then(() =>
// //       // Open Chrome web inspector for debug and development
// //       mainWindow.webContents.openDevTools({ mode: "undocked" })
// //     )
//   } else {
//     mainWindow.loadURL(
//       url.format({
//         pathname: path.join(__dirname, 'index.html'),
//         protocol: 'file:',
//         slashes: true
//       })
//     )
//   }
// ​
//   mainWindow.on('closed', () => mainWindow = null)
// }
// ​
// ​
// app.on('ready', () => {
//     createWindow()
// ​
//     app.on('activate', () => {
//       if (mainWindow === null) {
//         createWindow()
//       }
//     })
// })
// ​
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })