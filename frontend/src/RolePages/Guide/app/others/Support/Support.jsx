import React from "react";
import { HelpCircle, Mail, Phone, MessageCircle, AlertCircle, CheckCircle } from "lucide-react";

export default function Support() {
  const tickets = [
    {
      id: "#TK-1023",
      subject: "Payment not reflecting in earnings",
      status: "Open",
      date: "June 20, 2024",
      priority: "High",
    },
    {
      id: "#TK-0987",
      subject: "Need help updating verification documents",
      status: "Resolved",
      date: "June 10, 2024",
      priority: "Medium",
    },
    {
      id: "#TK-0912",
      subject: "Tour listing not visible to tourists",
      status: "In Review",
      date: "May 28, 2024",
      priority: "High",
    },
  ];

  const getStatusBadge = (status) => {
    if (status === "Open")
      return "bg-red-50 text-red-700 border border-red-200";
    if (status === "Resolved")
      return "bg-green-50 text-green-700 border border-green-200";
    return "bg-yellow-50 text-yellow-700 border border-yellow-200";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-green-900 flex items-center gap-2">
          <HelpCircle size={24} /> Support & Help Center
        </h1>
        <p className="text-sm text-gray-600">
          Kuch problem hai? Yaha se turant help le sakte ho.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Mail className="text-green-700" />
          </div>
          <h3 className="font-semibold text-gray-900">Email Support</h3>
          <p className="text-xs text-gray-600">
            Apne account ya booking related issues hume email karein.
          </p>
          <p className="text-sm font-medium text-green-700">
            support@jharkhandtours.in
          </p>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Phone className="text-green-700" />
          </div>
          <h3 className="font-semibold text-gray-900">Call Support</h3>
          <p className="text-xs text-gray-600">
            Urgent queries ke liye helpline number par call karein.
          </p>
          <p className="text-sm font-medium text-green-700">+91-7000-123-456</p>
          <p className="text-[11px] text-gray-500">Mon–Sat, 9:00 AM – 7:00 PM</p>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <MessageCircle className="text-green-700" />
          </div>
          <h3 className="font-semibold text-gray-900">Chat with us</h3>
          <p className="text-xs text-gray-600">
            Live chat se turant help paayein (English / Hindi).
          </p>
          <button className="mt-1 text-sm bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700">
            Start Live Chat
          </button>
        </div>
      </div>

      {/* Open Tickets */}
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-green-900 flex items-center gap-2">
            <AlertCircle size={18} /> Your Support Tickets
          </h3>
          <button className="text-sm bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700">
            Create New Ticket
          </button>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-xs">
              <th className="py-2 text-left">Ticket ID</th>
              <th className="py-2 text-left">Subject</th>
              <th className="py-2 text-left">Status</th>
              <th className="py-2 text-left">Priority</th>
              <th className="py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t, i) => (
              <tr key={i} className="border-t">
                <td className="py-2">{t.id}</td>
                <td className="py-2">{t.subject}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(t.status)}`}>
                    {t.status}
                  </span>
                </td>
                <td className="py-2">
                  {t.priority === "High" ? (
                    <span className="text-red-600 text-xs font-semibold">High</span>
                  ) : (
                    <span className="text-yellow-600 text-xs font-semibold">Medium</span>
                  )}
                </td>
                <td className="py-2 text-gray-500 text-xs">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQs */}
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <h3 className="font-semibold text-green-900 mb-3">Frequently Asked Questions</h3>

        <div className="space-y-3 text-sm">
          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-medium">
              Payment kab tak settle hota hai?
            </summary>
            <p className="mt-2 text-gray-600">
              Har completed tour ke baad generally 24–48 ghante ke andar payment aapke
              account me reflect ho jata hai. Agar delay ho raha ho to support ticket raise karein.
            </p>
          </details>

          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-medium">
              Verification documents reject ho gaye to kya karein?
            </summary>
            <p className="mt-2 text-gray-600">
              Aapko email me rejection ka reason mil jata hai. Correct document scan karke dobara upload karein, 
              ya support se help le sakte hain.
            </p>
          </details>

          <details className="border rounded-lg p-3">
            <summary className="cursor-pointer font-medium">
              Tour listing search me show kyun nahi ho rahi?
            </summary>
            <p className="mt-2 text-gray-600">
              Most cases me reason hota hai incomplete profile, inactive status ya date-wise availability.
              Dashboard me tour settings check karein, fir bhi issue ho to ticket raise karein.
            </p>
          </details>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle size={14} className="text-green-600" />
          Didn’t find your answer? Create a support ticket or chat with us.
        </div>
      </div>
    </div>
  );
}
