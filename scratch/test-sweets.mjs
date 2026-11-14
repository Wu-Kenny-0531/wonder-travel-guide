async function test() {
  const urls = [
    'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=900&q=80'
  ];
  for (const u of urls) {
    const res = await fetch(u, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
    console.log(res.status, u);
  }
}
test();
