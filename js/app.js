const ageForm = document.getElementsByTagName("form")[0];

ageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAge = new Date(e.target.date.value);
  const date = new Date();
  const result = date.getFullYear() - userAge.getFullYear();

  if (result <= 0) {
    alert("You are not yet a year old");
    ageForm.reset();
  } else {
    alert(`${result} years old`);
    ageForm.reset();
  }
});

flatpickr("#date", {});
