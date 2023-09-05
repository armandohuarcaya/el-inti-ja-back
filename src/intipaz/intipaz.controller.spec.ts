import { Test, TestingModule } from '@nestjs/testing';
import { IntipazController } from './intipaz.controller';
import { IntipazService } from './application/intipaz.service';

describe('IntipazController', () => {
  let controller: IntipazController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntipazController],
      providers: [IntipazService],
    }).compile();

    controller = module.get<IntipazController>(IntipazController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
