const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/blog_controller");
const auth = require("../middleware/auth")

router.post("/", BlogController.create);
router.get("/", BlogController.getAll);
router.get("/:id", BlogController.getOne);
router.put("/:id", BlogController.update);
router.delete("/:id", BlogController.delete);

module.exports = router;
