import css from "./ErrorMassage.module.css";

export default function ErrorMassage() {
  return (
    <div>
      <b className={css.error}>Oops! There was an error! Please reload!</b>
    </div>
  );
}
