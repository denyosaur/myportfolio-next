![alt text](https://i.imgur.com/m9TMw0n.png)

**MyPortfolio**
=====================================

Portfolio site that showcases my skills and information about myself.

[https://dhkportfolio.dev/](https://dhkportfolio.dev/)

*NOTE: [Github reposiory](https://github.com/denyosaur/MyPortfolio) for the previous version of MyPortfolio site built with React.js and Express*

**Purpose**
---------------

I developed this project to showcase my front skills using Next.js and a headless content management system (CMS). 

**Features**
---------------
- Uses the new experimental AppDir feature from Next.js 13.
- Implements server side rendering for faster load times on client with Next.js. Reduces first contentful paint from 0.937 to 0.507 (46% reduction).
- Uses Sanity for headless CMS. With Sanity, the content update is handled directly on the domain with pathname `/studio` using a Github login. In the production environment, changes on the CMS is updated once a day by Next.js to reduce server load on Sanity. 

**Installation Steps**
---------------
1. Clone this repo using `git clone https://github.com/denyosaur/MyPortfolio.git`
2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 
            
**Tech Stack**
---------------
- next - v13.2.4
- react - v18.2.0
- sanity - v3.0.0
- tailwindcss - v3.3.0
- @svgr/webpack - v7.0.0
- @sanity/image-url - v1.0.2