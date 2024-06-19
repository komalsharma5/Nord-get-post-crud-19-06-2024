const express = require("express")
const { admin_controller } = require("../../Controller")


const adminRouter = express.Router()

adminRouter.post(
    "/create-admin",
    //controller
    admin_controller.create_admin_C
)

adminRouter.get(
    "/list",
    // cb <= controller
    admin_controller.get_admin_C
)

module.exports = adminRouter