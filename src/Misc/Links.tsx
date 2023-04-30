import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'

export const Links = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className='pl-12'>
        <div className="">
          <a
            className="flex"
            href="https://www.linkedin.com/in/ananyadhananjaya/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex justify-center items-center">
              Get in touch with me on
            </span>
            <LinkedinIcon />
          </a>
        </div>
        <div className="">
          <a
            className="flex"
            href="https://github.com/ananyadhananjaya"
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex justify-center items-center">
              See what I&apos;ve been working on at{' '}
            </span>
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
