import { StatusCodes } from "http-status-codes";
import asyncHandler from "./asyncHandler";

export const isAutherized = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        res.status(StatusCodes.UNAUTHORIZED);
        throw new Error("Login first to access this resource");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
});

export const authorizedRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.isAdmin)) {
            res.status(StatusCodes.UNAUTHORIZED);
            throw new Error(`Role (${req.user.isAdmin}) is not allowed to access this resource`);
        }
        next();
    }
}

