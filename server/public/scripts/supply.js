const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/supplies')
    const data = await response.json()

    const giftContent = document.getElementById('gift-content')
    let gift

    if (data != null) {
        gift = data.find(gift => gift.id === requestedID)
    }

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('description').textContent = gift.description
        document.title = `Art Supplies - ${gift.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Supplies Available !!'
        giftContent.appendChild(message)
    }

}

renderGift()