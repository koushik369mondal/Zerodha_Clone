import React from "react";

export default function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container text-muted">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 p-5">
                    <img src={imageURL} />
                </div>
                <div className="col-1"></div>
                <div className="col-4 p-5 mt-5">
                    <h1 className="mb-4">{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{ marginLeft: "30px" }}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ marginLeft: "60px" }}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play Badge" /></a>
                        <a href={appStore} style={{ marginLeft: "30px" }}><img src="media/images/appStoreBadge.svg" alt="App Store Badge" /></a>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    );
}
