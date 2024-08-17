# schooltendance-help-docs
Help Docs for Schooltendance

### Contributing
- Start Here: The start here section should have all the info related to "Getting Started" and/or why someone should choose our product over others. The comparison page shouldn't be marketing jargon but more of a feature list on our end/value add to the users. 
- Guides lead a user through a specific task they want to accomplish, often with a sequence of steps. Writing a good guide requires thinking about what your users are trying to do. Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework.
- Reference pages are ideal for outlining how things work in terse and clear terms.
Less concerned with telling a story or addressing a specific use case, they should give a comprehensive outline of what you're documenting. For example, it could be information about all the fields that can be configured in the admissions form and or API reference. Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework.
- Troubleshooting pages help users solve common problems they might encounter. They should be written in a way that helps users diagnose and solve their own problems. For example, it could be a page that explains how to troubleshoot a failed payment or how to troubleshoot a failed API request.
- [Frontmatter Reference](https://starlight.astro.build/reference/frontmatter/)

## Getting Started

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🚀 Project Structure

In this project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

The app looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.