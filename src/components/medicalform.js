import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MedicalForm = () => {
  const [medData, setData] = useState({
    gender: "",
    bloodtype: "",
    disability: "",
    allergy: "",
    allergen: "",
    condition: "",
    healthinsurance: "",
    policynumber: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...medData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://resq-api-5j6r.onrender.com/api/v1/resQ/users/auth/signup",
        medData
      );
      console.log("Form submitted successfully:", response);
      navigate("/home");
      // Handle success, show message, reset form, etc.
    } catch (error) {
      console.error("Error submitting form:", error);
      // setError(error.message);
      // Handle other errors, if any.
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>
            <span className="text-blue">Personal</span> Medical Info
          </h1>
          <label>Gender</label>
          <select
            className="border-2 border-[#E7DDDD] p-2 hover:border-[#2592F6] m-[10px] w-[40%]"
            onChange={handleChange}
            name="gender"
            value={medData.gender}
          >
            <option value="Male">Male</option>
            <option value="Female"> Female</option>
          </select>
          <label>Blood Type</label>
          <select
            className="border-2 border-[#E7DDDD] p-1 hover:border-[#2592F6] m-[10px] w-[20%]"
            onChange={handleChange}
            name="bloodtype"
            value={medData.bloodtype}
          >
            <option value="A+"> A+</option>
            <option value="A-">A-</option>
            <option value="B+"> B+</option>
            <option value="B-"> B- </option>
            <option value="O+"> O+</option>
            <option value="O-"> O- </option>
            <option value="AB+"> AB-</option>
            <option value="AB-">AB+</option>
          </select>
          <br />
          <label for="disability">Do you have any disability</label>
          <input
            name="disability"
            className="ml-[8px]"
            type="radio"
            onChange={handleChange}
            checked={medData.disability === "Yes"}
            value="Yes"
          />{" "}
          <label>Yes</label>
          <input
            name="disability"
            className="ml-[8px]"
            type="radio"
            onChange={handleChange}
            checked={medData.disability === "No"}
            value="No"
          />
          <label>No</label>
        </div>

        <div>
          <h1>
            <span className="text-blue">Medical</span> History
          </h1>
          <label>Do you have any allergy</label>
          <input
            name="allergy"
            className="ml-[8px]"
            type="radio"
            value="Yes"
            onChange={handleChange}
            checked={medData.allergy === "Yes"}
          />{" "}
          <label>Yes</label>
          <input
            name="allergy"
            className="ml-[8px]"
            type="radio"
            value="No"
            onChange={handleChange}
            checked={medData.allergy === "No"}
          />
          <label>No</label>
          <br />
          <label>If yes please specify</label>
          <input
            className="border-2 border-[#E7DDDD] p-[5px] rounded-lg hover:border-[#2592F6] m-[10px] w-[80%]"
            name="allergen"
            onChange={handleChange}
            value={medData.allergen}
            type="text"
          />
          <br />
          <label>Chronic medical history or conditions</label>
          <select
            className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%]"
            name="condition"
            onChange={handleChange}
            value={medData.condition}
          >
            <option value="A+"> A+</option>
            <option value="A-">A-</option>
            <option value="B+"> B+</option>
            <option value="B-"> B- </option>
            <option value="O+"> O+</option>
            <option value="O-"> O- </option>
            <option value="AB+"> AB-</option>
            <option value="AB-">AB+</option>
          </select>
        </div>
        <div>
          <h1>
            <span className="text-blue">Health</span> Insurance
          </h1>
          <input
            className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%]"
            name="healthinsurance"
            onChange={handleChange}
            value={medData.healthinsurance}
            type="text"
            placeholder="Health Insurance Provider"
          />
          <input
            className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%]"
            name="policynumber"
            onChange={handleChange}
            value={medData.policynumber}
            type="text"
            placeholder="Policy Number"
          />
        </div>
        <button
          className=" active:bg-white active:text-blue border-neutral-400 rounded-lg bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white"
          type="submit"
        >
          <h1>Finish</h1>
        </button>
      </form>
    </section>
  );
};

export default MedicalForm;
