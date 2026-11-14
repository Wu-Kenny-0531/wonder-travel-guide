async function testDumpling() {
  const url = 'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?auto=format&fit=crop&w=900&q=80';
  const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  console.log('Dumpling 200?', res.status);
}
testDumpling();
