import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardHeader, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "react-query";
import {
  addProduct,
  getProduct,
  updateProduct,
} from "../services/product.service";
import { productSchema } from "../schemas/product.schema";

export function ProductCreate() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data } = useQuery(["products", id], () => getProduct(id), {
    enabled: !!id,
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: null,
    },
    validationSchema: productSchema,
    onSubmit: async (values) => {
      if (id) {
        await updateProduct(id, values);
        alert("Product updated successfully!");
        // swal.fire({
        //   title: "Product updated successfully!",
        // });
      } else {
        await addProduct(values);
        alert("Product added successfully!");

        // swal.fire({
        //   title: "Product added successfully!",
        // });
      }
      navigate("/products");
    },
  });

  React.useEffect(() => {
    console.log(data);
    if (data) {
      formik.setValues(data);
    }
  }, [data]);

  return (
    <div
      style={{
        height: "100vh",
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
          title={id ? "Edit product" : "Add new product"}
        ></CardHeader>

        <CardContent>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", gap: "16px", flexDirection: "column" }}
          >
            <div>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                name="description"
                fullWidth
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                fullWidth
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </div>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
