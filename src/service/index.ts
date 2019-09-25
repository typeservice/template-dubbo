import { injectable } from 'inversify';
import { rpc } from '@typeservice/dubbo';

@injectable()
@rpc.Interface('com.company.example')
@rpc.Version('1.0.0')
@rpc.Description('测试演示')
export default class IndexService {
  @rpc.Method
  @rpc.Swagger.Summary('测试')
  @rpc.Swagger.Request()
  @rpc.Swagger.Response({ type: 'string' })
  Test(@rpc.ctx.id id: number, @rpc.ctx.param(0) value: number) {
    return 'Hello world! ' + (id + value);
  }
}