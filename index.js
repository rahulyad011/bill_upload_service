const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

const bills = [
    {
        patient: {
            name: "testUser1",
            address: "ABC, NY, USA"
        },
        hospitalName: "ABC General",
        dateOfService: "02/02/2022",
        billAmount: "199"
    }
]

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))


app.get('/items', (req, res) => {
    try {
        // return the list of medical bills
        res.json(bills)
      } catch (error) {
        // return a 500 Internal Server Error status code
        // along with a error message in the response body
        res.status(500).json({ message: error.message });
      }
})

app.post('/items', (req, res) => {
    try {
        const { patient, hospitalName, dateOfService, billAmount } = req.body;
        const patientName = patient.name;
        const patientAddress = patient.address
        
        // expections
        // validate the input
        if (!patientName || !patientAddress || !hospitalName || !dateOfService || !billAmount) {
          throw new Error('Invalid input. All fields are required');
        }
        // check for negative bill amount
        if (billAmount < 0) {
            throw new Error('Bill amount cannot be negative, please check');
          }

        // create a new medical bill
        const newBill = {
            patient,
            hospitalName,
            dateOfService,
            billAmount
        };

        // add the medical bill to the in-memory list of bills
        bills.push(newBill)
        // return the created medical bill
        res.status(201).json(newBill)
    } catch (error) {
      // return a 500 Internal Server Error status code
      // along with a error message in the response body
      res.status(500).json({ message: error.message });
    }
})

app.listen(3001, () => {
    console.log('Listening to port 3001')
})

module.exports = app;