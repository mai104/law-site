// vercel-build.js - A script that can be executed before the build process
// Ensures that all required dependencies are installed

const { execSync } = require('child_process');

try {
  console.log('Checking for @popperjs/core...');
  try {
    require.resolve('@popperjs/core');
    console.log('@popperjs/core is already installed.');
  } catch (e) {
    console.log('Installing @popperjs/core...');
    execSync('npm install @popperjs/core --legacy-peer-deps', { stdio: 'inherit' });
  }

  console.log('Ready to build!');
} catch (error) {
  console.error('Error in pre-build script:', error);
  process.exit(1);
}