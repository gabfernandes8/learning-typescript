/*****************************************************************************
/* Objetivo: adquirir conhecimentos sobre TypeScript
* Data: 17/12/2024
* Autor: Gabriela Fernandes
* Versão: 1.0
*****************************************************************************/

import express, { Request, Response } from 'express'

const app = express()

// dois jeitos de definir váriavel no typescript:
//      let products = 30 (inferência);
//      let products: number

app.get('/products', (req: Request, res: Response) => {
    return res.send('Meus Produtos')
})

app.listen(3000, () => {
    console.log("Servidor rodando...")
})