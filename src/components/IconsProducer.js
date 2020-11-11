import React from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithubSquare,
  FaSass,
  FaTerminal,
  FaWordpress,
  FaCogs,
  FaNodeJs,
  FaAdobe,
  FaPython,
  FaUnity,
} from 'react-icons/fa'

export default function IconsProducer({ tag }) {
  switch (tag) {
    case 'html':
      return <FaHtml5 title={tag} />
    case 'css':
      return <FaCss3 title={tag} />
    case 'javascript':
      return <FaJs title={tag} />
    case 'react':
      return <FaReact title={tag} />
    case 'github':
      return <FaGithubSquare title={tag} />
    case 'sass':
      return <FaSass title={tag} />
    case 'terminal':
      return <FaTerminal title={tag} />
    case 'wordpress':
      return <FaWordpress title={tag} />
    case 'unity':
      return <FaUnity title={tag} />
    case 'restApi':
      return <FaCogs title={tag} />
    case 'nodejs':
      return <FaNodeJs title={tag} />
    case 'adobe':
      return <FaAdobe title={tag} />
    case 'python':
      return <FaPython title={tag} />
    case 'express':
      return <i className="devicon-express-original" title={tag} />
    case 'git':
      return <i className="devicon-git-plain" title={tag} />
    case 'styledcomponents':
      return (
        <img
          src="https://avatars0.githubusercontent.com/u/20658825?s=400&v=4"
          alt="styled components"
          title={tag}
        />
      )

    case 'jest':
      return (
        <img
          src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/full/jestlogo.png"
          alt="Jest"
          title={tag}
        />
      )

    case 'redux':
      return (
        <svg viewBox="0 0 128 128" title={tag}>
          <path fill="none" d="M0 0h128v128H0z" />
          <path
            d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.12 9.12 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
            fill="#764abc"
          />
        </svg>
      )

    case 'c#':
      return <i className="devicon-csharp-plain" title={tag} />
    case 'heroku':
      return <i className="devicon-heroku-original" title={tag} />
    case 'postgresql':
      return <i className="devicon-postgresql-plain" title={tag} />
    case 'mongodb':
      return <i className="devicon-mongodb-plain-wordmark" title={tag} />
    case 'graphql':
      return (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/600px-GraphQL_Logo.svg.png"
          alt="graphql"
          title={tag}
        />
      )

    case 'pug':
      return (
        <img
          src="https://symbols.getvecta.com/stencil_92/58_pug-icon.f03a1e640b.png"
          alt="pug.js"
          title={tag}
        />
      )
    case 'contentful':
      return (
        <img
          src="https://d21buns5ku92am.cloudfront.net/41748/images/347873-Mark_Circular_white_no%20shadow-3d0a86-medium-1582585736.png"
          alt="contentful cms"
          title={tag}
        />
      )
    case 'tailwindcss':
      return (
        <img
          src="https://symbols.getvecta.com/stencil_97/3_tailwind-css-icon.43c02f69bf.png"
          alt="tailwindcss"
          title={tag}
        />
      )
    case 'firebase':
      return (
        <img
          src="https://img.icons8.com/color/452/firebase.png"
          alt="google firebase"
          title={tag}
        />
      )
    case 'gatsbyjs':
      return (
        <img
          src="https://i.pinimg.com/originals/2e/ec/6f/2eec6f1dcb5553117969640c7d254046.png"
          alt="gatsbyjs"
          title={tag}
        />
      )
    case 'sanity.io':
      return (
        <img
          src="https://a.fsdn.com/allura/s/sanity/icon?1596159311?&w=120"
          alt="sanity headles cms"
          title={tag}
        />
      )
    case 'squarespace':
      return (
        <img
          src="https://images.squarespace-cdn.com/content/5d5b097ace74150001a72708/1570801591727-EYKFQBFP6B3F0BFM8V39/squarespace-logo-horizontal-white.png"
          alt="SquareSpace"
          title={tag}
        />
      )

    default:
      return ''
  }
}
