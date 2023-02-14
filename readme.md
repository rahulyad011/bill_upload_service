Medical Bill Upload Service
This is a simple medical bill upload service built using Node and Express.

Endpoints
The service provides the following two endpoints:

GET /items: returns a list of medical bills.
POST /items: creates a new medical bill.
A medical bill has the following properties:

patient name and address
the hospital name
date of service
bill amount.
Both endpoints accept and return JSON.

Requirements
Node.js v12 or later
npm v6 or later
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/YOUR_USERNAME/medical-bill-upload-service.git
Navigate to the project directory:

bash
Copy code
cd medical-bill-upload-service
Install the dependencies:

Copy code
npm install
Running the Service
You can start the service by running the following command:

sql
Copy code
npm start
The service will be running on http://localhost:3000.

Testing the Service
You can run the API tests by running the following command:

bash
Copy code
npm test
License
This project is licensed under the MIT License.