const path = require('path');

module.exports = getPathToUserSettings();

function getPathToUserSettings() {
  switch (process.platform) {
    case 'win32': // Windows
      return path.join(process.env.HOME, 'AppData', 'Roaming', 'Code', 'User', 'settings.json');
    case 'darwin': // MacOS
      return '~/Library/Application Support/Code/User/settings.json';
    default:
      if (isWsl()) {
        console.error("You're using WSL, please go to ./scripts/path-to-user-settings.js and manually fix the path.");
        // return '/mnt/c/Users/yourUsername/AppData/Roming/Code/User/settings.json'
        // put your fix here ↑
        process.exit();
      }
      return '~/.config/Code/User/settings.json'; // probably some sort of Linux
  }
}

function isWsl() { // test if the user is running inside Windows Subsystem for Linux.
  if (process.platform !== 'linux')
    return false;

  const os = require('os');
  if (os.release().includes('Microsoft'))
    return true;

  const fs = require('fs');
  try {
    return fs.readFileSync('/proc/version', 'utf8').includes('Microsoft');
  } catch (err) {
    return false;
  }
}
