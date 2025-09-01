const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  form.reset();
});