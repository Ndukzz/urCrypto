import React from 'react'
import Card from './Card'

const Article = (props) => {
  return (
    <>
      <div className='m-20 text-center sm:text-left'>
        <section className='sm:flex sm:justify-between sm:items-center sm:p-20'> 
          <img className="w-full" src="./images/Left.png" />
          <div>
            <h2 className='heading py-8'>Create Portfolio Today</h2>
            <p className="content-text">Buy and sell popular digital currencies, keep track of them in the one place. Has a variety of features that make it the best place to start trading  </p>
          </div>
        </section>
        <section className='sm:flex sm:justify-between sm:flex-row-reverse sm:items-center sm:p-20'> 
          <img className="w-full " src="./images/Right.png" />
          <div>
            <h2 className='heading py-8'>Lightning-Fast Crypto Trading</h2>
            <p className="content-text">The Exchange supports USD, EUR, and GBP. Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly. </p>
          </div>
        </section>
        <section className='sm:flex sm:justify-between sm:items-center sm:p-20'> 
          <img className="w-full" src="./images/Frame04.png" />
          <div>
            <h2 className='heading py-8'>Security From Day One</h2>
            <p className="content-text">Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in the one place.</p>
          </div>
        </section>

        {/* Getting started */}

        <section className='my-20'> 
          <div className='sm:w-3/5 sm:text-center mx-auto'>
            <h2 className='heading text-center py-8 mt-28'>Get Started in a Few Minutes</h2>
            <p className="content-text text-center">Has a variety of features that make it the best place to start trading .</p>
          </div>
          <ul className='sm:flex sm:justify-between'>
            {props.data.started.map(prop =>{
              return (
                <Card className="text-center sm:mx-6" key ={prop.title}>
                  <img className="mx-auto" src={prop.image} alt="" />
                  <h4 className='title pt-3'>{prop.title}</h4>
                  <div className='content-text px-6'>{prop.content}</div>
                </Card>
              )
            })}
          </ul>
        </section>

        {/* What people are saying... */}

        <section>
          <h4 className='heading text-center'>What people are saying</h4>
          <Card>
            <div>
              <img className='float-left mx-5' src="./images/Ellipse.png" alt="" />
              <h5 className="title">John Doe</h5>
              <div className="content-text opacity-50">CEO Motion Design Agency </div>
            </div>
            <article className='content-text px-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit amet, consectetur adipiscing elit, </article>
          </Card>
        </section>

        {/* A new generation of investors */}

      </div>
      
      <div>
        <div className="example sm:flex sm:justify-center text-left">
          <div className='background'></div>
          <img src="./images/Background.png" alt="damn" className="overlay" />
          <div className="content p-10 my-10 sm:w-3/5 text-center sm:text-left">
            <h2 className="text-4xl font-bold text-white ">Join a new Generation of Investors</h2>
            <button className="button bg-white text-black py-5 my-6 sm:w-40">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article
