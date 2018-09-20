require("dotenv").config();

const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "my-app-files",
  allowedFormats: ["jpg", "png", "pdf"],
  // filename: function(req, file, cb) {
  //   cb(null, "my-file-name");
  // },
  transformation: [
    {
      angle: 0
    }
  ]
});

const uploadCloud = multer({ storage: storage });
module.exports = uploadCloud;
