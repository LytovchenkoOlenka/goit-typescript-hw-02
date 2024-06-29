import { Image } from "../../types";
import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "none",
    backgroundSize: "cover",
    overflow: "none",
    border: "none",
    maxWidth: "calc(100vw - 20px)",
    maxHeight: "calc(100vh - 20px)",
    padding: "0px",
  },
};

interface ImageModalProps {
  isOpen: boolean;
  selectedImage: Image | null;
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  selectedImage,
  onClose,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={onClose}
    >
      {selectedImage && (
        <img
          className={css.image}
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
      )}
    </Modal>
  );
}

// const ImageModal: React.FC<ImageModalProps> = ({
//   isOpen,
//   selectedImage,
//   onClose,
// }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       style={customStyles}
//       shouldCloseOnOverlayClick={true}
//       shouldCloseOnEsc={true}
//       onRequestClose={onClose}
//     >
//       {selectedImage && (
//         <img
//           className={css.image}
//           src={selectedImage.urls.regular}
//           alt={selectedImage.alt_description}
//         />
//       )}
//     </Modal>
//   );
// };

// export default ImageModal;
