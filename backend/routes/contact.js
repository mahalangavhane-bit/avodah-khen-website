const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, city } = req.body;

    if (!name || !email || !city) {
      return res.status(400).json({
        success: false,
        message: "Name, work email and city are required.",
      });
    }

    const result = await pool.query(
      `INSERT INTO contacts (name, work_email, city)
       VALUES ($1, $2, $3)
       RETURNING id, name, work_email, city, created_at`,
      [name, email, city]
    );

    res.status(201).json({
      success: true,
      message: "Contact request submitted successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit contact request.",
    });
  }
});

module.exports = router;