
function cashBox(){
    const charBar = document.querySelectorAll(".day-bar")
    const charCash = document.querySelectorAll(".day-cash")

    charBar.forEach(function(element, index){
        element.addEventListener("mouseenter", function(){
            charCash[index].style.visibility = "visible"
            element.style.background = "hsl(186, 34%, 60%, 40%)"
        })
        element.addEventListener("mouseleave", function(){
            charCash[index].style.visibility = "hidden"
            element.style.background = ""
        })
    })
}

export default cashBox;