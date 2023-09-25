import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = async (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, emailId };
    try {
      if (id) {
        await EmployeeService.updateEmployee(id, employee);
      } else {
        await EmployeeService.createEmployee(employee);
      }
      navigate("/employees");
    } catch (error) {
      console.log(error);
      // Optionally show an error message to the user.
    }
  };

  useEffect(() => {
    if (id) {
      const fetchEmployee = async () => {
        try {
          const response = await EmployeeService.getEmployeeById(id);
          const { firstName, lastName, emailId } = response.data;
          setFirstName(firstName);
          setLastName(lastName);
          setEmailId(emailId);
        } catch (error) {
          console.log(error);
        }
      };
      fetchEmployee();
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center mt-3">
            {id ? "Update Employee" : "Add Employee"}
          </h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  placeholder="Enter first name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  placeholder="Enter last name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="emailId">Email Id:</label>
                <input
                  type="email"
                  id="emailId"
                  className="form-control"
                  placeholder="Enter email Id"
                  name="emailId"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-success me-md-2"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
