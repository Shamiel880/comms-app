require('dotenv').config();
process.env.MODE = 'mock';

const tests = [
  { name: 'Normaliser', run: require('./test-normaliser') },
  { name: 'AI Mock', run: require('./test-ai') },
  { name: 'Email', run: require('./test-email') },
  { name: 'WhatsApp', run: require('./test-whatsapp') },
  { name: 'Telegram', run: require('./test-telegram') },
  { name: 'API endpoints', run: require('./test-api') },
];

async function runAll() {
  console.log('\n══════════════════════════════════════════');
  console.log('   comms-system — test suite');
  console.log('══════════════════════════════════════════\n');

  const results = [];
  for (const t of tests) {
    process.stdout.write(`  Running: ${t.name.padEnd(20)}`);
    try {
      await t.run();
      process.stdout.write('✓ PASS\n');
      results.push({ name: t.name, pass: true });
    } catch (err) {
      process.stdout.write(`✗ FAIL — ${err.message}\n`);
      results.push({ name: t.name, pass: false, error: err.message });
    }
  }

  const passed = results.filter(r => r.pass).length;
  const failed = results.filter(r => !r.pass).length;
  console.log(`\n  Results: ${passed} passed, ${failed} failed`);
  console.log('══════════════════════════════════════════\n');
  process.exit(failed > 0 ? 1 : 0);
}

runAll();
