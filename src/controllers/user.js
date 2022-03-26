import User from "../models/user";

export const signup = async (req, res) => {
    const { userName, email, password} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "email đã tồn tại"
            })
        }
        const users = await new User(req.body).save();
        res.json({
            user: {
                _id: users._id,
                userName: users.userName,
                email: users.email
            }
        });
    } catch (error) {
        res.status(400).json({
            error: "không đăng kí được user"
        })
    }
}

export const signin = async (req, res) => {
    const {email, password} = req.body
    try {
        
        const users = await User.findOne({email}).exec();
        
        if(!users){
            res.status(400).json({
                message: "email không tồn tại"
            })
        }
        
        if(!users.authenticate(password)){
            res.status(400).json({
                message: "Mật khẩu không đúng"
            })
        }
        res.json({
            user: {
                _id: users._id,
                userName: users.userName,
                email: users.email
            }
        });
    } catch (error) {
        res.status(400).json({
            error: "đăng nhập không thành công user"
        })
    }
}
export const getAll = async (req, res) => {
    try {
        const user = await User.find({}).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "không tìm thấy sản phẩm"
        })
    }
}