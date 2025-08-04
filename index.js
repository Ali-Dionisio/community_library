import express from 'express'
import UserRouters from './src/routes/user.routes.js';
import BookRouters from './src/routes/book.routes.js';
import loanRouters from './src/routes/loan.routes.js';
import './src/service/cron.service.js';
import "dotenv/config";
const app = express()

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(UserRouters);
app.use(BookRouters);
app.use(loanRouters);

app.listen(port, () => {
    console.log(`Servidor operante na porta ${port}`)
})