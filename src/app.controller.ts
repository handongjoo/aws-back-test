import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex(){
    return "AWS"
  }

  @Post('fileupload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res): Promise<void> {
    try {
      await this.appService.uploadFile(file);
      res.json({ result: 'success' });
    } catch (error) {
      res.status(500).json({ result: 'error' });
    }
  }
}