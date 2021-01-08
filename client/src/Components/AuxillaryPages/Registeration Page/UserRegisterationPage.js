import React, { useEffect, useState } from "react";
import "./registerationPage.css";
import Navbar from "../../Home/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import {
  setLoginStatus,
  setUserDetails,
  setUserRegister,
} from "../../../data/Data";
import regImage from "../../../pictures/regImage.png";
import axios from "axios";

function UserRegisterationPage() {
  const [isRegistered, setisRegistered] = useState(false);
  const [Id, setId] = useState("");

  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    mobile: "",

    address: "",
    state: "",
    city: "",
    pincode: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }
  const history = useHistory();
  useEffect(() => {
    document.title = "User Registeration";
  }, []);
  const handleRegFormSubmit = (event) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/users/register`, details)
      .then((res) => {
        setisRegistered(res.data.valid);
        setUserDetails({ id: res.data.id });
        setId(res.data.id);
      });
    event.preventDefault();
  };
  if (isRegistered === true) {
    setLoginStatus(true);
    setUserRegister(true);
    history.push(`/user/${Id}`);
    return null;
  } else {
    if (isRegistered !== false) {
      alert("User already exists with this email");
      window.location.reload(false);
    }
    return (
      <div className="regPage">
        <Navbar />
        <div className="regPage-bgImage">
          <div className="regPage-left">
            <img src={regImage} alt="regImage" />
          </div>
          <div className="regPage-regForm">
            <p className="regPage-heading">User Registeration</p>
            <form
              className="regPage-form "
              action="#"
              onSubmit={handleRegFormSubmit}
            >
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputFname">First Name</label>
                  <input
                    onChange={handleChange}
                    name="fname"
                    value={details.fname}
                    type="text"
                    className="form-control"
                    id="inputFname"
                    required
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputLname">Last Name</label>
                  <input
                    onChange={handleChange}
                    name="lname"
                    value={details.lname}
                    type="text"
                    className="form-control"
                    id="inputLname"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputEmail">Email</label>
                  <input
                    onChange={handleChange}
                    name="email"
                    value={details.email}
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    required
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputPassword">Password</label>
                  <input
                    onChange={handleChange}
                    value={details.password}
                    name="password"
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                  <label for="inputAddress">Address</label>
                  <input
                    onChange={handleChange}
                    name="address"
                    value={details.address}
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputState">State</label>
                  <select
                    onChange={handleChange}
                    id="inputState"
                    name="state"
                    value={details.state}
                    className="form-control"
                    required
                  >
                    <option selected></option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputCity">City</label>
                  <input
                    onChange={handleChange}
                    name="city"
                    value={details.city}
                    type="text"
                    className="form-control"
                    id="inputCity"
                    required
                  />
                </div>
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputZip">Pincode</label>
                  <input
                    onChange={handleChange}
                    name="pincode"
                    value={details.pincode}
                    type="text"
                    className="form-control"
                    id="inputZip"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div class="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputDob">Date of birth</label>
                  <input
                    onChange={handleChange}
                    value={details.dob}
                    name="dob"
                    type="date"
                    class="form-control"
                    id="inputDob"
                    placeholder=""
                    required
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3 col-xs-3">
                  <label for="inputGender">Gender</label>
                  <select
                    onChange={handleChange}
                    id="inputGender"
                    name="gender"
                    value={details.gender}
                    className="form-control"
                    required
                  >
                    <option selected>Select...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-group col-md-5 col-sm-5 col-xs-5">
                  <label for="inputMobile">Mobile no.</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+91</span>
                    </div>
                    <input
                      onChange={handleChange}
                      name="mobile"
                      id="inputMobile"
                      value={details.mobile}
                      type="tel"
                      className="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link className="ml-2" to="/login">
                Already a member?
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegisterationPage;
