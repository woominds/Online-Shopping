"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const Connection_1 = __importDefault(require("../Connection"));
exports.ProductSchema = new Connection_1.default.Schema({
    id: { type: Number, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    sexe_category: { type: String, required: false,
    }
});
const Product = Connection_1.default.model('Product', exports.ProductSchema);
exports.default = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImRiL21vZGVscy9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtEQUFxQztBQUV4QixRQUFBLGFBQWEsR0FBRyxJQUFJLG9CQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdDLEVBQUUsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUNuQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDckMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQzNDLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUNyQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDckMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3hDLGFBQWEsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUs7S0FDNUM7Q0FDSixDQUFDLENBQUM7QUFFSCxNQUFNLE9BQU8sR0FBRyxvQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUscUJBQWEsQ0FBQyxDQUFDO0FBQ3pELGtCQUFlLE9BQU8sQ0FBQyJ9