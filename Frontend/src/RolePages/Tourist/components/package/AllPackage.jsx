// import { useEffect, useState } from "react";
// import axios from "axios";
// import PackageDetailsModal from "./PackageDetailsModal";

// export default function AllPackage() {
//   const [packages, setPackages] = useState([]);
//   const [selectedPackage, setSelectedPackage] = useState(null);

//   const fetchPackages = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/admin/tour-packages/"
//       );
//       setPackages(res.data.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Explore Tour Packages
//       </h2>

//       {selectedPackage && (
//         <PackageDetailsModal
//           pkg={selectedPackage}
//           close={() => setSelectedPackage(null)}
//         />
//       )}

//       {packages.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No packages available.</p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "20px",
//           }}
//         >
//           {packages.map((pkg) => (
//             <div
//               key={pkg._id}
//               style={{
//                 background: "#fff",
//                 borderRadius: "10px",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                 overflow: "hidden",
//               }}
//             >
//               <img
//                 src={pkg.images?.[0] || "/no-image.jpg"}
//                 alt={pkg.packageName}
//                 style={{
//                   width: "100%",
//                   height: "180px",
//                   objectFit: "cover",
//                 }}
//               />

//               <div style={{ padding: "15px" }}>
//                 <h3>{pkg.packageName}</h3>
//                 <p style={{ color: "gray" }}>📍 {pkg.location}</p>

//                 <p><strong>Duration:</strong> {pkg.duration}</p>
//                 <p style={{ fontSize: "18px" }}>
//                   <strong>₹ {pkg.price}</strong>
//                 </p>

//                 <button
//                   onClick={() => setSelectedPackage(pkg)}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     background: "#2b7cff",
//                     color: "white",
//                     borderRadius: "5px",
//                     border: "none",
//                     cursor: "pointer",
//                     fontWeight: "bold",
//                     marginTop: "10px",
//                   }}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import axios from "axios";
import PackageDetailsModal from "./PackageDetailsModal";

export default function AllPackage() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const fetchPackages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/tour-packages/");
      setPackages(res.data.data);
    } catch (err) {
      console.error(err);
    }
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
          color: "#1f2937",
        }}
      >
        Explore Tour Packages
      </h2>

      {selectedPackage && (
        <PackageDetailsModal
          pkg={selectedPackage}
          close={() => setSelectedPackage(null)}
        />
      )}

      {packages.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#6b7280",
            marginTop: "40px",
          }}
        >
          No packages available.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <img
                src={pkg.images?.[0] || "/no-image.jpg"}
                alt={pkg.packageName}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "16px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "6px",
                    color: "#111827",
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
                    marginBottom: "12px",
                  }}
                >
                  ₹ {pkg.price}
                </p>

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
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#1e4fcf")}
                  onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
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
