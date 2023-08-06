import { Controller } from '@nestjs/common';
import { FileUploadService } from './fileUpload.service';

@Controller('fileUpload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}
}
