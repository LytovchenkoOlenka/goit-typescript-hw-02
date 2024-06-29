import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onOpen: (image: Image) => void;
}

export default function ImageGallery({ images, onOpen }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.item} key={image.id}>
          <ImageCard image={image} openModal={onOpen} />
        </li>
      ))}
    </ul>
  );
}

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onOpen }) => {
// return (
//   <ul className={css.list}>
//     {images.map((image) => (
//       <li className={css.item} key={image.id}>
//         <ImageCard
//           onOpen={onOpen}
//           urls={image.urls}
//           description={image.alt_description}
//         />
//       </li>
//     ))}
//   </ul>
// );
// };

// export default ImageGallery;
