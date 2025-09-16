import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Product List</h2>
      {data?.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
