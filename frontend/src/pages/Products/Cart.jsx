import { useApp } from '../../context/AppContext';
import { Trash2, Plus, Minus, ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal } = useApp();

  if (cart.length === 0) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-heading font-semibold mb-4">Your Cart is Empty</h1>
          <p className="text-ink-secondary mb-8">Start shopping to add items to your cart</p>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 section-padding bg-surface-raised">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} hover={false}>
                <div className="p-6 flex items-center gap-6">
                  <div className="w-24 h-24 shrink-0 rounded-[10px] border border-line bg-surface-field flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt="" className="no-plate w-full h-full object-contain p-1.5" />
                    ) : (
                      <Package className="w-8 h-8 text-indigo-400" aria-hidden="true" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink mb-2">{item.name}</h3>
                    <p className="text-ink-secondary text-sm mb-2">{item.category}</p>
                    <p className="text-2xl font-semibold text-indigo-300">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-10 h-10 bg-red-100 text-danger-text rounded-lg flex items-center justify-center hover:bg-red-200"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <Card hover={false}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-ink-secondary">Subtotal</span>
                    <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-secondary">Shipping</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-indigo-300">${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
                <Link to="/checkout">
                  <Button fullWidth size="lg">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
