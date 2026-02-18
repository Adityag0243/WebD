"use client";
import { useState } from 'react';

export default function RecommendationSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(null);

    const handleSearch = async () => {
        const res = await fetch('/api/recommend', {
        method: 'POST',
        body: JSON.stringify({ query }),
        });
        const data = await res.json();
        setResults(data);
    };

    return (
        <div className="p-8">
        <input 
            className="border p-2 rounded text-black"
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Describe what you're looking for..."
        />
        <button onClick={handleSearch} className="ml-2 bg-blue-500 p-2 rounded text-white">Find</button>

        {results && (
            <div className="mt-4">
            <p className="italic text-gray-600 mb-4">{results.explanation}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {results.products.map(p => (
                <div key={p.id} className="border p-4 rounded shadow">
                    <h3 className="font-bold">{p.name}</h3>
                    <p>${p.price}</p>
                </div>
                ))}
            </div>
            </div>
        )}
        </div>
    );
}