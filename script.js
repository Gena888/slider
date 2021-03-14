let items = document.querySelectorAll('.carousel .item')
let currentItem = 0
let isEnabled = true


function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
    // console.log(`n = ${n}`)
    // console.log(`curI = ${currentItem}`)
}


function hideItem(direction) {
    debugger
    // isEnabled = false;
    if (direction === 'to-left') {
        
        items[currentItem].classList.add(direction)
        items[currentItem].addEventListener('animationend', function () {
            this.classList.remove('active', direction)
        })
    } else if (direction === 'to-right') {
        items[currentItem + 3].classList.add(direction)
        items[currentItem + 3].addEventListener('animationend', function () {
            this.classList.remove('active', direction)
        })
    }
}

function showItem(direction) {

}

function moveItems(direction) {

}



function nextItem(n) {
    hideItem('to-left')
    moveItems('to-left')
    changeCurrentItem(n + 1)
    showItem('from-right')
}

function previouseItem(n) {
    hideItem('to-right')
    moveItems('to-right')
    changeCurrentItem(n - 1)
    showItem('from-left')
}


document.querySelector('.control.left').addEventListener('click', function () {
    if (isEnabled) {
        previouseItem(currentItem);
    }
})

document.querySelector('.control.right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
})