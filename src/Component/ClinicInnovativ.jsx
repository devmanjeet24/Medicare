import React from 'react'


const ClinicInnovativ = () => {


    const innovativesm = [
        {
            id: "Box1",
            name: 'Qualified Doctors',
            imgsrc: './doctor-woman.png'
        },

        {
            id: "Box2",
            name: 'Emergency Care',
            imgsrc: './doctorlist.png'
        },

        {
            id: "Box3",
            name: '24 Hours Service',
            imgsrc: './doctorambulance.png'
        }
    ];

    return (
        <>


            <div className='Innovative'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center ">
                            <div className="clinicinnovateTect">
                                <h2>Clinic With Innovative</h2>
                                <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                                <button class="pagebutton"><a href="/service">Learn More</a></button>
                            </div>
                        </div>

                        <div className='col-md-6 '>
                            <div className='InnavativeBoxes'>



                                {
                                    innovativesm.map((indev, v) => {
                                        return (

                                            <div className='InnovsmallBox' key={v} id={indev.id}>
                                                <div className='InnerInnovate'>
                                                    <div className='ImgInnnov'>
                                                        <img src={indev.imgsrc} alt="" />
                                                    </div>

                                                    <p>{indev.name}</p>

                                                </div>
                                            </div>

                                        )
                                    })
                                }



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ClinicInnovativ;