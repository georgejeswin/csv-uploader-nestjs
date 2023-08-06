import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FileUploadService {
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  async uploadFile(file: Express.Multer.File) {
    const uploadedFile = await this.s3
      .upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: file.buffer,
        Key: uuid(),
      })
      .promise();

    return uploadedFile.Location;
  }
}
