import { useState, useEffect } from 'react'
import './Filters.css'

const Filter = ({ brands, categories, onFilterChange, availableBrands }) => {
	const [selectedBrands, setSelectedBrands] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
	const [priceRange, setPriceRange] = useState([150, 1500])
	const [inStockOnly, setInStockOnly] = useState(false)

	const handleBrandChange = brand => {
		setSelectedBrands(prev =>
			prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
		)
	}

	const handleCategoryChange = category => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(c => c !== category)
				: [...prev, category]
		)
	}

	const handlePriceChange = e => {
		setPriceRange([0, Number(e.target.value)])
	}

	const handleInStockChange = () => {
		setInStockOnly(!inStockOnly)
	}

	useEffect(() => {
		onFilterChange({
			selectedBrands,
			selectedCategories,
			priceRange,
			inStockOnly
		})
	}, [
		selectedBrands,
		selectedCategories,
		priceRange,
		inStockOnly,
		onFilterChange
	])
	const handleResetFilters = () => {
		setSelectedBrands([])
		setSelectedCategories([])
		setPriceRange([150, 1500])
		setInStockOnly(false)
	}

	return (
		<div className='filter-section'>
			<div>
				<h4>Производитель</h4>
				{brands.map(brand => (
					<label key={brand}>
						<input
							type='checkbox'
							onChange={() => handleBrandChange(brand)}
							checked={selectedBrands.includes(brand)}
							disabled={!availableBrands.includes(brand)}
						/>
						{brand}
					</label>
				))}
			</div>
			<div>
				<h4>Категории</h4>
				{categories.map(category => (
					<label key={category}>
						<input
							type='checkbox'
							onChange={() => handleCategoryChange(category)}
							checked={selectedCategories.includes(category)}
						/>
						{category}
					</label>
				))}
			</div>
			<div>
				<h4>Ценовой диапазон</h4>
				<input
					style={{ width: '80%' }}
					type='range'
					min='150'
					max='1500'
					value={priceRange[1]}
					onChange={handlePriceChange}
				/>
				<span>{priceRange[1]}</span>
			</div>
			<div style={{ flexDirection: 'row', marginTop: '10px' }}>
				<label>
					<input
						type='checkbox'
						onChange={handleInStockChange}
						checked={inStockOnly}
					/>
					В наличии
				</label>
			</div>
			<button onClick={handleResetFilters}>Cброс фильтра</button>
		</div>
	)
}

export default Filter
