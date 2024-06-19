const express = require("express")
const userRoute = require("./User_Routes")
const moveiRouter = require("./Movei.Routes")
const series_router = require("./Series.routes")
const adminRouter = require("./admin_Routes")

const router = express()

router.use("/linking-pharse",userRoute)

moveiRouter.use("/movei-link",moveiRouter)

series_router.use("/series",series_router)

router.use("/admin",adminRouter)

module.exports = router