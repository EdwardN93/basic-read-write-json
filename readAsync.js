async function readJson() {
  try {
    const response = await fetch("./db.json");
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
}

function writeToHtml() {
  const reader = readJson();

  reader.then((res) => {
    const header = document.querySelector(".header");
    res.forEach((element) => {
      const html = `
    <li>
        <div>
        <p class="name">${element.name}</p>
        <p class="special-before"><span class="span-card-text">Icon:</span> ${element.icon}</p>
        <p class="use">Use: <span class="span-card-text">Restores</span> ${element.hp} health</p>
        <p class="required-skill"><span class="span-card-text">Required skill:</span> ${element.requiredSkill}</p>
        <p><span class="span-card-text">Exp when consumed:</span> + ${element.experience}</p>

        <p class="use special-before">${element.description}</p>
        </div>
    </li>
    `;
      header.insertAdjacentHTML("beforeend", html);
    });
  });
}

writeToHtml();
