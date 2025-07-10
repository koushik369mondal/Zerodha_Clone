import React from 'react'

export default function Brokerage() {
    return (
        <div className="container">

            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-5">
                    <a href=""><h3 className='fs-5'>Brokerage Calculator</h3></a>
                    <ul style={{ textAlign: 'left', lineHeight: '2' }} className='text-muted'>
                        <li>Call & Trade and RMS charges do not include GST.</li>
                        <li>Contract notes will be sent via email.</li>
                        <li>Physical copies of contract notes, if required, shall be charged per contract note.</li>
                        <li>For NRI account (With PIS): 0.5% or ₹100 per executed order (whichever is lower).</li>
                        <li>For NRI account (Without PIS): 0.5% or ₹200 per executed order.</li>
                        <li>If the account is in debit balance, any placed withdrawal will be charged ₹220 per executed order.</li>
                    </ul>

                </div>
                <div className="col-4 p-5">
                    <a href=""><h3 className='fs-5'>List of Charges</h3></a>
                </div>
            </div>
        </div>
    )
}
