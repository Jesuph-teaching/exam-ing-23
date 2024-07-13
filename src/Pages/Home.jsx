import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<h1>Bienvenue à la page d'accueil</h1>
			<Link to="/books">
				<button>Voir les livres</button>
			</Link>
		</div>
	);
}
