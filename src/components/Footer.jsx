import React from 'react'
import Section from './Section'
import { socials } from '../constants'

const Footer = () => {
  return (
    // ! in className resets initial code
    <Section crosses className="!px-0 !py-10">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            {/*new Date().getFullYear() This is to make it auto update so that I don't have to come back to the code and write it kind good for future development  */}
            <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. No rights reserved feel free to clone.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
        </div>
    </Section>
  )
}

export default Footer
