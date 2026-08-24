import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/components/providers/AuthProvider";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://examcoach.ca"),
  title: "ExamCoach.ai — YKI Writing Checker",
  description: "Pass your YKI exam with AI-powered Finnish writing feedback.",
  openGraph: {
    title: "ExamCoach.ai — YKI Writing Checker",
    description: "Pass your YKI exam with AI-powered Finnish writing feedback.",
    url: "https://examcoach.ca",
    siteName: "ExamCoach.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "ExamCoach.ai — AI YKI Writing Checker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExamCoach.ai — YKI Writing Checker",
    description: "Pass your YKI exam with AI-powered Finnish writing feedback.",
    images: ["/og/default.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ExamCoach AI Team",
  url: "https://examcoach.ca",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ExamCoach.ai",
  description: "AI-powered YKI Writing Checker for Finnish exam preparation.",
  url: "https://examcoach.ca",
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ExamCoach.ai",
  description: "AI YKI Writing Evaluation Tool",
  url: "https://examcoach.ca",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
        />
        <AuthProvider>
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
