async function testLuroufan() {
  const url = 'https://images.unsplash.com/photo-1789296719187-829d74cc7711?auto=format&fit=crop&w=900&q=80';
  const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
  console.log('Luroufan 200?', res.status);
}
testLuroufan();
