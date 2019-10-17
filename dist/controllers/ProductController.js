"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProducts = exports.addProduct = exports.getProduct = exports.allProducts = void 0;
const Product_1 = __importDefault(require("../db/models/Product"));
// import ProductSchema from '../db/models/Product';
//GET /products get all products
const ElasticSearchController_1 = require("./ElasticSearchController");
exports.allProducts = (req, res) => {
    let { query } = req.query;
    if (!query || query == 'all') {
        Product_1.default.find((err, products) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(products);
            }
        });
    }
    else {
        ElasticSearchController_1.getSuggestions(req, res); // Call to ElasticSearch
    }
};
//GET /products/{id} get all products
exports.getProduct = (req, res) => {
    let product = Product_1.default.findOne({ id: req.params.id }, (err, product) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(product);
        }
    });
};
exports.addProduct = (req, res) => {
    var product = new Product_1.default(req.body);
    product.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(product);
        }
    });
};
exports.addProducts = (req, res) => {
    (req.body).forEach((element) => {
        var product = new Product_1.default(element);
        product.save((err) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(product);
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9Qcm9kdWN0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxtRUFBMkM7QUFDM0Msb0RBQW9EO0FBQ3BELGdDQUFnQztBQUNoQyx1RUFBeUQ7QUFFOUMsUUFBQSxXQUFXLEdBQUcsQ0FBQyxHQUFXLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFcEQsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDMUIsSUFBRyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxFQUFDO1FBQ3hCLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBUSxFQUFFLFFBQWEsRUFBRSxFQUFFO1lBQ3JDLElBQUcsR0FBRyxFQUFDO2dCQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakI7aUJBQUk7Z0JBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN0QjtRQUNMLENBQUMsQ0FBQyxDQUFBO0tBQ0w7U0FBSTtRQUNELHdDQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0tBQ3JEO0FBRUwsQ0FBQyxDQUFBO0FBRUQscUNBQXFDO0FBQzFCLFFBQUEsVUFBVSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3RELElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxHQUFRLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDNUUsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVTLFFBQUEsVUFBVSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3RELElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ3hCLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFUyxRQUFBLFdBQVcsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN2RCxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtRQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3RCLElBQUksR0FBRyxFQUFFO2dCQUNULEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDYjtpQkFBTTtnQkFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyJ9