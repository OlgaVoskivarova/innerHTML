// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
const click =document.querySelector(".click")
const btn = document.querySelector(".btn")
btn.addEventListener("click", function(){
    click.style.backgroundColor = "green"
    click.style.width = "100px"
    click.style.height = "100px"
})


// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.


const pink =document.querySelector(".pink")
const btnPink = document.querySelector(".btn-pink")
btnPink.addEventListener("click", function(){
    pink.style.backgroundColor = "blue"
    console.log("blue")
    
})



// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

// const root =document.querySelector(".root")
// const btnRoot = document.querySelector(".btn-root")
// btnRoot.addEventListener("click", function(){
//     root.innerHTML = `<p>Guten Morgen die Welt</p>`
// })

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.


const root =document.querySelector(".root")
const btnRoot = document.querySelector(".btn-root")
btnRoot.addEventListener("click", function(){
   
    root.innerHTML = `<p class="blue">Guten Morgen die Welt</p> `
    btnRoot.addEventListener("click", function(){
        root.innerHTML = `<p class="green">Guten Morgen die Welt</p> `
    })
})
