require('dotenv').config();
const { initFerbotzRekonClient } = require('ferbotz-rekon-client');

const express = require('express');
const app = express()
const port = process.env.PORT
app.use(express.json())

initFerbotzRekonClient(
    {
        express : app,
        mongoUrl : process.env.REKON_MONGO_URL
    },
    (error) => {
        if(!error) {
            console.log("rekon init successful")
            app.listen(port, () => {
                console.log(`Server started on port ${port}`)
            })
        }else{
            if(error.code === 1){
                console.log("failed to init rekon client mongo")
            }else{
                console.log(error)
            }
        }
    }
)
