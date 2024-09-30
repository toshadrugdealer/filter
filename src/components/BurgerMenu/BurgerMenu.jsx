import { useState } from 'react'
import './BurgerMenu.css'

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='burger-menu'>
			<div
				className={`burger-icon ${isOpen ? 'open' : ''}`}
				onClick={toggleMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}

export default BurgerMenu
