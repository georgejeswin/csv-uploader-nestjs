import { Test, TestingModule } from '@nestjs/testing';
import { UploadssController } from './uploads.controller';

describe('UploadssController', () => {
  let controller: UploadssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadssController],
    }).compile();

    controller = module.get<UploadssController>(UploadssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
