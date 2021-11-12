const loginForm = document.getElementById("login-form");
const messageSection = document.getElementById("login-message");
const colorSelect = document.getElementById("color-select");

const getColorOptions = () => {
  axios
    .get("http://localhost:5757/colors")
    .then((res) => {
      const colors = res.data;

      const colorsMap = colors.map((color) => {
        return `<option value="${color}">${color}</option>`;
      });

      colorsMap.forEach((colorOption) => {
        colorSelect.innerHTML += colorOption;
      });

      console.log(colorSelect.innerHTML);

      console.log(colorsMap);
    })
    .catch((err) => console.log(err));
};

getColorOptions();

// console.dir(loginForm);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;

  axios
    .get(
      `http://localhost:5757/login?username=${usernameValue}&password=${passwordValue}`
    )
    .then((res) => {
      console.log(res.data);
      const loginMessage = document.createElement("h2");
      loginMessage.textContent = `Hey ${res.data.username}! Thanks for logging in!`;
      messageSection.append(loginMessage);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
});

colorSelect.addEventListener("change", (e) => {
  console.log("THIS IS MY COLOR: ", e.target.value);
  document.body.style.backgroundColor = e.target.value;
});
