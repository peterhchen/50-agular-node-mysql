let messages = [
    {name: "john", message: "hi"},
    {name: "mary", message: "hola"}
    // return = db.collection .find (name)

];

let myGetSpecificUserHandler  =(req,res)=> {
    console.log('Request IP: ${req.ip}');
    let name = req.params['name'];
    console.log(name);
    let filteredMessages = messages.filter((ele) => {
        return ele.name === name;
    });
    res.json(filteredMessages);

}


let getAllMessages = (req, res)=>{
    console.log ("hello");
    res.json(messages);
}

module.exports = {
    myGetSpecificUserHandler:myGetSpecificUserHandler,
    getAllMessages: getAllMessages
}