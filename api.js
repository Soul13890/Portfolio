const listElement = document.getElementById("list");
const searchInput = document.getElementById("searchInput");
const noResultElement = document.getElementById("noResult");

fetch("data.json")
  .then(response => response.json())
  .then(data => {      

      function displayFormacodes(formacodes) {
      listElement.innerHTML = "";

      if (formacodes.length === 0) {
        noResultElement.style.display = "block";
        return;
      }

      noResultElement.style.display = "none";

      formacodes.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <div class="code">${item.code}</div>
          <div>${item.intitule}</div>
        `;

        listElement.appendChild(card);
      });
    }

    searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  const searchWords = searchTerm.split(/\s+/);

  const filtered = data.filter(item => {
    const intitule = item.intitule.toLowerCase();
    const code = item.code.toString();

    return (
      searchWords.some(word =>
        intitule.includes(word) || code.includes(word)
      )
    );
  });

  displayFormacodes(filtered);
});

    displayFormacodes(data);

      searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      const searchWords = searchTerm.split(/\s+/);

      const filtered = data.filter(item => {
        const intitule = item.intitule.toLowerCase();
        const code = item.code.toString();

        return (
          searchWords.some(word =>
            intitule.includes(word) || code.includes(word)
          )
        );
      });
      displayFormacodes(filtered);
    })
})
  