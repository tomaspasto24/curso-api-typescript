import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async ({ body }: Request, res: Response) => {
    try {
        const response = await registerNewUser(body);
        res.send(response)
    } catch (e) {
        handleHttp(res, "Error POST ITEM");
    }
}

const loginCtrl = async ({ body }: Request, res: Response) => {
    try {
        const { email, password } = body;
        const responseUser = await loginUser({ email, password });
        if(responseUser === "PASSWORD_INCORRECT") res.sendStatus(403);
        else res.send(responseUser);
    } catch (e) {
        handleHttp(res, "Error POST ITEM");
    }
}

export { registerCtrl, loginCtrl };