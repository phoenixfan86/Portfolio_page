document.addEventListener('click', event => {
	const cards = document.querySelectorAll('.fleep-project-card')
	cards.forEach(card => {
		if (!card.contains(event.target)) {
			card.classList.remove('flipped')
		}
	})
})

const projectCards = document.querySelectorAll('.fleep-project-card')
projectCards.forEach(card => {
	card.addEventListener('click', () => {
		card.classList.toggle('flipped')
	})
})
