import axios from "axios";
import {cloudinary} from "../utils/cloudinary"
export const upload = async (req, res) =>{
    
    try {
        const file = req.body.data
        const uploadedResponse = await cloudinary.uploader.upload(file, {upload_preset: "assignment"},)
        res.json(uploadedResponse)
    } catch (error) {
        res.status(400).json({
            error: "không thêm được ảnh"
        })
    }
}
