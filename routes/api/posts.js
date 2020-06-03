const express = require("express");
const router = express.Router();

//@route    GET api/post
//desc      Test Route
//@access   public

router.get("/", (req, res) => {
  res.send("Post router ...");
});

module.exports = router;
