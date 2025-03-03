// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path')
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // nitro:{
  //   output:{
  //     publicDir: path.join(__dirname,'docs')
  //   }
  // },
  app:{
    baseURL:"/resume/",
    buildAssetsDir:'nuxt_assets',
  },
  experimental:{
    payloadExtraction:false,
  }
})
