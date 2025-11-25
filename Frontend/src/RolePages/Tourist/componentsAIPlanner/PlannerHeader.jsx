export default function PlannerHeader() {
  return (
    <div className="relative h-64 w-full">
      <img
        src="/images/banner.jpg"
        className="h-full w-full object-cover rounded-b-2xl"
      />
      <div className="absolute inset-0 bg-black/40 rounded-b-2xl flex items-center justify-center">
        <div className="text-center text-white space-y-2">
          <p className="bg-white/20 px-4 py-1 rounded-full inline-block">
            Powered by AI recommendations
          </p>
          <h1 className="text-4xl font-bold">AI Itinerary Planner</h1>
          <p className="text-lg">Create a personalized travel plan based on your preferences</p>
        </div>
      </div>
    </div>
  );
}
