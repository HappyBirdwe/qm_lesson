const Hapi = require('hapi');
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi'); 
const routesShops = require('./routes/shops');
const pluginHapiSwagger = require('./plugins/hapi-swagger');   // 插件 非MVC之外的东西
require('env2')('./.env')
const config = require('./config/index');

server.connection({
    port: config.port,
    host: config.host 
})
const init = async() => {
    await server.register([
        ...pluginHapiSwagger
    ]);
   server.route([
       ...routesHelloHapi,
       ...routesShops
   ])
    await server.start();
    console.log(`Server running at:${server.info.uri}`);
}


init();