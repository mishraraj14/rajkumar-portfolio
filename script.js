const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});