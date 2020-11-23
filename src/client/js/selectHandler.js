/************* Variables *************/
const select = document.querySelector('.form__select')
const input = document.querySelector('.form__input')
const textarea = document.querySelector('.form__textarea')
const submitButton = document.querySelector('.form__submit')

/************* Functions *************/
const selectHandler = () => {
    switch (select.value) {
        case 'URL': {
            input.required = true // set URL input field as required
            textarea.required = false // set textarea field as not required

            input.style.display = 'block' // display input field
            textarea.style.display = 'none' // Hide textarea field
            submitButton.style.display = 'block'
            break
        }
        case 'text': {
            textarea.required = true // set textarea field as required
            input.required = false // set URL input field as not required

            input.style.display = 'none' // hide textares field
            textarea.style.display = 'block' // display textares field
            submitButton.style.display = 'block'
            break
        }
    }

}

/************* Event Listeners *************/
document.addEventListener('DOMContentLoaded', () => {
    select.addEventListener('change', selectHandler)
})

/************* *************/
export { selectHandler }