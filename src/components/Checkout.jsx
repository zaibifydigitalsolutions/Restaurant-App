import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, User, Phone, Mail, Check, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, getCartCount, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    orderType: 'delivery'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 5000);
  };

  const subtotal = getCartTotal();
  const deliveryFee = formData.orderType === 'delivery' ? 2.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <div className="container py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No items in cart</h2>
            <p className="text-gray-600 mb-6">Please add items to your cart before checkout.</p>
            <Link to="/" className="btn btn-primary">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-600 mb-4">
              Your order has been received and will be ready soon.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              You will be redirected to the menu page in a few seconds...
            </p>
            <Link to="/" className="btn btn-primary">
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/cart" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="card">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {formData.orderType === 'delivery' ? 'Delivery Address' : 'Pickup Information'}
                </h2>
                
                <div className="mb-4">
                  <label className="flex items-center space-x-4">
                    <input
                      type="radio"
                      name="orderType"
                      value="delivery"
                      checked={formData.orderType === 'delivery'}
                      onChange={handleInputChange}
                      className="text-purple-600"
                    />
                    <span>Delivery</span>
                    <input
                      type="radio"
                      name="orderType"
                      value="pickup"
                      checked={formData.orderType === 'pickup'}
                      onChange={handleInputChange}
                      className="text-purple-600"
                    />
                    <span>Pickup</span>
                  </label>
                </div>

                {formData.orderType === 'delivery' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input sm:col-span-2"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                )}
              </div>

              <div className="card">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    required
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="form-input sm:col-span-2"
                  />
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    required
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    required
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <button type="submit" className="w-full btn btn-primary">
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{formData.orderType === 'delivery' ? 'Delivery' : 'Pickup'}</span>
                  <span>{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
