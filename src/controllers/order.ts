import { Request, Response, response } from "express"
import { handleHttp } from "../utils/error.handle"
import { InsertCar, GetCars, GetCar, UpdateCar, DeleteCar } from "../services/item";
import { RequestExt } from "../interfaces/requestExt.interface";


const getOrders = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Esto solo lo ve las personas con SESSION / JWT",
            user: req.user
        });
    } catch (e) {
        handleHttp(res, "Error GET ITEMS");
    }
}

export { getOrders }