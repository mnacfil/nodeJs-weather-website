const weatherForm = document.querySelector('form')
const weatherInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch(`/weather?address=${weatherInput.value}`).then((response) => {
    response.json().then( (data = {})=> {
        if(data.error) {
            messageOne.textContent = data.error
            messageTwo.textContent = null
        } else {
            const newData = data[0]
            messageOne.textContent = newData.location
            messageTwo.textContent = newData.forecast
            
        }
        weatherInput.value = ''
    })
})
})
