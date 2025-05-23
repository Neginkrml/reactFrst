import { Formik, Form, Field } from "formik";

const FirstFormik = () => {
  const handleSubmit = (values, actions) => {
    console.log(actions);
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="username" />
        <Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FirstFormik;
