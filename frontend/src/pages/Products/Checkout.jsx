import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Select from '../../components/UI/Select';
import Badge from '../../components/UI/Badge';
import AnimatedSection from '../../components/UI/AnimatedSection';
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Lock,
  CheckCircle,
  Package,
  Truck,
  ShieldCheck,
} from 'lucide-react';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    // Shipping Information
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    
    // Payment Information
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Additional
    orderNotes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Process payment (simulate)
      setTimeout(() => {
        setOrderPlaced(true);
        clearCart();
      }, 1500);
    }
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-heading font-semibold mb-4">Your Cart is Empty</h1>
          <p className="text-ink-secondary mb-8">Add items to your cart before checking out</p>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="pt-20 section-padding bg-surface-raised">
        <div className="container-custom">
          <AnimatedSection animation="scale">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-success-text" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-ink">
 Order Placed Successfully!
              </h1>
              <p className="text-xl text-ink-secondary mb-8">
                Thank you for your order. We'll send you a confirmation email shortly.
              </p>
              
              <Card className="mb-8">
                <div className="text-left space-y-4">
                  <div>
                    <p className="text-sm text-ink-secondary mb-1">Order Number</p>
                    <p className="text-2xl font-semibold text-indigo-300">
                      #ORD{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-ink-secondary mb-1">Order Total</p>
                      <p className="text-xl font-semibold text-ink">
                        ₹{(getCartTotal() * 83).toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-ink-secondary mb-1">Estimated Delivery</p>
                      <p className="text-xl font-semibold text-ink">3-5 Business Days</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/products')}>
                  Continue Shopping
                </Button>
                <Button variant="outline" onClick={() => navigate('/')}>
                  Back to Home
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  return (
    <div className="pt-20 section-padding bg-surface-raised">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-2 text-ink">
            Checkout
          </h1>
          <p className="text-ink-secondary mb-8">Complete your purchase securely</p>
        </AnimatedSection>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-indigo-300' : 'text-ink-tertiary'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 1 ? 'bg-primary-600 text-ink' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="hidden sm:inline font-semibold">Shipping</span>
            </div>
            <div className={`h-1 w-20 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`} />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-indigo-300' : 'text-ink-tertiary'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 2 ? 'bg-primary-600 text-ink' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="hidden sm:inline font-semibold">Payment</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {step === 1 && (
                <AnimatedSection>
                  <Card>
                    <h2 className="text-2xl font-heading font-semibold mb-6 text-ink flex items-center gap-2">
                      <Truck className="w-6 h-6 text-indigo-300" />
                      Shipping Information
                    </h2>
                    
                    <div className="space-y-4">
                      <Input
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        icon={<User size={20} />}
                        placeholder="John Doe"
                        required
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          icon={<Mail size={20} />}
                          placeholder="john@example.com"
                          required
                        />
                        <Input
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          icon={<Phone size={20} />}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>

                      <Input
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        icon={<MapPin size={20} />}
                        placeholder="Street address, apartment, suite, etc."
                        required
                      />

                      <div className="grid md:grid-cols-3 gap-4">
                        <Input
                          label="City"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Mumbai"
                          required
                        />
                        <Select
                          label="State"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          options={[
                            { value: '', label: 'Select State' },
                            { value: 'MH', label: 'Maharashtra' },
                            { value: 'DL', label: 'Delhi' },
                            { value: 'KA', label: 'Karnataka' },
                            { value: 'TN', label: 'Tamil Nadu' },
                            { value: 'WB', label: 'West Bengal' },
                          ]}
                          required
                        />
                        <Input
                          label="Pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          placeholder="400001"
                          required
                        />
                      </div>

                      <Input
                        label="Order Notes (Optional)"
                        name="orderNotes"
                        value={formData.orderNotes}
                        onChange={handleChange}
                        placeholder="Any special instructions for delivery"
                      />
                    </div>
                  </Card>
                </AnimatedSection>
              )}

              {step === 2 && (
                <AnimatedSection>
                  <Card>
                    <h2 className="text-2xl font-heading font-semibold mb-6 text-ink flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-indigo-300" />
                      Payment Information
                    </h2>
                    
                    <div className="space-y-4">
                      <Input
                        label="Card Number"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        icon={<CreditCard size={20} />}
                        placeholder="1234 5678 9012 3456"
                        required
                      />

                      <Input
                        label="Cardholder Name"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        icon={<User size={20} />}
                        placeholder="John Doe"
                        required
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Expiry Date"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                        />
                        <Input
                          label="CVV"
                          name="cvv"
                          type="password"
                          value={formData.cvv}
                          onChange={handleChange}
                          icon={<Lock size={20} />}
                          placeholder="123"
                          maxLength={3}
                          required
                        />
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-indigo-300 mb-1">
                            Secure Payment
                          </p>
                          <p className="text-xs text-indigo-300">
                            Your payment information is encrypted and secure. We never store your card details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="mt-4">
                    <h3 className="text-lg font-semibold mb-4 text-ink">Shipping Address</h3>
                    <div className="text-ink-secondary space-y-1">
                      <p className="font-semibold text-ink">{formData.fullName}</p>
                      <p>{formData.address}</p>
                      <p>{formData.city}, {formData.state} {formData.pincode}</p>
                      <p>{formData.country}</p>
                      <p className="pt-2">{formData.phone}</p>
                      <p>{formData.email}</p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setStep(1)}
                      className="mt-4"
                    >
                      Edit Address
                    </Button>
                  </Card>
                </AnimatedSection>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <h3 className="text-xl font-heading font-semibold mb-4 text-ink flex items-center gap-2">
                  <Package className="w-5 h-5 text-indigo-300" />
                  Order Summary
                </h3>
                
                <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 pb-3 border-b border-gray-100">
                      <div className="w-16 h-16 shrink-0 rounded-[10px] border border-line bg-surface-field flex items-center justify-center">
                        {item.image ? (
                          <img src={item.image} alt="" className="no-plate w-full h-full object-contain p-1" />
                        ) : (
                          <Package className="w-6 h-6 text-indigo-400" aria-hidden="true" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-ink text-sm">{item.name}</h4>
                        <p className="text-xs text-ink-secondary">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-ink">
                        ₹{(item.price * item.quantity * 83).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex justify-between text-ink-secondary">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{(subtotal * 83).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-ink-secondary">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <Badge variant="success" size="sm">FREE</Badge>
                      ) : (
                        `₹${(shipping * 83).toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-ink-secondary">
                    <span>GST (18%)</span>
                    <span className="font-semibold">₹{(tax * 83).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-semibold mb-6">
                  <span>Total</span>
                  <span className="text-indigo-300 text-2xl">₹{(total * 83).toFixed(2)}</span>
                </div>

                {step === 1 && (
                  <Button type="submit" fullWidth size="lg">
                    Continue to Payment
                  </Button>
                )}

                {step === 2 && (
                  <Button type="submit" fullWidth size="lg" className="bg-green-600 hover:bg-green-700">
                    <Lock className="w-5 h-5 mr-2" />
                    Place Order
                  </Button>
                )}

                {subtotal > 100 && shipping === 0 && (
                  <div className="mt-4 text-center">
                    <Badge variant="success" size="sm" icon={<CheckCircle size={14} />}>
                      Free Shipping Applied!
                    </Badge>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
