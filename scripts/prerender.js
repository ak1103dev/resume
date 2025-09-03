#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set Puppeteer args for CI environment
process.env.PUPPETEER_ARGS = '--no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage --disable-gpu --no-first-run --no-zygote --single-process';

try {
  // Run react-spa-prerender
  console.log('Running react-spa-prerender...');
  execSync('npx react-spa-prerender', { stdio: 'inherit' });

  // Create CNAME file
  console.log('Creating CNAME file...');
  const distPath = path.join(__dirname, '..', 'dist');
  const cnamePath = path.join(distPath, 'CNAME');
  fs.writeFileSync(cnamePath, 'resume.ak1103dev.com');

  console.log('Prerendering completed successfully!');
} catch (error) {
  console.error('Prerendering failed:', error.message);
  process.exit(1);
}