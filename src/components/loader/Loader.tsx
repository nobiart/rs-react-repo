import s from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.loaderSpinner}></div>
    </div>
  );
};
