import ProductList from "./uiProduct/ProductList";

export default function Product() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-extrabold text-center mb-6">
        Featured Tribal Products
      </h2>

      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Explore handcrafted items, tribal art, textiles and unique cultural craftwork 
        created by artisans across Jharkhand.
      </p>

      <div className="max-w-7xl mx-auto px-6">
        <ProductList />
      </div>
    </section>
  );
}
