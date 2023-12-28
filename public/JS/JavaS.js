fetch ('JSON/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetching error:', error);
  });


import cashBox from './chartHover.js';
import barHeight from './barHeight.js';

cashBox();
barHeight();