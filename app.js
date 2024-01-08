const express = require("express")
const app = express()
const fs = require("fs")
const os = require("os")
const path = require("path")
require("dotenv").config()
const body_parser = require("body-parser")


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
            res.status(500).json(message)
        }
        else
        {
            fs.writeFile(`${os.homedir}/OLDAPP/${nom}`, contenue,(error)=>{
                if(error)
                {
                    const message = "Nous n'avons pas pu créer le fichier"
                    res.status(500).json(message)
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

