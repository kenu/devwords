#!/usr/bin/env node

const getString = require("../index.js");
const { version } = require("../package.json");

function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('-v') || args.includes('--version')) {
    console.log(version);
    return;
  }
  
  console.log("🙊 " + getString());
}

main();
