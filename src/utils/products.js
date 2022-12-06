export async function getProducts(state, setState) {
  try {
    const result = await fetch(`https://fakestoreapi.com/products`);
    const products = await result.json();
    setState({ ...state, products: products, loading: false, error: false});
  } catch (err) {
    console.log(err.message);
  }
}

export async function getProductsByCategory(state, setState) {
  try {
    const result = await fetch(
      `https://fakestoreapi.com/products/categories/?=${state.category}`
    );
    const products = await result.json();
    setState({ ...state, products: products, loading: false, error: false});
  } catch (err) {
    console.log(err.message);
  }
}
