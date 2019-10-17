import {Request, Response} from 'express';
import Product from '../db/models/Product';
// import ProductSchema from '../db/models/Product';
//GET /products get all products
import {getSuggestions} from './ElasticSearchController';

export let allProducts = (req:Request, res: Response) => {

    let { query } = req.query;
    if(!query || query == 'all'){
        Product.find((err: any, products: any) =>{
            if(err){
                res.send(err);
            }else{
                res.send(products);
            }
        })
    }else{
        getSuggestions(req, res); // Call to ElasticSearch
    }
     
}

//GET /products/{id} get all products
export let getProduct = (req: Request, res: Response) => {
  let product = Product.findOne({id: req.params.id}, (err: any, product: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(product);
    }
  });
};

export let addProduct = (req: Request, res: Response) => {
  var product = new Product(req.body);

  product.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(product);
    }
  });
};

export let addProducts = (req: Request, res: Response) => {
  (req.body).forEach((element: any) => {
    var product = new Product(element);
    product.save((err: any) => {
        if (err) {
        res.send(err);
        } else {
        res.send(product);
        }
    }); 
  });

};