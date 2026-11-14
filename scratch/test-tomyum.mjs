async function test() {
  const url = 'https://images.unsplash.com/photo-1563372529-b35a5220919f?auto=format&fit=crop&w=900&q=80';
  const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  console.log('Tom yum 200?', res.status);
}
test();
