import { Request,Response,NextFunction } from "express"
import { validateJwt } from "../security/jwt"

export const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const authHeader=req.headers.authorization
    const token=authHeader?.replace("Bearer ","")
    if(!token){
        res.status(401).json({message:"Unauthorized"})
        return
    }
    if(!validateJwt(token)){
        res.status(401).json({message:"Unauthorized"})
        return
    }
    next()
}