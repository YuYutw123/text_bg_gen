const https = require("https");

const html2 =
  "<div class='preview'><h5 class='input-content'>在這邊輸入你要的文字</h5></div>";
const style3 =
  ".preview { height: 480px; width: 960px; background-color:#000000; color:black;}";

const data = JSON.stringify({
  html: `${html2}`,
  css: `${style3}`,
  google_fonts: "Roboto",
});

if (html2 === "<div class='box'>JavaScasdasdasdasdript ✅</div>") {
  console.log(1);
}

// Retrieve your api_id and api_key from the Dashboard. https://htmlcsstoimage.com/dashboard
const apiId = "3d38785e-ca60-4a2c-b820-8a21519825eb";
const apiKey = "1ff63c65-17de-4c8b-87a3-363bdf4fdfb5";

const options = {
  hostname: "hcti.io",
  port: 443,
  path: "/v1/image",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Basic " + new Buffer(apiId + ":" + apiKey).toString("base64"),
  },
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    const image = JSON.parse(d);
    console.log(image["url"]);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(data);
req.end();
