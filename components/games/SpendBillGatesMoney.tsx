import React, { useState } from 'react';
import { Minus, Plus, RefreshCw } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

const INITIAL_MONEY = 130000000000;

const products: Product[] = [
    // Luxury Vehicles
    {
        id: 1,
        name: 'Formula 1 Team',
        price: 700000000,
        image: '🏎️',
        category: 'Sports & Entertainment'
    },
    {
        id: 2,
        name: 'Mega Yacht',
        price: 300000000,
        image: '🚢',
        category: 'Vehicles'
    },
    {
        id: 3,
        name: 'Private Jet (Gulfstream G650)',
        price: 70000000,
        image: '✈️',
        category: 'Vehicles'
    },
    {
        id: 4,
        name: 'Bugatti La Voiture Noire',
        price: 18000000,
        image: '🏎️',
        category: 'Vehicles'
    },
    {
        id: 5,
        name: 'Luxury Helicopter',
        price: 15000000,
        image: '🚁',
        category: 'Vehicles'
    },

    // Real Estate
    {
        id: 6,
        name: 'Private Island',
        price: 100000000,
        image: '🏝️',
        category: 'Real Estate'
    },
    {
        id: 7,
        name: 'Luxury Penthouse in NYC',
        price: 40000000,
        image: '🏢',
        category: 'Real Estate'
    },
    {
        id: 8,
        name: 'Beverly Hills Mansion',
        price: 30000000,
        image: '🏰',
        category: 'Real Estate'
    },
    {
        id: 9,
        name: 'Luxury Villa in Monaco',
        price: 25000000,
        image: '🏠',
        category: 'Real Estate'
    },

    // Business Investments
    {
        id: 10,
        name: 'Startup Company',
        price: 50000000,
        image: '💼',
        category: 'Business'
    },
    {
        id: 11,
        name: 'Restaurant Chain',
        price: 10000000,
        image: '🍽️',
        category: 'Business'
    },
    {
        id: 12,
        name: 'Hotel Resort',
        price: 80000000,
        image: '🏨',
        category: 'Business'
    },

    // Luxury Items
    {
        id: 13,
        name: 'Diamond Ring',
        price: 1000000,
        image: '💍',
        category: 'Luxury'
    },
    {
        id: 14,
        name: 'Luxury Watch Collection',
        price: 500000,
        image: '⌚',
        category: 'Luxury'
    },
    {
        id: 15,
        name: 'Designer Wardrobe',
        price: 100000,
        image: '👔',
        category: 'Luxury'
    },

    // Entertainment
    {
        id: 16,
        name: 'Hollywood Movie Production',
        price: 100000000,
        image: '🎬',
        category: 'Entertainment'
    },
    {
        id: 17,
        name: 'Professional Sports Team',
        price: 1000000000,
        image: '⚽',
        category: 'Sports & Entertainment'
    },
    {
        id: 18,
        name: 'Super Bowl Ad Spot',
        price: 5000000,
        image: '📺',
        category: 'Entertainment'
    },

    // Technology
    {
        id: 19,
        name: 'Gaming PC Setup',
        price: 15000,
        image: '🖥️',
        category: 'Technology'
    },
    {
        id: 20,
        name: 'iPhone 15 Pro Max',
        price: 1500,
        image: '📱',
        category: 'Technology'
    },

    // Charitable Causes
    {
        id: 21,
        name: 'Build a Hospital',
        price: 800000000,
        image: '🏥',
        category: 'Charity'
    },
    {
        id: 22,
        name: 'Fund a School',
        price: 10000000,
        image: '🏫',
        category: 'Charity'
    },
    {
        id: 23,
        name: 'Save the Rainforest (1000 acres)',
        price: 10000000,
        image: '🌳',
        category: 'Charity'
    },

    // Exotic Items
    {
        id: 24,
        name: 'Space Tourism Ticket',
        price: 250000,
        image: '🚀',
        category: 'Exotic'
    },
    {
        id: 25,
        name: 'Private Concert by Top Artist',
        price: 1000000,
        image: '🎤',
        category: 'Entertainment'
    },
    {
        id: 26,
        name: 'Dinosaur Fossil',
        price: 8000000,
        image: '🦕',
        category: 'Exotic'
    },

    // More Affordable Items
    {
        id: 27,
        name: 'Tesla Model S Plaid',
        price: 130000,
        image: '🚗',
        category: 'Vehicles'
    },
    {
        id: 28,
        name: 'Rolex Watch',
        price: 15000,
        image: '⌚',
        category: 'Luxury'
    },
    {
        id: 29,
        name: 'First Class RTW Trip',
        price: 100000,
        image: '🌎',
        category: 'Travel'
    },
    {
        id: 30,
        name: 'College Education',
        price: 200000,
        image: '🎓',
        category: 'Education'
    }
];

