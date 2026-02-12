const cloudinary = require("../config/cloudinary");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const stream = cloudinary.uploader.upload_stream(
      { folder: "eco-vital/editor" },
      (error, result) => {
        if (error) {
          return res.status(500).json({ message: "Upload failed" });
        }

        res.json({ url: result.secure_url });
      }
    );

    stream.end(req.file.buffer);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
