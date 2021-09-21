const express = require("express");
const router = express.Router();
const formData = require("../models/formDataModel");

router.route("/sending").post((req, res) => {
  const name = req.body.name;
  const rollno = req.body.rollno;
  const url = req.body.url;
  const email = req.body.email;
  const newFile = new formData({
    name,
    rollno,
    url,
    email,
  });

  newFile.save();
});

module.exports = router;
