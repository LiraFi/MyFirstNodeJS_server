import http, {IncomingMessage, ServerResponse} from 'http';

//request+response function
const requestListener = (req: IncomingMessage, res:ServerResponse)=> {
  //GET method
  if(req.method==="GET" && req.url ==="/"){
    res.write("Hello!");
    res.end();
    return;
  } 
  //POST method
  if(req.method==="POST" && req.url ==="/products"){
    res.write("Create a new product");
    res.end();
    return;
  } 
  //DELETE method
  if(req.method==="DELETE" && req.url ==="/users/:userID"){
    res.write("Delete a user with an id 1!");
    res.end();
    return;
  } 

  res.writeHead(404, "Page Not Found!"); //message when url isn't working
  res.end();
};

//creating server
const server = http.createServer(requestListener);

//choosing a port
const port = 5000;

//server listen method
server.listen(port, () =>{
  console.log(`Server is running on http://localhost:${port}`);
});
