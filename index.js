import express from 'express'
const app = express()

app.use(express.json());
const users = []


app.post("/users", (req, res) => {
    const body = req.body
    users.push(body);
    res.status(201).send("Usuário criao com sucesso!")
});

app.get('/users', (req, res) => {
res.send({message: "Usuarios: " ,users})
})

app.listen(3000, () => {
    console.log("Servidor operante na porta 3000")
})