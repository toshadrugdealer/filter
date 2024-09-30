import ClientCard from './ClientCard'

const Clients = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				minHeight: '350px',
				alignItems: 'center'
			}}
		>
			<ClientCard
				title='РусГидро'
				titleBlack='РАО'
				titleBlack2='Энергетические системы Востока'
				description='Крупнейший поставщик тепловой и электроэнергии Дальнего Востока'
			/>
			<ClientCard
				title='РусГидро'
				titleBlack='РАО'
				titleBlack2='Энергетические системы Востока'
				description='Крупнейший поставщик тепловой и электроэнергии Дальнего Востока'
			/>
			<ClientCard
				title='РусГидро'
				titleBlack='РАО'
				titleBlack2='Энергетические системы Востока'
				description='Крупнейший поставщик тепловой и электроэнергии Дальнего Востока'
			/>
		</div>
	)
}

export default Clients
