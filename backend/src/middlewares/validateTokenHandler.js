import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"

const validateToken = asyncHandler(async (req, res, next) => {
    let token
    let authHeader = req.headers.authorization || req.headers.Authorization
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]
        if (!token) {
            res.status(401)
            throw new Error("User not authorized or token is missing!")
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401)
                throw new Error("User is not authorized!")
            } else {
                req.user = decoded.user
                next()
            }
        })
    }
})

export { validateToken }