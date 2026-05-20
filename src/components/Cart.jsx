import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3 className="cart-header-title">
            <ShoppingBag size={24} style={{ color: 'var(--accent-gold)' }} />
            Your Order
          </h3>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close Cart">
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={48} style={{ opacity: 0.3 }} />
              <p className="cart-empty-text">Your cart is empty</p>
              <button className="btn-secondary" style={{ padding: '8px 18px', fontSize: '0.85rem' }} onClick={onClose}>
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  
                  <div className="cart-item-controls">
                    <button 
                      className="qty-btn" 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="cart-item-qty">{item.quantity}</span>
                    <button 
                      className="qty-btn" 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>

                    <button 
                      className="remove-item-btn" 
                      onClick={() => onRemoveItem(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Subtotal:</span>
              <span className="cart-total-value">${subtotal.toFixed(2)}</span>
            </div>
            <button className="btn-primary checkout-btn" onClick={onCheckout}>
              Checkout Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
