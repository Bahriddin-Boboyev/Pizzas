const fs = require('fs')
const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

const hostname = 'https://pizzas-uz.vercel.app'

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/basket', changefreq: 'daily', priority: 0.8 },
  { url: '/order', changefreq: 'monthly', priority: 0.8 },
  { url: '/menu/pizzas', changefreq: 'daily', priority: 0.8 },
  { url: '/menu/sushi', changefreq: 'daily', priority: 0.8 },
  { url: '/menu/drink', changefreq: 'daily', priority: 0.8 },
  { url: '/menu/snacks', changefreq: 'daily', priority: 0.8 },
  { url: '/menu/combo', changefreq: 'monthly', priority: 0.8 },
  { url: '/menu/desserts', changefreq: 'daily', priority: 0.8 },
  { url: '/menu/sauce', changefreq: 'daily', priority: 0.8 },
  { url: '/menu/fire', changefreq: 'daily', priority: 0.8 },
  // Add additional pages here
]

// Create a stream to write to
const stream = new SitemapStream({ hostname })

// CREATE SITE MAP FILE
// Return a promise that resolves with your XML string
return streamToPromise(Readable.from(urls).pipe(stream)).then((data) =>
  fs.writeFileSync('./public/sitemap.xml', data.toString()),
)
