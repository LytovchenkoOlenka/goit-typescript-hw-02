import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpen }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.item} key={image.id}>
          <ImageCard
            onOpen={onOpen}
            urls={image.urls}
            description={image.alt_description}
          />
        </li>
      ))}
    </ul>
  );
}
