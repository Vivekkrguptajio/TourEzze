import tribalCulture from "../assets/image.png";
import { Leaf, Users, Palette, Mountain } from "lucide-react";

const CultureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-soft-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Jharkhand: A Land of Ancient History & Tribal Culture
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover the rich heritage and natural beauty of this incredible land
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          
          {/* RIGHT SIDE TEXT BLOCK */}
          <div className="order-2 md:order-1 space-y-6">
            
            <p className="text-foreground/90 leading-relaxed text-lg">
              Jharkhand, meaning "The Land of Forests," has ancient roots dating back to prehistoric
              times with cave art that tells stories of early human civilization. This beautiful
              state is home to <strong>32 tribal communities</strong>, each with unique traditions,
              languages, and cultural practices preserved for generations.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                <Mountain className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Eco-Tourism</h3>
                  <p className="text-sm text-muted-foreground">Stunning forests, hills & waterfalls</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                <Palette className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Famous Arts</h3>
                  <p className="text-sm text-muted-foreground">Sohrai, Kohvar, Paitkar, Dokra</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                <Users className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">32 Tribes</h3>
                  <p className="text-sm text-muted-foreground">Rich cultural diversity</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                <Leaf className="w-6 h-6 text-nature-green mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Festivals</h3>
                  <p className="text-sm text-muted-foreground">Vibrant tribal celebrations</p>
                </div>
              </div>
            </div>

            <p className="text-foreground/80 text-base italic">
              From prehistoric cave paintings to colorful Sohrai murals adorning village walls,
              Jharkhand is a living museum of art, culture, and natural wonders.
            </p>
          </div>

          {/* LEFT SIDE IMAGE */}
          <div className="order-1 md:order-2">
            <img
              src={tribalCulture}
              alt="Jharkhand Tribal Culture and Dance"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-video"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CultureSection;
