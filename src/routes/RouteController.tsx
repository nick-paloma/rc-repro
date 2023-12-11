import {
  Get,
  JsonController, Param,
} from 'routing-controllers';

@JsonController('/test')
export class RouteController {

  @Get('/:testType')
  async download(
    @Param('testType') testType: number,
  ) {
    return {"type": typeof testType}
  }
}
