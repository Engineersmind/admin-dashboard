export const fetchProducts = async () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const deletProduct = async (id) => {
  return fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const addProduct = (values) => {
  return fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  }).then((res) => res.json());
};

export const getProduct = (id) => {
  return fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
};

export const updateProduct = (id, values) => {
  return fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: values.title,
      description: values.description,
      price: values.price,
    }),
  }).then((res) => res.json());
};
