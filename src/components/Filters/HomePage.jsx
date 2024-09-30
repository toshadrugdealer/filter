import { useState, useCallback } from 'react'
import Filter from './Filter'
import './Filters.css'
import { products } from './products'
import Cart from './Cart'

const HomePage = () => {
	const [filteredProducts, setFilteredProducts] = useState(products)

	const handleFilterChange = useCallback(filters => {
		const { selectedBrands, selectedCategories, priceRange, inStockOnly } =
			filters

		const filtered = products.filter(product => {
			const brandMatch =
				selectedBrands.length === 0 || selectedBrands.includes(product.brand)
			const categoryMatch =
				selectedCategories.length === 0 ||
				selectedCategories.includes(product.category)
			const priceMatch =
				product.price >= priceRange[0] && product.price <= priceRange[1]
			const stockMatch = !inStockOnly || product.inStock

			return brandMatch && categoryMatch && priceMatch && stockMatch
		})

		setFilteredProducts(filtered)
	}, [])

	return (
		<div className='shop'>
			<Filter
				brands={[
					'Apple',
					'Samsung',
					'Sony',
					'LG',
					'Amazon',
					'Google',
					'Microsoft',
					'Asus',
					'HP',
					'Dell'
				]}
				categories={['Смартфон', 'Консоль', 'ТВ', 'Ноутбук', 'Планшет']}
				onFilterChange={handleFilterChange}
			/>
			<div className='product-list'>
				{filteredProducts.map(product => (
					<Cart key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default HomePage
