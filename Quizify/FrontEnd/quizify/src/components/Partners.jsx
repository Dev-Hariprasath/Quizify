import React from "react";

const tier1 = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/250px-Intel_logo_%282006-2020%29.svg.png",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Adobe",
    logo: "https://www.adobe.com/content/dam/cc/us/en/products/Adobe-social-share-image.jpg",
  },
];

const tier2 = [
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "Snapchat",
    logo: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xNC5wbmc.png",
  },
  {
    name: "Shopify",
    logo: "https://cdn.shopify.com/s/files/1/0070/7032/articles/shopify_20stores_b12b3173-45ab-409a-9d73-d33898cfc696.png?v=1745508583",
  },
  {
    name: "Dropbox",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjBtBOwabDxSs4h45xkDudWnTt2Qix1IMPA&s",
  },
  {
    name: "PayPal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
  {
    name: "Zoom",
    logo: "https://infocanvas.upenn.edu/wp-content/uploads/2024/08/Zoom-Logo.png",
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
  },
];

const tier3 = [
  {
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Docker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  },
  {
    name: "Reddit",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqnVTVFMObbaKs2LJyOgVWYa7SdYJivtsgA&s",
  },
  {
    name: "Trello",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPIh1w0TkhBAZ_QpMbgVpwVCiOJOhTl3XRQ&s",
  },
  {
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stripe_logo%2C_revised_2014.png/1280px-Stripe_logo%2C_revised_2014.png",
  },
  {
    name: "Asana",
    logo: "https://assets.asana.biz/m/768cd837236c11d/webimage-logo-primary-bright.png",
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
  },
  {
    name: "Zapier",
    logo: "https://avatars.githubusercontent.com/u/1261889?v=4",
  },
  {
    name: "Calendly",
    logo: "https://w7.pngwing.com/pngs/29/582/png-transparent-calendly-logo-tech-companies-thumbnail.png",
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-[#F4F5FF] text-center" id="partners">
      <h2 className="text-3xl font-bold text-[#000294] mb-6">Our Partners</h2>

      <div className="text-lg italic text-[#5E5EA0] mb-10 px-4 max-w-3xl mx-auto">
        “Partnership is not just about business, it’s about shared vision and
        progress together.”
      </div>

      {/* Tier 1 */}
      <div className="overflow-hidden whitespace-nowrap mb-10">
        <div className="flex gap-12 animate-scroll-left">
          {[...tier1, ...tier1].map((partner, i) => (
            <div
              key={`tier1-${i}`}
              className="inline-flex items-center justify-center min-w-[120px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tier 2 */}
      <div className="overflow-hidden whitespace-nowrap mb-10">
        <div className="flex gap-10 animate-scroll-right">
          {[...tier2, ...tier2].map((partner, i) => (
            <div
              key={`tier2-${i}`}
              className="inline-flex items-center justify-center min-w-[110px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tier 3 */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-8 animate-scroll-left">
          {[...tier3, ...tier3].map((partner, i) => (
            <div
              key={`tier3-${i}`}
              className="inline-flex items-center justify-center min-w-[90px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          will-change: transform;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
