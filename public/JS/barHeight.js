function barHeight(){

    let cashObject = []

    fetch ('JSON/data.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            cashObject = data;
        })
        .catch(error => {
            console.error('Fetching error:', error);
        });

    console.log(cashObject[1])
}

export default barHeight;