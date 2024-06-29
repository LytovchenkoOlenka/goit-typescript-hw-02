import css from "./ScrollButton.module.css";
import { HiChevronDoubleUp } from "react-icons/hi";

interface ScrollButtonProps {
  scrollToTop: () => void;
}

export default function ScrollButton({ scrollToTop }: ScrollButtonProps) {
  return (
    <button className={css.scrollButton} onClick={scrollToTop}>
      <HiChevronDoubleUp />
    </button>
  );
}

// const ScrollButton: React.FC<ScrollButtonProps> = ({ scrollToTop }) => {
//   return (
//     <button className={css.scrollButton} onClick={scrollToTop}>
//       <HiChevronDoubleUp />
//     </button>
//   );
// };

// export default ScrollButton;
