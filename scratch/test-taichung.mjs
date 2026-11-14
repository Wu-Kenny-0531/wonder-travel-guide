async function testTaichung() {
  const urls = [
    'https://images.unsplash.com/photo-1767630867135-5a7693b459bf?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1779079297902-2e4ba713a936?auto=format&fit=crop&w=900&q=80'
  ];
  for (const u of urls) {
    const res = await fetch(u, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
    console.log(res.status, u);
  }
}
testTaichung();
