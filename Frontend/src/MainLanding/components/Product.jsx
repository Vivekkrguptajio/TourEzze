// Product.jsx
import ProductList from "./uiProduct/ProductList";
import { Sparkles } from "lucide-react";

export default function Product() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-4 border border-orange-200/50">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-gray-700">Authentic Tribal Crafts</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 via-orange-600 to-green-600 bg-clip-text text-transparent">
            Featured Tribal Products
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore handcrafted items, tribal art, textiles and unique cultural craftwork created by artisans across Jharkhand
          </p>
        </div>

        {/* Product List */}
        <ProductList />

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span>View All Products</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}