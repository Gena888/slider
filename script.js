let items = document.querySelectorAll('.carousel .item')
let line = document.querySelector('.items-line')
let leftBtn = document.querySelector('.control.left')
let rightBtn = document.querySelector('.control.right')
let offset = 0
let rage = document.querySelector('.rage-input')

leftBtn.addEventListener('click', function () {
    if (offset === 0) {
        return
    } else {
        offset += 288
        line.style.left = `${offset}px`
        rage.value--
    }

})

rightBtn.addEventListener('click', function () {
    if (offset === -288 * 4) {
        return
    } else {
        offset -= 288
        line.style.left = offset + 'px'
        rage.value++
    }
})

let currentValue

rage.addEventListener('pointerdown', (e) => {
    currentValue = e.target.value

    // console.log(`currentValue = ${currentValue}`)
    console.log('mousedown')



})

rage.addEventListener('pointerup', (e) => {
    // debugger
    let addOffset = (value) => {
        if (value > currentValue) {
            // debugger
            for (i = currentValue; i < value; i++) {
                offset = offset - 288
            }
        } else if (value < currentValue) {
            for (i = currentValue; i > value; i--) {
                offset = offset + 288
            }
        } else {
            return
        }
    }
    addOffset(e.target.value)

    line.style.left = `${offset}px`


})