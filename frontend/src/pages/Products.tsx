import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar"; // Import the sidebar

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "Tk 75,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Xbox Series X",
    price: "Tk 60,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: "Tk 1,80,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Mango Router",
    price: "Tk 25,000",
    image: "https://via.placeholder.com/150",
  },
];

export default function Products() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar: No unwanted margin */}
        <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md flex-shrink-0 mb-4 md:mb-0">
          <FilterSidebar />
        </aside>

        {/* Product Grid: Takes remaining space */}
        <div className="w-full md:w-3/4 p-6">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
