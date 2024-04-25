const mongoose = require("mongoose");
const app = require("../server");
port = 5000;
const uri =
  "mongodb+srv://prachipachang164:prachi23@cluster0.ztfii1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const db = mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server succesfully connected on ${port}`);
    });
  })
  .catch((error) => console.log(error));
