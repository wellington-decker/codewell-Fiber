import Glide from "@glidejs/glide";

//Carousel style.
const config = {
  type: "carousel",
  autoplay: 5000,
  hoverpause: true,
};

new Glide(".glide", config).mount();

//Password-Visibility.
const show_password = document.querySelector(".do");
const eye = document.querySelector(".eye");

const passwordHandler = () => {
  if (show_password.type === "password") {
    show_password.type = "text";
  } else {
    show_password.type = "password";
  }

  eye.classList.toggle("click");
};

eye.addEventListener("click", passwordHandler);
