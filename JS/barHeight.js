async function barHeight(cashObject){

    const dayBar=document.querySelectorAll(".day-bar")
    const listVisi=document.querySelector(".data_charts_list")

    let dayAmount = cashObject.map(element => element.amount)

    for (let i=0; i<dayBar.length; i++){
        let variableHeight = (dayAmount[i]/Math.max(...dayAmount))
        dayBar[i].style.height = 10*variableHeight +"rem"
    }

    listVisi.style.visibility = "visible"
}

export default barHeight;
