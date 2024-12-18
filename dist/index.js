"use strict";
/*****************************************************************************
/* Objetivo: adquirir conhecimentos sobre TypeScript
* Data: 17/12/2024
* Autor: Gabriela Fernandes
* Versão: 1.0
*****************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// dois jeitos de definir váriavel no typescript:
//      let products = 30 (inferência);
//      let products: number
app.get('/products', (req, res) => {
    return res.send('pintoooo');
});
app.listen(3000, () => {
    console.log("Servidor rodando...");
});
