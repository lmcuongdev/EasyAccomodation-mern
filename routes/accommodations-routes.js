const express = require("express");
const { check } = require("express-validator");

const accommodControllers = require("../controllers/accommodations-controllers");

const checkAuth = require("../middleware/check-auth");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/", accommodControllers.getAll);

router.get("/:pid", accommodControllers.getOne);

// router.get("/user/:uid", accommodControllers.getAllByUserId);

router.use(checkAuth);

router.post(
  "/create",
  // fileUpload.single("image"),
  accommodControllers.create
);

// router.put("/:pid", accommodControllers.update);

// router.delete("/:pid", accommodControllers.delete);

module.exports = router;
