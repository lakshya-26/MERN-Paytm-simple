const express = require("express");
const userRouter = require("./userRoutes.js");
const accountRouter = require("./accountRoutes.js");
const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
// /api/v1