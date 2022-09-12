This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Segmented Rendering Demo

Read the article: https://www.smashingmagazine.com/2022/07/new-pattern-jamstack-segmented-rendering/

More on the theory of SSR (advanced): https://tinyurl.com/ssr-theory

This Next.js application demonstrates a Jamstack pattern named "Segmented Rendering", which enables static personalization.

It is very similar to "Personalization at-the-edge" as Vercel puts it. Segmented Rendering is a more generic pattern, that can also be implemented in a more traditional architecture. 

The key ingredients are:

- a static rendering framework. It's even better if it supports per-request or deferred server-rendering (Next, Gatsby).
- a proxy server that can rewrite URLs. For instance Next.js Edge middlewares.
- optionnaly a backend that can set cookies using the Set-Cookie header (you can also set cookies client-side with JS)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
