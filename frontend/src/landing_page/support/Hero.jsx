import React from 'react'

export default function Hero() {
    return (
        <section className="container-fluid" id='support-hero'>
            <div className="p-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="" style={{ color: 'white', textDecoration: 'underline' }}>Track tickets</a>
            </div>
            <div className="row p-5 m-3">
                <div className="col-6">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input className='m-3' type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." /><br />
                    <a className='m-3' href="" style={{ color: 'white', textDecoration: 'underline' }}>Track account opening</a>
                    <a className='m-3' href="" style={{ color: 'white', textDecoration: 'underline' }}>Track segment activation</a>
                    <a className='m-3' href="" style={{ color: 'white', textDecoration: 'underline' }}>Intraday margins</a><br />
                    <a className='m-3' href="" style={{ color: 'white', textDecoration: 'underline' }}>Kite user manual</a>
                </div>
                <div className="col-6 p-5 mb-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li className='mb-3'><a href="" style={{ color: 'white', textDecoration: 'underline' }}>Quarterly Settlement of Funds - July 2025</a></li>
                        <li><a href="" style={{ color: 'white', textDecoration: 'underline' }}>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                    </ol>
                </div>
            </div>
        </section>
    )
}
