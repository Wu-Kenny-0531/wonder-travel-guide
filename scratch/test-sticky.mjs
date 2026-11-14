async function test() {
  const url = 'https://images.unsplash.com/photo-1705056508219-0aa0ceb16820?auto=format&fit=crop&w=900&q=80';
  const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  console.log('Sticky rice 200?', res.status);
}
test();
