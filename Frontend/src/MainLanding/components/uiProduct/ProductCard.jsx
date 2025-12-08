
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, MapPin, TrendingUp, X } from 'lucide-react';

export default function PremiumProductCard({ product: incomingProduct }) {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fallback sample product (used only if no product prop provided)
  const sampleProduct = {
    id: "sample-1",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=600&fit=crop",
    category: "Tribal Handicrafts",
    name: "Handwoven Dokra Art Sculpture",
    seller: "Tribal Artisans Co.",
    location: "Ranchi, Jharkhand",
    rating: 4.8,
    reviews: 156,
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    inStock: true,
    trending: true,
    description:
      "Exquisite traditional Dokra brass artwork handcrafted using the 4,000-year-old lost-wax casting technique. Each piece is unique and represents the rich cultural heritage of Jharkhand's tribal artisans.",
    features: ["100% Handmade", "Eco-friendly", "Unique Design", "Gift-ready Packaging"],
  };

  const product = incomingProduct || sampleProduct;

  const handleAddToCart = () => {
    setAddedToCart(true);
    // simulated feedback
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
        {/* Image Section */}
        <div className="relative overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Like Button */}
          <button
            onClick={() => setLiked(!liked)}
            aria-label={liked ? "Unlike product" : "Like product"}
            className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-110 transition-transform z-10"
          >
            <Heart size={16} className={liked ? "text-red-500" : "text-gray-700"} />
          </button>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.trending && (
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow flex items-center gap-1">
                <TrendingUp size={12} />
                Trending
              </div>
            )}
            {product.discount > 0 && (
              <div className="bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow">
                {product.discount}% OFF
              </div>
            )}
          </div>

          {/* Quick View */}
          <button
            onClick={() => setShowModal(true)}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50 flex items-center gap-1 z-10"
          >
            <Eye size={14} />
            Quick View
          </button>
        </div>

        {/* Content */}
        <div className="p-3 space-y-1.5">
          {/* Category & Stock */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">
              {product.category}
            </span>
            {product.inStock ? (
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                In Stock
              </span>
            ) : (
              <span className="text-[10px] text-gray-400 font-semibold">Out of Stock</span>
            )}
          </div>

          {/* Name */}
          <h3 className="font-bold text-sm text-gray-900 line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer leading-tight">
            {product.name}
          </h3>

          {/* Seller & Location */}
          <div className="space-y-0.5">
            <p className="text-xs text-gray-600 font-medium truncate">{product.seller}</p>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <MapPin size={12} />
              <span className="truncate">{product.location}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 py-1 border-y border-gray-100">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-gray-900">{product.rating}</span>
            </div>
            <span className="text-[10px] text-gray-500">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-2">
            <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ₹{product.price}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-gray-400 line-through mb-0.5">₹{product.originalPrice}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 py-1.5 text-xs font-semibold bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-1 border border-gray-200"
            >
              <Eye size={14} />
              View
            </button>

            <button
              onClick={handleAddToCart}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 shadow ${
                addedToCart
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
              }`}
            >
              <ShoppingCart size={14} />
              {addedToCart ? '✓' : 'Cart'}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div onClick={() => setShowModal(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-5 rounded-t-3xl flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold">Product Details</h2>
              <button onClick={() => setShowModal(false)} className="hover:bg-white/20 p-2 rounded-full transition-all">
                <X size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-xl" />
                {product.trending && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow flex items-center gap-2">
                    <TrendingUp size={16} />
                    Trending
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
                      {product.category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-3">{product.name}</h3>
                  </div>
                  <button onClick={() => setLiked(!liked)} className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all">
                    <Heart size={22} className={liked ? "text-red-500" : "text-gray-700"} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-500">Sold by</p>
                    <p className="font-bold text-gray-900">{product.seller}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    {product.location}
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-amber-400 text-amber-400" />
                    <span className="text-xl font-bold text-gray-900">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">Based on {product.reviews} reviews</span>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 bg-green-50 px-4 py-3 rounded-xl">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-end gap-3 mb-4">
                    <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      ₹{product.price}
                    </p>
                    {product.originalPrice && (
                      <>
                        <p className="text-xl text-gray-400 line-through mb-1">₹{product.originalPrice}</p>
                        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-1">
                          Save {product.discount}%
                        </span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className={`w-full py-4 text-base font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg ${
                      addedToCart
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
                    }`}
                  >
                    <ShoppingCart size={20} />
                    {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
