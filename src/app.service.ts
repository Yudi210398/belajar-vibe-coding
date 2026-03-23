import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      name: 'belajar-vibe-coding',
      status: 'ok',
      message: 'NestJS, PostgreSQL, and Prisma starter is ready.',
    };
  }
}

