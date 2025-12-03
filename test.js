const { app, BrowserWindow } = require('electron');
// 极简窗口：只加载百度，不搞任何复杂逻辑
app.on('ready', () => {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL('https://www.baidu.com');
  win.webContents.openDevTools(); // 强制开调试工具，看是否有输出
  console.log('测试窗口已创建！'); // 终端打印日志
});
// 关闭所有窗口退出
app.on('window-all-closed', () => app.quit());