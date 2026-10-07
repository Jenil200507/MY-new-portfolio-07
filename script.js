document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      formMessage.textContent = "Please fill in all fields correctly.";
      formMessage.className = "mt-3 text-danger";
      return;
    }

    formMessage.textContent = "Thank you! Your message has been entered successfully.";
    formMessage.className = "mt-3 text-success";
    form.reset();
    form.classList.remove("was-validated");
  });
});
