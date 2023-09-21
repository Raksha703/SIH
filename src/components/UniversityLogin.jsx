import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const initialValues = {
  userID: "",
  password: "",
};

const userSchema = yup.object().shape({
  userID: yup.string().required("required"),
  password: yup.string().required("required"),
});

const UniversityLogin = () => {
  const { auth, setAuth } = useAuth();
  const handleFormSubmit = () => {
    const university = true;
    setAuth({ university });
    console.log("university: ",auth.university);
  };
  return (
    <div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex justify-center mt-[80px]"
          >
            <div className="flex flex-col gap-6 w-[300px] justify-center ">
              <TextField
                fullWidth
                // color=""
                variant="filled"
                type="text"
                label="UniversityID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userID}
                name="userID"
                error={!!touched.userID && !!errors.userID}
                helperText={touched.userID && errors.userID}
              />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <Link to="/university" className="flex justify-center">
                <Button type="submit" color="secondary" variant="contained">
                  Login
                </Button>
              </Link>
              <h1>
                Didn't have account?{" "}
                <Link to="/register" className="cursor-pointer underline">
                  Register here
                </Link>
              </h1>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UniversityLogin;
