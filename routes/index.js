const express = require("express");
const router = express.Router();
const blogRouter = require("./blog")


router.get("/", (req, res) => {
    res.send("Halo, dunia!");
});

router.use("/blogs", blogRouter);



module.exports = router;
