const timer = document.querySelector(".d-day");

function getTime() {
  const target = new Date("2022-12-25 00:00:00+0900");
  const today = new Date();
  const gap = target - today;
  const d = Math.floor(gap / (1000 * 60 * 60 * 24)); // 일
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24); // 시
  const m = Math.floor(((gap / 1000) * 60) % 60); // 분
  const s = Math.floor((gap / 1000) % 60); // 초
  
  timer.innerText = `${d}d ${h}h ${m}m ${s}s`;
  
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

function createSnow(){
    const el = document.createElement('div')
    el.classList.add('snow')
    el.style.marginLeft = randomPostion() + 'px'
    document.body.appendChild(el)
}

function randomPostion(){
    return Math.floor(Math.random() * window.innerWidth)
}
for(let i=0; i<500; i++){
    createSnow()
}


