import { Seo } from '../components/Seo'
import { SITE_SEO } from '../data/products'
import { Hero } from '../components/Hero'
import { LogoCloud } from '../components/LogoCloud'
import { Platforms } from '../components/Platforms'
import { FeatureBands } from '../components/FeatureBands'
import { Beliefs } from '../components/Beliefs'
import { Products } from '../components/Products'
import { Agents } from '../components/Agents'
import { Stack } from '../components/Stack'
import { Process } from '../components/Process'
import { Safety } from '../components/Safety'
import { Faq } from '../components/Faq'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <>
      <Seo
        title={SITE_SEO.defaultTitle}
        description={SITE_SEO.defaultDescription}
        keywords={SITE_SEO.keywords}
        path="/"
      />
      <Hero />
      <LogoCloud />
      <Platforms />
      <FeatureBands />
      <Beliefs />
      <Products />
      <Agents />
      <Stack />
      <Process />
      <Safety />
      <Faq />
      <Contact />
    </>
  )
}
