"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb://achraf:achraf123@ds057806.mlab.com:57806/outmind';
// var myVar = setInterval(connect, 5000);
connect();
function connect() {
    try {
        mongoose_1.default.connect(uri, (err) => {
            if (err) {
                console.log(err + 'Retrying in 5 secondes');
                setTimeout(() => {
                    connect();
                }, 5000);
            }
            else {
                console.log('Connexion réussite');
            }
        });
    }
    catch (e) {
        console.log(e + 'Retrying in 5 secondes');
        setTimeout(() => {
            connect();
        }, 5000);
    }
}
exports.default = mongoose_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImRiL0Nvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFFaEMsTUFBTSxHQUFHLEdBQVcsNERBQTRELENBQUM7QUFHakYsMENBQTBDO0FBRTFDLE9BQU8sRUFBRSxDQUFDO0FBQ1YsU0FBUyxPQUFPO0lBQ1osSUFBRztRQUNDLGtCQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQy9CLElBQUcsR0FBRyxFQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLHdCQUF3QixDQUFDLENBQUE7Z0JBQzNDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ1osT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7aUJBQUk7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUFBLE9BQU0sQ0FBQyxFQUFDO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsd0JBQXdCLENBQUMsQ0FBQTtRQUN6QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDWjtBQUNMLENBQUM7QUFFRCxrQkFBZSxrQkFBUSxDQUFDIn0=