export default function SpendBillGatesMoney() {
    const [money, setMoney] = useState(INITIAL_MONEY);
    const [cart, setCart] = useState<{ [key: number]: number }>({});
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...new Set(products.map(p => p.category))].sort();

    const formatMoney = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const addToCart = (productId: number, price: number) => {
        if (money >= price) {
            setCart(prev => ({
                ...prev,
                [productId]: (prev[productId] || 0) + 1
            }));
            setMoney(prev => prev - price);
        }
    };

    const removeFromCart = (productId: number, price: number) => {
        if (cart[productId] > 0) {
            setCart(prev => ({
                ...prev,
                [productId]: prev[productId] - 1
            }));
            setMoney(prev => prev + price);
        }
    };

    const resetGame = () => {
        setMoney(INITIAL_MONEY);
        setCart({});
    };

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen text-white bg-gray-900 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Main content area - 2/3 width */}
                <div className="w-full">
                    <div className="sticky top-0 shadow-lg p-4 rounded-xl mb-6 z-50">
                        <h1 className="text-3xl font-bold text-center mb-2">Spend Bill Gates' Money</h1>
                        <p className="text-2xl text-green-600 font-bold text-center">
                            Remaining: {formatMoney(money)}
                        </p>
                        <button
                            onClick={resetGame}
                            className="mt-2 flex items-center mx-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Reset Game
                        </button>

                        {/* Category filter */}
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="bg-zinc-600 rounded-xl shadow-lg p-4">
                                <div className="text-4xl mb-3 text-center">{product.image}</div>
                                <h3 className="text-lg font-semibold text-center mb-1">{product.name}</h3>
                                <p className="text-base text-green-600 font-bold text-center mb-3">
                                    {formatMoney(product.price)}
                                </p>
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => removeFromCart(product.id, product.price)}
                                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
                                        disabled={!cart[product.id]}
                                    >
                                        <Minus className="w-5 h-5" />
                                    </button>
                                    <span className="text-xl font-bold">
                                        {cart[product.id] || 0}
                                    </span>
                                    <button
                                        onClick={() => addToCart(product.id, product.price)}
                                        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
                                        disabled={money < product.price}
                                    >
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                                {cart[product.id] > 0 && (
                                    <p className="text-sm text-gray-600 text-center mt-2">
                                        Total: {formatMoney(product.price * cart[product.id])}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shopping cart - 1/3 width */}
                <div className="w-full">
                    <div className="sticky top-0 bg-zinc-600 rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                        {Object.entries(cart).some(([_, quantity]) => quantity > 0) ? (
                            <div className="space-y-2">
                                {Object.entries(cart).map(([productId, quantity]) => {
                                    if (quantity <= 0) return null;
                                    const product = products.find(p => p.id === Number(productId))!;
                                    return (
                                        <div key={productId} className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="mr-2">{product.image}</span>
                                                <span>{product.name} x {quantity}</span>
                                            </div>
                                            <span className="font-bold">
                                                {formatMoney(product.price * quantity)}
                                            </span>
                                        </div>
                                    );
                                })}
                                <div className="pt-4 border-t border-gray-200 mt-4">
                                    <div className="flex justify-between items-center font-bold">
                                        <span>Total Spent:</span>
                                        <span className="text-green-600">
                                            {formatMoney(INITIAL_MONEY - money)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-center">Your cart is empty</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}