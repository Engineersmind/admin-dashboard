import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { BrowserRouter } from "react-router-dom";

const product = {
  title: "Laptop title",
  description: "Laptop",
  price: 70000,
  images: ["https://placehold.co/600x400/EEE/31343C"],
};

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <ProductCard product={product} handleDelete={jest.fn()} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(product.title);
  expect(linkElement).toBeInTheDocument();
});
