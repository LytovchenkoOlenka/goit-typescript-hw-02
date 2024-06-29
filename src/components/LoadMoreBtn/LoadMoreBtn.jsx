import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onRef, loadMore }) {
  return (
    <button className={css.button} onClick={loadMore} ref={onRef}>
      Load more
    </button>
  );
}
