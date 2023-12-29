function cashBox(cashObject){
    const charBar = document.querySelectorAll(".day-bar")
    const charCash = document.querySelectorAll(".day-cash")
    const textBox = document.querySelectorAll(".day-cash_text")
    const date = new Date()
    let day = date.getDay()-1

    charBar[day].style.background = "hsl(186, 34%, 60%)"

    charBar.forEach(function(element, index){
        element.addEventListener("mouseenter", function(){
            charCash[index].style.visibility = "visible"
            if (index === day){
                element.style.background = "hsl(186, 34%, 60%, 40%)"
            }
            else{
                element.style.background = "hsl(10, 79%, 65%, 80%)"
            }
        })
        element.addEventListener("mouseleave", function(){
            charCash[index].style.visibility = "hidden"
            if (index === day){
                element.style.background = "hsl(186, 34%, 60%)"
            }
            else{
                element.style.background = ""        
            }
        })
    })

    let dayAmount = cashObject.map(element => element.amount)
    for (let i=0; i<dayAmount.length; i++){
        textBox[i].textContent = "$"+dayAmount[i].toString()
    }
}

export default cashBox;