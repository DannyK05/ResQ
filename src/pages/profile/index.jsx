import axios from "axios";
import EmergencyTab from "../home/components/Emergency";
import Navbar from "../../components/ui/Navbar";
import { useEffect, useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });
  // update the userData
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  // To fetch the current user data
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://resq-api-5j6r.onrender.com/api/v1/resQ/users/auth/signup"
      );
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      // console.error("There was an error getting data", err);
    }
  };

  // Call fetchUserData when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);
  //to open and close the emergency tab
  const [isEmergencyTabVisible, setEmergencyTabVisible] = useState(false);

  const toggleEmergencyTab = () => {
    setEmergencyTabVisible(!isEmergencyTabVisible);
  };
  return (
    <main className="lg:flex lg:items-center lg:justify-center h-[100vh] w-[100vw] p-2">
      <div className="w-full h-full lg:shadow-lg lg:rounded-lg lg:w-2/5">
        <header className="flex justify-center items-center mx-1 px-[5px]">
          <h1>Profile</h1>
        </header>
        <section className="mt-[10px]">
          <h1>Update your Info</h1>
          <form>
            <Input
              className="w-2/5"
              type="text"
              name="firstname"
              onChange={handleChange}
              placeholder="First name"
              value={userData.firstname}
              required
            />
            <Input
              className="w-2/5"
              type="text"
              name="lastname"
              onChange={handleChange}
              placeholder="Last name"
              value={userData.lastname}
              required
            />
            <Input
              className="w-4/5"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={userData.email}
              required
            />
            <Input
              className="w-4/5"
              type="tel"
              name="phonenumber"
              onChange={handleChange}
              placeholder="Phone number"
              value={userData.phonenumber}
              required
            />
            <br />
            <Button type="submit">
              <h1>Update Info</h1>
            </Button>
          </form>
        </section>
        <Navbar
          toggleEmergencyTab={toggleEmergencyTab}
          visibility={isEmergencyTabVisible}
          activeNav={false}
        />
        <EmergencyTab isVisible={isEmergencyTabVisible} />
      </div>
    </main>
  );
};

export default Profile;
