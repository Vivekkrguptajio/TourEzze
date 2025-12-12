import axios from "axios";
import PackageDetailsModal from "./PackageDetailsModal";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import { API_URL } from "../../../../../src/api.js";
=======

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

export default function AllPackage() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packageLanguages, setPackageLanguages] = useState({});
<<<<<<< HEAD
=======
  
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

  const languages = [
    "English",
    "Hindi",
    "Bengali",
    "Odia",
    "Tamil",
    "Telugu",
    "Gujarati",
    "Kannada",
<<<<<<< HEAD
    "Malayalam",
=======
    "Malayalam"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
  ];

  // Mock guide data
  const guidesDatabase = {
    English: [
      { id: 1, name: "John Smith", experience: "5 years", rating: 4.8 },
<<<<<<< HEAD
      { id: 2, name: "Sarah Johnson", experience: "7 years", rating: 4.9 },
    ],
    Hindi: [
      { id: 3, name: "Rajesh Kumar", experience: "6 years", rating: 4.7 },
      { id: 4, name: "Priya Sharma", experience: "4 years", rating: 4.6 },
    ],
    Bengali: [
      { id: 5, name: "Amit Das", experience: "5 years", rating: 4.8 },
      { id: 6, name: "Riya Chatterjee", experience: "3 years", rating: 4.5 },
    ],
    Odia: [
      { id: 7, name: "Bijay Panda", experience: "4 years", rating: 4.6 },
      { id: 8, name: "Swati Mohanty", experience: "5 years", rating: 4.7 },
    ],
    Tamil: [
      { id: 9, name: "Karthik Rajan", experience: "6 years", rating: 4.9 },
      { id: 10, name: "Meera Subramanian", experience: "7 years", rating: 4.8 },
    ],
    Telugu: [
      { id: 11, name: "Venkat Reddy", experience: "5 years", rating: 4.7 },
      { id: 12, name: "Lakshmi Devi", experience: "4 years", rating: 4.6 },
    ],
    Gujarati: [
      { id: 13, name: "Chirag Patel", experience: "6 years", rating: 4.8 },
      { id: 14, name: "Nisha Shah", experience: "5 years", rating: 4.7 },
    ],
    Kannada: [
      { id: 15, name: "Suresh Gowda", experience: "7 years", rating: 4.9 },
      { id: 16, name: "Divya Rao", experience: "4 years", rating: 4.6 },
    ],
    Malayalam: [
      { id: 17, name: "Arun Nair", experience: "5 years", rating: 4.7 },
      { id: 18, name: "Anjali Menon", experience: "6 years", rating: 4.8 },
    ],
=======
      { id: 2, name: "Sarah Johnson", experience: "7 years", rating: 4.9 }
    ],
    Hindi: [
      { id: 3, name: "Rajesh Kumar", experience: "6 years", rating: 4.7 },
      { id: 4, name: "Priya Sharma", experience: "4 years", rating: 4.6 }
    ],
    Bengali: [
      { id: 5, name: "Amit Das", experience: "5 years", rating: 4.8 },
      { id: 6, name: "Riya Chatterjee", experience: "3 years", rating: 4.5 }
    ],
    Odia: [
      { id: 7, name: "Bijay Panda", experience: "4 years", rating: 4.6 },
      { id: 8, name: "Swati Mohanty", experience: "5 years", rating: 4.7 }
    ],
    Tamil: [
      { id: 9, name: "Karthik Rajan", experience: "6 years", rating: 4.9 },
      { id: 10, name: "Meera Subramanian", experience: "7 years", rating: 4.8 }
    ],
    Telugu: [
      { id: 11, name: "Venkat Reddy", experience: "5 years", rating: 4.7 },
      { id: 12, name: "Lakshmi Devi", experience: "4 years", rating: 4.6 }
    ],
    Gujarati: [
      { id: 13, name: "Chirag Patel", experience: "6 years", rating: 4.8 },
      { id: 14, name: "Nisha Shah", experience: "5 years", rating: 4.7 }
    ],
    Kannada: [
      { id: 15, name: "Suresh Gowda", experience: "7 years", rating: 4.9 },
      { id: 16, name: "Divya Rao", experience: "4 years", rating: 4.6 }
    ],
    Malayalam: [
      { id: 17, name: "Arun Nair", experience: "5 years", rating: 4.7 },
      { id: 18, name: "Anjali Menon", experience: "6 years", rating: 4.8 }
    ]
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
  };

  // Fetch packages
  const fetchPackages = async () => {
    try {
<<<<<<< HEAD
      const res = await axios.get(`${API_URL}/api/admin/tour-packages/`);
=======
      const res = await axios.get("http://localhost:5000/api/admin/tour-packages/");
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
      const data = res.data?.data || [];

      setPackages(data);

      // Initialize language for each package
      const initial = {};
      data.forEach((pkg) => {
        initial[pkg._id] = "English";
      });

      setPackageLanguages(initial);
    } catch (err) {
      console.error("Error fetching packages", err);
    }
  };

  const handleLanguageChange = (packageId, lang) => {
    setPackageLanguages((prev) => ({
      ...prev,
<<<<<<< HEAD
      [packageId]: lang,
=======
      [packageId]: lang
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
    }));
  };

  const getSuggestedGuide = (language) => {
    const list = guidesDatabase[language] || [];
    return list.length > 0 ? list[0] : null;
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div style={{ padding: "20px", background: "#f8f9fb", minHeight: "100vh" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "28px",
          fontWeight: "700",
<<<<<<< HEAD
          color: "#1f2937",
=======
          color: "#1f2937"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        }}
      >
        Explore Tour Packages
      </h2>

      {selectedPackage && (
        <PackageDetailsModal
          pkg={selectedPackage}
          language={packageLanguages[selectedPackage._id]}
<<<<<<< HEAD
          suggestedGuide={getSuggestedGuide(
            packageLanguages[selectedPackage._id]
          )}
=======
          suggestedGuide={getSuggestedGuide(packageLanguages[selectedPackage._id])}
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          close={() => setSelectedPackage(null)}
        />
      )}

      {packages.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#6b7280",
<<<<<<< HEAD
            marginTop: "40px",
=======
            marginTop: "40px"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          }}
        >
          No packages available.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
