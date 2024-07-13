import { useState } from 'react';
import CartCardBook from '../Components/CartCardBook';
import { orderSchema } from '../Validation/order';
import toast from 'react-hot-toast';
import { useCart } from '../hooks/useCart';

export default function Checkout() {
    const { state, removeFromCart } = useCart();
    const cart = state.cart;

    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container">
            <h1 className="text-6xl font-bold">Checkout</h1>
            <div className="flex gap-4">
                <div className="flex flex-col gap-4 p-4 md:w-1/2">
                    <h2 className="text-2xl font-bold">Cart</h2>
                    <div className="flex max-h-80 flex-col gap-4 overflow-auto">
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((book) => (
                                <CartCardBook 
                                    key={book.id} 
                                    title={book.title} 
                                    price={book.price} 
                                    id={book.id} 
                                    onRemove={() => removeFromCart(book)}
                                />
                            ))
                        )}
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total:</p>
                        <p className="text-lg font-bold">${cart.reduce((acc, book) => acc + book.price, 0)}</p>
                    </div>
                </div>

                <form className="flex flex-col gap-4 p-4 md:w-1/2" method="POST">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleInputChange}
                        className="input input-bordered"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleInputChange}
                        className="input input-bordered"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleInputChange}
                        className="input input-bordered"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        className="input input-bordered"
                    />
                    <button
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            const order = {
                                ...form,
                                total: cart.reduce((acc, book) => acc + book.price, 0),
                                cart: cart.map((book) => book.id),
                            };
                            orderSchema.safeParseAsync(order).then((result) => {
                                if (result.success) {
                                    toast.success('Order placed successfully');
                                } else {
                                    toast.error('Please fill in the form correctly');
                                }
                            });
                            return false;
                        }}
                        disabled={cart.length === 0}
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
}