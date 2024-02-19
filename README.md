## Express + React

### How to set up

First step is to create 2 directories: `server` and `client`

#### Server Side

1. Go to the `server` directory and run `npm init -y`
2. Edit `package.json` and change the line `"main": "index.js",` with `"main": "server.js",`
3. Create the file `server.js`
4. Install express with `npm i express`
5. Install nodemon so if you make any changes, it reloads the server, `npm i nodemon -D` as a dev dependency
6. Edit `package.json` and add the following lines to the `"scripts"` section: `"start": "node server",` and `"dev": "nodemon server"`
7. Add the following content to the `server.js` file: 

```
const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["User1", "User2", "User3"]})
})

app.listen(4000, () => { console.log("Server started on Port 4000") })
```
8. On the console run `npm run dev` to run your server locally using nodemon, otherwise, use `npm run start` 


#### Client Side

1. Go to the `client` directory and run `npx create-react-app .`
2. Remove the content of `src/App.css` and `src/App.js` and replace it with a normal basic content (you can use the shortcut `rfce`), it should generate a content like this:

```
import React from 'react'

function App() {
    return (
        <div>
        
        </div>
    )
}

export default App
```
3. Edit the `package.json` file and under `"version"` add the following line: `"proxy": "http://localhost:4000"` in order to be able to make relative API calls
4. Start your client by running `npm start` 

**Sample API Call:**

This is a sample call to the API on the App.js file:

```
import React, { useEffect, useState } from 'react'

function App() {

    const [ backendData, setBackendData ] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <div>
            {(typeof backendData.users === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )}
        </div>
    )
}

export default App
```

### Reference: 

**Video:** https://www.youtube.com/watch?v=w3vs4a03y3I 
