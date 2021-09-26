"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cypressRunner_1 = __importDefault(require("./cypressRunner"));
const app = (0, express_1.default)();
const port = 3333;
//Middleware
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/createText", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { login, pass, plant }, } = req;
    (0, cypressRunner_1.default)(login, pass, plant);
    //   cypress
    //     .run({
    //       // the path is relative to the current working directory
    //       spec: "cypress/integration/plant.spec.js",
    //       env: {
    //         login_user: `${req.body.login}`,
    //         login_pass: `${req.body.pass}`,
    //         plant: `${req.body.plant}`,
    //       },
    //     })
    //     .then((results) => {
    //       console.log(results);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
}));
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
