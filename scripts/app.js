const slider = document.querySelector('.slider')
const progress = document.querySelector('.progress')

slider.oninput = function() {
    progress.style.width = `${this.value}%`
}

const form = document.querySelector('form')
form.addEventListener('change', changeFormHandler)

function changeFormHandler() {
    if (form.checkValidity()) {
        console.log('Все поля заполнены правильно')
    } else {
        console.log('Не все поля заполнены')
    }
}

form.onsubmit = (e) => {
    e.preventDefault()
    if (form.checkValidity()) {
        console.log('Форма отправлена')
        const User = {
            'Name': form.querySelector('#name').value,
            'Phone': form.querySelector('#phone').value,
            'Temp': form.querySelector('#temp').value + " градусов",
            'Comments': form.querySelector('#comments').value,
        }
        let data = '';
        console.log(User)
        for (let key in User) {
            data += `${User[key]} `
        }
        console.log(data)
    }
}