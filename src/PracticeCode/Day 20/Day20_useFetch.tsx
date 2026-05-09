import useFetch from './hook';

// 1. Define the shape of your data
interface Product {
  id: number;
  title: string;
}

export const ProductList = () => {
  // 2. Pass the interface into useFetch as an array: <Product[]>
const { data: products, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="product-list">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      
      {/* 3. Use optional chaining or a null check before mapping */}
      { products?.map(product => (
        <div key={product.id}>
          <h2>{ product.title }</h2>
        </div>
      ))}
    </div>
  );
}