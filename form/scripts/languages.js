// Fetch the languages data from the local JSON file
fetch('form/data/languages.json')
  .then(response => response.json())  // Convert the response to JSON
  .then(data => {
    // Select the container where cards will be displayed
    const grid = document.getElementById('language-grid');

    // Loop through each language and create a card element
    data.languages.forEach(language => {
      // Create a new div for each language card
      const card = document.createElement('div');
      card.className = 'card'; // Assign the card class for styling

      // Set the inner HTML of the card with the language icon, name, and link
      card.innerHTML = `
        <img src="${language.icon}" alt="${language.name} icon" />
        <h3>${language.name}</h3>
        <a href="#">Learn More</a>
      `;

      // Add the card to the grid container
      grid.appendChild(card);
    });
  })
  .catch(error => {
    // Log an error message if the fetch fails
    console.error('Failed to load languages:', error);
  });
