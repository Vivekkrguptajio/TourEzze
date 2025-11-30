import products from "../data/products.js";
import MarketHero from "../components/marketplace/MarketHero";
import MarketCategoryTabs from "../components/marketplace/MarketCategoryTabs";
import FiltersSidebar from "../components/marketplace/FiltersSidebar";
import ProductGrid from "../components/marketplace/ProductGrid";
import useProductFilters from "../hooks/useProductFilters";

export default function MarketplacePage() {

  const {
    filtered,
    category,
    setCategory,
    search,
    setSearch,
    price,
    setPrice,
    location,
    setLocation,
    availability,
    setAvailability,
    craftType,
    setCraftType,
  } = useProductFilters(products);

  return (
    <div className="pb-10 bg-[#fbf7f0]">

      <MarketHero search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-4 mt-6">

        <MarketCategoryTabs category={category} setCategory={setCategory} />

        <h3 className="mt-6 text-xl font-semibold">Featured Products</h3>

        <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] gap-6 mt-4">
          
          <FiltersSidebar
            price={price}
            setPrice={setPrice}
            location={location}
            setLocation={setLocation}
            availability={availability}
            setAvailability={setAvailability}
            craftType={craftType}
            setCraftType={setCraftType}
          />

          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  );
}
