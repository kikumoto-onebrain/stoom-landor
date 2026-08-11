import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import MotionProvider from '@/components/MotionProvider';
import { jsonLdScript } from '@/lib/json-ld';

const outfit = localFont({
  src: './fonts/outfit-latin.woff2',
  variable: '--font-outfit',
  display: 'swap',
  weight: '100 900',
});

const roboto = localFont({
  src: './fonts/roboto-latin.woff2',
  variable: '--font-roboto',
  display: 'swap',
  weight: '100 900',
});

const SITE_URL = 'https://stoom.com.br';
const OG_IMAGE = `${SITE_URL}/thumb-stoom.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'Stoom | Smart lockers e plataforma para gestão de entregas',
  description:
    'A Stoom combina smart lockers e plataforma digital para automatizar entregas, retiradas e gestão logística com segurança, rastreabilidade e controle em tempo real.',

  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',

  keywords: [
    'Stoom',
    'smart locker',
    'smart lockers',
    'armário inteligente',
    'armários inteligentes',
    'lockers inteligentes',
    'locker para encomendas',
    'gestão de entregas',
    'automação de entregas',
    'retirada por QR Code',
    'controle de encomendas',
    'rastreamento de entregas',
    'plataforma logística',
    'gestão logística',
    'logística inteligente',
    'automação logística',
    'lockers para condomínios',
    'lockers para empresas',
    'lockers para varejo',
    'lockers para indústrias',
    'lockers para operações logísticas',
    'last mile',
    'última milha',
    'entrega autônoma',
    'retirada autônoma',
    'infraestrutura logística digital',
  ],

  alternates: {
    canonical: `${SITE_URL}/`,
  },

  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    siteName: 'Stoom',
    locale: 'pt_BR',
    title: 'Stoom | Smart lockers e plataforma para gestão de entregas',
    description:
      'A Stoom combina smart lockers e plataforma digital para automatizar entregas, retiradas e gestão logística com segurança, rastreabilidade e controle em tempo real.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Stoom — Smart lockers e plataforma de gestão logística',
        type: 'image/webp',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Stoom | Smart lockers e plataforma para gestão de entregas',
    description:
      'A Stoom combina smart lockers e plataforma digital para automatizar entregas, retiradas e gestão logística com segurança, rastreabilidade e controle em tempo real.',
    images: [OG_IMAGE],
  },

  other: {
    'og:image:secure_url': OG_IMAGE,
    'og:image:type': 'image/webp',
    'og:image:width': '1200',
    'og:image:height': '630',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon-stoom.svg',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Stoom',
  url: SITE_URL,
  logo: `${SITE_URL}/stoom-primario.svg`,
  description:
    'A Stoom combina smart lockers e plataforma digital para automatizar entregas, retiradas e gestão logística com segurança, rastreabilidade e controle em tempo real.',
  sameAs: [
    'https://www.linkedin.com/company/stoom-ecommerce/',
    'https://www.instagram.com/stoom_tecnologia_/',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stoom',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/conteudos?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd) }}
        />
      </head>
      <body className={roboto.className}>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TLN423QH');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S12SFW8SV2"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-S12SFW8SV2');`,
          }}
        />
        <Script id="hs-script-loader" src="//js.hs-scripts.com/51547160.js" strategy="afterInteractive" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLN423QH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}