import React from "react";

export default function PackageDetailsModal({ pkg, close }) {
  if (!pkg) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "90%",
          maxWidth: "800px",
          background: "#fff",
          borderRadius: "10px",
          padding: "20px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Title */}
        <h2>{pkg.packageName}</h2>
        <p style={{ color: "gray" }}>📍 {pkg.location}</p>

        {/* Images */}
        <img
          src={pkg.images?.[0]}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        />

        <hr style={{ margin: "20px 0" }} />

        <p><strong>Duration:</strong> {pkg.duration}</p>
        <p><strong>Price:</strong> ₹ {pkg.price}</p>

        <h3 style={{ marginTop: "20px" }}>Description</h3>
        <p>{pkg.description}</p>

        <h3 style={{ marginTop: "20px" }}>Highlights</h3>
        <ul>
          {pkg.highlights?.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>

        <h3 style={{ marginTop: "20px" }}>Itinerary</h3>
        <ul>
          {pkg.itinerary?.map((i, idx) => (
            <li key={idx}>
              <strong>Day {i.day}:</strong> {i.description}
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: "20px" }}>Inclusions</h3>
        <ul>
          {pkg.inclusions?.map((inc, idx) => (
            <li key={idx}>{inc}</li>
          ))}
        </ul>

        <h3 style={{ marginTop: "20px" }}>Exclusions</h3>
        <ul>
          {pkg.exclusions?.map((exc, idx) => (
            <li key={idx}>{exc}</li>
          ))}
        </ul>

        {/* Buttons */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            onClick={() =>
              (window.location.href = `/role/tourist/book-package/${pkg._id}`)
            }
            style={{
              padding: "10px 20px",
              background: "#2b7cff",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Book Now
          </button>

          <button
            onClick={close}
            style={{
              padding: "10px 20px",
              background: "gray",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
