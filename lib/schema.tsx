export const organizationSchema = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Carina",
  "url": "https://www.carina.czest.pl",
  "logo": "https://www.carina.czest.pl/logo.png", // Replace with actual logo URL
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+48 34 365 30 66",
    "contactType": "customer service",
    "areaServed": "PL",
    "availableLanguage": ["Polish"]
  }
}`

export const productSchema = (product: any) => {
  return `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "${product.name}",
  "image": [
    "https://www.carina.czest.pl/product-image.jpg" // Replace with actual image URL
   ],
  "description": "${product.description}",
  "sku": "${product.sku}",
  "brand": {
    "@type": "Brand",
    "name": "Carina"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.carina.czest.pl/product/${product.slug}",
    "priceCurrency": "PLN",
    "price": "${product.price}",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
}`
}
