import css from "./ScrollButton.module.css";
import { HiChevronDoubleUp } from "react-icons/hi";

export default function ScrollButton({ scrollToTop }) {
  return (
    <button className={css.scrollButton} onClick={scrollToTop}>
      <HiChevronDoubleUp />
    </button>
  );
}
