import UserType from "../interface/UserType"
import jwt from 'jsonwebtoken'

export const generateJwt = (user: UserType) => {
    const token = jwt.sign({
        username: user.username,
        sub: user._id
    }, process.env.JWT_SECRET||'', {
        expiresIn: "1h"
    })
    return token
}

export const validateJwt=(token:string)=>{
    const decoded=jwt.verify(token,process.env.JWT_SECRET||'secret')
    if(decoded){
        return true
    }
    return false
}

export const getUsernameFromJwt=(token:string)=>{
    const decoded=jwt.decode(token)
    if(decoded){
        return decoded.sub
    }
    return null
}