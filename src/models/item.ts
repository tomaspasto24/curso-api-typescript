import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemsSchema = new Schema<Car>(
    {
        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String, 
            enum: ['gasoline', 'electric'],
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }, {
        timestamps: true,
        versionKey: false
    }
);

// model recibe nombre del modelo en la base datos y el schema que lo alimenta.
const ItemModel = model('items', ItemsSchema);

export default ItemModel;