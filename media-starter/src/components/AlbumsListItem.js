import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        loading={results.isLoading}
        className="mr-3 hover:bg-red-500 hover:text-white"
        onClick={handleRemoveAlbum}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
