const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 8000

let hobbies = [
    {
        id: 00,
        hobby: 'none',
        relevantSearches: ['none'],
        hobbyType: ['none']
    },
    {
        id: 01,
        hobby: 'knitting',
        relevantSearches: ['How to cast on', 'How to make the knit stitch', 'How to make the purl stitch', 'What is a LYS?'],
        hobbyType: ['relaxing', 'craft']
    },
    {
        id: 02,
        hobby: 'skateboarding',
        relevantSearches: ['How to put the skateboard on a grass patch', 'Beginner skateboarding tips', 'Skateboard position', 'Skate shop near me'],
        hobbyType: ['athletic', 'cool']
    },
    {
        id: 03,
        hobby: 'pine needle basket weaving',
        relevantSearches: ['Where to find pine needles for basket weaving', 'How to make a pine needle basket', 'How to dye pine needles', 'How to make a pine needle coil'],
        hobbyType: ['relaxing', 'craft']
    },
    {
        id: 04,
        hobby: 'playing chess',
        relevantSearches: ['Chess playing apps', 'The basic rules of chess', 'Chess grand masters', 'Queen\'s Gambit'],
        hobbyType: ['academic', 'game']
    }
]

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/hobby/:id', (req, res) => {
    const id = Number(req.params.id)
    const hobby = hobbies.find(hobby => hobby.id === id)
     if (hobby){
         res.json(hobby)
     } else {
         res.json(hobbies[00])
     }
})

app.listen((process.env.PORT || PORT), () => {
    console.log(`Server is running on port ${PORT}`)
})

