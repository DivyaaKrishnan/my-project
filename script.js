document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("bookingForm");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // gather form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const destination = form.destination.value;
    const date = form.date.value;
    const people = form.people.value;

    // simple validation (you already have required in HTML)
    if (!name || !email || !destination || !date || !people) {
      messageDiv.textContent = "Please fill all fields.";
      messageDiv.style.color = "red";
      return;
    }

    // simulate booking success
    messageDiv.textContent = `Thank you, ${name}! Your booking to ${destination} for ${people} person(s) on ${date} is confirmed. We will email you at ${email}.`;
    messageDiv.style.color = "green";

    // optionally, clear form
    form.reset();
  });
});
