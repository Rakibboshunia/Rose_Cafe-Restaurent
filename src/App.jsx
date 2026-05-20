import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import Team from './components/Team';
import Reservation from './components/Reservation';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [popup, setPopup] = useState({ show: false, title: '', message: '' });

  // Handle auto-closing of popup
  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => {
        setPopup({ show: false, title: '', message: '' });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [popup.show]);

  const showSuccessPopup = (title, message) => {
    setPopup({ show: true, title, message });
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prev) => prev.id === item.id);
      if (existingItem) {
        showSuccessPopup('Cart Updated!', `Added another ${item.name} to your order.`);
        return prevItems.map((prev) =>
          prev.id === item.id ? { ...prev, quantity: prev.quantity + 1 } : prev
        );
      }
      showSuccessPopup('Added to Cart!', `${item.name} has been added to your order.`);
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    const item = cartItems.find((el) => el.id === id);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (item) {
      showSuccessPopup('Removed from Cart', `${item.name} was removed from your order.`);
    }
  };

  const handleCheckout = () => {
    showSuccessPopup(
      'Order Placed!',
      'Thank you! Your order is being processed. Our kitchen will start preparing it shortly.'
    );
    setCartItems([]);
    setIsCartOpen(false);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={totalCartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <Services />
        <Menu onAddToCart={handleAddToCart} />
        <Team />
        <Reservation onShowSuccess={showSuccessPopup} />
        <Blog />
        <Contact onShowSuccess={showSuccessPopup} />
      </main>

      <Footer onShowSuccess={showSuccessPopup} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {popup.show && (
        <div className="success-popup">
          <CheckCircle2 className="success-popup-icon" size={24} />
          <div className="success-popup-text">
            <h5>{popup.title}</h5>
            <p>{popup.message}</p>
          </div>
        </div>
      )}
    </>
  );
}
