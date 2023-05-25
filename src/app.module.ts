import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express/multer';
import { S3Module } from 'nestjs-s3';

@Module({
  imports: [
    // MulterModule.register({
    //   dest: './uploads',
    // }),
    S3Module.forRoot({
      config: {
        credentials: {
          accessKeyId: 'AKIAXVB3QGD7BWVR765H',
          secretAccessKey: '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',
        },
        region: 'ap-northeast-2',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
