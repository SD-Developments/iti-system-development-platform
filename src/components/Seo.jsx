import { Helmet } from 'react-helmet';
import { DEFAULT_SEO, SITE, getAbsoluteUrl } from '@/lib/seo';

/**
 * Reusable per-page SEO head manager (react-helmet).
 *
 * Usage:
 *   <Seo title="..." description="..." path="/about" />
 *   <Seo {...PAGE_SEO.about} />
 *
 * All props are optional — anything omitted falls back to DEFAULT_SEO / SITE.
 */
function Seo({
  title,
  description,
  keywords,
  path = '/',
  image,
  type,
  robots,
  canonical,
  structuredData,
}) {
  const fullTitle = title ?? DEFAULT_SEO.title;
  const metaDescription = description ?? DEFAULT_SEO.description;
  const metaKeywords = (keywords ?? DEFAULT_SEO.keywords).join(', ');
  const metaRobots = robots ?? DEFAULT_SEO.robots;
  const pageUrl = canonical ?? getAbsoluteUrl(path);
  const ogImage = image ?? SITE.defaultImage;
  const ogType = type ?? DEFAULT_SEO.type;
  const isNoIndex = metaRobots.includes('noindex');

  const defaultWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    description: metaDescription,
    url: pageUrl,
    inLanguage: SITE.language,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
    about: {
      '@type': 'EducationalOrganization',
      name: SITE.name,
      url: SITE.url,
    },
  };

  const schemas = [];
  if (!isNoIndex) {
    schemas.push(defaultWebPageSchema);
    if (Array.isArray(structuredData)) schemas.push(...structuredData);
    else if (structuredData) schemas.push(structuredData);
  }

  return (
    <Helmet>
      <html lang={SITE.language} />
      <title>{fullTitle}</title>

      {/* Primary */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={SITE.author} />
      <meta name="robots" content={metaRobots} />
      <meta name="theme-color" content={SITE.themeColor} />
      <meta name="application-name" content={SITE.shortName} />

      {/* Canonical */}
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content={SITE.twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Structured data (JSON-LD) */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
