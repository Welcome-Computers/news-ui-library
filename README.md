# news-ui-library


# create project folder
mkdir news-ui-library
cd news-ui-library

# init git + package manager
git init
pnpm init -y



# dev deps for building + types
pnpm add -D typescript tsup @types/react @types/react-dom dts sass
# add antd as devDep so you can import components while building
pnpm add -D antd
# optionally add eslint, prettier etc.


{
  "name": "@your-org/news-ui",
  "version": "1.0.0",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts --out-dir dist --clean",
    "build:watch": "tsup src/index.ts --format cjs,esm --dts --out-dir dist --watch",
    "prepare": "pnpm build"
  },
  "peerDependencies": {
    "react": ">=17",
    "react-dom": ">=17",
    "antd": ">=4"
  },
  "devDependencies": {
    "typescript": "...",
    "tsup": "...",
    "sass": "..."
  }
}


-------------------


export * from "./components/NewsCard";
export * from "./components/CommonAvatar";


---------------

export { default as NewsCard } from "./NewsCard";
export type { NewsCardProps } from "./NewsCard"; // optional: export props

--------------------

import NewsCard from "./NewsCard";
export default NewsCard;


-------------------

-------------------

git remote remove origin
git remote add origin git@github.com:Welcome-Computers/news-ui-library.git


--------------------

pnpm add https://github.com/Welcome-Computers/news-ui-library.git#main


import { NewsCard } from "news-ui-library";
import "news-ui-library/dist/news-ui.css";

 const carddata = {
    id: "1",
    article_code: "ART1001",
    title: "AI Revolution in Education",
    slug: "ai-revolution-in-education",
    article_image: "https://picsum.photos/600/400?random=1",
    category: ["Technology", "Education"],
    reporter: {
      id: "101",
      name: "Ravi Mehta",
      profile_pick: "https://i.pravatar.cc/150?img=1",
    },
    created_at: "2025-09-01T09:30:00Z",
    summary:
      "AI-driven platforms are transforming classrooms with personalised learning. Teachers are now using advanced tools to track student performance in real time, offering customised assignments and adaptive study plans. Experts believe this could redefine how education systems function over the next decade.",
    is_exclusive: true,
    tags: ["AI", "Education", "Future"],
  }


<NewsCard type="type-6" item={carddata} />

--------------------
PS D:\Development_Welcome\JaipurGramin\news-ui-library>

pnpm run build
git add .
git commit -m "build: added dist for ready-to-use package"
git push origin main


pnpm add github:Welcome-Computers/news-ui-library

pnpm update news-ui-library
pnpm up github:Welcome-Computers/news-ui-library

------------------------



-------------------------
news-ui-library/
├── src/               # Library ka actual source code (components, styles)
├── dist/              # Build output (tsup + sass se generate hota hai)
├── playground/        # Local React test app
│   ├── src/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── tsconfig.json
│   └── package.json
├── package.json       # Library ka package.json
└── tsconfig.json      # Library ka tsconfig


mkdir playground
cd playground
pnpm init

-----------------
pnpm add react react-dom antd
pnpm add -D typescript @types/react @types/react-dom vite

------------------

playground/vite.config.ts
--------------
playground/package.json
playground/tsconfig.json
----------

playground/index.html
--------------
playground/src/main.tsx
--------------
playground/src/App.tsx
--------------
cd playground
pnpm vite
--------------


import { NewsCard } from "news-ui-library";
import "news-ui-library/dist/components/NewsCard.css";

-----------------
{
  "name": "news-ui-library",
  "version": "1.0.1"
}


---------------------------

for > github making changes

change the version in package.json

git branch

git add .

git commit -m "fix: updated button styles"  

git push origin main

--------------------------------
for > package to npm

pnpm build

npm version patch -m "fix: improved logo fallback"

git push origin main --tags

npm publish --access public
