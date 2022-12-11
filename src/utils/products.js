export async function getProducts(state, setState) {
  try {
    const result = await fetch(`https://fakestoreapi.com/products`);
    const products = await result.json();
    console.log(products);
    setState({ ...state, products: products, loading: false, error: false });
    console.log("hi");
  } catch (err) {
    console.log(err.message);
  }
}

export async function getProductsByCategory(state, setState, category) {
  try {
    const result = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const products = await result.json();
    console.log(products);
    setState({ ...state, products: products, loading: false, error: false });
  } catch (err) {
    console.log(err.message);
  }
}

export async function getProductById(id, setProduct, setLoading) {
  try {
    const result = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await result.json();
    console.log(product);
    setProduct(product);
    setLoading(false);
  } catch (err) {
    console.log(err.message);
  }
}
