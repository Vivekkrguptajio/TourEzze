import React, { useState } from "react";
import { 
  Users, 
  MessageCircle, 
  CalendarDays, 
  Phone, 
  CheckCircle,
  X,
  Send,
  Clock,
  MapPin,
  Navigation,
  AlertCircle,
  Download
} from "lucide-react";

/**
 * Fully Responsive & Functional Upcoming Bookings Component
 * - Chat functionality with modal
 * - Share location/directions
 * - Download booking details
 * - Days until tour countdown
 * - Mobile-responsive design
 * - Premium UI with animations
 */

export default function Upcoming() {
  const initialBookings = [
    {
      id: "up1",
      tour: "Jonha Waterfall Trek",
      name: "Rohit Sinha",
      date: "Dec 18, 2024",
      phone: "+91 9876543321",
      tourists: 3,
      status: "confirmed",
      meetingPoint: "Ranchi Main Bus Stand",
      time: "6:00 AM",
      duration: "8 hours",
      amount: "₹7,500",
      prepaid: true
    },
    {
      id: "up2",
      tour: "Netarhat Sunset Tour",
      name: "Kavita Gupta",
      date: "Dec 22, 2024",
      phone: "+91 9123459821",
      tourists: 5,
      status: "confirmed",
      meetingPoint: "Netarhat Point",
      time: "3:00 PM",
      duration: "6 hours",
      amount: "₹12,500",
      prepaid: true
    },
    {
      id: "up3",
      tour: "Hundru Falls Adventure",
      name: "Amit Kumar",
      date: "Dec 15, 2024",
      phone: "+91 9876512345",
      tourists: 4,
      status: "confirmed",
      meetingPoint: "Hotel Radisson, Ranchi",
      time: "7:00 AM",
      duration: "10 hours",
      amount: "₹9,800",
      prepaid: false
    },
    {
      id: "up4",
      tour: "Betla Wildlife Safari",
      name: "Priya Sharma",
      date: "Dec 25, 2024",
      phone: "+91 9123498765",
      tourists: 6,
      status: "confirmed",
      meetingPoint: "Betla National Park Gate",
      time: "5:30 AM",
      duration: "12 hours",
      amount: "₹15,000",
      prepaid: true
    }
  ];

  const [bookings, setBookings] = useState(initialBookings);
  const [messageModal, setMessageModal] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  // Toast helper
  const showToast = (text, duration = 3000) => {
    const id = Date.now();
    setToast({ id, text });
    setTimeout(() => {
      setToast((t) => (t && t.id === id ? null : t));
    }, duration);
  };

  // Calculate days until tour
  const getDaysUntil = (dateStr) => {
    const tourDate = new Date(dateStr);
    const today = new Date();
    const diffTime = tourDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Open message modal
  const openMessage = (booking) => {
    setMessageModal(booking);
    setMessageText("");
  };

  // Send message
  const sendMessage = async () => {
    if (!messageText.trim()) {
      alert("Please enter a message before sending.");
      return;
    }
    
    setSending(true);
    await new Promise((res) => setTimeout(res, 1000));
    setSending(false);
    
    showToast(`✉ Message sent to ${messageModal.name}`);
    setMessageModal(null);
    setMessageText("");
  };

  // Share location
  const shareLocation = (booking) => {
    showToast(`📍 Sharing location of ${booking.meetingPoint} to ${booking.name}`);
    setTimeout(() => {
      showToast(`✓ Location shared successfully!`);
    }, 1500);
  };

  // Download booking details
  const downloadBookingDetails = (booking) => {
    showToast(`📄 Generating booking details for ${booking.tour}...`);
    
    const bookingHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Booking Details - ${booking.tour}</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
          .header { text-align: center; border-bottom: 3px solid #16a34a; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { color: #16a34a; margin: 0; font-size: 32px; }
          .header p { color: #666; margin: 5px 0; }
          .booking-info { background: #f0fdf4; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
          .booking-info h2 { color: #16a34a; margin-top: 0; }
          .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #d1fae5; }
          .info-row:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #166534; }
          .value { color: #333; }
          .highlight-box { background: #16a34a; color: white; padding: 20px; border-radius: 10px; margin: 20px 0; }
          .highlight-box h3 { margin: 0 0 10px 0; font-size: 18px; }
          .highlight-box .big-text { font-size: 28px; font-weight: bold; }
          .important-note { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; }
          .footer { text-align: center; color: #666; font-size: 14px; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; }
          .status-badge { display: inline-block; background: #dcfce7; color: #166534; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🏔️ Upcoming Tour Booking</h1>
          <p>Booking Confirmation Details</p>
          <p style="color: #16a34a; font-weight: bold;">Booking ID: UP-${booking.id.toUpperCase()}-${Date.now()}</p>
        </div>
        
        <div class="booking-info">
          <h2>${booking.tour}</h2>
          <div class="info-row">
            <span class="label">Tourist Name:</span>
            <span class="value">${booking.name}</span>
          </div>
          <div class="info-row">
            <span class="label">Contact Number:</span>
            <span class="value">${booking.phone}</span>
          </div>
          <div class="info-row">
            <span class="label">Tour Date:</span>
            <span class="value">${booking.date}</span>
          </div>
          <div class="info-row">
            <span class="label">Number of Tourists:</span>
            <span class="value">${booking.tourists} persons</span>
          </div>
          <div class="info-row">
            <span class="label">Total Amount:</span>
            <span class="value">${booking.amount} ${booking.prepaid ? '(Paid)' : '(Pay on arrival)'}</span>
          </div>
        </div>

        <div class="highlight-box">
          <h3>📍 Meeting Point Details</h3>
          <p class="big-text">${booking.meetingPoint}</p>
          <p style="margin: 10px 0 0 0; font-size: 18px;">⏰ Time: ${booking.time} | ⌛ Duration: ${booking.duration}</p>
        </div>

        <div class="important-note">
          <p style="margin: 0; font-weight: bold; color: #92400e;">⚠️ Important Instructions:</p>
          <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #92400e;">
            <li>Please arrive 15 minutes before the scheduled time</li>
            <li>Carry a valid ID proof and this booking confirmation</li>
            <li>Wear comfortable clothes and shoes suitable for trekking</li>
            <li>Bring water bottle, sunscreen, and snacks</li>
            <li>Follow all safety instructions provided by the guide</li>
          </ul>
        </div>

        <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #16a34a; font-weight: bold;">Status: <span class="status-badge">✓ CONFIRMED</span></p>
          <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">Days until tour: ${getDaysUntil(booking.date)} days</p>
        </div>

        <div class="footer">
          <p><strong>Generated on:</strong> ${new Date().toLocaleString()}</p>
          <p style="margin-top: 15px;">For any queries or changes, please contact us</p>
          <p style="color: #16a34a; font-weight: bold;">Email: support@tourguide.com | Phone: +91 1234567890</p>
        </div>
      </body>
      </html>
    `;
    
    const blob = new Blob([bookingHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Booking_${booking.tour.replace(/\s+/g, '_')}_${booking.date.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setTimeout(() => {
      showToast(`✓ Booking details downloaded successfully!`);
    }, 800);
  };

  // Sort by date (earliest first)
  const sortedBookings = [...bookings].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-2">
            Upcoming Bookings
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            View and manage your upcoming tours
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-blue-700 font-medium">Total Upcoming</p>
                <CalendarDays size={20} className="text-blue-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-800">{bookings.length}</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-green-700 font-medium">Total Tourists</p>
                <Users size={20} className="text-green-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-green-800">
                {bookings.reduce((sum, b) => sum + b.tourists, 0)}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-purple-700 font-medium">Expected Revenue</p>
                <Clock size={20} className="text-purple-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-purple-800">
                ₹{bookings.reduce((sum, b) => sum + parseInt(b.amount.replace(/[₹,]/g, "")), 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4 sm:space-y-5">
          {sortedBookings.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <CalendarDays size={64} className="mx-auto opacity-30" />
              </div>
              <p className="text-gray-500 text-lg">No upcoming bookings</p>
              <p className="text-gray-400 text-sm mt-2">Your upcoming tours will appear here</p>
            </div>
          ) : (
            sortedBookings.map((booking) => {
              const daysUntil = getDaysUntil(booking.date);
              return (
                <div 
                  key={booking.id} 
                  className="bg-white border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-7 relative overflow-hidden"
                >
                  {/* Decorative corner badge */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-bl-full"></div>

                  {/* Days Until Badge */}
                  {daysUntil <= 7 && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                        daysUntil <= 2 
                          ? "bg-red-500 text-white animate-pulse"
                          : daysUntil <= 5
                          ? "bg-orange-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}>
                        {daysUntil === 0 ? "TODAY!" : daysUntil === 1 ? "TOMORROW" : `${daysUntil} DAYS`}
                      </div>
                    </div>
                  )}

                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 relative z-10">
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-bold text-blue-800 mb-1">
                        {booking.tour}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 mb-3">
                        Booked by <span className="font-semibold text-blue-700">{booking.name}</span>
                      </p>

                      {/* Info Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                        <span className="flex items-center gap-2">
                          <CalendarDays size={16} className="text-blue-600" /> 
                          <span className="font-medium">{booking.date}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={16} className="text-blue-600" /> 
                          <span className="font-medium">{booking.time} • {booking.duration}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <Phone size={16} className="text-blue-600" /> 
                          <span className="font-medium">{booking.phone}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={16} className="text-blue-600" /> 
                          <span className="font-medium">{booking.meetingPoint}</span>
                        </span>
                      </div>

                      {/* Payment Status */}
                      <div className="flex items-center gap-2 mt-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.prepaid 
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {booking.prepaid ? "✓ Paid" : "⏳ Pay on arrival"}
                        </span>
                        <span className="text-sm font-bold text-gray-700">{booking.amount}</span>
                      </div>
                    </div>

                    {/* Tourist Count Badge */}
                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 px-4 py-2 rounded-full self-start">
                      <Users size={18} className="text-blue-700" />
                      <span className="font-bold text-blue-800">{booking.tourists}</span>
                      <span className="text-sm text-blue-700">tourists</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 text-green-700 rounded-full">
                      <CheckCircle size={16} className="animate-pulse" />
                      <span className="font-semibold text-sm">Confirmed</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <button
                      onClick={() => openMessage(booking)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle size={18} />
                      <span className="text-sm sm:text-base">Chat</span>
                    </button>

                    <button
                      onClick={() => shareLocation(booking)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white border-2 border-green-300 text-green-700 hover:bg-green-50 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Navigation size={18} />
                      <span className="text-sm sm:text-base">Location</span>
                    </button>

                    <button
                      onClick={() => downloadBookingDetails(booking)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Download size={18} />
                      <span className="text-sm sm:text-base">Details</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Message Modal */}
      {messageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full transform animate-slideUp">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-t-3xl">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-800">
                  Chat with {messageModal.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-600 mt-1">
                  {messageModal.tour} - {messageModal.date}
                </p>
              </div>
              <button 
                onClick={() => setMessageModal(null)} 
                className="w-9 h-9 rounded-full bg-white hover:bg-blue-100 flex items-center justify-center transition-all duration-300 hover:rotate-90 shadow-md"
              >
                <X size={18} className="text-blue-600" />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              {/* Booking Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mb-4">
                <p className="text-xs text-blue-600 font-semibold mb-2">Booking Details:</p>
                <p className="text-sm text-blue-800 mb-1"><strong>Meeting Point:</strong> {messageModal.meetingPoint}</p>
                <p className="text-sm text-blue-800 mb-1"><strong>Time:</strong> {messageModal.time} • {messageModal.duration}</p>
                <p className="text-sm text-blue-800"><strong>Tourists:</strong> {messageModal.tourists} persons</p>
              </div>

              <textarea
                rows={6}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-xl p-3 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Write your message to the tourist..."
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5">
                <div className="text-xs text-gray-500 order-2 sm:order-1">
                  Message will be sent via SMS/Email
                </div>
                <div className="flex gap-3 order-1 sm:order-2">
                  <button 
                    onClick={() => setMessageModal(null)} 
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 font-medium transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={sendMessage}
                    disabled={sending}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span>Send</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 animate-slideInRight">
          <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 max-w-sm">
            <div className="text-sm sm:text-base text-gray-800 font-medium flex-1">{toast.text}</div>
            <button 
              onClick={() => setToast(null)} 
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:rotate-90"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.4s ease-out; }
      `}</style>
    </div>
  );
}