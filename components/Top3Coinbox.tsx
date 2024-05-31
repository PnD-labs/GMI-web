import Image from "next/image"
import { Button } from "./ui/button"
import  Banner  from '../assets/icons/banner.png';


const Top3CoinSection = () => {

  const Top3CoinList = [
    {
      name: "Bitcoin",
      price: "1,000,000",
      change: "0.5",
      image: "https://www.cryptocompare.com/media/37746251/btc.png"
    },
  ]
  const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
  return (
    <div className="w-full h-full flex">
      {Top3CoinList.map((coin, index) => (
        <div
          key={index}
          className="w-full"
        >
          <div className="w-full h-[480px] rounded-2xl   relative">
            <Image 
              placeholder="blur"
             quality={80}
             fill
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             style={{
               objectFit: 'fill',
             }}
            src={Banner} alt={coin.name}
     
      className="rounded-2xl" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Top3CoinSection
