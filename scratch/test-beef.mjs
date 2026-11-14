async function test() {
  const url = 'https://images.unsplash.com/photo-1519077204685-ed90d0cc05b7?auto=format&fit=crop&w=900&q=80';
  const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  console.log('Beef noodles 200?', res.status);
}
test();
