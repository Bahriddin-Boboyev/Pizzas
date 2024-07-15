import './index.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context'
import { HelmetProvider } from 'react-helmet-async'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-TJNXKDWD',
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'))
const helmetContext = {
  // Helmet: {
  //     meta: [
  //         { name: 'description', content: "Bizning ilovamiz haqida ma'lumot" }, // Tavsif
  //         { property: 'og:title', content: 'Bizning Ilova Nomi' }, // Open Graph title
  //         { property: 'og:description', content: "Bizning ilovamiz haqida ko'proq ma'lumot" }, // Open Graph tavsif
  //         { property: 'og:image', content: 'https://example.com/images/logo.png' }, // Open Graph rasmi
  //         { property: 'og:url', content: 'https://example.com' }, // Open Graph URL
  //         { name: 'twitter:title', content: 'Bizning Ilova Nomi' }, // Twitter title
  //         { name: 'twitter:description', content: "Bizning ilovamiz haqida ma'lumot" }, // Twitter tavsif
  //         { name: 'twitter:image', content: 'https://example.com/images/logo.png' }, // Twitter rasmi
  //     ],
  //     title: { template: '%s | Bizning Ilova Nomi' }, // Sahifa sarlavhasi
  // },
}

root.render(
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <DataProvider>
        <App />
        <SpeedInsights />
      </DataProvider>
    </BrowserRouter>
  </HelmetProvider>,
)
