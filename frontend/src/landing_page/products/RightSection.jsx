import React from "react";

export default function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className="container text-muted">
            <div className="row align-items-center">
                <div className="col-1"></div>

                <div className="col-4 p-5">
                    <h1 className="mb-4">{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-3">
                        <a href={learnMore}>
                            Learn More <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="col-5 p-5">
                    <img src={imageURL} alt={productName} />
                </div>

                <div className="col-2"></div>
            </div>
        </div>
    );
}
