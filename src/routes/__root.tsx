import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md gradient-gold px-5 py-2.5 text-sm font-semibold text-navy">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/20">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BasedClicksCo | SEO Services for Small & Enterprise Businesses" },
      { name: "description", content: "Elevate your online presence with expert SEO services from BasedClicksCo. We optimize for small, mid-size, and enterprise businesses." },
      { name: "author", content: "BasedClicksCo" },
      { name: "keywords", content: "SEO services for small businesses, enterprise SEO solutions, local SEO company, technical SEO audit, content marketing and SEO, increase website traffic, search engine optimization experts" },
      { property: "og:title", content: "BasedClicksCo | SEO Services for Small & Enterprise Businesses" },
      { property: "og:description", content: "Expert SEO services for small, mid-size, and enterprise businesses. Technical audits, content marketing, and local SEO that increase website traffic." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "BasedClicksCo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BasedClicksCo | SEO Services for Small & Enterprise Businesses" },
      { name: "twitter:description", content: "Expert SEO services for small, mid-size, and enterprise businesses across every industry." },
     { name: "google-site-verification", content: "vazq2trTDYLsbs_1K8WepAGQHIiunafRAv763c13DPk" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BasedClicksCo",
          url: "https://elevare-seo.lovable.app",
          description: "Search engine optimization experts delivering SEO services for small businesses, enterprise SEO solutions, and local SEO company expertise.",
          email: "ElevareSEO@gmail.com",
          telephone: "+1-818-963-6728",
          areaServed: "Worldwide",
          address: { "@type": "PostalAddress", addressRegion: "California", addressCountry: "US" },
        }),
      },
      {
  src: "https://www.googletagmanager.com/gtag/js?id=G-3Z5ER71LQL",
  async: true,
},
{
  children: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3Z5ER71LQL');`,
},
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
