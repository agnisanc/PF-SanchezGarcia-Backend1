import { Router } from "express";
import { productManager } from "../dao/productMongoManager.js"
import { uploader } from "../config/multer.config.js"

const router = Router();

const ProductService = new productManager();

router.get("/", async (req, res) => {
    const result = await ProductService.getProducts(req.query);

    res.send({
        status: 'success',
        payload: result
    });
});

router.get("/:pid", async (req, res) => {

    try{
        const result = await ProductService.getProductsById(req.params.pid);
        res.send({
            status: 'success',
            payload: result
        })
    } catch {
        res.status(400).send({
            status: 'error',
            message: error.message
        })
    }
});

export default router;