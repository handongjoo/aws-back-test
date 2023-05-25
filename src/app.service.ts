import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class AppService {
  private s3: S3;

  constructor() {
    this.s3 = new S3();
  }

  async uploadFile(file: Express.Multer.File): Promise<void> {
    const params = {
      ACL: 'public-read',
      Bucket: 'dongjoo-test',
      Body: file.buffer,
      Key: file.originalname,
      ContentType: file.mimetype,
    };

    await this.s3.putObject(params).promise();
  }
}