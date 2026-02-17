import React, { useState } from "react";
import { 
  Users, 
  CalendarDays, 
  Phone, 
  XCircle, 
  MessageCircle,
  X,
  Send,
  TrendingDown,
  AlertTriangle,
  Filter,
  Trash2
} from "lucide-react";

/**
 * Fully Responsive & Functional Cancelled Bookings Component
 * - Message functionality with modal
 * - Delete cancelled booking
 * - Filter by cancellation reason
 * - Mobile-responsive design
 * - Premium UI with animations
 */

export default function Cancelled() {
  const initialCancelled = [
    {
      id: "can1",
      tour: "Dassam Falls Day Trip",
      name: "Sneha Verma",
      date: "Nov 28, 2024",
      phone: "+91 9998877665",
      tourists: 3,
      reason: "Tourist cancelled due to weather",
      cancelledBy: "Tourist",
      cancelledDate: "Nov 25, 2024",
      refundAmount: "₹6,500"
    },
    {
      id: "can2",
      tour: "Ranchi Heritage Walk",
      name: "Ankit Singh",
      date: "Nov 30, 2024",
      phone: "+91 8887766554",
      tourists: 2,
      reason: "Payment not completed",
      cancelledBy: "System",
      cancelledDate: "Nov 29, 2024",
      refundAmount: "₹0"
    },
    {
      id: "can3",
      tour: "Hundru Falls Adventure",
      name: "Rajesh Kumar",
      date: "Nov 26, 2024",
      phone: "+91 7776665544",
      tourists: 5,
      reason: "Personal emergency",
      cancelledBy: "Tourist",
      cancelledDate: "Nov 24, 2024",
      refundAmount: "₹10,000"
    },
    {
      id: "can4",
      tour: "Betla Wildlife Safari",
      name: "Priya Joshi",
      date: "Nov 22, 2024",
      phone: "+91 6665554433",
      tourists: 4,
      reason: "Tour guide unavailable",
      cancelledBy: "Guide",
      cancelledDate: "Nov 20, 2024",
      refundAmount: "₹8,800"
    }
  ];

  const [cancelled, setCancelled] = useState(initialCancelled);
  const [messageModal, setMessageModal] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterBy, setFilterBy] = useState("all"); // all, tourist, system, guide

  // Toast helper
  const showToast = (text, duration = 3000) => {
    const id = Date.now();
    setToast({ id, text });
    setTimeout(() => {
      setToast((t) => (t && t.id === id ? null : t));
    }, duration);
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

  // Delete cancelled booking
  const deleteBooking = (id) => {
    const booking = cancelled.find(c => c.id === id);
    if (!window.confirm(`Delete cancelled booking for ${booking.name}? This cannot be undone.`)) return;
    
    setCancelled(cancelled.filter(c => c.id !== id));
    showToast(`🗑 Deleted cancelled booking for ${booking.name}`);
  };

  // Filter bookings
  const filteredCancelled = cancelled.filter((c) => {
    if (filterBy === "all") return true;
    return c.cancelledBy.toLowerCase() === filterBy.toLowerCase();
  });

  // Calculate stats
  const totalRefund = cancelled.reduce((sum, c) => {
    const amount = parseInt(c.refundAmount.replace(/[₹,]/g, "")) || 0;
    return sum + amount;
  }, 0);

  const touristCancelled = cancelled.filter(c => c.cancelledBy === "Tourist").length;
  const systemCancelled = cancelled.filter(c => c.cancelledBy === "System").length;
  // const guideCancelled = cancelled.filter(c => c.cancelledBy === "Guide").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent mb-2">
                Cancelled Bookings
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Tours cancelled by tourists or system
              </p>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="self-start sm:self-auto px-4 py-2 bg-white border-2 border-red-200 rounded-xl text-red-700 font-medium hover:bg-red-50 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Filter size={18} />
              Filter: {filterBy.charAt(0).toUpperCase() + filterBy.slice(1)}
            </button>
          </div>

          {/* Filter Options */}
          {filterOpen && (
            <div className="bg-white border-2 border-red-100 rounded-2xl shadow-xl p-4 mb-4 animate-slideDown">
              <p className="text-sm font-semibold text-gray-700 mb-3">Filter by cancelled by:</p>
              <div className="flex flex-wrap gap-2">
                {["all", "tourist", "system", "guide"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setFilterBy(option);
                      setFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      filterBy === option
                        ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-red-700 font-medium">Total Cancelled</p>
                <TrendingDown size={20} className="text-red-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-red-800">{cancelled.length}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-blue-700 font-medium">By Tourist</p>
                <Users size={20} className="text-blue-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-blue-800">{touristCancelled}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-purple-700 font-medium">By System</p>
                <AlertTriangle size={20} className="text-purple-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-purple-800">{systemCancelled}</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-200 rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-yellow-700 font-medium">Total Refund</p>
                <TrendingDown size={20} className="text-yellow-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-yellow-800">₹{totalRefund.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4 sm:space-y-5">
          {filteredCancelled.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <XCircle size={64} className="mx-auto opacity-30" />
              </div>
              <p className="text-gray-500 text-lg">No {filterBy !== "all" ? filterBy : ""} cancelled bookings found</p>
            </div>
          ) : (
            filteredCancelled.map((booking) => (
              <div 
                key={booking.id} 
                className="bg-white border-2 border-red-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-7 relative overflow-hidden"
              >
                {/* Decorative corner badge */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-200/30 to-orange-200/30 rounded-bl-full"></div>

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <h2 className="text-lg sm:text-xl font-bold text-red-700">
                        {booking.tour}
                      </h2>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        booking.cancelledBy === "Tourist" 
                          ? "bg-blue-100 text-blue-700"
                          : booking.cancelledBy === "System"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-orange-100 text-orange-700"
                      }`}>
                        {booking.cancelledBy}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      Cancelled by <span className="font-semibold text-red-700">{booking.name}</span>
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                      <span className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-red-600" /> 
                        <span className="font-medium">Tour: {booking.date}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <XCircle size={16} className="text-red-600" /> 
                        <span className="font-medium">Cancelled: {booking.cancelledDate}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Phone size={16} className="text-red-600" /> 
                        <span className="font-medium">{booking.phone}</span>
                      </span>
                    </div>

                    {/* Cancellation Reason */}
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-3 sm:p-4 flex items-start gap-3">
                      <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-red-600 font-semibold mb-1">Cancellation Reason:</p>
                        <p className="text-sm text-red-800 font-medium">{booking.reason}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tourist Count Badge */}
                  <div className="flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 border border-red-200 px-4 py-2 rounded-full self-start">
                    <Users size={18} className="text-red-700" />
                    <span className="font-bold text-red-800">{booking.tourists}</span>
                    <span className="text-sm text-red-700">tourists</span>
                  </div>
                </div>

                {/* Refund Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                      <TrendingDown size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Refund Amount</p>
                      <p className="text-xl sm:text-2xl font-bold text-orange-700">{booking.refundAmount}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 text-red-700 rounded-full self-start sm:self-auto">
                    <XCircle size={16} />
                    <span className="font-semibold text-sm">Cancelled</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={() => openMessage(booking)}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm sm:text-base">Message</span>
                  </button>

                  <button
                    onClick={() => deleteBooking(booking.id)}
                    className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white border-2 border-red-300 text-red-700 hover:bg-red-50 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Trash2 size={18} />
                    <span className="hidden sm:inline text-sm">Delete</span>
                  </button>
                </div>
              </div>
            ))
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
                  Message to {messageModal.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-600 mt-1">
                  {messageModal.tour} - Cancelled
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
              {/* Cancellation Info */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 mb-4">
                <p className="text-xs text-red-600 font-semibold mb-2">Cancellation Details:</p>
                <p className="text-sm text-red-800 mb-1"><strong>Reason:</strong> {messageModal.reason}</p>
                <p className="text-sm text-red-800 mb-1"><strong>Cancelled by:</strong> {messageModal.cancelledBy}</p>
                <p className="text-sm text-red-800"><strong>Refund:</strong> {messageModal.refundAmount}</p>
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
          <div className="bg-white border-2 border-red-200 rounded-2xl shadow-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 max-w-sm">
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