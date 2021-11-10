const filter = document.querySelectorAll(".filter li");
const line = document.querySelector("#innerLine");

// filter.forEach((li) => {
//   li.addEventListener("click", () => {
//     console.log(li.textContent);
//     li.classList.add("pink");
//   });
// });

let focus = "View All";
for (let i = 0; i < filter.length; i++) {
  filter[i].addEventListener("click", () => {
    filter[i].classList.add("pink");
    focus = filter[i].textContent;
    if (focus === "View All") {
      line.style.width = "25%";
      line.style.left = "0";
    } else if (focus === "Best Sellers") {
      line.style.width = "35%";
      line.style.left = "85px";
    } else {
      line.style.width = "30%";
      line.style.left = "190px";
    }
    for (let j = 0; j < filter.length; j++) {
      if (filter[j].textContent !== focus) {
        filter[j].classList.remove("pink");
      }
    }
  });
}
