async function test() {
  const url = 'https://images.unsplash.com/photo-1782029680974-e07c93389f52?auto=format&fit=crop&w=900&q=80';
  const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  console.log('Pastry 200?', res.status);
}
test();
