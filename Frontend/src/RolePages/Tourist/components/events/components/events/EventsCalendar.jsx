import { ChevronLeft, ChevronRight, Calendar, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function EventsCalendar() {
  const [currentMonth] = useState("December 2025");
  const [isOpen, setIsOpen] = useState(false);
  
  const eventDates = [5, 14, 20, 25];
  const today = 3;
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 text-white text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
      >
        <Calendar size={20} />
        {isOpen ? 'Hide Calendar' : 'Show Calendar'}
      </button>

      {/* Calendar Container with Animation */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="relative bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 border-2 border-gray-100 shadow-xl rounded-2xl p-4 sm:p-6 h-fit overflow-hidden w-full">
      
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-pink-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/40 to-blue-200/40 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-1.5 sm:p-2 rounded-xl shadow-lg">
                  <Calendar size={18} className="text-white sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">Events Calendar</h3>
                  <p className="text-xs text-gray-500 hidden sm:block">Plan your visits</p>
                </div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 active:bg-gray-200 active:scale-95 rounded-lg transition-all duration-200"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4 sm:mb-6 bg-white rounded-xl p-2 sm:p-3 shadow-md">
              <button className="p-1.5 sm:p-2 hover:bg-gray-100 active:bg-gray-200 active:scale-95 rounded-lg transition-all duration-200">
                <ChevronLeft size={16} className="text-gray-600 sm:w-[18px] sm:h-[18px]" />
              </button>
              
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-gray-900">{currentMonth}</p>
              </div>
              
              <button className="p-1.5 sm:p-2 hover:bg-gray-100 active:bg-gray-200 active:scale-95 rounded-lg transition-all duration-200">
                <ChevronRight size={16} className="text-gray-600 sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2 sm:mb-3">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-[10px] sm:text-xs font-bold text-gray-500 pb-1 sm:pb-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {[...Array(30).keys()].map((d) => {
                const dayNum = d + 1;
                const isEvent = eventDates.includes(dayNum);
                const isToday = dayNum === today;
                
                return (
                  <button
                    key={d}
                    className={`relative p-2 sm:p-3 rounded-lg sm:rounded-xl text-center text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${isToday ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-105 sm:scale-110 ring-2 ring-blue-300 active:scale-100 active:shadow-md" : isEvent ? "bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-md hover:shadow-xl hover:scale-105 sm:hover:scale-110 active:scale-100 active:shadow-sm" : "bg-white hover:bg-gray-50 text-gray-700 hover:shadow-md active:bg-gray-100 active:scale-95"}`}
                  >
                    {dayNum}
                    {isEvent && (
                      <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 pointer-events-none">
                        <div className="bg-yellow-400 rounded-full p-0.5 shadow-lg animate-pulse">
                          <Sparkles size={8} fill="white" className="text-white sm:w-[10px] sm:h-[10px]" />
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Event Summary */}
            <div className="mt-4 sm:mt-6 space-y-3">
              <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-xl p-3 sm:p-4 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium opacity-90">Upcoming Events</p>
                    <p className="text-2xl sm:text-3xl font-bold">{eventDates.length}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-xl">
                    <Calendar size={24} className="text-white sm:w-7 sm:h-7" />
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md space-y-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">Today</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 shadow-sm shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">Event Day</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white border-2 border-gray-200 shadow-sm shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">Regular Day</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-3 sm:mt-4 w-full py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 active:shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
              View All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}