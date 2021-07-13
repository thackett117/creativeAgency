const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const homeTitle = document.querySelector(".logo");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

homeTitle.addEventListener("click", () => {
  location.href = "index.html"
})
