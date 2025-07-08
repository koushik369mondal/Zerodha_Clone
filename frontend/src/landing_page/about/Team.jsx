import React from "react";

export default function Team() {
    return (
        <div className="container">
            <div className="row p-3 border-top">
                <h1 className="text-center text-muted">People</h1>
            </div>
            <div
                className="row p-3 text-muted fs-6 mt-3 mb-5"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-1"></div>
                <div className="col-5 p-3 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="" style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 className="mt-3">Nithin Kamath</h4>
                    <h5 className="mt-1">Founder & CEO</h5>
                </div>
                <div className="col-5 p-3 mt-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).{" "}
                    </p>
                    <p>Playing basketball is his zen. </p>
                    <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row text-center mt-5 mb-5 text-muted">
                <div className="col-4">
                    <img src="media/images/Nikhil.jpg" alt="Nikhil Kamath" style={{ borderRadius: "100%", width: "60%" }}/>
                    <h5 className="mt-3">Nikhil Kamath</h5>
                    <h6 className="mt-1">Co-founder & CFO</h6>
                </div>
                <div className="col-4">
                    <img src="media/images/Kailash.jpg" alt="Dr. Kailash Nadh" style={{ borderRadius: "100%", width: "60%" }}/>
                    <h5 className="mt-3">Dr. Kailash Nadh</h5>
                    <h6 className="mt-1">CTO</h6>
                </div>
                <div className="col-4">
                    <img src="media/images/Venu.jpg" alt="Venu Madhav" style={{ borderRadius: "100%", width: "60%" }}/>
                    <h5 className="mt-3">Venu Madhav</h5>
                    <h6 className="mt-1">COO</h6>
                </div>
            </div>
            <div className="row text-center mt-5 mb-5 text-muted">
                <div className="col-4">
                    <img src="media/images/Hanan.jpg" alt="Hanan Delvi" style={{ borderRadius: "100%", width: "60%" }}/>
                    <h5 className="mt-3">Hanan Delvi</h5>
                    <h6 className="mt-1">CCO</h6>
                </div>
                <div className="col-4">
                    <img src="media/images/Seema.jpg" alt="Seema Patil" style={{ borderRadius: "100%", width: "60%" }}/>
                    <h5 className="mt-3">Seema Patil</h5>
                    <h6 className="mt-1">Director</h6>
                </div>
                <div className="col-4">
                    <img src="media/images/karthik.jpg" alt="Karthik Rangappa" style={{ borderRadius: "100%", width: "60%" }}/>
                    <h5 className="mt-3">Karthik Rangappa</h5>
                    <h6 className="mt-1">Chief of Education</h6>
                </div>
            </div>
            <div className="row text-center mt-5 mb-5 text-muted">
                <div className="col-4">
                    <img src="media/images/Austin.jpg" alt="Austin Prakesh" style={{ borderRadius: "100%", width: "60%" }}/>
                    <h5 className="mt-3">Austin Prakesh</h5>
                    <h6 className="mt-1">Director Strategy</h6>
                </div>
                <div className="col-4">
                    {/* <img src="media/images/nithinKamath.jpg" alt="" style={{ borderRadius: "100%", width: "60%" }}/> */}
                </div>
                <div className="col-4">
                    {/* <img src="media/images/nithinKamath.jpg" alt="" style={{ borderRadius: "100%", width: "60%" }}/> */}
                </div>
            </div>
        </div>
    );
}
