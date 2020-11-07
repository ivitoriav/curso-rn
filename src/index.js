const express = require("express")   // importei
const app = express()   // atribui
app.use(express.json())  // faz com que o express entenda as aquisições feitas pelo json

app.get("/projeto", (request, response) => {
        const query = request.query
        console.log(query)
        return response.json([
               "Projeto 1", 
               "Projeto 2"  

        ])
})  

// query params (parâmetro get, serve para listar, filtrar as minhas informações) 
// route params (identificar recursos, serve para add ou delete, usa os :)
// request body (criar ou editar um recurso => json)


app.post("/projeto", (request, response) => {
        const body = request.body
        console.log(body)

        return response.json([
              "Projeto 1", 
              "Projeto 2",
              "Projeto 3"  
        ])

})

app.put("/projeto/:id", (request, response) => {
    const params = request.params
    console.log(params)
    
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