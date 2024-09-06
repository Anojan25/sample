import Footer from '@/components/footer/Footer'
import SectionFour from '@/components/sections/SectionFour'
import SectionOne from '@/components/sections/SectionOne'
import SectionThree from '@/components/sections/SectionThree'
import SectionTwo from '@/components/sections/SectionTwo'
import React from 'react'

const HomePg = () => {
    return (
        <div>
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Welcome to Our Website</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan enim ac massa fringilla, nec mollis leo hendrerit.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img src="https://via.placeholder.com/500" className="img-fluid" alt="Placeholder" />
                    </div>
                </div>
            </main>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <Footer />
        </div>
    )
}

export default HomePg