import React, { useState } from "react";
import {
  Users,
  MessageCircle,
  XCircle,
  CheckCircle,
  CalendarDays,
  MapPin,
  X,
  Send,
  Trash2,
  Phone
} from "lucide-react";


export default function Requests() {
  const initialRequests = [
    {
      id: "r1",
      tour: "Hundru Falls Adventure",
      name: "Priya Sharma",
      date: "June 20, 2024",
      phone: "+91 9876543210",
      tourists: 4,
      message: "We're a family of 4 coming from Delhi. Can we do the tour early morning?",
      status: "new",
      declineReason: null,
    },
    {
      id: "r2",
      tour: "Betla Wildlife Safari",
      name: "Amit Patel",
      date: "June 22, 2024",
      phone: "+91 9123456789",
      tourists: 2,
      message: "First time visiting Jharkhand. Very excited!",
      status: "new",
      declineReason: null,
    },
    {
      id: "r3",
      tour: "Ranchi Heritage Walk",
      name: "Sneha Gupta",
      date: "June 25, 2024",
      phone: "+91 9988776655",
      tourists: 3,
      message: "Interested in local culture and history. Any special recommendations?",
      status: "new",
      declineReason: null,
    },
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [toast, setToast] = useState(null);
  const [messageModal, setMessageModal] = useState(null);
  const [declineModal, setDeclineModal] = useState(null);
  const [sending, setSending] = useState(false);
  const [activeTab, setActiveTab] = useState("new");

  // Toast helper
  const showToast = (text, undoFn = null, duration = 5000) => {
    const id = Date.now();
    setToast({ id, text, undoFn });
    setTimeout(() => {
      setToast((t) => (t && t.id === id ? null : t));
    }, duration);
  };

  // Accept action
  const handleAccept = (id) => {
    const prev = requests.find((r) => r.id === id);
    if (!prev || prev.status === "accepted") return;
    
    setRequests((rs) => 
      rs.map((r) => (r.id === id ? { ...r, status: "accepted", declineReason: null } : r))
    );

    showToast(`✓ ${prev.name}'s request accepted`, () => {
      setRequests((rs) => 
        rs.map((r) => (r.id === id ? { ...r, status: "new", declineReason: null } : r))
      );
    });
  };

  // Decline flow
  const openDecline = (id) => {
    const req = requests.find((r) => r.id === id);
    if (req.status === "declined") return;
    setDeclineModal({ id, reason: "" });
  };

  const confirmDecline = () => {
    if (!declineModal) return;
    const { id, reason } = declineModal;
    const prev = requests.find((r) => r.id === id);
    
    setRequests((rs) => 
      rs.map((r) => 
        r.id === id 
          ? { ...r, status: "declined", declineReason: reason || "No reason provided" } 
          : r
      )
    );
    setDeclineModal(null);

    showToast(`✗ ${prev.name}'s request declined`, () => {
      setRequests((rs) => 
        rs.map((r) => (r.id === id ? { ...r, status: "new", declineReason: null } : r))
      );
    });
  };

  // Message modal
  const openMessage = (id) => {
    setMessageModal({ id, text: "" });
  };

  const sendMessage = async () => {
    if (!messageModal) return;
    if (!messageModal.text.trim()) {
      alert("Please enter a message before sending.");
      return;
    }
    
    setSending(true);
    await new Promise((res) => setTimeout(res, 1200));
    setSending(false);
    
    const req = requests.find((r) => r.id === messageModal.id);
    setMessageModal(null);
    showToast(`✉ Message sent to ${req.name}`);
  };

  // Delete request
  const handleDelete = (id) => {
    const req = requests.find((r) => r.id === id);
    if (!req) return;
    
    if (!window.confirm(`Delete booking request from ${req.name}? This cannot be undone.`)) return;
    
    setRequests((rs) => rs.filter((r) => r.id !== id));
    showToast(`🗑 Deleted request from ${req.name}`);
  };

  // Filter requests
  const filteredRequests = requests.filter((r) => {
    if (activeTab === "new") return r.status === "new";
    if (activeTab === "accepted") return r.status === "accepted";
    if (activeTab === "declined") return r.status === "declined";
    return true;
  });

  const tabs = [
    { id: "new", label: "New", count: requests.filter(r => r.status === "new").length },
    { id: "accepted", label: "Accepted", count: requests.filter(r => r.status === "accepted").length },
    { id: "declined", label: "Declined", count: requests.filter(r => r.status === "declined").length },
    { id: "all", label: "All", count: requests.length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
            Bookings Management
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage all your tour bookings and requests
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105"
                  : "bg-white text-green-700 border-2 border-green-200 hover:border-green-400 hover:shadow-md"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Requests List */}
        <div className="space-y-4 sm:space-y-5">
          {filteredRequests.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Users size={64} className="mx-auto opacity-30" />
              </div>
              <p className="text-gray-500 text-lg">No {activeTab !== "all" ? activeTab : ""} requests found</p>
            </div>
          ) : (
            filteredRequests.map((req) => (
              <div 
                key={req.id} 
                className="bg-white border-2 border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-7"
              >
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-green-800 mb-1">
                      {req.tour}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      Booking request from <span className="font-semibold text-green-700">{req.name}</span>
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-green-600" /> 
                        <span className="font-medium">{req.date}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Phone size={16} className="text-green-600" /> 
                        <span className="font-medium">{req.phone}</span>
                      </span>
                    </div>

                    {/* Decline Reason */}
                    {req.status === "declined" && req.declineReason && (
                      <div className="mt-3 text-xs sm:text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-lg inline-block">
                        <span className="font-semibold">Decline reason:</span> {req.declineReason}
                      </div>
                    )}
                  </div>

                  {/* Tourist Count Badge */}
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 px-4 py-2 rounded-full self-start">
                    <Users size={18} className="text-green-700" />
                    <span className="font-bold text-green-800">{req.tourists}</span>
                    <span className="text-sm text-green-700">tourists</span>
                  </div>
                </div>

                {/* Message Box */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 p-3 sm:p-4 rounded-xl text-sm sm:text-base text-gray-700 mb-4">
                  <span className="text-gray-500 text-xs">Guest message:</span>
                  <p className="mt-1 italic">"{req.message}"</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-end">
                  {/* Accept Button */}
                  <button
                    onClick={() => handleAccept(req.id)}
                    disabled={req.status === "accepted"}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                      req.status === "accepted"
                        ? "bg-green-100 text-green-800 border-2 border-green-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <CheckCircle size={16} />
                    <span className="hidden sm:inline">{req.status === "accepted" ? "Accepted" : "Accept"}</span>
                    <span className="sm:hidden">✓</span>
                  </button>

                  {/* Decline Button */}
                  <button
                    onClick={() => openDecline(req.id)}
                    disabled={req.status === "declined"}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                      req.status === "declined"
                        ? "bg-red-100 text-red-700 border-2 border-red-300 cursor-not-allowed"
                        : "bg-white border-2 border-red-400 text-red-600 hover:bg-red-50 hover:border-red-500 shadow-md hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <XCircle size={16} />
                    <span className="hidden sm:inline">{req.status === "declined" ? "Declined" : "Decline"}</span>
                    <span className="sm:hidden">✗</span>
                  </button>

                  {/* Message Button */}
                  <button
                    onClick={() => openMessage(req.id)}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-2 border-blue-300 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-400 text-xs sm:text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <MessageCircle size={16} />
                    <span className="hidden sm:inline">Message</span>
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(req.id)}
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                    title="Delete request"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Decline Modal */}
      {declineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform animate-slideUp">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-red-50 to-orange-50 rounded-t-3xl">
              <h3 className="text-lg sm:text-xl font-bold text-red-800">Decline Request</h3>
              <button 
                onClick={() => setDeclineModal(null)} 
                className="w-9 h-9 rounded-full bg-white hover:bg-red-100 flex items-center justify-center transition-all duration-300 hover:rotate-90 shadow-md"
              >
                <X size={18} className="text-red-600" />
              </button>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm text-gray-600 mb-4">
                Add an optional reason for declining this booking request.
              </p>
              <textarea
                rows={4}
                value={declineModal.reason}
                onChange={(e) => setDeclineModal({ ...declineModal, reason: e.target.value })}
                className="w-full border-2 border-gray-300 rounded-xl p-3 text-sm focus:border-red-400 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                placeholder="e.g. Dates not available, group size exceeds capacity..."
              />
              <div className="flex gap-3 mt-5">
                <button 
                  onClick={() => setDeclineModal(null)} 
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 font-medium transition-all duration-300"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmDecline} 
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Confirm Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {messageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full transform animate-slideUp">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-t-3xl">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800">
                Message to {requests.find(r => r.id === messageModal.id)?.name}
              </h3>
              <button 
                onClick={() => setMessageModal(null)} 
                className="w-9 h-9 rounded-full bg-white hover:bg-blue-100 flex items-center justify-center transition-all duration-300 hover:rotate-90 shadow-md"
              >
                <X size={18} className="text-blue-600" />
              </button>
            </div>
            <div className="p-5 sm:p-6">
              <textarea
                rows={6}
                value={messageModal.text}
                onChange={(e) => setMessageModal({ ...messageModal, text: e.target.value })}
                className="w-full border-2 border-gray-300 rounded-xl p-3 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Write your message..."
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5">
                <div className="text-xs text-gray-500 order-2 sm:order-1">
                  Message will be sent to guest
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
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
            {toast.undoFn && (
              <button
                onClick={() => {
                  if (toast.undoFn) toast.undoFn();
                  setToast(null);
                }}
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-200"
              >
                Undo
              </button>
            )}
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}