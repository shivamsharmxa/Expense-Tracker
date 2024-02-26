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
// const app = require("express")();
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./src/app"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
// const dotenv = require("dotenv");
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
        // * typescript way of initiating the express constructor
        const app = (0, express_1.default)();
        const server = new app_1.default(app);
        const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    if (e.code && e.code === "EADDRINUSE") {
        console.log("Error: address already in use");
    }
    yield prisma.$disconnect();
    process.exit(1);
}));
