const BASE_URL ="https://dummyjson.com"

//Fetch all products
export const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    return data.products;
};

//Fetch single product
export const fetchProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    return res.json();
};