
\# cart-vue
----------
Cart example using vue, vuex. webpack and node.js.
https://powerful-thicket-29393.herokuapp.com/


#Installation
----------
```
git clone git@github.com:ViniciusVaz/cart-vue.git
cd cart-vue
npm install
```

After this run
```
npm run dev
```

Now you will see two messages
```
Server on, port: 4004			
Project is running at http://localhost:8081/
```
The first is the port number of your static server (If you want to change the port number we are talking about this below).
The second one is the link of your aplication, go ahead copy and past this link in your browser.


**Change port number**
----------
By default we are using the server on port 4004, if you want to change this config you must to update these files: ```./app.js``` and ```./config/config.local```.

./app.js (linha 4)
```
const express = require('express')
	, cors = require('cors')
	, consign = require('consign')
	, port = process.env.PORT || 4004 //Default port number
	, app =  express()
  
app.use(cors())
app.use(express.static('./'))
  
consign().include('app/controllers').then('app/routes').into(app)

app.listen(port, () => {
	console.log(`Server on port: ${port}`)
})
```

./config/config.local (linha 1)
```
const port = process.env.PORT || 4004 //Default port number

export default {
	API_URL: `http://localhost:${port}/`
}
```

#Tests
----------
I also started to do some tests using karma and jasmine
```
npm run test
```