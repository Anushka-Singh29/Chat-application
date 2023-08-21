const io = require( "socket.io" )();
const socketapi = {
    io: io
};

var alluserid = [];
var allusername = [];

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    io.emit("onlineusers" , allusername.length)

socket.on("disconnect", function(){
    console.log("a user disconnected");
    alluserid.splice(alluserid.indexOf(socket.id),1);
    allusername.splice(allusername.indexOf(socket.id),1);
    io.emit("onlineusers", allusername.length)
})

socket.on("naam", function(setname){
    alluserid.push(socket.id);
    allusername.push(setname);
    io.emit('onlineusers', alluserid.length);
    // name = data.name;
})

   // to show msgs in frontend 
   socket.on("msg", function (data) {
    // console.log(data)
    io.emit("msg", data)
})

// socket.on('chat message', function(msg){
//     io.emit('chat message', msg, name);
// })

});
// end of socket.io logic
 
module.exports = socketapi;