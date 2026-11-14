async function testCandidates() {
  const candidates = [
    // 1. Arashiyama Bamboo
    { name: 'bamboo-1', url: 'https://images.unsplash.com/photo-1527974361724-67fd5ebfd6d2?auto=format&fit=crop&w=900&q=80' },
    { name: 'bamboo-2', url: 'https://images.unsplash.com/photo-1677608643696-602d780c8c96?auto=format&fit=crop&w=900&q=80' },
    
    // 2. Longshan Temple
    { name: 'longshan-1', url: 'https://images.unsplash.com/photo-1656829443080-799b80331189?auto=format&fit=crop&w=900&q=80' },
    { name: 'longshan-2', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80' }, // Taiwan temple/street

    // 3. Mango Shaved Ice
    { name: 'mango-ice-1', url: 'https://images.unsplash.com/photo-1748831876085-03664b683cfd?auto=format&fit=crop&w=900&q=80' },
    { name: 'mango-ice-2', url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80' }, // Mango sweet dessert
    
    // 4. Wagashi / Japanese sweets
    { name: 'wagashi-1', url: 'https://images.unsplash.com/photo-1785594023749-4f8a60f897fb?auto=format&fit=crop&w=900&q=80' },
    { name: 'wagashi-2', url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80' }
  ];

  for (const c of candidates) {
    try {
      const res = await fetch(c.url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log(`[${res.status}] ${c.name} : ${c.url}`);
    } catch (e) {
      console.log(`[ERR] ${c.name} : ${e.message}`);
    }
  }
}

testCandidates();
