import Card from './Card'

const Stats = () => {
  return (
  <Card className="sm:flex flex-row justify-center sm:w-10/12 sm:mx-auto sm:p-0">
    <section className='stats'>
      <h1 className='heading'>99K</h1>
      <p className='text'>People have joined</p>
    </section>

    <div className="border"></div>

    <section className='stats'>
      <h1 className='heading'>50K</h1>
      <p className='text'>VVIP users have joined</p>
    </section>

    <div className="border"></div>

    <section className='stats'>
      <h1 className='heading'>100+</h1>
      <p className='text'>Companies have joined</p>
    </section>
  </Card>
  )
}

export default Stats