// src/utils/Sprite.js
export default class Sprite {
  constructor({ position, image, frames = { max: 1 }, slice }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, val: 0, elapsed: 0 };
    // 確保圖片已加載完成後再計算寬高
    this.slice = slice;
    this.width = this.image.width / frames.max; // 每幀的寬度
    this.height = this.image.height; // 每幀的高度
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.frames.val * this.width, // 當前幀的 X 裁剪位置
      0, // 當前幀的 Y 裁剪位置
      this.width, // 單幀的寬度
      this.height, // 單幀的高度
      this.position.x, // 繪製的 X 位置
      this.position.y, // 繪製的 Y 位置
      this.width, // 繪製到畫布的寬度
      this.height // 繪製到畫布的高度
    );

    // 更新動畫幀
    this.frames.elapsed++;
    if (this.frames.elapsed % 15 === 0) {
      this.frames.val = (this.frames.val + 1) % this.frames.max;
    }
  }
}
