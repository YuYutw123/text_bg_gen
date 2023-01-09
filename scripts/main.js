let userInput = document.getElementById("input-bar");
let submitBtn = document.querySelector(".btn-input");
const token = null;

async function image_generation(value) {
  const msg = document.querySelector(".preview").outerHTML.toString();
  console.log(msg);
  let msg2 = msg.replaceAll("\n", "");
  const json = JSON.stringify({
    html: `${msg2}`,
  });
  const username = "3d38785e-ca60-4a2c-b820-8a21519825eb";
  const password = "1ff63c65-17de-4c8b-87a3-363bdf4fdfb5";
  const options = {
    method: "POST",
    body: json,
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
      console.log(data.url);
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

let bgColor;
let textColor;
let textContent;
const defaultColor = "#000000";
const defaultColor2 = "#ffffff";

window.addEventListener("load", startup, false);
const preview = document.querySelectorAll(".preview");
const preview2 = document.querySelectorAll(".input-content");

function startup() {
  bgColor = document.querySelector("#bg-color");
  bgColor.value = defaultColor;
  bgColor.addEventListener("input", change_bg_color, false);
  bgColor.addEventListener("change", change_bg_color, false);
  bgColor.select();

  textColor = document.querySelector("#text-color");
  textColor.value = defaultColor2;
  textColor.addEventListener("input", change_text_color, false);
  textColor.addEventListener("change", change_text_color, false);
  textColor.select();

  textContent = document.querySelector("#text-content");
  textContent.addEventListener("input", text_content, false);
  textContent.addEventListener("change", text_content, false);
  textContent.select();
}

function change_bg_color(event) {
  preview.forEach((el) => {
    el.style.backgroundColor = event.target.value;
  });
}

function change_text_color(event) {
  preview2.forEach((el) => {
    el.style.color = event.target.value;
  });
}

function text_content() {
  let element = document.querySelector("textarea");
  const content = document.querySelector(".input-content");
  content.innerHTML = element.value;
}
