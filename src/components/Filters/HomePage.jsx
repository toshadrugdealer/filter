import { useState, useCallback, useEffect } from 'react'
import Filter from './Filter'
import './Filters.css'
import { products } from './products'
import Cart from './Cart'

const HomePage = () => {
	const [filteredProducts, setFilteredProducts] = useState(products)
	const [availableFilters, setAvailableFilters] = useState({
		availableBrands: [],
		availableCategories: []
	})

	const calculateAvailableFilters = products => {
		const availableBrands = new Set()
		const availableCategories = new Set()

		products.forEach(product => {
			availableBrands.add(product.brand)
			availableCategories.add(product.category)
		})

		return {
			availableBrands: Array.from(availableBrands),
			availableCategories: Array.from(availableCategories)
		}
	}

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

		// Обновляем доступные фильтры на основе отфильтрованных продуктов
		const newAvailableFilters = calculateAvailableFilters(filtered)
		setAvailableFilters(newAvailableFilters)
	}, [])

	useEffect(() => {
		// Изначально все категории и бренды доступны
		const initialFilters = calculateAvailableFilters(products)
		setAvailableFilters(initialFilters)
	}, [])

	return (
		<div className='shop'>
			<Filter
				brands={[...new Set(products.map(p => p.brand))]}
				categories={[...new Set(products.map(p => p.category))]}
				onFilterChange={handleFilterChange}
				availableBrands={availableFilters.availableBrands}
				availableCategories={availableFilters.availableCategories}
			/>
			<div className='product-list'>
				{filteredProducts.length > 0 ? (
					filteredProducts.map(product => (
						<Cart key={product.id} product={product} />
					))
				) : (
					<p style={{ color: 'white' }}>Товары не найдены</p>
				)}
			</div>
		</div>
	)
}

export default HomePage
