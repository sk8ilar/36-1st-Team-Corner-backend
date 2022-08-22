const express = require("express");
const router = express.Router();

const {authRouter} = require("./authRouter");
const cartRouter = require("./cartRouter");

router.use("/auth", authRouter);
router.use("/cart", cartRouter.router);

module.exports = router;