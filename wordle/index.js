const buttonEl = document.querySelector('button')

let answer = 'happy'

buttonEl.addEventListener('click',()=>{
    console.log('hello')
    const inputEl = document.querySelectorAll('.input')

for(let i =0; i<5; i++){
    if(inputEl[i].value === answer[i]){
        inputEl[i].style.backgroundColor = 'green'
    }else if(answer.includes(inputEl[i].value)){
        inputEl[i].style.backgroundColor = 'yellow'
    }else{
        inputEl[i].style.backgroundColor = 'lightgrey'
    }   
    inputEl[i].classList.remove('input')
}

let template = `<div>
    <input class="input"/>
    <input class="input"/>
    <input class="input"/>
    <input class="input"/>
    <input class="input"/>
</div>`;
    document.querySelector('body').insertAdjacentHTML('beforeend',template);


    if(inputEl[0].value === answer[0] && inputEl[1].value === answer[1] && inputEl[2].value === answer[2] && inputEl[3].value === answer[3] && inputEl[4].value === answer[4]){
        alert('정답입니다')
        window.location.reload()
    }

})