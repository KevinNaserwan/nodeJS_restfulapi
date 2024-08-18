import userService from "../service/user-service";

const register = (req,res,next) => {
    try {
        const result = userService.register(req.body);
        res.status(200).json({
            data: result,
        });
    } catch (e) {
        next(e);
    }
}

export default {
    register
}