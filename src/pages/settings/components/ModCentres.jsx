import { useState, useEffect } from "react";
import axios from "axios";

const ModCentres = ({ visibility, Close }) => {
  const [centreFormVisibility, setFormVisibility] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisibility(!centreFormVisibility);
  };
  // To store the data of the centre person
  const [centreData, setCentre] = useState({
    centrename: "",
    centreemail: "",
    centrenumber: "",
  });
  // To store input
  const handleChange = (e) => {
    e.preventDefault();
    setCentre({ ...centreData, [e.target.name]: e.target.value });
  };
  // To store the error message
  const [formError, setError] = useState({
    name: "",
    email: "",
    number: "",
    form: "",
  });

  //Form validation
  const formValidation = (centreData) => {
    const error = {};
    let valid = true;
    if (centreData.centrename === "") {
      error.name = "Please input health center name";
      valid = false;
    }
    if (centreData.centrenumber === "") {
      error.number = "Please input contact number";
      valid = false;
    }
    if (centreData.centreemail === "") {
      error.email = "Please input contact email";
      valid = false;
    }
    setError(error);
    return valid;
  };
  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValidation(centreData)) {
      try {
        const response = await axios.post("", centreData);
        console.log("Form submitted", response);
        setError({ ...formError, form: "Form submitted successfully" });
      } catch (error) {
        console.error("Error submitting form:", error);
        setError({ ...formError, form: error.message });
        setTimeout(() => {
          setError({ ...formError, form: "" });
        }, 2000);
      }
    } else {
      console.log("Form validation failed");
      // clears error message after 2 seconds
      setTimeout(() => {
        setError({ ...formError, name: "" });
      }, 2000);
      setTimeout(() => {
        setError({ ...formError, email: "" });
      }, 2000);
      setTimeout(() => {
        setError({ ...formError, number: "" });
      }, 2000);
    }
  };
  // Fetch already present centre ones
  let available = false;
  const [availableCentre, setAvailable] = useState({
    name: "",
    number: "",
    email: "",
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("");
        const data = await response.json;
        setAvailable({ ...availableCentre, ...data });
        console.log("Fetch centre successful", data);
        available = true;
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <section
      className={`${
        visibility ? "absolute" : "hidden"
      } w-[90vw] bg-white py-2.5 px-[15px] rounded-[20px] z-10 shadow shadow-black top-[30%] left-[5vw]`}
    >
      <header className="bg-blue">
        <p className="text-white text-center">
          <span>{formError.form}</span>
        </p>
      </header>

      <h2>
        Manage your health centres{" "}
        <ion-icon onClick={Close} size="large" name="close-circle"></ion-icon>
      </h2>

      {available ? (
        <div>
          <h1>{availableCentre.name}</h1>
          <p>{availableCentre.number}</p>
        </div>
      ) : (
        <p>No health centres was added</p>
      )}

      <button
        onClick={toggleFormVisibility}
        className=" relative bottom-[5px] left-[10px] border-neutral-400 rounded-full text-white"
      >
        <ion-icon
          size="large"
          name={`${centreFormVisibility ? "close-circle" : "add-circle"}`}
        ></ion-icon>
      </button>

      <form
        onSubmit={handleSubmit}
        className={`${centreFormVisibility ? "relative" : "hidden"}`}
      >
        <h1> Add health centres </h1>

        <p className="bg-blue p-[2px] text-white">
          You can add only two health centres
        </p>

        <input
          className="m-2 p-1 w-4/5  border border-[#E7DDDD] rounded-[6px]"
          onChange={handleChange}
          name="centrename"
          value={centreData.centrename}
          type="text"
          placeholder="Hospital name"
        />

        <div
          className={`${
            formError.name ? "bg-blue p-[2px]" : ""
          } text-center  text-white`}
        >
          <p>{formError.name}</p>
        </div>

        <input
          className="m-2 p-1 w-4/5  border border-[#E7DDDD] rounded-[6px]"
          onChange={handleChange}
          name="centrenumber"
          value={centreData.centrenumber}
          type="tel"
          placeholder="Contact number"
        />

        <div
          className={`${
            formError.email ? "bg-blue p-[2px]" : ""
          } text-center  text-white`}
        >
          <p>{formError.number}</p>
        </div>

        <input
          className="m-2 p-1 w-4/5  border border-[#E7DDDD] rounded-[6px]"
          onChange={handleChange}
          name="centreemail"
          value={centreData.centreemail}
          type="email"
          placeholder="Contact mail"
        />

        <div
          className={`${
            formError.number ? "bg-blue p-[2px]" : ""
          } text-center  text-white`}
        >
          <p>{formError.email}</p>
        </div>

        <button
          className=" active:bg-white active:text-blue border-neutral-400 rounded-xl bg-blue mx-1 my-[15px] px-[50px] mx-1 w-[95%] text-white"
          type="submit"
        >
          <h1>Update</h1>
        </button>
      </form>
    </section>
  );
};
export default ModCentres;
