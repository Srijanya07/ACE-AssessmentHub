const editBtn = document.getElementById("edit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const profileCard = document.querySelector(".profile-card");
const profileFormContainer = document.querySelector(".profile-form-container");
const profileForm = document.getElementById("profile-form");

const fields = {
  name: document.getElementById("username"),
  email: document.getElementById("email"),
  college: document.getElementById("college"),
  course: document.getElementById("course"),
  year: document.getElementById("year"),
  phone: document.getElementById("phone"),
  dob: document.getElementById("dob"),
  address: document.getElementById("address")
};

function showForm() {
  profileFormContainer.classList.remove("hidden");
  profileCard.classList.add("hidden");

  profileForm.name.value = fields.name.textContent;
  profileForm.emailInput.value = fields.email.textContent;
  profileForm.collegeInput.value = fields.college.textContent;
  profileForm.courseInput.value = fields.course.textContent;
  profileForm.yearInput.value = fields.year.textContent;
  profileForm.phoneInput.value = fields.phone.textContent;
  profileForm.dobInput.value = fields.dob.textContent;
  profileForm.addressInput.value = fields.address.textContent;
  profileForm.password.value = "";
}

function hideForm() {
  profileFormContainer.classList.add("hidden");
  profileCard.classList.remove("hidden");
}

editBtn.addEventListener("click", showForm);
cancelBtn.addEventListener("click", hideForm);

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fields.name.textContent = profileForm.name.value;
  fields.email.textContent = profileForm.emailInput.value;
  fields.college.textContent = profileForm.collegeInput.value;
  fields.course.textContent = profileForm.courseInput.value;
  fields.year.textContent = profileForm.yearInput.value;
  fields.phone.textContent = profileForm.phoneInput.value;
  fields.dob.textContent = profileForm.dobInput.value;
  fields.address.textContent = profileForm.addressInput.value;

  alert("Profile updated successfully!");
  hideForm();
});
