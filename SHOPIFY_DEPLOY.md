# 🛍️ Deploying Dr. White to Shopify

## Overview
This project compiles into a **custom Shopify theme**. Your React app becomes the
storefront UI, and Shopify handles the cart, checkout, orders, and product data.

---

## Step 1 — Build the React app into the theme

```bash
npm run build:shopify
```

This compiles your React app into:
- `shopify-theme/assets/app.js`  — the bundled React app
- `shopify-theme/assets/app.css` — all Tailwind styles

---

## Step 2 — Install the Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

---

## Step 3 — Connect to your Shopify store

```bash
cd shopify-theme
shopify theme dev --store YOUR-STORE.myshopify.com
```

This opens a live preview of the theme on your store without publishing it.

---

## Step 4 — Push / publish the theme

```bash
shopify theme push --store YOUR-STORE.myshopify.com
```

Then go to **Shopify Admin → Online Store → Themes** and click **Publish**.

---

## Step 5 — Connecting real product data

In `layout/theme.liquid`, Shopify automatically injects:

```js
window.__SHOPIFY__.product   // current product (on product pages)
window.__SHOPIFY__.cartCount // live cart item count
window.__SHOPIFY__.currency  // store currency
```

In your React components, read from `window.__SHOPIFY__` wherever you currently
use hardcoded prices or product info. For example in `PricingPlans.tsx`:

```tsx
const shopifyProduct = (window as any).__SHOPIFY__?.product;
const variants = shopifyProduct?.variants ?? hardcodedVariants;
```

---

## Add-to-Cart API

To connect the **Add to Cart** button to Shopify&#39;s real cart, call the AJAX API
from `BuyButton.tsx`:

```tsx
async function addToCart(variantId: number, quantity: number) {
  await fetch("/cart/add.js", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: variantId, quantity }),
  });
  // then refresh cart drawer via /cart.js
}
```

---

## File structure

```
shopify-theme/
├── assets/          ← compiled app.js + app.css go here (after build)
├── config/          ← theme settings (Theme Editor controls)
├── layout/
│   └── theme.liquid ← root HTML shell, mounts React #app div
├── locales/         ← i18n strings
├── sections/        ← Liquid section files (Theme Editor schema)
├── snippets/        ← reusable Liquid snippets
└── templates/       ← page templates (index, product, etc.)
```
