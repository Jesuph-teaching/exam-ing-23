import PropTypes from 'prop-types';
import useCart from '../Hooks/useCart';

function CartCardBook({ title, price, id }) {
	const { removeFromCart } = useCart();

	return (
		<div className="grid grid-cols-3 items-center rounded-xl border p-4">
			<p>{title}</p>
			<p className="text-right">${price}</p>
			<button
				className="btn btn-circle btn-outline btn-error btn-sm ml-auto"
				onClick={() => {
					removeFromCart(id);
				}}
			>
				X
			</button>
		</div>
	);
}

CartCardBook.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired,
};

export default CartCardBook;
