const express = require("express")
const app = express()
const fs = require("fs")
const os = require("os")
const path = require("path")
require("dotenv").config()
const cors = require("cors")
const body_parser = require("body-parser")

app.use(cors())
app.use(body_parser.json())
app.listen(process.env.PORT || 2000, ()=>{
    console.log("http://localhost:"+2000)
})

app.get("/", (req,res)=>{
    res.send("Hallo Boss")
})
app.get("/file", (req,res)=>{
    const nom = req.body.name
    const contenue = req.body.contenue
    fs.mkdir(`${os.homedir}/OLDAPP`, (error)=>{
        if(error)
        {
            const message = "Nous n'avons pas pu créer le dossier"
            res.status(500).json(message, error)
        }
        else
        {
            fs.writeFile(`${os.homedir}/OLDAPP/${nom}.txt`, contenue,(error)=>{
                if(error)
                {
                    const message = "Nous n'avons pas pu créer le fichier"
                    res.status(500).json(message, error)
                }
                else
                {
                    const message = "Fichier créér avec succées"
                    res.status(500).json(message)
                }
            })
        }
    })
})


