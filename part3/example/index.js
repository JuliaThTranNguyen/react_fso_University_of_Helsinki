console.log('hello world')

const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})

let notes = [  
    {    
        id: 1,    
        content: "HTML is easy",    
        important: true  },  
    {    id: 2,    
        content: "Browser can execute only JavaScript",    
        important: false  },  
    {    id: 3,    
        content: "GET and POST are the most important methods of HTTP protocol",    
        important: true  }
    ]
        const app2 = http.createServer((request, response) => {  
            response.writeHead(200, { 'Content-Type': 'application/json' })  
            response.end(JSON.stringify(notes))
    })

const PORT = 3001
const PORT2 = 3002
app.listen(PORT)
app2.listen(PORT2)
console.log(`Server running on port ${PORT}`)
console.log(`Server2 running on port ${PORT2}`)

/*---------------------------- */
const express = require('express')
const app3 = express()

app3.use(express.json())

let notes3 = [
    {    
        id: 1,    
        content: "HTML is easy",    
        important: true  },  
    {    id: 2,    
        content: "Browser can execute only JavaScript",    
        important: false  },  
    {    id: 3,    
        content: "GET and POST are the most important methods of HTTP protocol",    
        important: true  },
    {    id: 4,    
        content: "new server on new port",    
        important: true  }
]

app3.get('/', (request,response) => {
    response.send('<h1>Hello word from app3</h1>')
})

app3.get('/api/notes3', (request, response) => {
    response.json(notes3)
  })

  //This is a failed case --an example beforehand on how to solved it
// app3.get('/api/notes3/:id', (request, response) => {
//     const id = request.params.id
//     const note3 = notes3.find(note3 => {
//       console.log(note3.id, typeof note3.id, id, typeof id, note3.id === id)
//       return note3.id === id
//     })
//     console.log(note3)
//     response.json(note3)
// })

app3.get('/api/notes3/:id', (request, response) => {
    const id = Number(request.params.id)  
    const note3 = notes3.find(note => note.id === id)
    if (note3) {    
        response.json(note3)  
    } else{    
        response.status(404).end()  }
})
  
app3.delete('/api/notes3/:id', (request, response) => {
    const id = Number(request.params.id)
    notes3 = notes3.filter(note => note.id !== id)
  
    response.status(204).end()
  })//testes--successfully

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }

  app3.post('/api/notes3', (request, response) => {  
    const body = request.body

    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const note = {
      content: body.content,
      important: body.important || false,
      id: generateId(),
    }
  
    notes = notes.concat(note)
  
    response.json(note)
  })
  const PORT3 = 3003
  app3.listen(PORT3, () => {
    console.log(`Server3 running on port ${PORT3}`)
  })