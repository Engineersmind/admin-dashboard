import { useQuery, useQueryClient } from "react-query";

import * as React from "react";

import Grid from "@mui/material/Grid";
import { deletProduct, fetchProducts } from "../services/product.service";
import { ProductCard } from "../components/ProductCard";

export function Products() {
  const { data, refetch } = useQuery("products", fetchProducts);
  const queryClient = useQueryClient();

  const handleDelete = async (event, id) => {
    event.stopPropagation();
    await deletProduct(id);
    refetch();
    alert("Product deleted successfully!");
  };

  return (
    <Grid container spacing={2}>
      {data?.products?.map((product, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              product={product}
              key={index}
              handleDelete={handleDelete}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
