#!/usr/bin/env node
const chalk = require('chalk');
const { execSync } = require('child_process');

async function main() {
  console.log(chalk.cyan('\n📈 Activity Tracker v1.0.0\n'));
  const repos = JSON.parse(execSync('gh repo list yksanjo --limit 50 --json name,updatedAt', { encoding: 'utf8' }));
  repos.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).forEach(r => {
    const date = new Date(r.updatedAt).toLocaleDateString();
    console.log(`  ${r.name}: ${date}`);
  });
}
if (require.main === module) main().catch(console.error);
module.exports = { main };
