import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const CartScreen = (props) => {
    // Pour récuperer le produit ajour au panier toujours en js utilisé le params 
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const dispatch = useDispatch();
       useEffect(() => {
      if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

    return (
        <div>
            <h1>Cart Screen</h1>
            <p>AJOUTER AUN PANIER : Produit Numéro {productId} Quantité: {qty}</p>
        </div>
    );
};

export default CartScreen;