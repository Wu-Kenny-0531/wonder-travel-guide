async function test() {
  const url = 'https://images.unsplash.com/photo-1575853121613-72ce1dd6979d?auto=format&fit=crop&w=900&q=80';
  const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  console.log('Banana roti 200?', res.status);
}
test();
