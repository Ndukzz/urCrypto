import React from 'react'

const Content = () => {
  return (
    <section className='sm:flex sm:flex-row-reverse sm:py-10 sm:h-full'>
      <img className='w-full ' src="./src/images/Frame5400.png" alt="some pics of phones" />
      <div>
        <section className='px-20'>
          <h2 className='heading text-center py-10 sm:text-left'>The Most Trusted Cryptocurrency Platform</h2>
          <div className='sm:flex'>
            <div className='number sm:pr-5'>01</div>
            <div>
              <h3 className='title pb-2'>Sync between platforms</h3>
              <article className='content-text'>No matter if you're using our web interface or mobile app - your data is always synced. Just one account for all our services. </article>
            </div>
          </div>
        </section>       

        <div className='border2'></div>

        <section className='px-20 sm:flex'>
            <div className='number sm:pr-5'>02</div>
          <div>
            <h3 className='title pb-2'>More focus, less clutter</h3>
            <article className='content-text'>No ads, just the crypto and content you love.</article>
          </div>
        </section>

        <div className='border2'></div>
        
        <section className='px-20 sm:flex'>
            <div className='number sm:pr-5'>03</div>
          <div>
            <h3 className='title pb-2'>Security by default</h3>
            <article className='content-text pb-11'>Enable privacy mode and app locking to protect your data.</article>
          </div>
        </section>
      </div>
      
    </section>
  )
}

export default Content