import React, { useState } from "react";
import { 
  Users, 
  MessageCircle, 
  CalendarDays, 
  Phone, 
  CheckCircle, 
  X, 
  Send,
  DollarSign,
  Star,
  Download,
  Filter
} from "lucide-react";

/**
 * Fully Responsive & Functional Completed Bookings Component
 * - Chat functionality with modal
 * - Rating system
 * - Download receipt
 * - Filter by date/amount
 * - Mobile-responsive design
 * - Premium UI with animations
 */

export default function Completed() {
  const initialCompleted = [
    {
      id: "c1",
      tour: "Hundru Falls Tour",
      name: "Rahul Khanna",
      date: "Dec 04, 2024",
      phone: "+91 9876555555",
      tourists: 4,
      amount: "₹13,500",
      rating: 5,
      review: "Amazing experience! The guide was very knowledgeable."
    },
    {
      id: "c2",
      tour: "Betla Wildlife Safari",
      name: "Neha Agarwal",
      date: "Dec 05, 2024",
      phone: "+91 9876566666",
      tourists: 6,
      amount: "₹4,500",
      rating: 4,
      review: "Great safari! Saw many animals. Loved it!"
    },
    {
      id: "c3",
      tour: "Ranchi Heritage Walk",
      name: "Amit Singh",
      date: "Dec 02, 2024",
      phone: "+91 9876577777",
      tourists: 2,
      amount: "₹2,800",
      rating: 5,
      review: "Very informative tour. Learned a lot about local history."
    },
    {
      id: "c4",
      tour: "Dassam Falls Adventure",
      name: "Priya Sharma",
      date: "Nov 28, 2024",
      phone: "+91 9876588888",
      tourists: 3,
      amount: "₹8,200",
      rating: 4,
      review: "Beautiful location! Guide was friendly and helpful."
    }
  ];

  const [completed] = useState(initialCompleted);
  const [chatModal, setChatModal] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("date"); // date, amount, rating

  // Toast helper
  const showToast = (text, duration = 3000) => {
    const id = Date.now();
    setToast({ id, text });
    setTimeout(() => {
      setToast((t) => (t && t.id === id ? null : t));
    }, duration);
  };

  // Open chat modal
  const openChat = (booking) => {
    setChatModal(booking);
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
    
    showToast(`✉ Message sent to ${chatModal.name}`);
    setChatModal(null);
    setMessageText("");
  };

  // Download receipt
  const downloadReceipt = (booking) => {
    showToast(`📄 Generating receipt for ${booking.tour}...`);
    
    // Create receipt HTML
    const receiptHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Receipt - ${booking.tour}</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
          .header { text-align: center; border-bottom: 3px solid #16a34a; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { color: #16a34a; margin: 0; font-size: 32px; }
          .header p { color: #666; margin: 5px 0; }
          .receipt-info { background: #f0fdf4; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
          .receipt-info h2 { color: #16a34a; margin-top: 0; }
          .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #d1fae5; }
          .info-row:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #166534; }
          .value { color: #333; }
          .amount-section { background: #16a34a; color: white; padding: 25px; border-radius: 10px; text-align: center; margin: 30px 0; }
          .amount-section h3 { margin: 0 0 10px 0; font-size: 18px; }
          .amount-section .amount { font-size: 42px; font-weight: bold; margin: 0; }
          .footer { text-align: center; color: #666; font-size: 14px; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; }
          .status-badge { display: inline-block; background: #dcfce7; color: #166534; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin-top: 10px; }
          @media print {
            body { margin: 0; padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🏔️ Tour Booking Receipt</h1>
          <p>Thank you for choosing our services</p>
          <p style="color: #16a34a; font-weight: bold;">Receipt ID: RCP-${booking.id.toUpperCase()}-${Date.now()}</p>
        </div>
        
        <div class="receipt-info">
          <h2>${booking.tour}</h2>
          <div class="info-row">
            <span class="label">Customer Name:</span>
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
            <span class="label">Rating:</span>
            <span class="value">${'⭐'.repeat(booking.rating)} (${booking.rating}/5)</span>
          </div>
        </div>

        <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #666; font-style: italic;">"${booking.review}"</p>
        </div>

        <div class="amount-section">
          <h3>Total Amount Paid</h3>
          <p class="amount">${booking.amount}</p>
          <span class="status-badge">✓ PAID & COMPLETED</span>
        </div>

        <div class="footer">
          <p><strong>Generated on:</strong> ${new Date().toLocaleString()}</p>
          <p style="margin-top: 15px;">For any queries, please contact us</p>
          <p style="color: #16a34a; font-weight: bold;">Email: support@tourguide.com | Phone: +91 1234567890</p>
        </div>
      </body>
      </html>
    `;
    
    // Create blob and download
    const blob = new Blob([receiptHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Receipt_${booking.tour.replace(/\s+/g, '_')}_${booking.date.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setTimeout(() => {
      showToast(`✓ Receipt downloaded successfully!`);
    }, 800);
  };

  // Sort bookings
  const sortedCompleted = [...completed].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "amount") {
      const amountA = parseInt(a.amount.replace(/[₹,]/g, ""));
      const amountB = parseInt(b.amount.replace(/[₹,]/g, ""));
      return amountB - amountA;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  // Render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  // Calculate total revenue
  const totalRevenue = completed.reduce((sum, c) => {
    return sum + parseInt(c.amount.replace(/[₹,]/g, ""));
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
                Completed Bookings
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Your completed tour history & earnings
              </p>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="self-start sm:self-auto px-4 py-2 bg-white border-2 border-green-200 rounded-xl text-green-700 font-medium hover:bg-green-50 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Filter size={18} />
              Sort by: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
            </button>
          </div>

          {/* Sort Options */}
          {filterOpen && (
            <div className="bg-white border-2 border-green-100 rounded-2xl shadow-xl p-4 mb-4 animate-slideDown">
              <p className="text-sm font-semibold text-gray-700 mb-3">Sort bookings by:</p>
              <div className="flex flex-wrap gap-2">
                {["date", "amount", "rating"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      sortBy === option
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stats Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <p className="text-sm text-green-700 font-medium mb-1">Total Bookings</p>
              <p className="text-2xl sm:text-3xl font-bold text-green-800">{completed.length}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <p className="text-sm text-blue-700 font-medium mb-1">Total Tourists</p>
              <p className="text-2xl sm:text-3xl font-bold text-blue-800">
                {completed.reduce((sum, c) => sum + c.tourists, 0)}
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <p className="text-sm text-yellow-700 font-medium mb-1">Total Revenue</p>
              <p className="text-2xl sm:text-3xl font-bold text-yellow-800">₹{totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4 sm:space-y-5">
          {sortedCompleted.map((booking) => (
            <div 
              key={booking.id} 
              className="bg-white border-2 border-green-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-7 relative overflow-hidden"
            >
              {/* Decorative corner badge */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-bl-full"></div>

              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 relative z-10">
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-bold text-green-800 mb-1">
                    {booking.tour}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    Booked by <span className="font-semibold text-green-700">{booking.name}</span>
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-green-600" /> 
                      <span className="font-medium">{booking.date}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone size={16} className="text-green-600" /> 
                      <span className="font-medium">{booking.phone}</span>
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {renderStars(booking.rating)}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {booking.rating}.0
                    </span>
                  </div>

                  {/* Review */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-3 text-sm text-gray-700 italic">
                    "{booking.review}"
                  </div>
                </div>

                {/* Tourist Count Badge */}
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 px-4 py-2 rounded-full self-start">
                  <Users size={18} className="text-green-700" />
                  <span className="font-bold text-green-800">{booking.tourists}</span>
                  <span className="text-sm text-green-700">tourists</span>
                </div>
              </div>

              {/* Amount + Status */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                    <DollarSign size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Revenue Earned</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-700">{booking.amount}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 text-green-700 rounded-full self-start sm:self-auto">
                  <CheckCircle size={16} className="animate-pulse" />
                  <span className="font-semibold text-sm">Completed</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  onClick={() => openChat(booking)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm sm:text-base">Chat</span>
                </button>

                <button
                  onClick={() => downloadReceipt(booking)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white border-2 border-green-300 text-green-700 hover:bg-green-50 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Download size={18} />
                  <span className="text-sm sm:text-base">Receipt</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {completed.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
            <div className="text-gray-400 mb-4">
              <CheckCircle size={64} className="mx-auto opacity-30" />
            </div>
            <p className="text-gray-500 text-lg">No completed bookings yet</p>
            <p className="text-gray-400 text-sm mt-2">Your completed tours will appear here</p>
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {chatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full transform animate-slideUp">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-t-3xl">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-800">
                  Chat with {chatModal.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-600 mt-1">
                  {chatModal.tour}
                </p>
              </div>
              <button 
                onClick={() => setChatModal(null)} 
                className="w-9 h-9 rounded-full bg-white hover:bg-blue-100 flex items-center justify-center transition-all duration-300 hover:rotate-90 shadow-md"
              >
                <X size={18} className="text-blue-600" />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              {/* Previous Review Display */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 mb-2">Their review:</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">{renderStars(chatModal.rating)}</div>
                  <span className="text-sm font-semibold text-gray-700">{chatModal.rating}.0</span>
                </div>
                <p className="text-sm text-gray-700 italic">"{chatModal.review}"</p>
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
                    onClick={() => setChatModal(null)} 
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
          <div className="bg-white border-2 border-green-200 rounded-2xl shadow-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 max-w-sm">
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

        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.4s ease-out; }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
    </div>
  );
}