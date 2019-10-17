"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const productController = __importStar(require("./controllers/ProductController"));
const elasticSearchController = __importStar(require("./controllers/ElasticSearchController"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
        "X-Password-Expired"
    ],
    optionsSuccessStatus: 200
}));
app.set("port", process.env.PORT || 4000);
app.get('/', (req, res) => {
    res.send("Hello word");
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdEQUF3QjtBQUN4QixzREFBOEI7QUFFOUIsbUZBQXFFO0FBQ3JFLCtGQUFpRjtBQUVqRiw4REFBcUM7QUFDckMsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsY0FBSSxDQUFDO0lBQ0gsTUFBTSxFQUFFLENBQUMsTUFBVyxFQUFFLEVBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDaEQsV0FBVyxFQUFFLElBQUk7SUFDakIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixjQUFjLEVBQUU7UUFDZCw4QkFBOEI7UUFDOUIsNkVBQTZFO1FBQzdFLG9CQUFvQjtLQUNyQjtJQUNELG9CQUFvQixFQUFFLEdBQUc7Q0FDMUIsQ0FBQyxDQUNILENBQUM7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztBQUcxQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFBO0FBRUYsZ0JBQWdCO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJELEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDcEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUMifQ==