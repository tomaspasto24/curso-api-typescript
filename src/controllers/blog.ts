import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

// El controlador solo debe enterarse de las cosas que vienen por HTTP: del request y del response.
// No debe saber de lógica de negocio. Solamente recibe datos y los envía a otro lado.

const getBlog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "Error GET Blog");
    }
}

const getBlogs = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "Error GET BlogS");
    }
}

const updateBlog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "Error UPDATE Blog");
    }
}

const postBlog = (req: Request, res: Response) => {
    try {
        const { body } = req;
        res.send(body);
    } catch (e) {
        handleHttp(res, "Error POST Blog");
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "Error DELETE Blog");
    }
}
export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog }