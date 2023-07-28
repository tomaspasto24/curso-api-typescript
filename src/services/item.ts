import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const InsertCar = async (item: Car) => {
    const responseItem = await ItemModel.create(item);
    return responseItem;
}

const GetCars = async () => {
    const responseItem = await ItemModel.find();
    return responseItem;
}

const GetCar = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id })
    return responseItem;
}

const UpdateCar = async (id: string, data: Car) => {
    const responseItem = await ItemModel.findOneAndUpdate(
        { _id: id },
        data,
        // la propiedad new lo que hace es que va a devolver el elemento actualizado en la promesa
        // si no se pone, va a devolver el elemento anterior a ser actualizado.
        { new: true }
    );
    return responseItem;
}

const DeleteCar = async (id: string) => {
    const responseItem = await ItemModel.findByIdAndRemove(id);
    return responseItem;
}

export { InsertCar, GetCars, GetCar, UpdateCar, DeleteCar };