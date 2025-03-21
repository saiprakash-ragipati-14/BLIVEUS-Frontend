export default function FilterSidebar() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Filters</h3>

      {/* Availability Filter */}
      <div className="mb-4">
        <h4 className="font-semibold">Availability</h4>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />{" "}
          <span>In Stock</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />{" "}
          <span>Out of Stock</span>
        </label>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h4 className="font-semibold">Price</h4>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="From"
            className="border p-2 w-1/2 rounded-md"
          />
          <input
            type="text"
            placeholder="To"
            className="border p-2 w-1/2 rounded-md"
          />
        </div>
      </div>

      {/* More Filters */}
      <div className="mb-4">
        <h4 className="font-semibold">More Filters</h4>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" /> <span>Brand</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" /> <span>Color</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />{" "}
          <span>Specification</span>
        </label>
      </div>

      {/* Model Filter */}
      <div className="mb-4">
        <h4 className="font-semibold">Model</h4>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" /> <span>4</span>
        </label>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h4 className="font-semibold">Size</h4>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" /> <span>Small</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />{" "}
          <span>Medium</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" /> <span>Large</span>
        </label>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <h4 className="font-semibold">Brand</h4>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" /> <span>Apple</span>
        </label>
      </div>
    </div>
  );
}
