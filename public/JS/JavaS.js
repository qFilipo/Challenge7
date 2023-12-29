import cashBox from './chartHover.js';
import barHeight from './barHeight.js';

let cashObject = []

try {
      const response = await fetch('JSON/data.json')

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    cashObject =  await response.json()
} catch(error){
    console.error('Fetching error:', error);
}

barHeight(cashObject);
cashBox(cashObject);
