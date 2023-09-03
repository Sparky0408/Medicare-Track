import React, { useState } from "react";
import { Footer } from "../components";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address) {
      toast.success("You will hear back from us soon");
      navigate("/product");
    } else {
      toast.error("Please fill in all fields");
    }
  }

  return (
    <>
      <div className="container-fluid py-5 bg-light">
        <div className="container bg-white rounded p-4">
          <h1 className="text-center">Contact Us</h1>
          <hr />
          <div className="row my-4">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="./images/contactUs.jpg"
                alt="Card"
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column justify-content-center h-100">
                <h3>Mobile Number: +(91) 7709235338</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form my-3">
                    <label htmlFor="Name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form my-3">
                    <label htmlFor="Address">Address</label>
                    <textarea
                      className="form-control"
                      id="Address"
                      rows="3"
                      placeholder="Enter your address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="my-2 px-4 mx-auto btn btn-dark"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
