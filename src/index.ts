import Dubbo from '@typeservice/dubbo';

const app = new Dubbo({
  provider: {
    application: 'example',
    dubbo_version: '2.0.2',
    port: 8080,
  },
  registry: {
    host: '127.0.0.1:2181'
  },
  swagger: 'namespace'
});
app.scan('service', __dirname);
app.listen();