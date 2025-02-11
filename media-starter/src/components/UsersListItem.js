import Button from "./Button";
import { useThunk } from "../store/hooks/useThunk";
import { deleteUser } from "../store";
import { GoTrashcan } from "react-icons/go";

const UsersListItem = ({ user }) => {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleDeleteUser = (id) => {
    doDeleteUser(id);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button
            className="mr-3 hover:bg-red-500 hover:text-white"
            loading={isDeletingUser}
            onClick={() => handleDeleteUser(user)}
          >
            <GoTrashcan />
          </Button>
          {deletingUserError && "Error deleting user..."}
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
