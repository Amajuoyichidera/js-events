// const btn = document.querySelector('button')
const showBtn = document.querySelector('#show')
const hideBtn = document.querySelector('#hide')
const h1Element = document.querySelector('h1')
const fakeContext = document.querySelector('#fc')

// showBtn.onclick = function () {
    // btn.insertAdjacentHTML('afterend', '<h1>You Clicked</h1>')
    // h1Element.style.display = 'block'
//     h1Element.classList.remove('hide')
// }

// hideBtn.onclick = function () {
//     h1Element.classList.add('hide')
// }

showBtn.addEventListener('click', function () {
    h1Element.classList.remove('hide')
})

hideBtn.addEventListener('dblclick', function () {
    h1Element.classList.add('hide')
})

// showBtn.addEventListener('mouseover', function () {
//     fakeContext.style.display = 'block'
// })

document.addEventListener('contextmenu', function (evt) {
    evt.preventDefault()     // prevents the browser default contextmenu or rightclick
    fakeContext.style.display = 'block'
    fakeContext.style.left = evt.clientX + 'px'    // they work together to display your context menu anywhere any where your cursor is and you rightclick whether from top to bottom or from right to left.
    fakeContext.style.top = evt.clientY - 10 + 'px'    // they work together to display your context menu anywhere any where your cursor is and you rightclick whether from top to bottom or from right to left.
})

window.addEventListener('click', function () {
    fakeContext.style.display = 'none'
})

const changeLi = document.querySelector('#change')
const resetLi = document.querySelector('#reset')
const createLi = document.querySelector('#create')

changeLi.addEventListener('click', function () {
    document.body.style.background = 'dodgerblue'
})

resetLi.addEventListener('click', function () {
    document.body.innerHTML = ''  // to remove everything on the webpage once you press reset
    document.body.append(fakeContext)    // adds the rightclick effect back to the browser after u press reset and it removes everything 
})

createLi.addEventListener('click', function () {
    document.body.innerHTML += '<h1>Monster Thingz</h1>'
})