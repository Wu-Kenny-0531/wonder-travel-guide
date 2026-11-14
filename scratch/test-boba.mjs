async function testBoba() {
  const urls = [
    'https://images.unsplash.com/photo-1751199956820-ecb919004024?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1789439522324-e5520b19d23c?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1743310835056-5c6b110158be?auto=format&fit=crop&w=900&q=80'
  ];
  for (const u of urls) {
    const res = await fetch(u, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
    console.log(res.status, u);
  }
}
testBoba();
