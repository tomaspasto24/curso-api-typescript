import { Router } from "express";
import { Request, Response } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middleware/session";

const router = Router();


// Esta ruta solo puede acceder las personas que tienen session activa 
// (que tengan JWT válido)
router.get('/', checkJwt, getOrders)

export { router };