const Employee = require('../../models/Employees');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// This get the whole of the Employers
const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if (!employees) return res.status(204).json({ message: 'No employee found' });
  res.json(employees);
};

const getEmployee = async (req, res) => {
  if (!req?.params.id)
    return res.status(400).json({ message: 'Employee ID required' });
  const employee = await Employee.findOne({ _id: req.param.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `No employee matches ID: ${req.param.id} ` });
  }
  res.json(employee);
};

// This adds up to the emplooyers
const createNewEmployee = async (req, res) => {
  const { firstname, lastname } = req.body;
  if (!firstname || !lastname) {
    return res
      .status(400)
      .json({ message: 'firstname and lastname are required' });
  }

  try {
    const isDetailsExist = await Employee.findOne({ firstname, lastname });

    if (isDetailsExist)
      return res.status(409).json({ message: 'Already Exist' });

    const result = await Employee.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
    res.status(200).json({
      message: `${req.body.firstname} and ${req.body.lastname} created successfully`,
    });
  } catch (err) {
    console.error(err);
  }
};

const deleteEmployee = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: 'Employee ID required' });
  const employee = await Employee.findOne({ _id: req.body.id }).exec();

  if (!employee) {
    return res
      .status(204)
      .json({ message: `No employee matches ID: ${req.body.id} ` });
  }
  const result = await employee.deleteOne({ _id: req.body.id });
  res.json(result);
};

const updateEmployee = async (req, res) => {
  try {
    const id = req?.body?.id;
    if (!id) {
      return res.status(400).json({ message: 'ID parameter is required' });
    }

    const isIdExist = await Employee.findOne({ _id: new ObjectId(id) });
    console.log(!!isIdExist);

    if (!isIdExist) {
      return res
        .status(404)
        .json({ message: `There's no employee that matches this id: ${id}` });
    }

    const result = await Employee.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: 'Internal Server Error', error: err.message });
  }
};

module.exports = {
  getAllEmployees,
  getEmployee,
  createNewEmployee,
  deleteEmployee,
  updateEmployee,
};
