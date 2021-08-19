import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

const CartScreen = (props) => {
    // Pour récuperer le produit ajour au panier toujours en js utilisé le params 
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  // On récupère la panier dans redux
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
    const dispatch = useDispatch();
       useEffect(() => {
      if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) =>{
    // delete action
    dispatch(removeFromCart(id));
  }
  
  const checkoutHandler = () =>{
    props.history.push('/signin?redirect=shipping');
  }

    return (
        <div className="row top">
          <div className="col-2">
            <h1>Panier d'achats</h1>
            {cartItems.length === 0 ? <MessageBox>
              Le panier est vide. <Link to="/">Faire des achats</Link>
            </MessageBox>
            :
            (
              <ul>
                {
                  cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img src={item.image} alt={item.name} className="small" />
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </div>
                          <div>
                            <select value={item.qty} onChange={e => dispatch(addToCart(item.product , Number(e.target.value))
                            
                            )
                          }
                            >
                             {/*  Ici, on met le nombre de produit disponible */}
                              {[...Array(item.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                          <div>{item.price} €</div>
                          <div>
                             <button type="button" onClick={() => removeFromCartHandler(item.product)}>
                               Supprimmer
                             </button>
                          </div>
                        </div>
                    </li>
                  ))
                }
              </ul>
            )
            }
          </div>
          <div className="col-1">
            <div className="card card-body">
               <ul>
               <li>
                 <h2>
                Sout-total ({cartItems.reduce((a, c) => a + c.qty, 0)} produit) : 
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} €
              </h2>
                 
               </li>
               <li>
              <button
                type="button"
                onClick={checkoutHandler} 
                className="primary block"
               /*  On block le passage en caisse si le produit n'est pas dans le panier */
                disabled={cartItems.length === 0}
              >
               Passer à la caisse
              </button>
            </li>
               </ul>
               </div>
              </div>
          
        </div>
    );
};

export default CartScreen;