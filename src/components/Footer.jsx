const Footer = () => {
  return (
    <div className='mx-10 my-16 sm:flex sm:w-full sm:mx-0'>
      <div className="sm:mx-10">
        <div className='footer-logo flex justify-center items-center'>
          <img className="h-20 sm:h-10" src="./images/logo.png" alt="logo" />
          <h1 className="default px-2 font-bold text-5xl sm:text-2xl"><span>ur</span>Crypto&#8226;</h1>
        </div>
        <p className="text-center opacity-80 font-medium text-2xl py-2 sm:text-sm">Take your crypto to the next level</p>
        <ul className="w-3/5 flex justify-around mx-auto sm:justify-around">
          <li><img src="./images/facebook.png" alt="" /></li>
          <li><img src="./images/twitter.png" alt="" /></li>
          <li><img src="./images/instagram.png" alt="" /></li>
          <li><img src="./images/linkedin.png" alt="" /></li>
          <li><img src="./images/youtube.png" alt="" /></li>
        </ul>
      </div>

      <section className="flex flex-wrap mt-8 sm:w-full sm:mt-0 sm:flex-wrap lg:justify-between sm:mr-10">
        <div className="my-5 w-1/2 sm:w-32">
          <h3 className="title">Company</h3>
          <ul>
            <li className="content-text py-2  ">About us</li>
            <li className="content-text py-2">Blog</li>
            <li className="content-text py-2">Careers</li>
            <li className="content-text py-2">Student</li>
            <li className="content-text py-2">Security</li>
            <li className="content-text py-2">Trust and Safety</li>
            <li className="content-text py-2">Newsroom</li>
            <li className="content-text py-2">Videos</li>
          </ul>
        </div>
        <div className="my-5 w-1/2 sm:w-32">
          <h3 className="title ">Learn</h3>
          <ul>
            <li className="content-text py-2">What's Trending</li>
            <li className="content-text py-2">Product News</li>
            <li className="content-text py-2">Events</li>
            <li className="content-text py-2">University</li>
            <li className="content-text py-2">Research</li>
            <li className="content-text py-2">Market Updates</li>
          </ul>
        </div>
         <div className="my-5 w-1/2 sm:w-32">
          <h3 className="title">Products</h3>
          <ul>
            <li className="content-text py-2">Stock & Fund</li>
            <li className="content-text py-2">Cash Card</li>
            <li className="content-text py-2">Crypto</li>
            <li className="content-text py-2">Options</li>
            <li className="content-text py-2">Gold</li>
            <li className="content-text py-2">Learn Snacks</li>
          </ul>
        </div>
        <div className="my-5 w-1/2 sm:w-32">
          <h3 className="title">Support</h3>
          <ul>
            <li className="content-text py-2">Support Center</li>
            <li className="content-text py-2">Contact Us</li>
            <li className="content-text py-2">System Status</li>
            <li className="content-text py-2">Areas of Availability </li>
          </ul>
        </div>
        <div className="my-5 w-1/2 sm:w-32">
          <h3 className="title">Resources</h3>
          <ul>
            <li className="content-text py-2">Prices</li>
            <li className="content-text py-2">Site Widgets</li>
            <li className="content-text py-2">Tax </li>
            <li className="content-text py-2">Support</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Footer