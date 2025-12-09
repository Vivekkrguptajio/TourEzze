import React, { useState, useRef, useEffect } from "react";
import {
  Award,
  CheckCircle2,
  Upload,
  Calendar,
  Shield,
  FileText,
  Download,
  Eye,
  Sparkles,
  X
} from "lucide-react";

/**
 * CertificationsSection
 * - Each certificate row has View | Download | Upload icons in one line
 * - Upload replaces that certificate's file (client-side object URL)
 * - Validates file type (pdf,jpg,png) and size (<=10MB)
 * - Modal preview for PDF and images
 *
 * Paste this component into your React app. Requires lucide-react + Tailwind CSS.
 */

export default function CertificationsSection() {
  const fileInputRef = useRef(null);
  const [pendingUploadFor, setPendingUploadFor] = useState(null); // cert id awaiting file
  const [viewFile, setViewFile] = useState(null); // { url, fileName, mime }
  const [certs, setCerts] = useState([
    {
      id: "c1",
      name: "Government Guide License",
      info: "Valid until: Dec 2025",
      issuer: "Ministry of Tourism",
      color: "emerald",
      icon: Shield,
      status: "active",
      url: null,
      mime: null,
      fileName: null,
    },
    {
      id: "c2",
      name: "First Aid Certification",
      info: "Valid until: Jun 2024",
      issuer: "Red Cross Society",
      color: "red",
      icon: FileText,
      status: "expiring",
      url: null,
      mime: null,
      fileName: null,
    },
    {
      id: "c3",
      name: "Police Verification",
      info: "Verified on: Jan 2024",
      issuer: "Jharkhand Police",
      color: "blue",
      icon: Shield,
      status: "verified",
      url: null,
      mime: null,
      fileName: null,
    },
  ]);

  // color classes builder
  const getColorClasses = (color) => {
    const map = {
      emerald: {
        gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
        lightBg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
      },
      red: {
        gradient: "bg-gradient-to-br from-red-500 to-rose-600",
        lightBg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700",
      },
      blue: {
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
        lightBg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
      },
    };
    return map[color] || map.emerald;
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: { text: "Active", classes: "bg-gradient-to-r from-emerald-500 to-teal-600", Icon: CheckCircle2 },
      expiring: { text: "Expiring Soon", classes: "bg-gradient-to-r from-amber-500 to-orange-600", Icon: Calendar },
      verified: { text: "Verified", classes: "bg-gradient-to-r from-blue-500 to-cyan-600", Icon: CheckCircle2 },
    };
    return badges[status] || badges.verified;
  };

  // open file selector for a specific certificate
  const triggerUploadFor = (certId) => {
    setPendingUploadFor(certId);
    if (fileInputRef.current) fileInputRef.current.click();
  };

  // validate file
  const validateFile = (file) => {
    const allowed = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
    const maxBytes = 10 * 1024 * 1024; // 10MB
    if (!allowed.includes(file.type)) return { ok: false, msg: "Only PDF, JPG or PNG allowed." };
    if (file.size > maxBytes) return { ok: false, msg: "File size must be ≤ 10 MB." };
    return { ok: true };
  };

  // file selected -> attach to certificate
  const onFileSelected = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPendingUploadFor(null);
      return;
    }
    const check = validateFile(file);
    if (!check.ok) {
      alert(check.msg);
      e.target.value = "";
      setPendingUploadFor(null);
      return;
    }

    // create object URL and update that certificate
    const url = URL.createObjectURL(file);
    setCerts((prev) =>
      prev.map((c) =>
        c.id === pendingUploadFor
          ? { ...c, url, mime: file.type, fileName: file.name, info: `Uploaded: ${new Date().toLocaleDateString()}` }
          : c
      )
    );

    // clear input & pending flag
    e.target.value = "";
    setPendingUploadFor(null);
  };

  const handleView = (cert) => {
    if (!cert.url) return alert("No document uploaded for this certificate.");
    setViewFile({ url: cert.url, fileName: cert.fileName || cert.name, mime: cert.mime || "application/octet-stream" });
  };

  const handleDownload = (cert) => {
    if (!cert.url) return alert("No document uploaded for this certificate.");
    const a = document.createElement("a");
    a.href = cert.url;
    a.download = cert.fileName || `${cert.name}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  // cleanup object URLs on unmount to avoid leaks
  useEffect(() => {
    return () => {
      certs.forEach((c) => {
        if (c?.url) {
          try {
            URL.revokeObjectURL(c.url);
          } catch (err) {}
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 border border-slate-200/60 rounded-3xl p-6 md:p-8 mb-6 shadow-2xl overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-orange-400/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-rose-400/10 to-pink-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500">
              <Award className="text-white" size={26} />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-white flex items-center justify-center shadow">
              <CheckCircle2 className="text-white" size={12} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 flex items-center gap-2">
              Certifications & Documents
              <Sparkles className="text-orange-500" size={18} />
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Your verified credentials and licenses</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 bg-orange-50 rounded-full px-4 py-2 border border-orange-200/60">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-orange-700">{certs.length} Certificates</span>
        </div>
      </div>

      {/* Hidden shared file input (used to upload for any cert) */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,image/png,image/jpeg"
        className="hidden"
        onChange={onFileSelected}
      />

      {/* Certificates list */}
      <div className="space-y-4">
        {certs.map((cert, idx) => {
          const colors = getColorClasses(cert.color);
          const status = getStatusBadge(cert.status);
          const IconComp = cert.icon || FileText;

          return (
            <div
              key={cert.id}
              className={`relative rounded-2xl p-5 border ${colors.border} ${colors.lightBg} transition-shadow hover:shadow-lg`}
            >
              <div className="flex items-start justify-between gap-4">
                {/* Left: icon + info */}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colors.gradient} text-white shadow-lg`}>
                    <IconComp size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base md:text-lg">{cert.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-600 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className={colors.text} />
                        <span>{cert.info}</span>
                      </div>
                      <span className="hidden sm:block text-slate-300">•</span>
                      <div className="flex items-center gap-1">
                        <Shield size={14} className={colors.text} />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: status + actions */}
                <div className="flex items-center gap-3">
                  <div className={`${status.classes} text-white px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-2 shadow`}>
                    <status.Icon size={14} />
                    <span>{status.text}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* VIEW */}
                    <button
                      onClick={() => handleView(cert)}
                      className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow hover:scale-105 transition`}
                      title={cert.url ? "View document" : "No document to view"}
                    >
                      <Eye size={16} className="text-slate-600" />
                    </button>

                    {/* DOWNLOAD */}
                    <button
                      onClick={() => handleDownload(cert)}
                      className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow hover:scale-105 transition`}
                      title={cert.url ? "Download document" : "No document to download"}
                    >
                      <Download size={16} className="text-slate-600" />
                    </button>

                    {/* UPLOAD (per-certificate) */}
                    <button
                      onClick={() => {
                        triggerUploadFor(cert.id);
                        // focus the hidden input by programmatically triggering click
                        // fileInputRef.current.click() will be triggered via triggerUploadFor
                        if (fileInputRef.current) fileInputRef.current.click();
                        // mark which cert awaiting file
                        setPendingUploadFor(cert.id);
                      }}
                      className="w-9 h-9 rounded-xl flex items-center justify-center bg-orange-500 text-white shadow hover:bg-orange-600 transition"
                      title="Upload / Replace document for this certificate"
                    >
                      <Upload size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for viewFile */}
      {viewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <FileText size={18} />
                <div>
                  <div className="font-semibold">{viewFile.fileName}</div>
                  <div className="text-xs text-slate-500">{viewFile.mime}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={viewFile.url}
                  download={viewFile.fileName}
                  className="px-3 py-2 rounded-lg bg-slate-100 text-slate-700 flex items-center gap-2"
                >
                  <Download size={14} /> Download
                </a>
                <button onClick={() => setViewFile(null)} className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-50" style={{ minHeight: 360 }}>
              {viewFile.mime === "application/pdf" ? (
                <iframe src={viewFile.url} title={viewFile.fileName} className="w-full h-[70vh] rounded" />
              ) : (
                <img src={viewFile.url} alt={viewFile.fileName} className="w-full h-auto max-h-[70vh] object-contain rounded-md" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
