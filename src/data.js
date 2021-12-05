export const filters = {
  availability: [
    { id: 1, value: "in-stock", name: "In stock" },
    { id: 2, value: "out-of-stock", name: "Out of stock" },
  ],
  sizes: [
    { id: 1, value: "small", name: "small" },
    { id: 2, value: "medium", name: "medium" },
    { id: 3, value: "large", name: "large" },
  ],
  colors: ["red", "orange", "green"],
};

export const products = [
  {
    id: 1,
    title: "Skinny jeans limited edition",
    price: 19.199,
    image:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_nashville_baseball_cap_1800x1800.jpg?v=1635033011",
    inStock: true,
    sizes: ["small"],
    colors: ["red"],
  },
  {
    id: 2,
    title: "Skinny jeans limited edition",
    price: 19.199,
    image:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_nashville_baseball_cap_1800x1800.jpg?v=1635033011",
    inStock: false,
    sizes: ["medium"],
    colors: ["orange"],
  },
  {
    id: 3,
    title: "Skinny jeans limited edition",
    price: 19.199,
    image:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_nashville_baseball_cap_1800x1800.jpg?v=1635033011",
    inStock: true,
    sizes: ["large"],
    colors: ["green"],
  },
  {
    id: 4,
    title: "Skinny jeans limited edition",
    price: 19.199,
    image:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_nashville_baseball_cap_1800x1800.jpg?v=1635033011",
    inStock: true,
    sizes: ["large"],
    colors: ["green"],
  },
  {
    id: 5,
    title: "Skinny jeans limited edition",
    price: 19.199,
    image:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_nashville_baseball_cap_1800x1800.jpg?v=1635033011",
    inStock: true,
    sizes: ["large"],
    colors: ["green"],
  },
];

export const pages = [
  { path: "/", name: "home" },
  { path: "products", name: "products" },
];