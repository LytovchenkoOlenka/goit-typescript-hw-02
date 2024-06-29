import { Image } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  openModal: (image: Image) => void;
}

export default function ImageCard({ image, openModal }: ImageCardProps) {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        onClick={() => openModal(image)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

// const ImageCard: React.FC<ImageCardProps> = ({ urls, description, onOpen }) => {
//   return (
//     <div className={css.card}>
//       <img
//         className={css.image}
//         onClick={() => onOpen(urls.regular)}
//         src={urls.small}
//         alt={description}
//       />
//     </div>
//   );
// };

// export default ImageCard;
