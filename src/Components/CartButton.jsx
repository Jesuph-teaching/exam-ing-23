import { ShoppingCart } from 'iconsax-react';
import useCart from '../Hooks/useCart';

export default function CartButton() {
	// replace with useCart hook
	const {state} = useCart()

	return (
		<div className="fixed bottom-0 right-0 p-4">
			<div className="indicator">
				{state.cart.length > 0 && (
					<span className="badge indicator-item badge-primary indicator-start">{state.cart.length}</span>
				)}

				<button
					className="btn btn-circle btn-secondary"
					onClick={() => document.getElementById('cart_modal').showModal()}
				>
					<ShoppingCart className="h-7 w-7 flex-shrink-0" variant="TwoTone" />
				</button>
			</div>
		</div>
	);
}
