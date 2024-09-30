const Cart = ({ product }) => {
	return (
		<>
			<div className='product-card'>
				<img
					src='https://biolik.com.ua/wp-content/uploads/2019/12/NOFoto.png'
					alt=''
					width={'100px'}
					color='white'
				/>
				<div className='product-info'>
					<h3>{product.name}</h3>
					<p>{product.brand}</p>
					<p>{product.category}</p>
					<p>{product.price}$</p>
					<p>{product.inStock ? 'В наличии' : 'Распродано'}</p>
				</div>
			</div>
		</>
	)
}
export default Cart
