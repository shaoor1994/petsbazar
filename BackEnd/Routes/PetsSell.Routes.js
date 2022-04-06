
// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const petRoute = express.Router();

// Employee module which is required and imported
let petModel = require('../Models/PetsSell');

// To Get List Of Employees
petRoute.route('/').get(function (req, res) {
petModel.find(function (err, pet) {
if (err) {
console.log(err);
}
else {
res.json(pet);
}
});
});

// To Add New Employee
petRoute.route('/addpets').post(function (req, res) {
let pet = new petModel(req.body);
pet.save()
.then(game => {
res.status(200).json({ 'pets': ' Added Pets' });
})
.catch(err => {
res.status(400).send("Something Went Wrong");
});
});

// To Get Employee Details By Employee ID
petRoute.route('/editPets/:id').get(function (req, res) {
let id = req.params.id;
petModel.findById(id, function (err, pet) {
res.json(pet);
});
});

// To Update The Employee Details
petRoute.route('/updatePets/:id').post(function (req, res) {
petModel.findById(req.params.id, function (err, pet) {
if (!pet)
return next(new Error('Unable To Find Employee With This Id'));
else {
pet.name = req.body.name;
pet.title = req.body.title;
pet.contact = req.body.contact;

pet.save().then(emp => {
res.json('Pets Updated Successfully');
})
.catch(err => {
res.status(400).send("Unable To Update Pets");
});
}
});
});

// To Delete The Employee
petRoute.route('/deletePets/:id').get(function (req, res) {
petModel.findByIdAndRemove({ _id: req.params.id }, function (err, pet) {
if (err) res.json(err);
else res.json('Employee Deleted Successfully');
});
});

module.exports = petRoute;