import { useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";

const PhotosList = ({ album }) => {
  const { data, error, isLoading } = useFetchPhotosQuery(album);

  let content;
  if (isLoading) {
    content = <Skeleton times={3} className="h-40 w-full" />;
  } else if (error) {
    content = <div>Error loading photos...</div>;
  } else {
    content = data.map((photo) => {
      return (
        <div key={photo.id}>
          <img src={photo.url} />
        </div>
      );
    });
  }

  return (
    <div>
      <h3>Photos for {album.title}</h3>
      <div>{content}</div>
    </div>
  );
};

export default PhotosList;
