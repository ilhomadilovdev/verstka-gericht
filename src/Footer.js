import React, { Component } from 'react'


export default class Footer extends Component {
  render() {
    return (
      <div className='ft' >
        <div className='newsPanel' >
          <div className='news' >Newsletter</div>
          <div className='subscribe' >Subscribe to Our Newsletter</div>
          <div className='never' >And never miss latest Updates!</div>

          <form action='' method=''>
            <div className='input_button' >
              <input type='text' name='email' id='email' placeholder='Email Address' />
              <button type='submit'  >Subscribe</button>
            </div>
          </form>

        </div>


        <div className='footer_gericht' >
          <div className='contact_us' >
            <div className='us' >Contact Us</div>
            <h1 className='new_york' >9 W 53rd     St, New York, NY 10019, USA</h1>
            <h1 className='numb1' >
              +1 212-344-1230
              <br />
              +1 212-555-1230</h1>
          </div>
          <div className='gericht_us' >
            <div className='gerc' >Gerícht</div>
            <div className='best' >
              "The best way to find yourself
              is to lose
              yourself in the service of others.”
            </div>

            <ul className='messengers' >
              <li className='fb'  >
                <a className='fb1' href='https://www.facebook.com/'><img src='./images/Vector (2).svg' />
                </a> </li>
              <li className='twitter'  >
                <a className='twitter1' href=''> <img src='./images/Vector.png' /> </a> </li>
              <li className='instagram'  >
                <a className='instagram1' href='https://www.instagram.com'> <img src='./images/Vector (1).svg' /> </a> </li>
            </ul>
          </div>
          <div className='working_us' >
            <div className='work' >Working Hours</div>
            <h1 className='monday' >
              Monday-Friday:
              08:00 am -12:00 am</h1>
            <h1 className='saturday' >Saturday-Sunday:
              07:00am -11:00 pm</h1>
          </div>
        </div>
      </div>
    )
  }
}
