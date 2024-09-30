import { useState } from 'react'
import './ClientCard.css'

const ClientCard = ({ title, description, titleBlack, titleBlack2 }) => {
	const [flipped, setFlipped] = useState(false)

	const handleClick = () => {
		setFlipped(!flipped)
	}

	return (
		<div
			className={`card-container ${flipped ? 'flipped' : ''}`}
			onClick={handleClick}
		>
			<div className='card'>
				<div className='front'>
					<h3>{title}</h3>
					<div className='info-icon'>i</div>
				</div>
				<div className='back'>
					<h3>{titleBlack}</h3>
					<h4>{titleBlack2}</h4>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

export default ClientCard
