const fs = require("fs")
// const book = {
//        title: "ego is enemy",
//        author: "Ryan"
// }

//  const bookJSON = JSON.stringify(book)
//  fs.writeFileSync("1-json.json", bookJSON)
  // const dataBuffer = fs.readFileSync("1-json.json")
  // const dataJSON = dataBuffer.toString()
  // const data = JSON.parse(dataJSON)
  // console.log(data.title)
 // console.log(dataBuffer.toString())

 const dataBuffer  = fs.readFileSync("1-json.json")
 const dataJSON = dataBuffer.toString()
 const user = JSON.parse(dataJSON)

 user.name = "mahamat"
 user.age= 100

 const userJSON = JSON.stringify(user)
 fs.writeFileSync("1-json.json", userJSON)