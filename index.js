const dodger = document.getElementById('dodger')

function moveDodger(event) {
  const keycode = event.which
  if (keycode === 37) {
    let oldLeft = dodger.style.left
    if (oldLeft === '0px') {
      return
    }
    oldLeft = parseInt(oldLeft, 10)
    dodger.style.left = (oldLeft - 10) + 'px'
  } else if (keycode === 38) {
    moveDodgerRight(event)
  } else if (keycode === 39) {
    moveDodgerUp(event)
  } else if (keycode === 40) {
    moveDodgerDown(event)
  }
}
  
function moveDodgerRight(event) {
  if (event.which === 39) {
    let oldRight = dodger.style.left
    if (oldRight === '360px') {
      return
    }
    oldRight = parseInt(oldRight, 10)
    dodger.style.left = (oldRight + 10) + 'px'
  }
}

function moveDodgerRight() {}

document.addEventListener('keydown', moveDodger)
document.addEventListener('keydown', moveDodgerRight)


