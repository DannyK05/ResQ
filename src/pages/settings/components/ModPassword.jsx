import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ModPassword = ({ visibility, Close }) => {
  return (
    <section
      className={`${
        visibility ? "absolute" : "hidden"
      } w-[90vw] bg-white py-[10px] px-[15px] rounded-[20px] z-10 shadow shadow-black top-[30%] left-[5vw]`}
    >
      <h1>
        Manage your password{" "}
        <ion-icon onClick={Close} size="large" name="close-circle"></ion-icon>
      </h1>
      <form>
        <Input type="password" placeholder="Input old password" />
        <Input type="password" placeholder="Input new password" />
        <Input type="password" placeholder="Confirm new password" />
        <Button type="submit">
          <h1>Update</h1>
        </Button>
      </form>
    </section>
  );
};

export default ModPassword;
