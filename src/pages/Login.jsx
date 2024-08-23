import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/dashboard");
    },
  });

  return (
    <div
      style={{
        height: "100vh",

        background: `url(${require("../assets/images/login_background.png")})`,
      }}
    >
      <Card
        sx={{
          width: 500,
          margin: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CardHeader
          title="Login to Account"
          subheader="Please enter your email and password to continue"
        ></CardHeader>

        <CardContent>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", gap: "16px", flexDirection: "column" }}
          >
            <div>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>

            <Button variant="contained" type="submit">
              Sign In
            </Button>

            <Typography>Don’t have an account? </Typography>
            <Typography>Create Account</Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
