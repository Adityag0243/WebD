# Gemini Chatbot - Quick Reference

## 🎯 System Overview

**MongoDB** → Stores complete product data  
**Supabase** → Stores products with vector embeddings for semantic search  
**Gemini AI** → Generates embeddings + conversational responses

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `lib/gemini.js` | Gemini API integration (embeddings + chat) |
| `lib/supabase.js` | Supabase client configuration |
| `app/api/products/route.js` | Add products (syncs to both DBs) |
| `app/api/chat/route.js` | Chatbot endpoint (vector search) |

---

## 🔄 Product Flow

### Adding a Product

```mermaid
POST /api/products
    ↓
Save to MongoDB
    ↓
Generate embedding (Gemini)
    ↓
Save to Supabase with embedding
    ↓
Return success
```

**Code:**
```javascript
POST /api/products
{
  "name": "Gaming Mouse",
  "description": "RGB gaming mouse with 16000 DPI",
  "price": 79.99,
  "category": "electronics",
  "stock": 50,
  "rating": 4.7
}
```

---

## 💬 Chatbot Flow

### User Query

```mermaid
POST /api/chat
    ↓
Generate embedding from question (Gemini)
    ↓
Search Supabase (vector similarity)
    ↓
Get top 5 similar products
    ↓
Generate AI response (Gemini)
    ↓
Return {answer, products}
```

**Code:**
```javascript
POST /api/chat
{
  "question": "I need a good gaming mouse"
}

Response:
{
  "answer": "I recommend the Gaming Mouse with 16000 DPI...",
  "products": [...],
  "count": 1
}
```

---

## 🧪 Testing Commands

### Test Product Creation
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Keyboard",
    "description": "Mechanical wireless keyboard",
    "price": 129,
    "category": "electronics",
    "stock": 15
  }'
```

### Test Chatbot
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "Show me keyboards"}'
```

### Test in Browser Console
```javascript
// Test chatbot
fetch('/api/chat', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({question: 'Show me laptops'})
}).then(r => r.json()).then(console.log);
```

---

## 🔑 Environment Variables

```env
# Required
GEMINI_API_KEY=your_gemini_key
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_key
MONGODB_URI=mongodb://localhost:27017/mydatabase
```

---

## 📊 Supabase Functions

### match_products
Finds similar products using vector similarity

**Parameters:**
- `query_embedding` (required): Vector from Gemini
- `match_count` (optional): Number of results (default: 5)
- `min_similarity` (optional): Minimum similarity score (default: 0.5)

**Returns:**
```sql
id, mongo_id, name, description, price, 
category, stock, image, rating, is_active, similarity
```

---

## 🎨 Frontend Example (React)

```jsx
'use client';
import { useState } from 'react';

export default function ChatBot() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Product Assistant</h1>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
          placeholder="Ask about products..."
          className="flex-1 p-3 border rounded"
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded">
            <h3 className="font-semibold mb-2">AI Response:</h3>
            <p>{result.answer}</p>
          </div>

          {result.products?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">
                Found {result.count} product(s):
              </h3>
              <div className="grid gap-3">
                {result.products.map((p) => (
                  <div key={p.id} className="p-4 border rounded hover:shadow-lg">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-bold">{p.name}</h4>
                        <p className="text-sm text-gray-600">{p.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {p.category} • {p.stock} in stock • ⭐ {p.rating}/5
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-green-600">
                          ${p.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

---

## 🐛 Common Issues

### "Products not found"
- Check Supabase has products with embeddings
- Lower `min_similarity` to 0.3 in chat route
- Verify products are `is_active=true` and `stock>0`

### "Embedding generation failed"
- Check `GEMINI_API_KEY` in `.env`
- Verify API quota not exceeded

### "Supabase connection failed"
- Check credentials in `.env`
- Verify Supabase project is active
- Check internet connection

---

## 📚 API Reference

### POST /api/products
**Body:**
```typescript
{
  name: string;          // Required
  price: number;         // Required
  stock: number;         // Required
  description?: string;
  category?: string;
  image?: string;
  rating?: number;       // 0-5
}
```

**Response:**
```typescript
{
  message: string;
  data: Product;
  supabase_synced: boolean;
}
```

### POST /api/chat
**Body:**
```typescript
{
  question: string;  // Required
}
```

**Response:**
```typescript
{
  answer: string;       // AI-generated response
  products: Product[];  // Matching products
  count: number;        // Number of products found
}
```

---

## ⚡ Performance Tips

1. **Index Optimization**: Already created in setup
2. **Caching**: Consider Redis for frequent queries
3. **Batch Processing**: For bulk product imports
4. **Similarity Threshold**: Adjust `min_similarity` for better results

---

## 🔐 Security Notes

- ✅ Use `SUPABASE_SERVICE_ROLE_KEY` for server-side only
- ✅ Never expose Gemini API key in frontend
- ✅ Validate all user inputs
- ✅ Rate limit the chat endpoint
- ✅ Sanitize product data before storage

---

**Ready to build! 🚀**
