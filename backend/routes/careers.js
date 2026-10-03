const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      department,
      jobTitle,
      message,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !department ||
      !jobTitle ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All career application fields are required.",
      });
    }

    const result = await pool.query(
      `INSERT INTO career_applications
       (
         first_name,
         last_name,
         contact_number,
         email_address,
         department,
         job_applied_for,
         message
       )
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING
         id,
         first_name,
         last_name,
         contact_number,
         email_address,
         department,
         job_applied_for,
         message,
         created_at`,
      [
        firstName,
        lastName,
        phone,
        email,
        department,
        jobTitle,
        message,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Career application submitted successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Career application error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit career application.",
    });
  }
});

module.exports = router;