<<<<<<< HEAD
            gap: "25px",
=======
            gap: "25px"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          }}
        >
          {packages.map((pkg) => {
            const selectedLang = packageLanguages[pkg._id] || "English";
            const guide = getSuggestedGuide(selectedLang);

            return (
              <div
                key={pkg._id}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  cursor: "pointer",
<<<<<<< HEAD
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.08)";
=======
                  transition: "0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                }}
              >
                <img
                  src={pkg.images?.[0] || "/no-image.jpg"}
                  alt={pkg.packageName}
                  style={{
                    width: "100%",
                    height: "200px",
<<<<<<< HEAD
                    objectFit: "cover",
=======
                    objectFit: "cover"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                  }}
                />

                <div style={{ padding: "16px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "6px",
<<<<<<< HEAD
                      color: "#111827",
=======
                      color: "#111827"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                    }}
                  >
                    {pkg.packageName}
                  </h3>

                  <p style={{ color: "#6b7280", marginBottom: "6px" }}>
                    📍 {pkg.location}
                  </p>

                  <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                    <strong>Duration:</strong> {pkg.duration}
                  </p>

                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#2563eb",
<<<<<<< HEAD
                      marginBottom: "12px",
=======
                      marginBottom: "12px"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                    }}
                  >
                    ₹ {pkg.price}
                  </p>

                  {/* Language Select */}
                  <select
                    value={selectedLang}
<<<<<<< HEAD
                    onChange={(e) =>
                      handleLanguageChange(pkg._id, e.target.value)
                    }
=======
                    onChange={(e) => handleLanguageChange(pkg._id, e.target.value)}
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      fontSize: "15px",
<<<<<<< HEAD
                      marginBottom: "12px",
=======
                      marginBottom: "12px"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                    }}
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>

                  {/* Suggested Guide */}
                  {guide && (
                    <div
                      style={{
                        background: "#f0f9ff",
                        border: "1px solid #bfdbfe",
                        borderRadius: "8px",
                        padding: "10px",
                        marginBottom: "12px",
<<<<<<< HEAD
                        fontSize: "14px",
=======
                        fontSize: "14px"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "600",
                          color: "#1e40af",
<<<<<<< HEAD
                          marginBottom: "4px",
=======
                          marginBottom: "4px"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                        }}
                      >
                        🎯 Suggested Guide
                      </div>
                      <div style={{ color: "#374151" }}>
                        <strong>{guide.name}</strong>
                      </div>
                      <div
                        style={{
                          color: "#6b7280",
                          fontSize: "13px",
<<<<<<< HEAD
                          marginTop: "2px",
=======
                          marginTop: "2px"
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                        }}
                      >
                        ⭐ {guide.rating} • {guide.experience}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "#2563eb",
                      color: "white",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "15px",
<<<<<<< HEAD
                      transition: "0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#1e4fcf")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#2563eb")
                    }
=======
                      transition: "0.2s"
                    }}
                    onMouseEnter={(e) => (e.target.style.background = "#1e4fcf")}
                    onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
