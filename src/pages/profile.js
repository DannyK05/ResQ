import axios from "axios";
import EmergencyTab from "../components/emergency";
import HomeHeader from "../components/homeheader";
import Navbar from "../components/nav";
import { useEffect, useState } from "react";

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
      console.error("There was an error getting data", err);
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
        <HomeHeader />
        <header className="flex justify-center align-center py-[5px] px-[5px]">
          <h1>Profile</h1>
        </header>
        <section className="mt-[10px]">
          <h1>Update your Info</h1>
          <form>
            <input
              className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] rounded-[8px]  m-[10px] w-[40%] "
              type="text"
              name="firstname"
              onChange={handleChange}
              placeholder="First name"
              value={userData.firstname}
              required
            />
            <input
              className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] rounded-[8px]  m-[10px] w-[40%] "
              type="text"
              name="lastname"
              onChange={handleChange}
              placeholder="Last name"
              value={userData.lastname}
              required
            />
            <input
              className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] rounded-[8px]  m-[10px] w-[80%] "
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={userData.email}
              required
            />
            <input
              className="border-[1px] border-[#E7DDDD] p-[5px] hover:border-[#2592F6] rounded-[8px]  m-[10px] w-[80%] "
              type="tel"
              name="phonenumber"
              onChange={handleChange}
              placeholder="Phone number"
              value={userData.phonenumber}
              required
            />
            <br />
            <button
              className=" form__button border-neutral-400 active:bg-white active:text-blue rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white"
              type="submit"
            >
              <h1>Update Info</h1>
            </button>
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
