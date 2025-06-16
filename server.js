
const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const decoded = Buffer.from(process.env.FIREBASE_CONFIG_BASE64, 'base64').toString('utf8');
const serviceAccount = JSON.parse(decoded);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "crowd-checker-7bd94.appspot.com"
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("peepl backend is running.");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
