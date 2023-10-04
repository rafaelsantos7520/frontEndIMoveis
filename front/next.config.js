/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
     domains: ['fotosimoveis.blob.core.windows.net'], // Adicione o hostname aqui
  },
  experimental: {
    images: {
       allowFutureImage: true
     }
   }
   
}

module.exports = nextConfig
