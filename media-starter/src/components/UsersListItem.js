import Button from "./Button";
import { useThunk } from "../store/hooks/useThunk";
import { deleteUser } from "../store";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleDeleteUser = (id) => {
    doDeleteUser(id);
  };

  const header = (
    <>
      <Button
        className="mr-3 hover:bg-red-500 hover:text-white"
        loading={isDeletingUser}
        onClick={() => handleDeleteUser(user)}
      >
        <GoTrashcan />
      </Button>
      {deletingUserError && "Error deleting user..."}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
