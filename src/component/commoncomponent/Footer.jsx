import React from 'react'
import logo from '../../assets/images/logo.webp'
import flag from '../../assets/images/indianFlagpng.png'
import facebook from '../../assets/images/facebook.svg'
import insta from '../../assets/images/insta.svg'
import linkedin from '../../assets/images/linkedin.svg'
import youtube from '../../assets/images/youtube.svg'
import twitter from '../../assets/images/twitter.svg'
import appstore from '../../assets/images/app.webp'
import playstore from '../../assets/images/play.webp'
export default function Footer() {
  return (
    <>
      <div className='w-[100%] bg-[#F8F8F8]'>
        <div className='max-w-[1100px]  px-4 tablet:px-0  mx-auto pt-6'>
          <div className='flex justify-between'>
            <div className='w-32'>
              <img src={logo} alt="" />
            </div>
            <div className='flex gap-4'>
              <div className='flex gap-2 px-2 py-1 rounded border-[black] border items-center'>
                <div>
                  <img src={flag} width='20px' height='14px' alt="" />
                </div>
                <div className='text-[20px]'>India</div>
              </div>
            </div>

          </div>
          <div className='flex gap-20 pt-7 pb-12 border-b border-[black] flex-wrap '>
            <div>
              <ul>
                <li className='tracking-[2px]  font-bold pb-2'>ABOUT ZOMATO </li>
                <li className='capitalize hover:font-normal font-light '>Who We are</li>
                <li className='capitalize hover:font-normal font-light '>blog</li>
                <li className='capitalize hover:font-normal font-light '>work with use</li>
                <li className='capitalize hover:font-normal font-light '>investor relations</li>
                <li className='capitalize hover:font-normal font-light '>report fraud</li>
                <li className='capitalize hover:font-normal font-light '>press kit </li>
                <li className='capitalize hover:font-normal font-light '>contact us </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='tracking-[2px] uppercase font-bold pb-2'>Zomaverse </li>
                <li className='capitalize hover:font-normal font-light '> Zomato</li>
                <li className='capitalize hover:font-normal font-light '>blinkit</li>
                <li className='capitalize hover:font-normal font-light '>feeding india</li>
                <li className='capitalize hover:font-normal font-light '>hyperpure</li>
                <li className='capitalize hover:font-normal font-light '>zomato live</li>
                <li className='capitalize hover:font-normal font-light '>zomaland </li>
                <li className='capitalize hover:font-normal font-light '>weather union </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='tracking-[2px] uppercase font-bold pb-2'>For Restaurants </li>
                <li className='capitalize hover:font-normal font-light '>partner with us</li>
                <li className='capitalize hover:font-normal font-light '>apps for you</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='tracking-[2px] uppercase font-bold pb-2'>Learn More</li>
                <li className='capitalize hover:font-normal font-light '>privacy</li>
                <li className='capitalize hover:font-normal font-light '>security</li>
                <li className='capitalize hover:font-normal font-light '>terms</li>
                <li className='capitalize hover:font-normal font-light '>sitemap</li>

              </ul>
            </div>
            <div>
              <ul>
                <li className='tracking-[2px] uppercase font-bold pb-2'>Social links</li>
                <li className='capitalize hover:font-normal flex gap-2 font-light '>
                  <img src={linkedin} alt="" />
                  <img src={insta} alt="" />
                  <img src={twitter} alt="" />
                  <img src={youtube} alt="" />
                  <img src={facebook} alt="" />
                </li>
                <li className='capitalize hover:font-normal pb-3 pt-5 font-light '>
                  <img src={appstore} width={137} alt="" />

                </li>
                <li className='capitalize hover:font-normal font-light '>
                  <img src={playstore} width={137} alt="" />
                </li>


              </ul>
            </div>


          </div>
          <div className='py-6 text-[14px] font-light'>
            <p>
              By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
            </p>

          </div>

        </div>
      </div>
    </>

  )
}
