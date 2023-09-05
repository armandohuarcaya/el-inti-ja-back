import { Test, TestingModule } from '@nestjs/testing';
import { IntipazService } from './application/intipaz.service';

describe('IntipazService', () => {
  let service: IntipazService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntipazService],
    }).compile();

    service = module.get<IntipazService>(IntipazService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
