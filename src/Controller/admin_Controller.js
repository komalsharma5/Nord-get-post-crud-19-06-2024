const { Admin_service } = require("../Service")


const create_admin_C = async(req,res) =>{
    try{
          // service => admin create
        const data = req.body
        const new_admin = await Admin_service.create_admin_S(data)

        console.log(new_admin)

        if(!new_admin){
            throw new Error("Something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Admin created successfully",
            data :  new_admin
        })
    } catch (error) {
         // !admin
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

const get_admin_C = async(req,res) => {
    try {
        // service <= services => DATA
        const admin_list = await Admin_service.get_admin_S()

        if(!admin_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: admin_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_admin_C,
    get_admin_C
}