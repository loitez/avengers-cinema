const schemeSvg = document.querySelector('.scheme')
const totalPriceTag =  document.querySelector('.price-total')
const menuButton = document.querySelector('.m-menu')
const menu = document.querySelector('.menu')
const dates = document.querySelectorAll('.session-date-item')
let cost = 800;
let totalPrice = 0;



schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked') && !event.target.classList.contains('light') && !event.target.classList.contains('svg-class') && !event.target.classList.contains('active-seat') && !event.target.classList.contains('free-seat') && !event.target.classList.contains('legend') && !event.target.classList.contains('legend-text') && !event.target.classList.contains('line') && !event.target.classList.contains('legend-label')) {
        event.target.classList.toggle('active')
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;


    }
})

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open')
})

for (let date of dates) {
    date.addEventListener('click', () => {
        dates.forEach((elem) => {
            elem.classList.remove('checked')
        })
        if (date.classList.contains('checked')) {
            date.classList.remove('checked')
        } else {
            date.classList.add('checked')
        }
    })
}
