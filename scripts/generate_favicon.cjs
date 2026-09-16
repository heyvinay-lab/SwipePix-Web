const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

function createSwipePixPng(size) {
  const png = new PNG({ width: size, height: size });
  
  // Fill transparent
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (size * y + x) << 2;
      png.data[idx] = 0;
      png.data[idx + 1] = 0;
      png.data[idx + 2] = 0;
      png.data[idx + 3] = 0;
    }
  }

  const scale = size / 32;

  function setPixel(x, y, r, g, b, a = 255) {
    if (x < 0 || x >= size || y < 0 || y >= size) return;
    const idx = (size * y + x) << 2;
    png.data[idx] = r;
    png.data[idx + 1] = g;
    png.data[idx + 2] = b;
    png.data[idx + 3] = a;
  }

  function fillRect(rx, ry, rw, rh, r, g, b) {
    for (let y = Math.round(ry * scale); y < Math.round((ry + rh) * scale); y++) {
      for (let x = Math.round(rx * scale); x < Math.round((rx + rw) * scale); x++) {
        setPixel(x, y, r, g, b, 255);
      }
    }
  }

  // Hard drop shadow (black)
  fillRect(6, 6, 22, 22, 5, 5, 5);
  // Main Card Body (Brand Blue #2F6BFF)
  fillRect(4, 4, 22, 22, 47, 107, 255);
  // Card Border (Ink #050505)
  for (let x = 4; x < 26; x++) {
    for (let t = 0; t < 2; t++) {
      fillRect(x, 4 + t, 1, 1, 5, 5, 5);
      fillRect(x, 24 + t, 1, 1, 5, 5, 5);
    }
  }
  for (let y = 4; y < 26; y++) {
    for (let t = 0; t < 2; t++) {
      fillRect(4 + t, y, 1, 1, 5, 5, 5);
      fillRect(24 + t, y, 1, 1, 5, 5, 5);
    }
  }
  // Top Header Accent Stripe (Lime #B8FF00)
  fillRect(6, 6, 18, 5, 184, 255, 0);
  // Header border line
  fillRect(6, 11, 18, 1, 5, 5, 5);
  // Card center swipe arrow (Magenta / Pink #FF4FD8)
  fillRect(10, 15, 10, 5, 255, 79, 216);
  fillRect(16, 13, 3, 9, 255, 79, 216);

  return PNG.sync.write(png);
}

const png32 = createSwipePixPng(32);
const png16 = createSwipePixPng(16);

// Build multi-image ICO container
// ICONDIR header: 6 bytes
// ICONDIRENTRY: 16 bytes per image
const numImages = 2;
const headerSize = 6 + (16 * numImages);
const offset1 = headerSize;
const offset2 = headerSize + png32.length;

const icoBuffer = Buffer.alloc(headerSize + png32.length + png16.length);

// ICONDIR
icoBuffer.writeUInt16LE(0, 0); // Reserved
icoBuffer.writeUInt16LE(1, 2); // Type: 1 = ICO
icoBuffer.writeUInt16LE(numImages, 4); // Number of images

// Entry 1: 32x32
icoBuffer.writeUInt8(32, 6); // Width
icoBuffer.writeUInt8(32, 7); // Height
icoBuffer.writeUInt8(0, 8);  // Color count
icoBuffer.writeUInt8(0, 9);  // Reserved
icoBuffer.writeUInt16LE(1, 10); // Color planes
icoBuffer.writeUInt16LE(32, 12); // Bits per pixel
icoBuffer.writeUInt32LE(png32.length, 14); // Size of image data
icoBuffer.writeUInt32LE(offset1, 18); // Offset to image data

// Entry 2: 16x16
icoBuffer.writeUInt8(16, 22); // Width
icoBuffer.writeUInt8(16, 23); // Height
icoBuffer.writeUInt8(0, 24);  // Color count
icoBuffer.writeUInt8(0, 25);  // Reserved
icoBuffer.writeUInt16LE(1, 26); // Color planes
icoBuffer.writeUInt16LE(32, 28); // Bits per pixel
icoBuffer.writeUInt32LE(png16.length, 30); // Size of image data
icoBuffer.writeUInt32LE(offset2, 34); // Offset to image data

// Copy PNG payloads
png32.copy(icoBuffer, offset1);
png16.copy(icoBuffer, offset2);

const publicDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createSwipePixPng(180));
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), createSwipePixPng(192));
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), createSwipePixPng(512));

console.log('Favicon and icon assets successfully generated!');
