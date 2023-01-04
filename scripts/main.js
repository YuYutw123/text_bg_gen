let userInput = document.getElementById("input-bar");
let submitBtn = document.querySelector(".btn-input");
const token = null;

async function image_generation(value) {
  const json = {
    html: "<div class='test'>Hello, world!</div>",
    css: ".test { background-color: green; }",
  };
  const username = "3d38785e-ca60-4a2c-b820-8a21519825eb";
  const password = "1ff63c65-17de-4c8b-87a3-363bdf4fdfb5";
  const options = {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  };
  fetch("https://hcti.io/v1/image", options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .then((data) => {
      let result = (document.getElementById("output-bar").value = data.url);
    })
    .catch((err) => {
      console.log("Error during fetch: " + error.message);
    });
}
function copyInput() {
  var copyText = document.getElementById("output-bar");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("已複製" + copyText.value);
}

submitBtn.addEventListener("click", image_generation);
