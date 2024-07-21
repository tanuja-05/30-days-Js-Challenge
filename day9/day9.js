//Task 1
let eleId=document.getElementById("heading")
eleId.textContent="This is my new heading"

//Task 2
let eleClass=document.getElementById("para") // I am not getting option to select Element by class so used id
eleClass.style.backgroundColor = "blue"

//Task 3
let newDiv=document.createElement('div')
let divText=document.createTextNode('This text content is created using dom manipulation')
newDiv.appendChild(divText)
document.body.appendChild(newDiv)

//Task 4
let myul=document.getElementById("unlist")
let newLi=document.createElement('li')
let listContent=document.createTextNode("Item three using dom")
newLi.appendChild(listContent)
myul.appendChild(newLi)

//Task 5
let removeEle=document.getElementById("subHeader")
removeEle.remove()

//Task 6
let myol = document.getElementById("olist")
if(myol.lastElementChild){ 
    myol.removeChild(myol.lastElementChild);
}

//Task 7
let imgEle=document.getElementById("img")
imgEle.setAttribute('src','img-2.jpg')
imgEle.setAttribute('alt','second image')

//Task 8
let paraTwo=document.getElementById("paraTwo")
paraTwo.classList.add('bg-pink')

//Task 9
let btn=document.getElementById("btn")
let pth=document.getElementById("paraThree")

btn.addEventListener('click',function() {
    pth.textContent="this is new para using dom manipulation"
})

//Task 10
let divEle=document.getElementById("divEle")
divEle.addEventListener('mouseover',function() {
    divEle.style.borderColor='red'
})