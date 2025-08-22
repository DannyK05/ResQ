import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ModMedical = ({ visibility, Close }) => {
  return (
    <section
      className={`${
        visibility ? "absolute" : "hidden"
      } w-[100%] bg-white py-[10px] px-[15px] rounded-[20px] z-10 shadow shadow-black top-[2px]`}
    >
      <h1>
        Manage your medical info{" "}
        <ion-icon onClick={Close} size="large" name="close-circle"></ion-icon>
      </h1>
      <form className="overflow-scroll">
        <div>
          <h1>
            <span className="text-blue">Personal</span> Medical Info
          </h1>
          <label>Gender</label>
          <select
            className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[40%]"
            name="gender"
          >
            <option value="Male">Male</option>
            <option value="Female"> Female</option>
          </select>
          <label>Blood Type</label>
          <select
            className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[20%]"
            name="bloodtype"
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
            value="true"
          />{" "}
          <label>Yes</label>
          <input
            name="disability"
            className="ml-[8px]"
            type="radio"
            value="false"
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
          />{" "}
          <label>Yes</label>
          <input name="allergy" className="ml-[8px]" type="radio" value="No" />
          <label>No</label>
          <br />
          <label>If yes please specify</label>
          <Input name="allergen" type="text" />
          <br />
          <label>Chronic medical history or conditions</label>
          <select
            className="border-2 border-[#E7DDDD] p-[5px] hover:border-[#2592F6] m-[10px] w-[80%]"
            name="condition"
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
          <Input
            name="healthinsurance"
            type="text"
            placeholder="Health Insurance Provider"
          />
          <Input name="policynumber" type="text" placeholder="Policy Number" />
        </div>
        <Button type="submit">
          <h1>Update</h1>
        </Button>
      </form>
    </section>
  );
};

export default ModMedical;
