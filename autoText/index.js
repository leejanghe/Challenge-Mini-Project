const text = document.querySelector('.text')
const speedEl = document.getElementById('speed')
const myText = 'I Love Coding with JavaScript'
const btnStart = document.querySelector('.start')
let idx = 1
let speed = 300 / speedEl.value


function writeText() {
    // text에 한글자씩 추가
    // slice 첫번째 인자는 시작위치, 두번째 인자는 끝위치
    // idx를 하나씩 추가해서 한글자씩 추가
    text.innerText = myText.slice(0, idx)

    idx++

    // 반복 재생을 위한 조건문 작성
    if(idx > myText.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}

btnStart.addEventListener('click', writeText)
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)