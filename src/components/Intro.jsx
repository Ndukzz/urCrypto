import "./Intro.css"
import Stats from "./Stats"

const Intro = () => {
  return (
    <>
    <div className="m-20 sm:w-3/5 sm:mx-auto">
      <h1 className='heading text-xl text-center flex-col justify-center items-center'> 
        <span>One platform </span>
        <p>all things crypto</p>
      </h1>
      <section className="text text-center">Open a free account in minutes right from your phone and make your money go further</section>
      <form className="flex flex-col items-center pt-5 sm:flex-row sm:justify-center" action="none">
        <div className="input-group">
          <input required="" type="text" name="text" placeholder="Email Address..." className="input" />
        </div>
        <button className="button mt-5 sm:w1/5 sm:mt-0">Get Started</button>
      </form>
      </div>
      <Stats />
    </>

  

  )
}

export default Intro