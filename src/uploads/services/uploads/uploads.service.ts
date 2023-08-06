import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUploadService } from 'src/fileupload/fileUpload.service';
import { Uploads as UploadsEntity } from 'src/typeorm/entities/upload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadsService {
  constructor(
    @InjectRepository(UploadsEntity)
    private readonly uploadRepository: Repository<UploadsEntity>,
    private fileUpload: FileUploadService,
  ) {}
  async createUploads(createUploadsDto: any) {
    try {
      const file = await this.uploadRepository.create(createUploadsDto);
      return this.uploadRepository.save(file);
    } catch (error) {
      console.log('Create Uploads Error: ', error);
    }
  }
  async uploadFileToBucket(file: Express.Multer.File) {
    return await this.fileUpload.uploadFile(file);
  }
}
