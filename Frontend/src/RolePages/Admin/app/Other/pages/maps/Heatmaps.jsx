import MainLayout from "../../../../global/Layout";
import HeatmapView from "../../components/maps/HeatmapView";
export default function Heatmaps() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Heatmaps & Maps</h1>
      <p className="text-gray-600 mb-6">
        Visualize tourism activity across Jharkhand
      </p>

      <HeatmapView />
    </MainLayout>
  );
}
