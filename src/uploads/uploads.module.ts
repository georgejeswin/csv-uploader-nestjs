import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uploads } from 'src/typeorm/entities/upload.entity';
import { UsersModule } from 'src/users/users.module';
import { UploadsController } from './controllers/uploads/uploads.controller';
import { UploadsService } from './services/uploads/uploads.service';
import { FileUploadModule } from 'src/fileupload/fileUpload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Uploads]), UsersModule, FileUploadModule],
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadssModule {}
