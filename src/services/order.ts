import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const GetOrders = async () => {
    const responseItem = await ItemModel.find();
    return responseItem;
}

export { GetOrders };