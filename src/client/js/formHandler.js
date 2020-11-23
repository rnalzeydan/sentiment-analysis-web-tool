import { updateUI } from './updateUI'

/************* Variables *************/
const select = document.querySelector('.form__select')
const input = document.querySelector('.form__input')
const textarea = document.querySelector('.form__textarea')
const submitButton = document.querySelector('.form__submit')
const reqBody = { value: '', URL: '' }

/************* Functions *************/
const formHandler = (event) => {
    if (document.querySelector('.form').checkValidity()) {
        event.preventDefault()

        // set reqBody variable
        setReqBody()

        // fetch data from the server
        fetch('http://localhost:3000/', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(reqBody)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                updateUI(data.data)
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}

/************* Helper Funcions *************/
const setReqBody = () => {
    if (select.value === 'text') {
        reqBody.value = textarea.value
        reqBody.URL = ''
    }
    else if (select.value === 'URL') {
        reqBody.URL = input.value
        reqBody.value = ''
    }
}

/************* Event Listeners *************/
document.addEventListener('DOMContentLoaded', () => {
    submitButton.addEventListener('click', formHandler)
})

/************* *************/
export { formHandler }