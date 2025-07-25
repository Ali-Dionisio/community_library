import express from 'express'
import UserRouters from './src/routes/user.routes.js'
const app = express()

app.use(express.json());
app.use(UserRouters);

app.listen(3000, () => {
    console.log("Servidor operante na porta 3000")
})