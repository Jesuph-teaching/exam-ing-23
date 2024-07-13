import { useEffect, useState } from 'react';
import CartCardBook from '../Components/CartCardBook';
import { orderSchema } from '../Validation/order';
import toast from 'react-hot-toast';
import useCart from '../Hooks/useCart';
import { Input } from 'postcss';

export default function Checkout() {
	const { state } = useCart();
	const [form, setForm] = useState({
		name: '',
		address: '',
		phone: '',
	});

	return (
		<div className="container">
			<h1 className="text-6xl font-bold">Checkout</h1>
			<div className="flex gap-4">
				<div className="flex flex-col gap-4 p-4 md:w-1/2">
					<h2 className="text-2xl font-bold">Cart</h2>
					<div className="flex max-h-80 flex-col gap-4 overflow-auto">
						{state.cart.length === 0 ? (
							<p>Your cart is empty.</p>
						) : (
							state.cart.map((book) => (
								<CartCardBook key={book.id} title={book.title} price={book.price} id={book.id} />
							))
						)}
					</div>
					<div className="flex justify-between">
						<p className="text-lg font-bold">Total:</p>
						<p className="text-lg font-bold">${state.cart.reduce((acc, book) => acc + book.price, 0)}</p>
					</div>
				</div>

				<form className="flex flex-col gap-4 p-4 md:w-1/2" method="POST">
					<div>
						<label className="label" htmlFor="name">Name</label>
						<input
							id="name"
							type="name"
							placeholder="Name"
							value={form.name}
							required
							className="input input-bordered input-primary w-full"
							onChange={(e) => setForm({ ...form, name: e.target.value })}
						/>
					</div>
					<div>
						<label className="label" htmlFor="address">Address</label>
						<input
							id="address"
							type="address"
							required
							placeholder="Address"
							value={form.address}
							className="input input-bordered input-primary w-full"
							onChange={(e) => setForm({ ...form, address: e.target.value })}
						/>
					</div>
					<div>
						<label className="label" htmlFor="phone">Phone</label>
						<input
							id="phone"
							type="tel"
							placeholder="Phone"
							value={form.phone}
							className="input input-bordered input-primary w-full"
							onChange={(e) => setForm({ ...form, phone: e.target.value })}
						/>
					</div>
					<button
						className="btn btn-primary"
						onClick={(e) => {
							e.preventDefault();
							if(!form.name || !form.address || !form.phone) {
								toast.error('Please fill in the form correctly');
								return false;
							}
							const order = {
								...form,
								total: state.cart.reduce((acc, book) => acc + book.price, 0),
								cart: state.cart.map((book) => book.id),
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
						disabled={state.cart.length === 0}
					>
						Place order
					</button>
				</form>
			</div>
		</div>
	);
}
