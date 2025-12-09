import { useEffect, useState } from "react";
import axios from "axios";
import PackageDetailsModal from "./PackageDetailsModal";

export default function AllPackage() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const fetchPackages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/tour-packages/"
      );
      setPackages(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Explore Tour Packages
      </h2>

      {selectedPackage && (
        <PackageDetailsModal
          pkg={selectedPackage}
          close={() => setSelectedPackage(null)}
        />
      )}

      {packages.length === 0 ? (
        <p style={{ textAlign: "center" }}>No packages available.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={pkg.images?.[0] || "/no-image.jpg"}
                alt={pkg.packageName}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{pkg.packageName}</h3>
                <p style={{ color: "gray" }}>📍 {pkg.location}</p>

                <p><strong>Duration:</strong> {pkg.duration}</p>
                <p style={{ fontSize: "18px" }}>
                  <strong>₹ {pkg.price}</strong>
                </p>

                <button
                  onClick={() => setSelectedPackage(pkg)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#2b7cff",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
