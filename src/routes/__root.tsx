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
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
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
      { title: "Bluemount Hospital & Research Institute — Integrated Medical Sciences" },
      {
        name: "description",
        content:
          "Bluemount Hospital & Research Institute integrates Kerala Ayurveda, Siddha, Acupuncture, Naturopathy, Chiropractic, Physiotherapy, Rehabilitation and Modern Clinical Medicine for holistic, evidence-based healing in Mysuru, Karnataka.",
      },
      { name: "author", content: "Bluemount Hospital & Research Institute" },
      { property: "og:title", content: "Bluemount Hospital & Research Institute — Integrated Medical Sciences" },
      {
        property: "og:description",
        content:
          "Advanced diagnostics meets traditional healing. Integrated care across Ayurveda, Siddha, Acupuncture, Chiropractic, Physiotherapy, Rehabilitation and Modern Clinical Medicine.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bluemounthospital.com" },
      { property: "og:site_name", content: "Bluemount Hospital & Research Institute" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Bluemount Hospital & Research Institute — Integrated Medical Sciences" },
      { property: "og:image", content: "https://bluemounthospital.com/og-image.png" },
      { name: "twitter:image", content: "https://bluemounthospital.com/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "canonical", href: "https://bluemounthospital.com" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hospital",
          name: "Bluemount Hospital & Research Institute",
          url: "https://bluemounthospital.com",
          telephone: "TELEPHONE_PLACEHOLDER",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Ring Road, opposite VTU Mysore Regional Centre, Sathagalli Layout, Rammanahalli",
            addressLocality: "Mysuru",
            addressRegion: "Karnataka",
            postalCode: "PINCODE_PLACEHOLDER",
            addressCountry: "IN",
          },
          medicalSpecialty: [
            "Ayurveda",
            "Keraleya Panchakarma",
            "Siddha Medicine",
            "Acupuncture",
            "Chiropractic",
            "Modern Clinical Medicine",
          ],
          hasMap: "https://maps.app.goo.gl/vAiLtyi2LYWG5di89",
        }),
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
      <Outlet />
    </QueryClientProvider>
  );
}
