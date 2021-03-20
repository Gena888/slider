let items = document.querySelectorAll('.carousel .item')
let line = document.querySelector('.items-line')
let leftBtn = document.querySelector('.control.left')
let rightBtn = document.querySelector('.control.right')
let offset = 0
let currentRageValue
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



rage.addEventListener('pointerdown', (e) => {
    currentRageValue = e.target.value
})

rage.addEventListener('pointerup', (e) => {
    let addOffset = (value) => {
        if (value > currentRageValue) {
            for (i = currentRageValue; i < value; i++) {
                offset = offset - 288
            }
        } else if (value < currentRageValue) {
            for (i = currentRageValue; i > value; i--) {
                offset = offset + 288
            }
        } else {
            return
        }
    }
    addOffset(e.target.value)
    line.style.left = `${offset}px`
})