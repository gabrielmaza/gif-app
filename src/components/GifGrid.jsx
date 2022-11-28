import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {isLoading && <span>Is loading..</span>}
      <div className="card-grid">
        {images.map((item) => (
          <GifItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
