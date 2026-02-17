import Event from "../models/event.model.js";

/* ================================================================
   CREATE EVENT
================================================================ */
export const createEvent = async (req, res) => {
  try {
    const {
      eventName,
      organizer,
      location,
      eventDate,
      description,
      category,
      tags,
      bannerImage,
      documentLink,
      arvr,
      arvrLink,
    } = req.body;

    // SAFE TAG HANDLING
    const tagArray =
      Array.isArray(tags)
        ? tags
        : tags?.trim() !== ""
        ? tags.split(",").map((t) => t.trim())
        : [];

    // AR/VR validation
    if (arvr === "yes" && (!arvrLink || arvrLink.trim() === "")) {
      return res.status(400).json({
        success: false,
        message: "360° AR/VR link required when AR/VR is enabled",
      });
    }

    const event = await Event.create({
      eventName,
      organizer,
      location,
      eventDate,
      description,
      category,
      tags: tagArray,
      bannerImage,
      documentLink,
      arvr,
      arvrLink,
    });

    return res.status(201).json({
      success: true,
      message: "Event created successfully 🎉",
      data: event,
    });
  } catch (err) {
    console.log("EVENT CREATE ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Server error while creating event",
    });
  }
};


/* ================================================================
   GET ALL EVENTS
================================================================ */
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      data: events,
    });
  } catch (err) {
    console.log("GET EVENTS ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Server error while getting events",
    });
  }
};


/* ================================================================
   UPDATE EVENT
================================================================ */
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    let bannerImage = req.body.bannerImage; // old image rahegi until new uploaded

    // agar new file aayi → update image path
    if (req.file) {
      bannerImage = `uploads/events/${req.file.filename}`;
    }

    const {
      eventName,
      organizer,
      location,
      eventDate,
      description,
      category,
      tags,
      documentLink,
      arvr,
      arvrLink,
    } = req.body;

    let tagArray = [];
    if (Array.isArray(tags)) {
      tagArray = tags.map((t) => t.trim());
    } else if (typeof tags === "string" && tags.trim()) {
      tagArray = tags.split(",").map((t) => t.trim());
    }

    if (arvr === "yes" && !arvrLink) {
      return res.status(400).json({
        success: false,
        message: "360° AR/VR link required",
      });
    }

    const updated = await Event.findByIdAndUpdate(
      id,
      {
        eventName,
        organizer,
        location,
        eventDate,
        description,
        category,
        tags: tagArray,
        bannerImage, // ⭐ UPDATE image
        documentLink,
        arvr,
        arvrLink,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.json({
      success: true,
      message: "Event updated successfully ✔",
      data: updated,
    });
  } catch (err) {
    console.log("UPDATE EVENT ERROR:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



/* ================================================================
   DELETE EVENT
================================================================ */
export const deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    return res.json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (err) {
    console.log("DELETE EVENT ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Server error while deleting event",
    });
  }
};
