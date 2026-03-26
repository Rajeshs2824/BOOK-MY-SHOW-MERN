import express from "express";

const App = express();
App.listen(9000, () => {
  console.log("app running successfully");
});
