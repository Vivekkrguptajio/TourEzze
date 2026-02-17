// src/controllers/destination.controller.js
import  Destination  from "../models/destination.model.js";

/* =======================================================
   CREATE DESTINATION
======================================================= */
export const createDestination = async (req, res) => {
  try {
    const {
      name,
      category,
      location,
      mapUrl,
      bestSeason,
      arvr,
      arvrLink,
      description,
      nearby,
      tags,
      imageLinks, // ⭐ new incoming field
    } = req.body;

    // TAGS → array
    const tagArray =
      tags?.trim() !== "" ? tags.split(",").map((t) => t.trim()) : [];

    // IMAGE LINKS → array
    const imageArray =
      imageLinks?.trim() !== "" ? imageLinks.split(",").map((i) => i.trim()) : [];

    // AR/VR VALIDATION
    if (arvr === "yes" && (!arvrLink || arvrLink.trim() === "")) {
      return res.status(400).json({
        success: false,
        message: "360° AR/VR link is required when AR/VR is enabled.",
      });
    }

    const destination = await Destination.create({
      name,
      category,
      location,
      mapUrl,
      bestSeason,
      arvr,
      arvrLink,
      description,
      nearby,
      tags: tagArray,
      imageLinks: imageArray,   // ⭐ SAVING DIRECT LINKS
    });

    return res.status(201).json({
      success: true,
      message: "Destination created successfully 🎉",
      data: destination,
    });

  } catch (err) {
    console.log("❌ CREATE ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Server error while creating destination",
    });
  }
};




/* =======================================================
   UPDATE DESTINATION (PUT)
======================================================= */
// UPDATE DESTINATION
export const updateDestination = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("UPDATE BODY:", req.body);

    const {
      name,
      category,
      location,
      mapUrl,
      bestSeason,
      arvr,
      arvrLink,
      description,
      nearby,
      tags,
      imageLinks,
    } = req.body;

    // Convert tags from string → array
    const tagArray =
      tags?.trim() !== "" ? tags.split(",").map((t) => t.trim()) : [];

    // Convert imageLinks from string → array
    const imageArray =
      imageLinks?.trim() !== ""
        ? imageLinks.split(",").map((i) => i.trim())
        : [];

    const updated = await Destination.findByIdAndUpdate(
      id,
      {
        name,
        category,
        location,
        mapUrl,
        bestSeason,
        arvr,
        arvrLink,
        description,
        nearby,
        tags: tagArray,
        imageLinks: imageArray, // ⭐ MOST IMPORTANT
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    return res.json({
      success: true,
      message: "Destination updated successfully",
      data: updated,
    });

  } catch (err) {
    console.log("UPDATE ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Server error while updating destination",
    });
  }
};


/* =======================================================
   GET ALL DESTINATIONS
======================================================= */
export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      data: destinations,
    });

  } catch (err) {
    console.log("❌ GET ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching destinations",
    });
  }
};
