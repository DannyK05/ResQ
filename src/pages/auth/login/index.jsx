import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SignLayout from "../layouts/signLayout";

import Input from "./ui/Input";
import Button from "./ui/Button";

const LoginPage = ({ setAuthenticated }) => {
  const [logData, setData] = useState({
    email: "",
    password: "",
  });
  // set Error
  const [formError, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...logData, [e.target.name]: e.target.value.trim() });
  };
  const [formLoading, setLoading] = useState(false);
  // // Login fetch api function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValidation(logData)) {
      try {
        setLoading(true);
        const response = await fetch(
          "https://resq-api-vl3u.onrender.com/api/v1/resQ/users/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(logData),
          }
        );

        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem("token", token);
          setAuthenticated(true);
          navigate("/home");
        } else {
          console.log("Error: ", response);
          throw new Error("Login failed"); // Or handle different status codes as per your API's response
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
        setError(error.message);
        setLoading(false);
        // clears error message after 3 seconds
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } else {
      console.log("Form validation failed");
      setTimeout(() => {
        setError("");
      }, 2000);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  // Function to display password reset form
  const [resetFormVisibility, setReset] = useState(false);
  const toggleResetForm = () => {
    setReset(!resetFormVisibility);
  };

  // form validation
  const formValidation = (logData) => {
    let error = "";
    let valid = true;

    if (logData.password.trim() === "") {
      error = "Input your password";
      valid = false;
    }

    if (logData.email.trim() === "") {
      error = "Input your email";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(logData.email)) {
      error = "Email is invalid";
      valid = false;
    }

    setError(error);
    return valid;
  };

  const handleLocationAndSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };
  return (
    <SignLayout>
      <section className="mt-[10px]">
        <header className="bg-blue">
          <span className="text-white text-center">
            <p>{formError}</p>
          </span>
        </header>

        <h1>
          <span className="text-blue">Welcome</span> Back
        </h1>

        <p>Login to your account</p>

        <form onSubmit={handleLocationAndSubmit}>
          <Input
            onChange={handleChange}
            name="email"
            value={logData.email}
            type="email"
            placeholder="example@gmail.com"
          />

          <Input
            onChange={handleChange}
            name="password"
            value={logData.password}
            type="password"
            placeholder="Password"
          />

          <Button
            className={
              formError !== "" ? "" : "active:bg-blue active:text-white"
            }
            disabled={formError !== ""}
            type="submit"
          >
            <h1>{formLoading ? "Loading..." : "Login"}</h1>
          </Button>
        </form>

        <Link to="/signup">
          <p>
            Don't have an account? <span className="text-blue">SignUp</span>
          </p>
        </Link>

        <p onClick={toggleResetForm} className="text-blue">
          Forget Password?
        </p>

        <section
          className={`${
            resetFormVisibility ? "relative" : "hidden"
          } w-[90vw] bg-white py-2.5 px-[15px] rounded-[20px] z-10 shadow shadow-black top-[30%] left-[5vw]`}
        >
          <h1>
            Manage your password{" "}
            <ion-icon
              onClick={toggleResetForm}
              size="large"
              name="close-circle"
            ></ion-icon>
          </h1>

          <form>
            <input
              className="m-2 p-1 w-4/5  border border-[#E7DDDD] rounded-[6px]"
              type="email"
              placeholder="Input your email"
            />

            <Button type="submit">
              <h1>Reset Password</h1>
            </Button>
          </form>
        </section>
      </section>
    </SignLayout>
  );
};
export default LoginPage;
