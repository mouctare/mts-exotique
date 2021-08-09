import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

import Rating from '../components/Rating';

const ProductScreen = (props) => {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div>Product Not Found</div>;
    }
    return (
        <div>
            <Link to="/">Retour à la liste</Link>
            <div className="row top">
                <div className="col-2">
                   <img className="large" src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                   <ul>
                       <li>
                           <h1>{product.name}</h1>
                       </li>
                       <li>
                           <Rating rating={product.rating} numReviews={product.numReviews} />
                       </li>
                       <li> Prix : {product.price} € </li>
                       <li>
                       <p> Description : {product.description} </p>
                       </li>
                   </ul>
                </div>
                <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Prix</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Statut</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">En stock</span>
                    ) : (
                      <span className="danger">Indisponible</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Ajouter au panier</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductScreen;