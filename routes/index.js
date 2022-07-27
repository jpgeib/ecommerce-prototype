const router = require("express").Router();
const apiRoutes = rquire("./apiRoutes");
const path = require("path");

router.use("/api", apiRoutes);

module.exports = router;