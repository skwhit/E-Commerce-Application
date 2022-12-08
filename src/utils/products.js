export async function getProducts(state, setState) {
  try {
    const result = await fetch(`https://fakestoreapi.com/products`);
    const products = await result.json();
    setState({ ...state, products: products, loading: false, error: false});
    console.log("hi")
  } catch (err) {
    console.log(err.message);
  }
}

export async function getProductsByCategory(state, setState, category) {
  try {
    const result = await fetch(
      `https://fakestoreapi.com/products/categories/?=jewelery`
    );
    const products = await result.json();
    console.log(products)
    setState({ ...state, products: products, loading: false, error: false});
  } catch (err) {
    console.log(err.message);
  }
}
