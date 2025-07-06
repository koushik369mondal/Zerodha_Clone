import React from "react";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div class="container p-2">
                <a class="navbar-brand" href="#">
                    <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">
                                    Signup
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">
                                    Product
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Support
                                </a>
                            </li>
                            
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}
