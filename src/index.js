const server= require("./config/server")
require('./config/database')

server.listen(server.get('port'))