import app from "./src/app.js"
//const port = 3000;
const port = process.env.PORT || 3000; 

//server.listen(port, () => {
app.listen(port, () => {
  //console.log("Server Up on port: ", port)
  console.log(`Server Up | http://localhost:${port}`)
})