import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uploads } from 'src/typeorm/entities/upload.entity';
import { UsersModule } from 'src/users/users.module';
import { UploadssController } from './controllers/uploads/uploads.controller';
import { UploadsService } from './services/uploads/uploads.service';
import { FileUploadModule } from 'src/fileupload/fileUpload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Uploads]), UsersModule, FileUploadModule],
  controllers: [UploadssController],
  providers: [UploadsService],
})
export class UploadssModule {}
