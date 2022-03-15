import User from "../models/user";

export const signup = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "không đăng kí được user"
        })
    }
}

export const signin = async (req, res) => {
    try {
        const user = await User.findOne({email: req.params.email}).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "đăng nhập không thành công user"
        })
    }
}