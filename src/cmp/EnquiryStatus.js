import React, { useEffect, useState } from 'react'
import newsfoot1 from '../assets/images/03.png'
import newsfoot2 from '../assets/images/04.png'
import { checkStatus } from '../Services/enquiryServices'
import Footers from './Footers'
import { useNavigate } from 'react-router-dom'
// import StripeCheckout from 'react-stripe-checkout';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { hideLoader, showLoader } from '../Services/common'



export default function EnquiryStatus() {

    
    var navigate = useNavigate()

    useEffect(()=>{
        setTimeout(() => {
            hideLoader()
        }, 1000);
    },[])

    const goto = (path) =>{
      navigate(path)
    }


    const [genKey, setGenKey] = useState('')
    const [des, setDes] = useState('')
    const [pending, setPending] = useState(false)
    const [accept, setAccept] = useState(false)



    const ckeckStatusFun = () => {
        setPending(false)
        setAccept(false)
        setDes("")

        var err=0

        if(genKey==''){
            NotificationManager.error("Enter application no");
            err++
        }


        if(err==0){
            var data = {
                "genKey": genKey
            }
            showLoader()
            checkStatus(data).then(result => {
                hideLoader()
                if (result.data.success) {
                    if(result.data.response.status == "Pending"){
                        setPending(true)
                    }else{
                        setAccept(true)
                        setDes(result.data.response.admin_description)
                    }
                }else{
                    NotificationManager.error(result.data.message);
                }
            })
        }
        
    }


    return (
        <>
            <div className="pageheader-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pageheader-content text-center">
                                <h2>Enquiry Status</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item" onClick={()=>{goto("/")}}><a>Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page" onClick={()=>{goto("/enquirystatus")}}>Enquiry Status</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="enquiry-section map-address-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className='enquiry-form'>
                            <div className='enquiry-body py-5'>
                                <div className='row'>
                                    <div className='col-sm-12'>

                                        <div className='enq_stst_btn'>
                                            <div>
                                                <input 
                                                type='text' 
                                                className='form-control' 
                                                placeholder='Enter application No.' 
                                                value={genKey} 
                                                onChange={(e) => { setGenKey(e.target.value) }} />
                                            </div>
                                            
                                            <button className='btn btn-primary btn-lg' onClick={ckeckStatusFun}><i class="fa fa-paper-plane-o"></i> Submit</button>
                                        
                                        </div>
                                        

                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='stats_data'>
                                        <div className='enq_sts_hd'>
                                            {
                                                pending ?
                                                    <p className='pnd_st'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-patch-exclamation-fill" viewBox="0 0 16 16">
                                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg> Your enquiry status is pending.</p> :
                                                    null
                                            }

                                            {
                                                accept ?
                                                    <p className='aprv_st'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                                    </svg> Approved</p> : null
                                            }

                                        </div>
                                        <div className='enq_sts_txt'>
                                            {
                                                accept ?
                                                <p>{des}</p>
                                                : null
                                            }

                                            {
                                                pending ?
                                                <p>Please wait or contact the institution.</p>
                                                : null
                                            }
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer --> */}
            <div className="news-footer-wrap">
                <div className="fs-shape">
                    <img className='fst-1' src={newsfoot1} />
                    <img className='fst-2' src={newsfoot2} />
                </div>
                {/* <!-- Newsletter Section Start Here --> */}
                <div className="news-letter">
                    <div className="container">
                        <div className="section-wrapper">
                            {/* <div className="news-title">
                                <h3>Want Us To Email You About Special Offers And Updates?</h3>
                            </div>
                            <div className="news-form">
                                <form action="/">
                                    <div className="nf-list">
                                        <input type="email" name="email" placeholder="Enter Your Email" />
                                        <input type="submit" name="submit" value="Subscribe Now" />
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Newsletter Section Ending Here --> */}

                {/* <!-- Footer Section Start Here --> */}
                <Footers />
                {/* <!-- Footer Section Ending Here --> */}
            </div>
            {/* <!-- footer --> */}
            <NotificationContainer />

        </>
    )
}