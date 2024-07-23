//Task 1
let btn=document.getElementById("btn")
let tc=document.getElementById("paraOne")
btn.style.padding="15px"
btn.style.borderRadius="100px"
btn.style.fontSize="25px"
tc.style.fontSize="25px"
btn.addEventListener('click',function () {
    tc.textContent="This is new text content"
})

//Task 2
let img=document.getElementById("img")
img.style.borderRadius="20px"
img.addEventListener('dblclick',function () {
    img.style.opacity=1;
})

//Task 3
let h2=document.getElementById("head2")
h2.style.backgroundColor="blue"
h2.style.padding="10px"
h2.addEventListener('mouseover',function() {
    h2.style.backgroundColor="pink"
})

//Task 4
h2.addEventListener('mouseout',function () {
    h2.style.backgroundColor="yellow"
})

//Task 5
let inpText=document.getElementById("inputText")
inpText.addEventListener('keydown',function (event) {
    console.log(`key Pressed : ${event.key}`);
})

//Task 6
let inpText2=document.getElementById("inpText2")
let paraTwo=document.getElementById("paraTwo")
inpText2.addEventListener('keyup',function () {
      paraTwo.textContent=inpText2.value
})

//Task 7
let form=document.getElementById("myForm")
form.addEventListener('submit',function (event) {
          event.preventDefault()
          let formData = new FormData(form)
          formData.forEach((val,key) => {
            console.log(` ${key} :  ${val}`);
          })
})

//Task 8
let dropDown=document.getElementById("selectdpn")
let para2=document.getElementById("paraThree")
dropDown.addEventListener('change',function () {
    para2.textContent=`selected option : ${dropDown.value}`
})

//Task 9
let ulist=document.getElementById("ulList")
ulist.addEventListener('click',function (event) {
    if(event.target && event.target.nodeName === 'LI'){
        console.log(`clicked list item text : ${event.target.textContent}`);
    }
})

//Task 10
let btn3=document.getElementById("btn3")
function addItem() {
    let newItem=document.createElement('li')
    let items=ulist.getElementByTag('li').length+1;
    newItem.textContent=`Item ${items}`
    ulist.appendChild(newItem)
}
btn3.addEventListener('click',addItem)
