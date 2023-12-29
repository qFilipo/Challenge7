let cashObject = [
  {day: 'mon', amount: 17.45},
  {day: 'tue', amount: 34.91},
  {day: 'wen', amount: 52.36},
  {day: 'thu', amount: 31.07},
  {day: 'fri', amount: 23.39},
  {day: 'sat', amount: 43.28},
  {day: 'sun', amount: 25.48}
]

document.addEventListener("DOMContentLoaded",function(){
  barHeight(cashObject);
})

cashBox(cashObject);

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

      element.addEventListener("touchstart", function(){
        charCash[index].style.visibility = "visible"
        if (index === day){
            element.style.background = "hsl(186, 34%, 60%, 40%)"
        }
        else{
            element.style.background = "hsl(10, 79%, 65%, 80%)"
        }
    })
    element.addEventListener("touchend", function(){
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

function barHeight(cashObject){
  const dayBar=document.querySelectorAll(".day-bar")
  const listVisi=document.querySelector(".data_charts_list")

  let dayAmount = cashObject.map(element => element.amount)

  for (let i=0; i<dayBar.length; i++){
      let variableHeight = (dayAmount[i]/Math.max(...dayAmount))/18
      dayBar[i].style.height = dayBar[i].offsetHeight*variableHeight + "rem"
  }

  listVisi.style.visibility = "visible"
}