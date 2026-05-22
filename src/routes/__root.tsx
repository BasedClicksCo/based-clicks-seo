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
      { title: "Elevare SEO — Premium SEO Solutions for Every Business" },
      { name: "description", content: "Elevare SEO delivers premium search engine optimization for small businesses, mid-size companies, and enterprise clients across every industry." },
      { name: "author", content: "Elevare SEO" },
      { property: "og:title", content: "Elevare SEO — Premium SEO Solutions for Every Business" },
      { property: "og:description", content: "Elevare SEO delivers premium search engine optimization for small businesses, mid-size companies, and enterprise clients across every industry." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Elevare SEO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Elevare SEO — Premium SEO Solutions for Every Business" },
      { name: "twitter:description", content: "Elevare SEO delivers premium search engine optimization for small businesses, mid-size companies, and enterprise clients across every industry." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/35bd842b-50fe-4960-b536-6c818f7cd939/id-preview-c391123e--f7ccaa10-0ffc-4df4-a12d-614ccc4e7b40.lovable.app-1779427568150.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/35bd842b-50fe-4960-b536-6c818f7cd939/id-preview-c391123e--f7ccaa10-0ffc-4df4-a12d-614ccc4e7b40.lovable.app-1779427568150.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
