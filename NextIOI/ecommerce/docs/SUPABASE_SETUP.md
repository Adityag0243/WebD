# Supabase Setup Guide for Gemini Chatbot

## 🎯 Overview

This guide will help you set up Supabase with vector embeddings for semantic product search using Gemini AI.

## 📋 Prerequisites

1. **Supabase Account**: Sign up at [supabase.com](https://supabase.com)
2. **Gemini API Key**: Get from [Google AI Studio](https://aistudio.google.com/app/apikey)
3. **PostgreSQL Extension**: pgvector (will be installed below)

---

## 🚀 Step-by-Step Setup

### Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Fill in:
   - **Name**: Your project name (e.g., "ecommerce-chatbot")
   - **Database Password**: Strong password (save this!)
   - **Region**: Choose closest to your users
4. Click **"Create new project"** and wait ~2 minutes

### Step 2: Enable pgvector Extension

1. In your Supabase dashboard, go to **Database** → **Extensions**
2. Search for `vector`
3. Enable **`vector`** extension
4. Click **"Enable"**

### Step 3: Create Products Table with Vector Column

Go to **SQL Editor** and run this:

```sql
-- Create products table with vector embedding column
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  mongo_id TEXT UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL NOT NULL,
  category TEXT,
  stock INTEGER DEFAULT 0,
  image TEXT,
  rating DECIMAL DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  embedding VECTOR(768),  -- Gemini embedding dimension
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster vector similarity search
CREATE INDEX ON products 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Create index for faster text searches
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_active ON products(is_active);
```

### Step 4: Create Vector Search Function

Run this in **SQL Editor**:

```sql
-- Function to find similar products using vector similarity
CREATE OR REPLACE FUNCTION match_products(
  query_embedding VECTOR(768),
  match_count INT DEFAULT 5,
  min_similarity FLOAT DEFAULT 0.5
)
RETURNS TABLE (
  id BIGINT,
  mongo_id TEXT,
  name TEXT,
  description TEXT,
  price DECIMAL,
  category TEXT,
  stock INTEGER,
  image TEXT,
  rating DECIMAL,
  is_active BOOLEAN,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    products.id,
    products.mongo_id,
    products.name,
    products.description,
    products.price,
    products.category,
    products.stock,
    products.image,
    products.rating,
    products.is_active,
    1 - (products.embedding <=> query_embedding) AS similarity
  FROM products
  WHERE 
    products.is_active = true 
    AND products.stock > 0
    AND 1 - (products.embedding <=> query_embedding) >= min_similarity
  ORDER BY products.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
```

### Step 5: Get Your Supabase Credentials

1. Go to **Settings** → **API**
2. Copy these values:

```env
# Supabase URL
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co

# Supabase Service Role Key (Keep this secret!)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Step 6: Update Your `.env` File

Add to your `.env`:

```env
# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# MongoDB (still used for main storage)
MONGODB_URI=mongodb://localhost:27017/mydatabase
```

---

## ✅ Testing Your Setup

### Test 1: Add a Product

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gaming Laptop",
    "description": "High-performance laptop with RTX 3060",
    "price": 1299,
    "category": "electronics",
    "stock": 10,
    "rating": 4.5
  }'
```

Expected response:
```json
{
  "message": "Product added successfully",
  "data": { ... },
  "supabase_synced": true
}
```

### Test 2: Check Supabase

1. Go to **Table Editor** → **products**
2. You should see your product with an embedding!

### Test 3: Test Chatbot

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "I need a laptop for gaming"}'
```

Expected response:
```json
{
  "answer": "Based on your needs, I recommend the Gaming Laptop...",
  "products": [...],
  "count": 1
}
```

---

## 🔧 How It Works

### When Adding a Product:

```javascript
1. User sends product data to /api/products
2. Product saved to MongoDB
3. Gemini generates embedding for "name + category + description"
4. Product + embedding saved to Supabase
5. Response confirms both saves
```

### When Using Chatbot:

```javascript
1. User asks: "I need a gaming laptop"
2. Gemini generates embedding for the question
3. Supabase searches for similar embeddings
4. Returns top 5 most similar products
5. Gemini generates natural language response
6. Returns AI answer + products
```

---

## 📊 Database Schema Reference

### Supabase `products` Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Auto-increment ID |
| `mongo_id` | TEXT | Reference to MongoDB document |
| `name` | TEXT | Product name |
| `description` | TEXT | Product description |
| `price` | DECIMAL | Product price |
| `category` | TEXT | Product category |
| `stock` | INTEGER | Stock quantity |
| `image` | TEXT | Image URL |
| `rating` | DECIMAL | Product rating (0-5) |
| `is_active` | BOOLEAN | Is product active? |
| `embedding` | VECTOR(768) | Gemini embedding for search |
| `created_at` | TIMESTAMPTZ | Creation timestamp |
| `updated_at` | TIMESTAMPTZ | Update timestamp |

---

## 🐛 Troubleshooting

### Error: "relation 'products' does not exist"
**Fix**: Run the CREATE TABLE SQL in Step 3

### Error: "function match_products does not exist"
**Fix**: Run the CREATE FUNCTION SQL in Step 4

### Error: "type 'vector' does not exist"
**Fix**: Enable pgvector extension in Step 2

### Error: "Invalid API key"
**Fix**: Check your `.env` file has correct Supabase credentials

### Products not returning in search
**Fix**: 
1. Check products table has embeddings
2. Lower `min_similarity` in chat route (try 0.3)
3. Verify products are `is_active=true` and `stock>0`

### Supabase sync fails but MongoDB works
**Fix**:
- This is OK! Product still saved to MongoDB
- Check Supabase credentials in `.env`
- Check network connectivity to Supabase

---

## 📈 Optional: Migrate Existing Products

If you have existing products in MongoDB, run this script:

```javascript
// scripts/sync-to-supabase.js
import { connectToDatabase } from './db/db.config.js';
import { Product } from './model/product.model.js';
import { supabase } from './lib/supabase.js';
import { getEmbedding } from './lib/gemini.js';

async function syncAllProducts() {
  await connectToDatabase();
  
  const products = await Product.find({ is_active: true });
  console.log(`Syncing ${products.length} products...`);
  
  for (const product of products) {
    try {
      const embeddingText = `${product.name} ${product.category || ''} ${product.description || ''}`;
      const embedding = await getEmbedding(embeddingText);
      
      await supabase.from('products').insert({
        mongo_id: product._id.toString(),
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
        image: product.image,
        rating: product.rating,
        is_active: product.is_active,
        embedding
      });
      
      console.log(`✓ Synced: ${product.name}`);
    } catch (error) {
      console.error(`✗ Failed: ${product.name}`, error.message);
    }
  }
  
  console.log('Sync complete!');
}

syncAllProducts();
```

Run with:
```bash
node scripts/sync-to-supabase.js
```

---

## 🎓 Understanding Vector Search

### What are embeddings?
Embeddings convert text into numbers (vectors) that capture semantic meaning.

**Example:**
- "gaming laptop" → [0.23, 0.87, -0.45, ...]
- "high-performance computer" → [0.25, 0.89, -0.43, ...]

These vectors are **close** because they mean similar things!

### How similarity works:
The `<=>` operator calculates **cosine distance**:
- 0 = identical
- 1 = completely different

Our function returns `1 - distance` so:
- 1.0 = perfect match
- 0.5 = somewhat similar
- 0.0 = not similar

---

## 🚀 Next Steps

1. ✅ Complete Supabase setup
2. ✅ Test adding products
3. ✅ Test chatbot queries
4. 📱 Build a frontend UI
5. 📊 Add analytics for search queries
6. 🔄 Implement product update sync
7. 🗑️ Handle product deletions

---

## 🆘 Need Help?

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **pgvector Guide**: [github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)
- **Gemini API**: [ai.google.dev](https://ai.google.dev)

---

**You're all set! 🎉** Your chatbot now uses powerful semantic search with Supabase + Gemini!
