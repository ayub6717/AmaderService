import React from 'react'
import './FindCategory.css'

function FindCategory() {
    return (
        <div class="container con-style">
            <div class="row row-cols-5 col-width">
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/AcCategory.png" alt="AcCategory.png" />
                        <h6 style={{ paddingTop: "20px" }}>AC Repair</h6>
                    </div>
                </div>
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/AppliencRepair.png" alt="AppliencRepair.png" />
                        <h6 style={{ paddingTop: "20px" }}>Appliance Repair</h6>
                    </div>
                </div>
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/BeautySalon mainCategory.png" alt="BeautySalon mainCategory.png" />
                        <h6 style={{ paddingTop: "20px" }}>Beauty & Salon</h6>
                    </div>
                </div>
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/cleaning.png" alt="" />
                        <h6 style={{ paddingTop: "20px" }}>Cleaning</h6>
                    </div>
                </div>
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/Electrical.png" alt="" />
                        <h6 style={{ paddingTop: "20px" }}>Electrical</h6>
                    </div>
                </div>
                <div class="col col-pad col-pad">
                    <div className="img-border">
                        <img className="img-category img-cat" src="/img/MainCategory/Shifting.png" alt="" />
                        <h6 style={{ paddingTop: "20px" }}>Shifting</h6>
                    </div>
                </div>
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/Plumbing& Sanitary.png" alt="Plumbing& Sanitary.png" />
                        <h6 style={{ paddingTop: "20px" }}>Plumbing & Sanitary</h6>
                    </div>
                </div>
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/Painting& Renovation.png" alt="" />
                        <h6 style={{ paddingTop: "20px" }}>Painting & Renovation</h6>
                    </div>
                </div>
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/PestControl.png" alt="PestControl.png" />
                        <h6 style={{ paddingTop: "20px" }}>Pest Control</h6>
                    </div>
                </div>
                <div class="col col-pad">
                    <div className="img-border">
                        <img className="img-category" src="/img/MainCategory/Others.png" alt="Others.png" />
                        <h6 style={{ paddingTop: "20px" }}>Others</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindCategory
