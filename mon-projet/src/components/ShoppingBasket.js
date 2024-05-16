import React, { useState } from 'react';

export default function ShoppingBasket() {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (product) => {
    const existingItem = basketItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedItems = basketItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setBasketItems(updatedItems);
    } else {
      setBasketItems([...basketItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h2>Panier d'achat</h2>
      {basketItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <ul>
          {basketItems.map(item => (
            <li key={item.id}>
              {item.name} - Quantité: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
