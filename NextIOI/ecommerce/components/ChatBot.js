'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ShoppingBag, Loader2, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([
        {
            role: 'bot',
            content: "Hi! 👋 I'm your AI Shopping Assistant. Ask me anything about our products or for recommendations!"
        }
    ]);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [chat, isOpen]);

    const handleSend = async () => {
        if (!message.trim() || loading) return;

        const userMessage = { role: 'user', content: message };
        setChat((prev) => [...prev, userMessage]);
        const currentQuestion = message;
        setMessage('');
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: currentQuestion }),
            });

            if (!res.ok) {
                throw new Error('Failed to fetch response');
            }

            const data = await res.json();

            const botMessage = {
                role: 'bot',
                content: data.answer || "I found some products you might like!",
                products: data.products || [],
            };

            setChat((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            setChat((prev) => [
                ...prev,
                { role: 'bot', content: "Sorry, I'm having trouble connecting right now. Please try again later." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[90vw] sm:w-[400px] h-[550px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500 ease-out">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-5 text-white flex justify-between items-center shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                        </div>
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                                <Bot className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg tracking-tight flex items-center gap-2">
                                    Shop AI <Sparkles className="w-3 h-3 text-yellow-300" />
                                </h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <p className="text-[10px] font-medium uppercase tracking-widest opacity-80">Always Online</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/20 rounded-xl transition-all active:scale-95 relative z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#f8fafc]">
                        {chat.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-up-2 duration-300`}
                            >
                                <div
                                    className={`max-w-[85%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'
                                        }`}
                                >
                                    <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                        }`}>
                                        <p className="whitespace-pre-wrap">{msg.content}</p>
                                    </div>

                                    {/* Products rendering */}
                                    {msg.products && msg.products.length > 0 && (
                                        <div className="mt-4 w-full space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                                            <div className="flex items-center gap-2 px-1">
                                                <div className="h-px flex-1 bg-gray-200"></div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                                    <ShoppingBag className="w-3 h-3" /> Recommended
                                                </p>
                                                <div className="h-px flex-1 bg-gray-200"></div>
                                            </div>
                                            <div className="grid grid-cols-1 gap-3">
                                                {msg.products.map((p, pIdx) => (
                                                    <div
                                                        key={p.mongo_id || p.id || pIdx}
                                                        className="group bg-white p-3 rounded-2xl border border-gray-100 flex gap-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
                                                        onClick={() => window.location.href = `/product/${p.mongo_id || p.id}`}
                                                    >
                                                        <div className="relative w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-inner group-hover:scale-105 transition-transform">
                                                            {p.image ? (
                                                                <Image
                                                                    src={p.image}
                                                                    alt={p.name}
                                                                    fill
                                                                    sizes="64px"
                                                                    className="object-cover"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                                                                    <ShoppingBag className="w-6 h-6 text-gray-200" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex-1 flex flex-col justify-center min-w-0">
                                                            <h4 className="text-sm font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                                                                {p.name}
                                                            </h4>
                                                            <p className="text-xs text-gray-500 line-clamp-1 mb-1 italic">
                                                                {p.category || 'General'}
                                                            </p>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-sm font-black text-blue-700">
                                                                    ${p.price}
                                                                </span>
                                                                <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                                                                    View Details
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <span className="text-[10px] mt-1.5 px-2 font-medium text-gray-400 uppercase tracking-tighter opacity-70">
                                        {msg.role === 'bot' ? 'Assistant' : 'You'}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start animate-pulse">
                                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-3">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-150"></span>
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-300"></span>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Assistant is thinking...</span>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} className="h-2" />
                    </div>

                    {/* Input Area */}
                    <div className="p-5 bg-white border-t border-gray-50 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]">
                        <div className="relative flex items-center group">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Types your question..."
                                disabled={loading}
                                className="w-full pl-5 pr-14 py-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all text-sm shadow-inner disabled:opacity-50"
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !message.trim()}
                                className="absolute right-2 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-200 transition-all active:scale-90 shadow-md flex items-center justify-center"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-gray-400 mt-3 font-medium uppercase tracking-[0.1em]">
                            Verified AI • Powered by Google Gemini
                        </p>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`group relative p-6 rounded-[2rem] shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95 overflow-hidden ${isOpen
                    ? 'bg-white text-gray-800 rotate-180 border border-gray-100'
                    : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                    }`}
            >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_70%)]"></div>
                {isOpen ? (
                    <X className="w-8 h-8 relative z-10" />
                ) : (
                    <div className="relative z-10 flex flex-col items-center">
                        <MessageCircle className="w-8 h-8" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 border-2 border-white rounded-full animate-ping"></div>
                    </div>
                )}
            </button>

            {!isOpen && (
                <div className="absolute right-full mr-4 bottom-2 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 text-sm font-bold text-gray-700 whitespace-nowrap animate-in fade-in slide-in-from-right-4 duration-700 cursor-pointer hover:bg-gray-50 group" onClick={() => setIsOpen(true)}>
                    Need help? Ask me! 🤖
                    <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45 group-hover:bg-gray-50"></div>
                </div>
            )}
        </div>
    );
}
