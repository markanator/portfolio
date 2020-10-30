import React from 'react'

export default function ContactHome() {
  return (
    <section className="home__contact">
      <div className="container">
        <h3>Contact Me</h3>
        <h4>Let's Connect:</h4>
        <div className="contact__inner">
          <div className="left">
            <p>
              Email me at <strong>mark</strong> dot <strong>ambro</strong> at{' '}
              <strong>me</strong> dot <strong>com</strong> if you'd like to
              speak to me.
            </p>
            <p>
              I am currently available for freelance opportunities, email me or
              reach me on Linkedin.
            </p>
          </div>
          <div className="right">
            <ul>
              <li>
                <strong>Github</strong>:{' '}
                <a
                  href="https://github.com/markanator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  markanator
                </a>
              </li>
              <li>
                <strong>Linkedin</strong>:{' '}
                <a
                  href="https://www.linkedin.com/in/mark-ambro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mark A.
                </a>
              </li>
              <li>
                <strong>Twitter</strong>:{' '}
                <a
                  href="https://twitter.com/Mark_Ambrocio1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Mark_Ambrocio1
                </a>
              </li>
              <li>
                <strong>Ko-Fi</strong>:{' '}
                <a
                  href="https://ko-fi.com/markanator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  markanator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
