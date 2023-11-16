const express = require('express');
const app = express();
app.use(express.json())

const cars = []

app.listen(3000, () => {
    console.log("Server started.")
})

app.get('/users', (req, res) => {
    console.log("GET all started")
    res.status(200).send({cars: cars})
})

app.get('/users/:id', (req, res) => {
    console.log("GET by ID started")
    const car = cars.find(x => x.id == req.params.id)
    res.status(200).send(car)
})

app.post('/users', (req, res) => {
    console.log('POST started')
    cars.push(req.body)
    res.status(200).send(cars)
})

app.put('/users/:id', (req, res) => {
    console.log("PUT started")
    const car = cars.find(x => x.id == req.params.id)
    const idCar = cars.indexOf(car)
    cars[idCar] = req.body
    res.status(200).send("Car updated")

})

app.delete('/users/:id', (req, res) => {
    console.log("PUT started")
    const car = cars.find(x => x.id == req.params.id)
    const idCar = cars.indexOf(car)
    cars.splice(idCar, 1)
    res.status(200).send("Car deleted")
})