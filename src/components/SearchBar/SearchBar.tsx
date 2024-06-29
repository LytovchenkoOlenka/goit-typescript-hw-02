import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query === "") {
            toast.error("Please enter a keyword to search for images!");
          }
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </div>
  );
}

// const SearchBar:React.FC<SearchBarProps>({ onSubmit }) {
//   return (
//     <div className={css.container}>
//       <Formik
//         initialValues={{ query: "" }}
//         onSubmit={(values, actions) => {
//           if (values.query === "") {
//             toast.error("Please enter a keyword to search for images!");
//           }
//           onSubmit(values.query);
//           actions.resetForm();
//         }}
//       >
//         <Form className={css.form}>
//           <Field
//             className={css.input}
//             type="text"
//             name="query"
//             placeholder="Search images and photos"
//           />
//           <button className={css.button} type="submit">
//             Search
//           </button>
//           <Toaster position="top-right" reverseOrder={false} />
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default SearchBar;
