// import { useRef } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  loadMore: () => void;
  onRef: React.RefObject<HTMLButtonElement>;
}

export default function LoadMoreBtn({ onRef, loadMore }: LoadMoreProps) {
  return (
    <button className={css.button} onClick={loadMore} ref={onRef}>
      Load more
    </button>
  );
}

// const LoadMoreBtn: React.FC<LoadMoreProps> = ({ onRef, loadMore }) => {
//   return (
//     <button className={css.button} onClick={loadMore} ref={onRef}>
//       Load more
//     </button>
//   );
// };

// export default LoadMoreBtn;
