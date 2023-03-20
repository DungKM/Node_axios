import express from "express";
import {get, getAll, Post, Put, Remove } from "../controllers/routerProducts";

const router = express.Router();

router.get('/products',getAll);
router.get('/products/:id',get);
router.post('/products',Post);
router.delete('/products/:id', Remove)
router.put('/products/:id',Put);


export default router;