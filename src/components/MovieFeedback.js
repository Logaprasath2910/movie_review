import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const MovieFeedback = () => {
  
  const initialValues = {
    name: "",
    movie: "",
    rating: "",
    comments: "",
  };


  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    movie: Yup.string().required("Movie is required"),
    rating: Yup.number()
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5")
      .required("Rating is required"),
    cpmments: Yup.string().max(200, "Feedback should be under 200 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Movie Feedback Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Name: </label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label>Moviet: </label>
            <Field as="select" name="department">
              <option value="">Select Department</option>
              <option value="RRR">RRR</option>
              <option value="F1">F1</option>
              <option value="GBU">GBU</option>
            </Field>
            <ErrorMessage name="movie" component="div" className="error" />
          </div>

          <div>
            <label>Rating (1-5): </label>
            <Field type="number" name="rating" />
            <ErrorMessage name="rating" component="div" className="error" />
          </div>

          <div>
            <label>comments: </label>
            <Field as="textarea" name="comments" />
            <ErrorMessage name="comments" component="div" className="error" />
          </div>

          <button type="submit">Submit Feedback</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MovieFeedback;