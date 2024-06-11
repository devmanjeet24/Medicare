import React from 'react'

const Bestspeciast = () => {

    const specialstBox = [
        {
            id: "1",
            name: 'Dr. Awaatif Al',
            profession: "Dental Care"
        },

        {
            id: "2",
            name: 'Dr. Filipa Gaspar',
            profession: "Cardiology"
        },

        {
            id: "3",
            name: 'Dr. Sukhmeet Gorae',
            profession: "Neurological"
        },

        {
            id: "4",
            name: 'Dr. Siri Jakobsson',
            profession: "Prediatrics"
        }
    ]

    return (
        <>
            <div className="specialst">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8 mb-5">
                            <div className='specailist-head text-center'>
                                <h2 className='H2'>We Have The Best Specialist </h2>
                                <p className='para'>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
                            </div>
                        </div>

                        <div className='col-12'>
                                <div className="row specialist-box">

                                {
                                    specialstBox.map((index, i) => {
                                        return(
                                            <div className='col-md-3' key={i}>
                                                <div className='specalistinnerbox'>
                                                    <div className='image-specialt'></div>
                                                    <div className='footer_boxspe'>
                                                        <h4>{index.name}</h4>
                                                        <p>{index.profession}</p>
                                                    </div>
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

export default Bestspeciast;