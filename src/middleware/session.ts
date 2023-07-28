import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwt = req.headers.authorization || '';
        const token = jwt.split(' ').pop();
        const isUser = verifyToken(token || '') as { id: string };
        console.log({ isUser })
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_JWT_VALIDO")
        } else {
            req.user = isUser;
            next();
        }
    } catch (e) {
        res.status(400);
        res.send("SESSION_NO_VALIDA")
    }
}

export { checkJwt }