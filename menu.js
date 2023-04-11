// Fetch and store all dishes

let dishes;

const fetchAndRender = async () => {
  try {
  dishes = await fetch("https://eight7plates2.onrender.com/all")
    .then(res => res.json());

  for (let i = 0; i < dishes.length; i++) {
    document.getElementById(`card-title-${i}`).innerHTML = dishes[i].name;
    document.getElementById(`card-img-${i}`).src = dishes[i].imgURL;
  }

  document.getElementById(`all-card-container`).style.display = "block";
  document.getElementById(`footer`).style.display = "block";
  } catch (err) {
    console.log(err);
  };
}

fetchAndRender();

// Render contents for pop up modal

const popUp = (id) => {
  const index = Number(id.match(/\d+/)[0]);

  document.getElementById("modal-title").innerHTML = dishes[index].name;
  document.getElementById("modal-preperation-time").innerHTML = "Preperation Time: " + dishes[index].peperationTime;
  document.getElementById("modal-img").src = dishes[index].imgURL;
  document.getElementById("modal-description").innerHTML = dishes[index].description;

  const ingredients = dishes[index].ingredients.split(", ");
  document.getElementById("modal-ingredients-content").innerHTML = "";
  ingredients.forEach((ele, idx) => {
    document.getElementById("modal-ingredients-content").innerHTML += (idx === ingredients.length - 1 ? ele : ele + "<span> • </span>");
  })
  
  const notIncluded = dishes[index].notIncluded.split(", ");
  document.getElementById("modal-not-included-content").innerHTML = "";
  notIncluded.forEach((ele, idx) => {
    document.getElementById("modal-not-included-content").innerHTML += (idx === notIncluded.length - 1 ? ele : ele + "<span> • </span>");
  })


}
