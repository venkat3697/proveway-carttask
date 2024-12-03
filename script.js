document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bogo-form');
  const options = document.querySelectorAll('.option');
  
  // Function to toggle selectors visibility
  const toggleSelectors = () => {
    options.forEach(option => {
      const radio = option.querySelector('input[type="radio"]');
      const selectors = option.querySelector('.selectors');
      
      if (radio.checked) {
        selectors.style.display = 'block'; // Show selectors for the selected option
      } else {
        selectors.style.display = 'none'; // Hide selectors for other options
      }
    });
  };

  // Initialize selectors visibility
  toggleSelectors();

  // Add event listeners to the radio buttons
  options.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    radio.addEventListener('change', toggleSelectors);
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bogo-form');
  const options = document.querySelectorAll('.option');
  const totalPriceElement = document.getElementById('total-price');

  // Function to update total price
  const updateTotalPrice = () => {
    options.forEach(option => {
      const radio = option.querySelector('input[type="radio"]');
      const priceElement = option.querySelector('.price');
      
      if (radio.checked) {
        // Extract and set the price from the selected option
        totalPriceElement.textContent = priceElement.textContent;
      }
    });
  };

  // Initialize total price on page load
  updateTotalPrice();

  // Add event listeners to update total price when selection changes
  options.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    radio.addEventListener('change', updateTotalPrice);
  });
});
