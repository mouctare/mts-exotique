import Product from './components/Product';
import data from './data';


function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">mts-exotique</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
            </div>
            <div>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
          <div>
        <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id}  product={product}/>
            ))}
          </div>
        </div>
        </main>
        <footer className="row center">
            All rigth reserved
        </footer>
    </div>
  );
}

export default App;
