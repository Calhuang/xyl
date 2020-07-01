const init = (io) => {
  const activeUsers = []

  io.on("connection", socket => {
    console.log("New client connected");
    console.log(activeUsers)
    //Here we listen on a new namespace called "incoming data"
    socket.on("addClick", (data) => {
      const userExists = activeUsers.findIndex((el) => {
        return el.socketID === socket.id
      });
      console.log(userExists);
      if (userExists >= 0) {
        // user is active
        activeUsers[userExists].clickCount += 1;
        console.log(activeUsers[0]);
        socket.emit('setClick', activeUsers[userExists].clickCount)
        // socket.broadcast.emit('setRankings', activeUsers)
        io.emit('setRankings', activeUsers);
        // socket.emit('setRankings', activeUsers)
      } else {
        // create user
        activeUsers.push({
          id: data.id,
          clickCount: 1,
          socketID: socket.id,
        })
        socket.emit('setClick', 1)
      }
    });
  
    //A special namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      // const indexToRemove = activeUsers.findIndex((el) => {
      //   return el.socketID === socket.id
      // });
      // activeUsers.splice(indexToRemove, 1);
    });
  });
}

module.exports = init