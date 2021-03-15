let items = document.querySelectorAll('.carousel .item')
let line = document.querySelector('.items-line')
let leftBtn = document.querySelector('.control.left')
let rightBtn = document.querySelector('.control.right')
let offset = 0

leftBtn.addEventListener('click', function () {
    if (offset === 0) {
        return
    } else {
        offset += 288
        line.style.left = `${offset}px`
    }

})

rightBtn.addEventListener('click', function () {
    if (offset === -288*4) {
        return
    } else {
        offset -= 288
        line.style.left = offset + 'px'
    }
})