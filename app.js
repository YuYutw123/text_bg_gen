const request = require("request");
const axios = require("axios");
const { userId, apiKey } = require("./config.json");
async function createImage() {
  const payload = {
    html: "<div>Test</div>",
    css: "div { background-color: blue; }",
  };

  let headers = {
    auth: {
      username: userId,
      password: apiKey,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(
      "https://hcti.io/v1/image",
      JSON.stringify(payload),
      headers
    );
    console.log(response.data.url);
  } catch (error) {
    console.error(error);
  }
}

createImage();

<script>
        const json = {
          html: "<div class='test'>Hello, world!</div>",
          css: ".test { background-color: green; }",
        }
        const username = "3d38785e-ca60-4a2c-b820-8a21519825eb";
        const password = "1ff63c65-17de-4c8b-87a3-363bdf4fdfb5";  
        const options = {
          method: "POST",
          body: JSON.stringify(json),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(username + ":" + password),
          },
        }
        fetch("https://hcti.io/v1/image", options)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {return
              return Promise.reject(res.status);
            }
          })
          .then((data) => {
            // Image URL is available here
            console.log(data.url);
          })
          .catch((err) => console.error(err));
</script>