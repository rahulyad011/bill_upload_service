# Medical Bill Upload Service
## This is a simple medical bill upload service built using Node and Express

## Requirements
1. Node.js v12 or later
2. npm v6 or later

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/rahulyad011/bill_upload_service.git
cd cd bill_upload_service
```

Install the dependencies:

```bash
npm install
```

## Running the Service
You can start the service by running the following command:
```bash
npm start
# or
npm run dev
```
The service will be running on http://localhost:3000

## Testing the Service
You can run the API tests by running the following command:
```bash
npm test
# or
npm run test
```
Test is successful if both of the included test cases pass

## Endpoints
The service provides the following two endpoints:

1. `GET /items` - returns a list of medical bills
2. `POST /items` - creates a new medical bill and adds it to the list of bills

Both endpoints accept and return JSON.

## A medical bill has the following properties:
```
sample_bill = {
      patient: {
          name: "",
          address: ""
      }, # name and address of the patient
      hospitalName: "", # name of the hospital
      dateOfService: "", # date of the service
      billAmount: "" # bill amount in USD
  }
```
## Validations:
1. All input fields are mandatory
2. Bill amount can't be a negative value
