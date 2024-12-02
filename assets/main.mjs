// Import the function to initialize the portfolio
import { initializePortfolio } from './index.mjs';

// Add event listener to the "Click Me!" button
document.getElementById('loadPage').addEventListener('click', () => {
    // Call the function to load the portfolio
    initializePortfolio();

    // Hide the introductory message and button
    document.getElementById('loadPage').style.display = 'none';
    document.getElementById('loadMessage').style.display = 'none';
});



