import tribalCulture from "../assets/image.png";
import { Leaf, Users, Palette, Mountain, Sparkles } from "lucide-react";

const CultureSection = () => {
  return (
    <section className="relative py-10 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, orange 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      
      <div className="pt-0 container mx-auto px-4 relative z-10">
      



       <div className="p text-center mb-10 space-y-3">

  {/* Heading Jharkhand */}
  <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold 
                 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 
                 bg-clip-text text-transparent leading-tight drop-shadow-lg">
    Jharkhand
  </h2>

  {/* Subheading */}
  <h3 className="text-lg md:text-2xl font-semibold text-gray-700">
    A Land of Ancient History & Tribal Culture
  </h3>

  {/* Description */}
  <p className="text-sm md:text-lg text-gray-600 max-w-xl mx-auto font-medium leading-relaxed">
    ✨ Discover the rich heritage and natural beauty of this incredible land where traditions come alive ✨
  </p>

</div>



        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          
          {/* RIGHT SIDE TEXT BLOCK */}
          <div className="order-2 md:order-1 space-y-8 backdrop-blur-sm bg-gradient-to-br from-white/80 via-white/70 to-white/60 p-10 md:p-12 rounded-3xl shadow-2xl border-2 border-white/40 hover:shadow-orange-200/50 transition-all duration-500">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">About Jharkhand</span>
            </div>
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group relative overflow-hidden flex items-start gap-4 p-7 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-50 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-emerald-300/60 cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/20 rounded-full blur-2xl"></div>
                <div className="p-4 bg-white rounded-2xl shadow-lg ring-2 ring-emerald-200">
                  <Mountain className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-black text-xl mb-2 text-gray-800 group-hover:text-emerald-700 transition-colors">Eco-Tourism</h3>
                  <p className="text-sm text-gray-700 leading-snug font-medium">Stunning forests, hills & waterfalls</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden flex items-start gap-4 p-7 bg-gradient-to-br from-purple-100 via-pink-50 to-fuchsia-50 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-purple-300/60 cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl"></div>
                <div className="p-4 bg-white rounded-2xl shadow-lg ring-2 ring-purple-200">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-black text-xl mb-2 text-gray-800 group-hover:text-purple-700 transition-colors">Famous Arts</h3>
                  <p className="text-sm text-gray-700 leading-snug font-medium">Sohrai, Kohvar, Paitkar, Dokra</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden flex items-start gap-4 p-7 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-orange-300/60 cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-400/20 rounded-full blur-2xl"></div>
                <div className="p-4 bg-white rounded-2xl shadow-lg ring-2 ring-orange-200">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-black text-xl mb-2 text-gray-800 group-hover:text-orange-700 transition-colors">32 Tribes</h3>
                  <p className="text-sm text-gray-700 leading-snug font-medium">Rich cultural diversity</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden flex items-start gap-4 p-7 bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-50 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-yellow-300/60 cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl"></div>
                <div className="p-4 bg-white rounded-2xl shadow-lg ring-2 ring-yellow-200">
                  <Leaf className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-black text-xl mb-2 text-gray-800 group-hover:text-yellow-700 transition-colors">Festivals</h3>
                  <p className="text-sm text-gray-700 leading-snug font-medium">Vibrant tribal celebrations</p>
                </div>
              </div>
            </div>
            
          
          </div>
          
          {/* LEFT SIDE IMAGE */}
          {/* <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={tribalCulture}
              alt="Jharkhand Tribal Culture and Dance"
              className="relative w-full rounded-3xl shadow-2xl object-cover aspect-video ring-4 ring-white/50 transform group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-md p-5 rounded-2xl border border-white/20">
              <p className="text-white font-bold text-lg md:text-xl">Experience the Magic of Jharkhand</p>
              <p className="text-white/90 text-sm mt-1">Where culture meets nature</p>
            </div>
          </div> */}
          <div className="order-1 md:order-2 relative group">

  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 
                  rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500">
  </div>

  <img
    src={tribalCulture}
    alt="Jharkhand Tribal Culture and Dance"
    className="
      relative 
      w-full 
      h-[350px] md:h-[450px] lg:h-[430px]   
      rounded-3xl 
      shadow-2xl 
      object-cover 
      ring-4 ring-white/50 
      transform group-hover:scale-[1.03]    
      transition-transform duration-500
    "
  />

  <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-black/70 to-black/50 
                  backdrop-blur-md p-5 rounded-2xl border border-white/20">
    <p className="text-white font-bold text-lg md:text-xl">
      Experience the Magic of Jharkhand
    </p>
    <p className="text-white/90 text-sm mt-1">
      Where culture meets nature
    </p>
  </div>

</div>

        </div>
      </div>
    </section>
  );
};

export default CultureSection;