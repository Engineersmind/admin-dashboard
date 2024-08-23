import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";

export function ProductCard({ product, handleDelete }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ height: "100%" }}
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.images[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(event) => handleDelete(event, product.id)}
          >
            Delete
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
