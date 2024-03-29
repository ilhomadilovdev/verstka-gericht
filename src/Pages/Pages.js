import React, { Component } from 'react'
import SimpleSlider from './SimpleSlider'

export default class Pages extends Component {






  render() {
    return (
      <div className='Container_page'>
        <div className='blok' >
          <img className='blok_img' src='./images/bar.png' />
          <div className='on' >On the Rocks</div>
        </div>


        <div className='book_table_input' >
          <div className='reser' >Reservations</div>
          <div className='table' >Book A Table</div>


          <div className='div3' >
            <div className='select_1' >
              <select name='select' >
                <option disabled selected >     Person </option>
                <option value="1 Person" >1 Person</option>
                <option value="2 Person" >2 Person</option>
                <option value="3 Person" >3 Person</option>
                <option value="4Person" >4 Person</option>
              </select>
            </div>

            <div className='number' >
              <input type='date' name='time' id='time' placeholder='Data'   >

              </input>
            </div>
            <div className='vaqt' >
              <select name='select' >
                <option disabled selected > Data Time </option>
                <option value="09:00 AM " >09:00 AM </option>
                <option value="10:00 AM " >10:00 AM </option>
                <option value="11:00 AM " >11:00 AM </option>
                <option value="12:00 AM " >12:00 AM </option>
                <option value="18:00 PM " >18:00 PM </option>
                <option value="20:00 PM " >20:00 PM </option>
                <option value="21:00 PM " >21:00 PM </option>
              </select>
            </div>
          </div>

          <button type='submit' >
            Book Now
          </button>
        </div>




        <div className='food_div' >
          <div className='img' >
            <img className='img_svg' src='./images/fabio.png' />
          </div>
          <div className='drinks' >
            <div className='img_png' >
              <img src='./images/rasm3.png' />
            </div>

            <div className='us-about' >About Us</div>

            <div className='Drinks' >Food, Drinks, entertainment in one</div>

            <div className='lorem' >
              Adipiscing
              tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam
              In sed odio nec aliquet.</div>


            <div className='btn_23'>
              Know More
            </div>

          </div>
        </div>


        <div className='wide_ranger' >
          <div className='range' >Wide Range to choose from</div>
          <div className='poison' >What’s Your Poison?</div>

          <div className='image_wrap' >
            <img className='image_first' src='./images/rasm3.png' />
            <img className='image_first2' src='./images/close.png' />
            <img className='image_first3' src='./images/Group 12.png' />

          </div>
        </div>

        <SimpleSlider />


      </div>
    )
  }
}
