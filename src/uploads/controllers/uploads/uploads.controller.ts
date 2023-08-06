import {
  Controller,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { omit } from 'lodash';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UploadsService } from 'src/uploads/services/uploads/uploads.service';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('upload')
export class UploadssController {
  constructor(
    private uploadService: UploadsService,
    private userService: UsersService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async createUploads(
    @Request() req,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const user = await this.userService.findUserByUsername(req?.user?.username);
    const fileUrl = await this.uploadService.uploadFileToBucket(file);
    const serializedUser = omit(user, ['password']);
    await this.uploadService.createUploads({
      user: serializedUser,
      fileUrl,
    });
    if (fileUrl) return `CSV uploaded successfully - ${fileUrl}`;
    else return 'CSV upload failed';
  }
}
