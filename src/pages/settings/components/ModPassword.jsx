import PopupLayout from "../../../components/layouts/PopupLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ModPassword = ({ visibility, Close }) => {
  return (
    <PopupLayout
      title="Manage your password"
      visibility={visibility}
      close={Close}
    >
      <form>
        <Input type="password" placeholder="Input old password" />

        <Input type="password" placeholder="Input new password" />

        <Input type="password" placeholder="Confirm new password" />

        <Button type="submit">
          <h1>Update</h1>
        </Button>
      </form>
    </PopupLayout>
  );
};

export default ModPassword;
