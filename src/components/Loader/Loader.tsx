import css from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        width="96"
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
