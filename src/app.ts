
import cors from "cors";
import express from "express";
import { Request, Response } from 'express';
import * as productController from './controllers/ProductController';
import * as elasticSearchController from './controllers/ElasticSearchController';

import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: (origin: any, cb: any) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired"
    ],
    optionsSuccessStatus: 200
  })
);

app.set("port", process.env.PORT || 4000);


app.get('/', (req: Request, res: Response) =>{
    res.send("Hello word");
})

// API Endpoints
app.get("/products", productController.allProducts);
app.get("/products/:id", productController.getProduct);
app.post("/product", productController.addProduct);
app.post("/products", productController.addProducts);

app.get("/initiate", elasticSearchController.initiateElasticSearch);
app.get("/search", elasticSearchController.search);
app.get("/suggest", elasticSearchController.getSuggestions);

app.listen(app.get("port"), () => {
    console.log("App is running");
});