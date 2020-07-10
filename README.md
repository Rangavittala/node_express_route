# node_express_route

Code Explanation:

### In our first line of code, we are using the require function to include the "express module."
### Before we can start using the express module, we need to make an object of it.
Here we are creating a callback function. This function will be called whenever anybody browses to the root of our web application which is http://localhost:3000 . The callback function will be used to send the string 'Hello World' to the web page.
In the callback function, we are sending the string "Hello World" back to the client. The 'res' parameter is used to send content back to the web page. This 'res' parameter is something that is provided by the 'request' module to enable one to send content back to the web page.
We are then using the listen to function to make our server application listen to client requests on port no 3000. You can specify any available port over here.
If the command is executed successfully, the following Output will be shown when you run your code in the browser.
