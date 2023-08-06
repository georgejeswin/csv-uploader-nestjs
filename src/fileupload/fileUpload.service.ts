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
    let retries = 0;
    const fileResponse: AWS.S3.ManagedUpload.SendData = await new Promise(
      (resolve, reject) => {
        const uploadFileToS3 = async () => {
          try {
            const uploadedFile = await this.s3
              .upload({
                Bucket: process.env.AWS_BUCKET_NAME,
                Body: file.buffer,
                Key: uuid(),
              })
              .promise();
            resolve(uploadedFile);
          } catch (error) {
            retries++;
            if (retries <= 2) uploadFileToS3();
            else reject(error);
          }
        };
        uploadFileToS3();
      },
    );

    return fileResponse?.Location;
  }
}
