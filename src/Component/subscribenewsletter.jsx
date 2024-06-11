import React from 'react'

const Subscribenewsletter = () => {
  return (
    <>
      <div className='newsletter'>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="newsletterDiv">
                        <h2>Subscribe to Newsletter</h2>
                        <p>We have a wide experience in experience design and strategy,</p>

                        <div className="inputnewslr">
                            <input type="text" placeholder='Enter your email address'/>
                            <button class="pagebutton"><a href="/service">Send Now</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Subscribenewsletter;