import TourPackage from "../models/tourPackage.model.js";

export const createTourPackage = async (req, res) => {
  try {
    const data = req.body;

    const newPackage = await TourPackage.create(data);

    res.status(201).json({
      success: true,
      message: "Tour package created successfully",
      data: newPackage,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllTourPackages = async (req, res) => {
  try {
    const packages = await TourPackage.find();

    res.json({ success: true, data: packages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTourPackageById = async (req, res) => {
  try {
    const pack = await TourPackage.findById(req.params.id);
    if (!pack) return res.status(404).json({ message: "Package not found" });

    res.json({ success: true, data: pack });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTourPackage = async (req, res) => {
  try {
    const updated = await TourPackage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Package not found" });

    res.json({
      success: true,
      message: "Package updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTourPackage = async (req, res) => {
  try {
    const deleted = await TourPackage.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Package not found" });

    res.json({
      success: true,
      message: "Package deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
