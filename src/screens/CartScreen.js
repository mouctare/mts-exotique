import React from 'react';

const CartScreen = (props) => {
    // Pour récuperer le produit ajour au panier toujours en js utilisé le params 
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>AJOUTER AUN PANIER : Produit Numéro {productId} Quantité: {qty}</p>
        </div>
    );
};

export default CartScreen;