import sharp from 'sharp'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = join(__dirname, '..', 'src', 'assets', 'logo.jpg.png')

const img = sharp(src)
const meta = await img.metadata()

console.log(`Original: ${meta.width}x${meta.height}, ${meta.format}`)

// Create WebP at 2x display size for retina (display ~56px → output 112px)
const webpPath = join(__dirname, '..', 'src', 'assets', 'logo.webp')
await sharp(src)
  .resize(112, 112, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 85 })
  .toFile(webpPath)

const { size } = await import('fs').then(m => m.statSync(webpPath))
console.log(`WebP (112x112): ${(size / 1024).toFixed(1)} KB`)

// Also create a fallback PNG at same size
const pngPath = join(__dirname, '..', 'src', 'assets', 'logo-sm.png')
await sharp(src)
  .resize(112, 112, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(pngPath)

const pngSize = (await import('fs').then(m => m.statSync(pngPath))).size
console.log(`PNG (112x112): ${(pngSize / 1024).toFixed(1)} KB`)
