import "./styles/App.css";
import ProductCard from "./components/ProductCard/ProductCard";

const productsData = [
  {
    id: "3fwekfok3f09k30fk30fk0",
    isLowStock: true,
    stockPercent: 22.5,
    isFeatured: true,
    rating: 5,
    totalReviews: 23,
    orderInSeconds: 3546,
  },
  {
    id: "3fwekfok3f09k30fk30fk1",
    isLowStock: false,
    stockPercent: 100,
    isFeatured: false,
    rating: 4,
    totalReviews: 1,
    orderInSeconds: 32843,
  },
];

function App() {
  return (
    <div className="App">
      <main>
        {productsData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </main>
    </div>
  );
}

export default App;
