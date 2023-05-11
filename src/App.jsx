import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	const [stock, setStock] = useState([]);

	return (
		<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
				stock={stock}
				setStock={setStock}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
				stock={stock}
				setStock={setStock}
			/>
		</>
	);
}

export default App;
