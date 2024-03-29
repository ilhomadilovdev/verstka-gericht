import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div className='big_cont' >
        <div className='content2'>
          <div className='d_flex' >
            <div className='chase' >Chase the new Flavour</div>
            <div className='fine' >The key to Fine dining</div>
            <div className='tellus' >Sit tellus lobortis sed senectus
              vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
            </div>
            <button className='but-1'>
              Explore Menu
            </button>
          </div>


          <img src='./images/Hero img.png' />
        </div>


        <div className='content3' >

          <div className='ctn' >
            <div className='right' >
              <div className='about' >About Us</div>
              <div className='lorem' >Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Quis pharetra adipiscing
                ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</div>
              <button className='but-2' type='submit' >Know More</button>
            </div>



            <div className='left' >
              <div className='our' >Our History</div>
              <div className='adipising' >Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
                Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</div>
              <button className='but-3' type='submit' >Know More</button>
            </div>
          </div>


        </div>


        <div className='content4' >
          <div className='left_2' >
            <div className='awards' >Awards & recognition</div>
            <div className='our_' >Our Laurels</div>

            <div className='qator-1' >
              <div className='satr1' >
                <div className='bib' >
                  <div className='img1' >
                    <img src='./images/2.png' />
                  </div>

                </div>
                <div className='bib_content' >
                  <div className='bib_con' >Bib Gourmond</div>
                  <div className='bib_lorem' >Lorem ipsum dolor
                    sit amet
                  .</div>
                </div>
              </div>


              <div className='rising' >
                <div className='satr2' >
                  <div className='img2' >
                    <img src='./images/1.png' />
                  </div>

                  <div className='sat-child' >
                    <div className='star' >Rising Star</div>
                    <div className='star-lorem' >Lorem ipsum dolor
                      sit amet
                     
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='qator-1' >
              <div className='satr1' >
                <div className='bib' >
                  <div className='img1' >
                    <img src='./images/5.png' />
                  </div>

                </div>
                <div className='bib_content' >
                  <div className='bib_con' >AA Hospitality </div>
                  <div className='bib_lorem' >Lorem ipsum dolor
                    sit amet
                   </div>
                </div>
              </div>


              <div className='rising' >
                <div className='satr2' >
                  <div className='img2' >
                    <img src='./images/3.png' />
                  </div>

                  <div className='sat-child' >
                    <div className='star' >Outstanding </div>
                    <div className='star-lorem' >Lorem ipsum dolor
                      sit amet
                     
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='right_2' >
            <img src='./images/uns2.png' />
          </div>
        </div>
      </div>

    )
  }
}
