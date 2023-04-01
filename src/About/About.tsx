import { Links } from '../Misc/Links'

const About = () => {
  return (
    <div className="m-6 max-w-xl min-w-xl">
      <div className="text-3xl">Ananya Dhananjaya</div>
      <br />
      <p className="">
        Hey, I&apos;m Ananya, a Senior Engineer at <b>Edstruments</b>, an EdTech
        startup.
      </p>
      <br />
      <div className="flex p-2">
        <img
          src="../../public/assets/HeadShot.JPG"
          alt="profile"
          className="rounded-full h-32"
        />

        <Links />
      </div>
      <br />
      <div>
        I&apos;m a frontend developer with 3 years of experience in React. I
        have a degree in computer science and a passion for creating sleek,
        responsive user interfaces. In my free time, I enjoy reading books,
        mostly fiction, and working on various coding projects that I make
        public. I&apos;m always interested in exploring the latest frontend
        technologies and finding new ways to enhance the user experience.
      </div>
    </div>
  )
}

export default About
