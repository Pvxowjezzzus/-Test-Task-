const pies = document.querySelectorAll('.pie')
const pieTexts = document.querySelectorAll('.pie-text')


pies.forEach((pie) => {
    pie.onmouseover = function() {
        document.querySelector(`.${this.id}-text`).style.opacity = 1
        document.querySelector(`.${this.id}-stripe`).style.opacity = 1
    };
});

pies.forEach((pie) => {
    pie.onmouseout = function() {
        document.querySelector(`.${this.id}-text`).style.opacity = .6
        document.querySelector(`.${this.id}-stripe`).style.opacity = 0
    };
});

pieTexts.forEach((pieText) => {
    pieText.onmouseover = function() {
        document.querySelector(`#${this.classList[2]}`).classList.add('active')
        document.querySelector(`.${this.classList[0]}`).style.opacity = 1
        document.querySelector(`.${this.classList[2]}-stripe`).style.opacity = .7
    };
});

pieTexts.forEach((pieText) => {
    pieText.onmouseout = function() {
        document.querySelector(`#${this.classList[2]}`).classList.remove('active')
        document.querySelector(`.${this.classList[0]}`).style.opacity = .6
        document.querySelector(`.${this.classList[2]}-stripe`).style.opacity = 0
    };
});