// next.config.js
const withPlugins = require('next-compose-plugins');
const mdx = require('@zeit/next-mdx')({
  extension: /\.(md|mdx)$/,
});

// redirects
const redirects = {async redirects() {
  return [
    {
      source: '/gis/pyqgis-layer-bilder-exportieren',
      destination: '/blog/pyqgis-layer-bilder-exportieren',
      permanent: true
    },
    {
      source: '/gis/react-leaft-erste-schritte',
      destination: '/blog/erste-schritte-react-und-leaflet',
      permanent: true
    },
    {
      source: '/gis/extraktion-hohl-vollformen-raster-dgm',
      destination: '/blog/extraktion-von-hohl-und-vollformen-aus-einem-raster-dgm',
      permanent: true
    },
    {
      source: '/gis/was-ist-gis',
      destination: '/blog/was-ist-gis-geoinformationssystem',
      permanent: true
    },
    {
      source: '/gis/openlayers-web-map',
      destination: '/blog/openlayers-web-map',
      permanent: true
    },
    {
      source: '/gis/geoportal-deutschland',
      destination: '/blog/geoportal-deutschland-geoportale-bundeslaender',
      permanent: true
    },
    {
      source: '/gis/geodaten-konvertierung',
      destination: '/blog/geodaten-konvertierung',
      permanent: true
    },
    {
      source: '/gis/hochaufloesende-satellitenbilder-downloaden',
      destination: '/blog/hochaufloesende-satellitenbilder-downloaden',
      permanent: true
    },
    {
      source: '/gis/fernerkundung-bildklassifikation',
      destination: '/blog/fernerkundung-und-bildklassifikation',
      permanent: true
    },
    {
      source: '/gis/openstreetmap-daten-downloaden',
      destination: '/blog/openstreetmap-daten-shapefiles-downloaden',
      permanent: true
    },
    {
      source: '/gis/qgis-kostenlos-lernen',
      destination: '/blog/qgis-kostenlos-lernen',
      permanent: true
    },
    {
      source: '/gis/gis-software-kategorien',
      destination: '/blog/gis-software-kategorien',
      permanent: true
    },
    {
      source: '/gis/open-source-gis-anwendungen',
      destination: '/blog/open-source-web-gis-anwendungen',
      permanent: true
    },
    {
      source: '/gis/fme-lizenz-kostenlos',
      destination: '/blog/fme-lizenz-kostenlos-fuer-den-privaten-gebrauch',
      permanent: true
    },
    {
      source: '/gis/gis-podcasts',
      destination: '/blog/geo-gis-podcasts',
      permanent: true
    },
    {
      source: '/gis/srtm-download',
      destination: '/blog/einfacher-download-fuer-30-meter-srtm-tiles',
      permanent: true
    },
    {
      source: '/gis/was-ist-ein-shapefile-shp-dbf-shx',
      destination: '/blog/was-ist-ein-shapefile-shp-dbf-und-shx',
      permanent: true
    },
    {
      source: '/gis/geo-datenbank-optionen',
      destination: '/blog/gis-geo-datenbank-managementsystem-optionen',
      permanent: true
    },
    {
      source: '/gis/utm-transformationstool',
      destination: '/blog/gk-utm-koordinaten-umrechnen-transformationstool',
      permanent: true
    },
    {
      source: '/gis/gis-und-ar',
      destination: '/blog/gis-augmented-reality-ar',
      permanent: true
    },
    {
      source: '/gis/gis-freiwilligenarbeit',
      destination: '/blog/gis-freiwilligenarbeit',
      permanent: true
    },
    {
      source: '/gis/gehalt-in-der-gis-branche',
      destination: '/blog/gehalt-und-jobs-in-der-gis-branche',
      permanent: true
    },
    {
      source: '/gis/gis-influencer',
      destination: '/blog/die-bekanntesten-geospatial-und-gis-influencers',
      permanent: true
    },
    {
      source: '/gis/postgis-qgis',
      destination: '/blog/postgre-sql-mit-post-gis-installieren-und-in-qgis-einrichten',
      permanent: true
    },
    {
      source: '/gis/web-feature-service',
      destination: '/blog/web-feature-service-open-source-wfs',
      permanent: true
    },
    {
      source: '/gis/wms-wmts',
      destination: '/blog/wms-web-map-service-wmts',
      permanent: true
    },
    {
      source: '/gis/gis-blogs',
      destination: '/blog/geographie-gis-blogs',
      permanent: true
    },
    {
      source: '/gis/welche-gis-anwendungen-gibt-es',
      destination: '/blog/gis-anwendungen-welche-gis-anwendungen-gibt-es',
      permanent: true
    },
    {
      source: '/gis/gis-jobboersen',
      destination: '/blog/gis-jobboersen-auf-der-suche-nach-einem-neuen-gis-job',
      permanent: true
    },
    {
      source: '/gis/unterschied-cad-gis',
      destination: '/blog/gis-vs-cad-unterschied-zwischen-gis-cad',
      permanent: true
    },
    {
      source: '/gis/autocad-shapefile-export',
      destination: '/blog/auto-cad-map-3d-shapefile-export',
      permanent: true
    },
    {
      source: '/gis/gis-dienstleister',
      destination: '/blog/gis-firmen-gis-dienstleister-verzeichnis',
      permanent: true
    },
    {
      source: '/gis/unigis-professional-weiterbildung',
      destination: '/blog/unigis-weiterbildung-geoinformatik',
      permanent: true
    },
    {
      source: '/gis/geodaten-deutschland-download',
      destination: '/blog/geodaten-deutschland-online-download-kostenlos',
      permanent: true
    },
    {
      source: '/gis/gis-software-optionen',
      destination: '/blog/gis-software-optionen-open-source-kostenlos-kostenpflichtig',
      permanent: true
    },
    {
      source: '/gis/geodatenmanager-weiterbildung',
      destination: '/blog/geodatenmanager-weiterbildung-universitaet-tuebingen',
      permanent: true
    },
    {
      source: '/gis/was-sind-geodaten',
      destination: '/blog/geodaten-was-sind-geodaten',
      permanent: true
    },
    {
      source: '/web-development/mailchimp-newsletter-sign-up-form-gatsbyjs',
      destination: '/blog/mailchimp-newsletter-gatsby-js',
      permanent: true
    },
    {
      source: '/web-development/gatsby-aws-codebuild-codepipeline',
      destination: '/blog/gatsbyjs-codebuild-ci-cd-pipeline',
      permanent: true
    },
    {
      source: '/web-development/gatsby-js-google-adsense',
      destination: '/blog/google-adsense-auf-einer-gatsby-js-seite-integrieren',
      permanent: true
    },
    {
      source: '/web-development/statische-website-aws-cloudfront',
      destination: '/blog/statische-webseite-mit-eigener-domain-aws-s3-und-cloud-front-hosten',
      permanent: true
    },
    {
      source: '/web-development/gatsby-buddy',
      destination: '/blog/gatsby-cli-automatisierung-mit-git-hub-und-buddy',
      permanent: true
    },
    {
      source: '/web-development/bildbearbeitung-mit-python-zuschneiden',
      destination: '/blog/skalieren-und-zuschneiden-von-bildern-mit-python',
      permanent: true
    },
    {
      source: '/web-development/gatsby-analytics-reporting-api-seitenaufrufe',
      destination: '/blog/seitenaufrufe-mit-gatsby-und-google-analytics-reporting-api-anzeigen',
      permanent: true
    },
    {
      source: '/web-development/migration-wordpress-gatsby',
      destination: '/blog/migration-wordpress-gatsby',
      permanent: true
    },
    {
      source: '/en/web-development/gatsby-google-ad-manager-adsense',
      destination: '/blog/integrate-google-ad-manager-with-adsense-in-your-gatsby-site',
      permanent: true
    },
    {
      source: '/en/web-development/build-deploy-gatsby-google-cloud-build-firebase',
      destination: '/blog/build-and-deploy-your-gatsby-site-with-google-cloud-build-to-firebase',
      permanent: true
    },
    {
      source: '/blog/:slug',
      destination: '/articles/:slug',
      permanent: true
    },
    {
      source: '/blog/themen/:slug',
      destination: '/articles/topics/:slug',
      permanent: true
    },
    {
      source: '/articles/was-ist-gis-geoinformationssystem',
      destination: '/articles/what-is-gis-geographic-information-system',
      permanent: true
    },
    {
      source: '/articles/geodaten-was-sind-geodaten',
      destination: '/articles/geodata-what-are-geodata',
      permanent: true
    },
    {
      source: '/articles/gis-software-optionen-open-source-kostenlos-kostenpflichtig',
      destination: '/articles/gis-software-options-free-open-source-and-proprietary',
      permanent: true
    },
    {
      source: '/articles/hochaufloesende-satellitenbilder-downloaden',
      destination: '/articles/satellite-imagery-download-high-resolution',
      permanent: true
    }
  ]
}};

module.exports = withPlugins([
  [mdx],
  redirects,
  {images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: ['api.mxd.codes'],
  }}
]);
