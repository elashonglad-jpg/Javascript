let heading =document.getElementById("heading");
let paragraph = document.querySelector(".description")
let resultArea = document.getElementById("result")
console.log(paragraph)
let Allparagraphs=document.querySelectorAll(".message")
console.log(Allparagraphs)//get all three paragraphs
console.log(Allparagraphs[0])

console.log(heading)
heading.classList.add("highlight")

function changeColor() {
      heading.style.color = "blue";
      heading.textContent = "I have learnt DOM"
      resultArea.innerHTML = '<H1> results will show here</h1>'
      console.log(resultArea)
    }
    const container = document.getElementById("container")
    
    function addElement(){
    const newParagraph = document.createElement("p")
    newParagraph.textContent = "Here is my new paragraph"
    console.log(newParagraph)
    container.appendChild(newParagraph)
    }

