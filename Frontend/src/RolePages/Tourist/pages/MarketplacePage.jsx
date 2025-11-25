import { useState, useMemo } from "react";
import MarketplaceHeader from "../componentsMarketplace/MarketplaceHeader";
import MarketplaceCategoryBar from "../componentsMarketplace/MarketplaceCategoryBar";
import FeaturedProducts from "../componentsMarketplace/FeaturedProducts";
import ArtisansSection from "../componentsMarketplace/ArtisansSection";
import RelatedProducts from "../componentsMarketplace/RelatedProducts";
import MissionSection from "../componentsMarketplace/MissionSection";

import {
  marketplaceProducts,
  artisans,
  relatedProducts,
} from "../../../MainLanding/components/uiProduct/productData";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return marketplaceProducts.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category === "All" || p.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="bg-[#FAF7F1] min-h-screen pb-20">
      <MarketplaceHeader onSearch={setSearch} />
      <MarketplaceCategoryBar selected={category} onSelect={setCategory} />

      <FeaturedProducts products={filteredProducts} />
      <MissionSection />
      <ArtisansSection artisans={artisans} />
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
