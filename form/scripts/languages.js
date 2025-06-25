// Fetch the languages data from the local JSON file
fetch("form/data/languages.json")
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    // Select the container where cards will be displayed
    const grid = document.getElementById("language-grid");

    // Loop through each language and create a card element
    data.languages.forEach((language) => {
      // Create a new div for each language card
      const card = document.createElement("div");
      card.className = "card"; // Assign the card class for styling

      // Set the inner HTML of the card with the language icon, name, and link
      card.innerHTML = `
  <img src="${language.icon}" alt="${language.name} icon" />
  <h3>${language.name}</h3>
  <a href="#">Learn More</a>
  <button class="next-btn">Next</button>
`;
      // Add the card to the grid container
      grid.appendChild(card);
    });

    // Added a form element
    const form = document.createElement("form");
    form.innerHTML = `
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    `;

    // Insert the form after the grid elements
    grid.insertAdjacentHTML("afterend", form.outerHTML);

    // Get the form element again
    const formElement = grid.nextElementSibling;

    // Add a margin to the form element
    formElement.style.marginTop = "20px";

    // Add a submit event listener to the form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Submit form data
      console.log("Form submitted!");
      // Display a success toast
      alert("Form submitted successfully!");
    });
  })
  .catch((error) => {
    // Log an error message if the fetch fails
    console.error("Failed to load languages:", error);
  });
