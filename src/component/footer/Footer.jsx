import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className='Footer'>
        <div className='foorter-body'>
        <img className='footer_Logo' src={process.env.PUBLIC_URL + '/image/logotrv.png'} alt='logo' />
        <div className='foorter-Infor'>
            <div className='footer-body-inforItem'>
                <div className='footer-body-inforItem-maintitleInfor'>Communications</div>
                <div className='footer-body-inforItem-ItemInfor'>
                    <div className='footer-body-inforItem-titleInfor'> Email:</div>
                    <div className='footer-body-inforItem-Infor'>paradist.travel@gmail.com</div>
                </div>
                <div className='footer-body-inforItem-ItemInfor'>
                    <div className='footer-body-inforItem-titleInfor'> Hotline1:</div>
                    <div className='footer-body-inforItem-Infor'>0123456789</div>
                </div>
                <div className='footer-body-inforItem-ItemInfor'>
                    <div className='footer-body-inforItem-titleInfor'> Hotline2:</div>
                    <div className='footer-body-inforItem-Infor'>0987654321</div>
                </div>
                <div className='footer-body-inforItem-ItemInfor'>
                    <div className='footer-body-inforItem-titleInfor'> Address:</div>
                    <div className='footer-body-inforItem-Infor'>abc-LinhTrung-ThuDuc-VietNam</div>
                </div>
            </div>
            <div className='footer-body-inforItem'>
                <div className='footer-body-inforItem-maintitleInfor'>Official pages</div>
                <div className='footer-body-inforItem-groupicon'>
                <img className='footer_Logo_pages' src={process.env.PUBLIC_URL + '/image/facebook.png'} alt='logo' />
                <img className='footer_Logo_pages' src={process.env.PUBLIC_URL + '/image/insta.png'} alt='logo' />
                <img className='footer_Logo_pages' src={process.env.PUBLIC_URL + '/image/tiktok.png'} alt='logo' />
                <img className='footer_Logo_pages' src={process.env.PUBLIC_URL + '/image/twiter.png'} alt='logo' />

                </div>
               
            </div>

        </div>

        </div>
    </div>
  )
}
