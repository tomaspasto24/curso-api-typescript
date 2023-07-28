import { Request, Response, response } from "express"
import { handleHttp } from "../utils/error.handle"
import { InsertCar, GetCars, GetCar, UpdateCar, DeleteCar } from "../services/item";

// El controlador solo debe enterarse de las cosas que vienen por HTTP: del request y del response.
// No debe saber de lógica de negocio. Solamente recibe datos y los envía a otro lado.

const getItem = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const responseCar = await GetCar(id);
        res.statusCode = 200;
        res.send(responseCar);
    } catch (e) {
        handleHttp(res, "Error GET ITEM");
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const responseCar = await GetCars();
        res.statusCode = 200;
        res.send(responseCar);
    } catch (e) {
        handleHttp(res, "Error GET ITEMS");
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await UpdateCar(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "Error UPDATE ITEM");
    }
}

const postItem = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const responseItem = await InsertCar(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "Error POST ITEM");
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await DeleteCar(id);
        if(responseItem) 
            res.send(responseItem);
        else 
            res.sendStatus(404);
    } catch (e) {
        handleHttp(res, "Error DELETE ITEM");
    }
}
export { getItem, getItems, updateItem, postItem, deleteItem }