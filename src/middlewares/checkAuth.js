import expressJWT from "express-jwt";

export const requiredSignin = expressJWT({
    algorithms: ["HS256"],
    secret: "123456",
    requestProperty: "auth"
})

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id;

    if(!status){
        res.status(401).json({
            message: "bạn không có quyền truy cập "
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if(req.profile.role == 0){
        res.status(401).json({
            message: "không có quyền truy cập"
        })
    }
    next();
}