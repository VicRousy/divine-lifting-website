import sharp from 'sharp'
import { statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const assetsDir = join(__dirname, '..', 'src', 'assets')

const images = [
  { src: 'school2.jpg.jpeg', webp: 'school2.webp', maxW: 1200 },
  { src: 'school.jpg.jpeg', webp: 'school.webp', maxW: 1200 },
  { src: 'school3.jpg.jpeg', webp: 'school3.webp', maxW: 1200 },
  { src: 'primary.jpg', webp: 'primary.webp', maxW: 800 },
  { src: 'secondary.jpg', webp: 'secondary.webp', maxW: 800 },
  { src: 'nursery and pre-school.jpg', webp: 'nursery-preschool.webp', maxW: 800 },
  { src: 'proprietress.jpg.jpeg', webp: 'proprietress.webp', maxW: 600 },
]

for (const img of images) {
  const srcPath = join(assetsDir, img.src)
  const webpPath = join(assetsDir, img.webp)
  const meta = await sharp(srcPath).metadata()
  const resizeOpts = meta.width > img.maxW ? { width: img.maxW } : {}
  await sharp(srcPath).resize(resizeOpts).webp({ quality: 80 }).toFile(webpPath)
  const origKB = (statSync(srcPath).size / 1024).toFixed(1)
  const webpKB = (statSync(webpPath).size / 1024).toFixed(1)
  console.log(`${img.src}: ${origKB}KB → ${webpKB}KB`)
}
