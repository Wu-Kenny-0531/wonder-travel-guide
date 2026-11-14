async function test() {
  const url = 'https://images.unsplash.com/photo-1725813912692-e37fd5aa1b5a?auto=format&fit=crop&w=900&q=80';
  const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  console.log('Mango sticky rice 200?', res.status);
}
test();
