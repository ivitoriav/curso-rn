const express = require("express")   // importei
const app = express()   // atribui
app.get("/projeto", (request, response) => {
        return response.json([
               "Projeto 1",
               "Projeto 2"  

        ])
})

app.post("/projeto", (request, response) => {
        return response.json([
              "Projeto 1", 
              "Projeto 2",
              "Projeto 3"  
        ])

})

app.put("/projeto/:id", (request, response) => {
    return response.json([
          "Projeto 4", 
          "Projeto 2",
          "Projeto 3"  
    ])
})              //http://localhost:3333/projeto/id

app.delete("/projeto/:id", (request, response) => {
    return response.json([
          "Projeto 2",
          "Projeto 3"  
    ])
})


// app.get("/projeto", (request, response) => {
//   return response.json({
//       Nome: "Ivina",
//        Idade: "18"        
//    })
//})

app.listen(3333, () => {
    console.log("O servidor foi acessado com sucesso!")
})    // json para ouvir a porta do servidor   app.listen(3333) - antes era assim      