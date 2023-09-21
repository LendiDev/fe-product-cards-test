import "./styles/App.css";
import ProductCard from "./components/ProductCard/ProductCard";

const productsData = [
  {
    id: "3fwekfok3f09k30fk30fk0",
    isLowStock: true,
    stockPercent: 50,
    isFeatured: true,
    rating: 5,
    totalReviews: 23,
    orderInSeconds: 6453,
    price: 1699.99,
    discountedPrice: 1599.99,
  },
  {
    id: "3fwekfok3f09k30fk30fk1",
    isLowStock: false,
    stockPercent: 100,
    isFeatured: false,
    rating: 4,
    totalReviews: 1,
    orderInSeconds: 32843,
    price: 1599.99,
    discountedPrice: 1599.99,
  },
];

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <ol>
            {productsData.map((product) => (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}

export default App;
