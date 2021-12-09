const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({ error: false, message: "Hello world" });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
