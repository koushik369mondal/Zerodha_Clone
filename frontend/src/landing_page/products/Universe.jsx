import React from "react";

export default function Universe() {
    const imageStyle = {
        width: "150px",
        height: "100px",
        objectFit: "contain",
        transition: "transform 0.2s ease",
    };

    const hoverEffect = (e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.cursor = "pointer";
    };

    const resetEffect = (e) => {
        e.currentTarget.style.transform = "scale(1)";
    };

    return (
        <div className="container mt-5 text-muted">
            <div className="text-center mb-5">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
            </div>

            {/* Row 1 */}
            <div className="row text-center">
                <div className="col-md-4 p-3">
                    <img
                        src="media/images/zerodhaFundhouse.png"
                        alt="Fundhouse"
                        style={imageStyle}
                        onMouseEnter={hoverEffect}
                        onMouseLeave={resetEffect}
                    />
                    <p className="mt-3">
                        Our asset management venture that is creating simple and transparent
                        index funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-md-4 p-3">
                    <img
                        src="media/images/sensibullLogo.svg"
                        alt="Sensibull"
                        style={imageStyle}
                        onMouseEnter={hoverEffect}
                        onMouseLeave={resetEffect}
                    />
                    <p className="mt-3">
                        Options trading platform that lets you create strategies, analyze
                        positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-md-4 p-3">
                    <img
                        src="media/images/tijori.svg"
                        alt="Tijori"
                        style={imageStyle}
                        onMouseEnter={hoverEffect}
                        onMouseLeave={resetEffect}
                    />
                    <p className="mt-3">
                        Investment research platform that offers detailed insights on
                        stocks, sectors, supply chains, and more.
                    </p>
                </div>
            </div>

            {/* Row 2 */}
            <div className="row text-center">
                <div className="col-md-4 p-3">
                    <img
                        src="media/images/streakLogo.png"
                        alt="Streak"
                        style={imageStyle}
                        onMouseEnter={hoverEffect}
                        onMouseLeave={resetEffect}
                    />
                    <p className="mt-3">
                        Systematic trading platform that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-md-4 p-3">
                    <img
                        src="media/images/smallcaseLogo.png"
                        alt="Smallcase"
                        style={imageStyle}
                        onMouseEnter={hoverEffect}
                        onMouseLeave={resetEffect}
                    />
                    <p className="mt-3">
                        Thematic investing platform that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-md-4 p-3">
                    <img
                        src="media/images/dittoLogo.png"
                        alt="Ditto"
                        style={imageStyle}
                        onMouseEnter={hoverEffect}
                        onMouseLeave={resetEffect}
                    />
                    <p className="mt-3">
                        Personalized advice on life and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
            </div>

            {/* Button */}
            <div className="text-center mt-5 mb-5">
                <button
                    className="btn btn-primary fs-5"
                    style={{ width: "25%", backgroundColor: "#387ed1" }}
                >
                    Sign up for free
                </button>
            </div>
        </div>
    );
}
