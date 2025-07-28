import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "QRS-Me - AI-Powered QR Intelligence Platform",
  description = "Transform customer interactions with QRS-Me's AI-powered QR code platform. Create personalized, contextual QR experiences that adapt to every user interaction. Trusted by Fortune 500 companies.",
  keywords = "AI QR codes, smart QR codes, intelligent QR platform, personalized QR experiences, contextual advertising, smart business cards, digital menus, QR analytics, artificial intelligence, customer engagement, QR technology",
  ogImage = "/qrs-me-og-image.jpg",
  canonicalUrl = "https://qrsme.com"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:url', canonicalUrl);
    updateOGTag('og:type', 'website');

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    // Add structured data for AI and QR technology
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "QRS-Me",
      "description": description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "10000"
      }
    };

    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (jsonLd) {
      jsonLd.textContent = JSON.stringify(structuredData);
    } else {
      jsonLd = document.createElement('script');
      (jsonLd as HTMLScriptElement).type = 'application/ld+json';
      jsonLd.textContent = JSON.stringify(structuredData);
      document.head.appendChild(jsonLd);
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};

export default SEOHead;