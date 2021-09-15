const leftTop = document.getElementById("left-top"),
    rightTop = document.getElementById("right-top"),
    rightBottom = document.getElementById("right-bottom"),
    leftBottom = document.getElementById("left-bottom");
let alterWidthLeftTopInterval, alterHeightRightTopInterval,
    alterWidthRightBottomInterval, alterHeightLeftBottomInterval;


function alterWidthLeftTop(element) {
    let increaseWidth = true;
    alterWidthLeftTopInterval = setInterval(() => {
        if (increaseWidth) {
            element.style.width = `${element.offsetWidth + 5}px`
            if (element.offsetWidth > 250)
                increaseWidth = false
        } else {
            element.style.width = `${element.offsetWidth - 5}px`
            if (element.offsetWidth < 50)
                increaseWidth = true
        }
    }, 10);
}

function alterHeightRightTop(element) {
    let increaseBottom = true;
    alterHeightRightTopInterval = setInterval(() => {
        if (increaseBottom) {
            element.style.height = `${element.offsetHeight + 5}px`
            if (element.offsetHeight > 250)
                increaseBottom = false
        } else {
            element.style.height = `${element.offsetHeight - 5}px`
            if (element.offsetHeight < 50)
                increaseBottom = true
        }
    }, 10);
}

function alterWidthRightBottom(element) {
    let increaseWidth = true;
    alterWidthRightBottomInterval = setInterval(() => {
        if (increaseWidth) {
            element.style.width = `${element.offsetWidth + 5}px`
            element.style.left = `${element.offsetLeft - 5}px`
            if (element.offsetWidth > 250)
                increaseWidth = false
        } else {
            element.style.width = `${element.offsetWidth - 5}px`
            element.style.left = `${element.offsetLeft + 5}px`
            if (element.offsetWidth < 50)
                increaseWidth = true
        }
    }, 10);
}

function alterHeightLeftBottom(element) {
    let increaseHeight = true;
    alterHeightLeftBottomInterval = setInterval(() => {
        if (increaseHeight) {
            element.style.height = `${element.offsetHeight + 5}px`
            element.style.top = `${element.offsetTop - 5}px`
            if (element.offsetHeight > 250)
                increaseHeight = false
        } else {
            element.style.height = `${element.offsetHeight - 5}px`
            element.style.top = `${element.offsetTop + 5}px`
            if (element.offsetHeight < 50)
                increaseHeight = true
        }
    }, 10);
}
//top+ height-



function startColourfulBox() {
    alterWidthLeftTop(leftTop);
    alterHeightRightTop(rightTop);
    alterWidthRightBottom(rightBottom);
    alterHeightLeftBottom(leftBottom);
}

function stopColourfulBox() {
    clearInterval(alterWidthLeftTopInterval);
    clearInterval(alterHeightRightTopInterval);
    clearInterval(alterWidthRightBottomInterval);
    clearInterval(alterHeightLeftBottomInterval);
}