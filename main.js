import './style.css';

async function fetchData() {
  try {
    const response = await fetch(`https://safe-neon-squid.glitch.me/laptops`)
    const data = await response.json()
    return data
  } catch(error) {
    console.error("Could not fetch data:", error);
  }
}

async function displayData(){
  try {
    const data = await fetchData()
    console.log(data)
    const container = document.getElementById("container");
    data.forEach((item) => {
      container.innerHTML += `
        <div class="bg-red-500 rounded border">
          <h1>${item.title}</h1>
          <p>${item.description}</p>
          <p>${item.price}</p>
        </div>
      `
    });
  } catch(error){
    console.error("Could not display data:", error);
  }
}

displayData();

