import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
@Injectable()
export class MemeService {
  getRandomImageHTML(): string | null {
    const dir = 'static/memes';
    try {
      const files = fs.readdirSync(dir); // Читаем файлы в папке
      const images = files.filter((file) => /\.(png|jpe?g|gif)$/i.test(file)); // Фильтруем, чтобы остались только изображения
      if (images.length === 0) return null; // Если в папке нет изображений

      const randomImage = images[Math.floor(Math.random() * images.length)];

      return `<div><img src="http://localhost:3030/${path.join(randomImage)}" alt="Random Image" /></div>`;
    } catch (error) {
      console.error('Ошибка при получении случайного изображения:', error);
      return null;
    }
  }

  getMem(): string {
    return this.getRandomImageHTML();
  }
}