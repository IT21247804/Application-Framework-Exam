import React from 'react';

const Cart = () => {
  // Simulate cart items
  const cartItems = [
    { id: 1, title: "Book One", author: "Author One", price: 10.99 },
    // Add more items as needed
  ];

  const handleCheckout = () => {
    // Simulate checkout process
    alert('Checkout successful!');
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Author: {item.author}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      {cartItems.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
};

export default Cart;
