import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">{product.price}</p>
      <Button className="mt-2 w-full">Add to Cart</Button>
    </div>
  );
}
