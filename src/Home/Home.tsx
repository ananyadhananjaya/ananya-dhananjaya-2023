import { Links } from '../Misc/Links'

const Home = () => {
  return (
    <div className="m-6 min-w-xl max-w-xl w-7/12 ">
      <div className="text-3xl">Ananya Dhananjaya</div>
      <br />
      <p className="">
        Hey, I&apos;m Ananya, a Senior Engineer at <b>Edstruments</b>, an EdTech
        startup.
      </p>
      <br />
      <div className="flex p-2">
        <img
          src="../../assets/HeadShot.JPG"
          alt="profile"
          className="rounded-full h-32"
        />

        <Links />
      </div>
      <br />
      <div>
        I&apos;m a frontend developer with 3 years of experience in React. I
        have a degree in computer science and a passion for creating sleek,
        responsive user interfaces. I&apos;m always interested in exploring the
        latest frontend technologies and finding new ways to enhance the user
        experience.
      </div>
    </div>
  )
}

export default Home
