import { ShoppingCart } from 'iconsax-react';

export default function CartButton() {
	const cart = [];

	return (
		<div className="fixed bottom-0 right-0 p-4">
			<div className="indicator">
				{cart.length > 0 && (
					<span className="badge indicator-item badge-primary indicator-start">{cart.length}</span>
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
