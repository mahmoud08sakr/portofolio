import React from 'react'
import styel from './projects.module.css'
import img1 from '../../images/Screenshot 2023-08-15 235135.png'
import img2 from '../../images/login.png'
import img3 from '../../images/Screenshot 2023-08-15 235031.png'
import img4 from '../../images/cart.png'



import img5 from '../../images/food1.png'
import img6 from '../../images/meals.png'
import img7 from '../../images/register.png'



export default function Projects() {
    return (
        <div>   <hr style={{
            borderTop: '6px solid black',
            marginTop: '30px',
            marginBottom: '30px'
        }} />
            <div className="background-image"></div>

            <div className="container my-5">
                <div className="text-center my-5">
                    <h2  >Projects</h2>
                </div>
                <div className="row">

                    <div className="col-md-6 ">
                        <h2>E-commerce (react) </h2>

                        <img className='w-100  mb-5 rounded-5 ' src={img1} alt="" />
                        <div className="row">

                            <div className="col-md-4">
                                <img className='w-100 mb-3 rounded-5' src={img2} alt="" />
                            </div>
                            <div className="col-md-4">
                                <img className='w-100 mb-3 rounded-5' src={img3} alt="" />
                            </div> <div className="col-md-4">
                                <img className='w-100 mb-3 rounded-5' src={img4} alt="" />
                            </div>
                        </div>
                    </div>



                    <div className="col-md-6">
                        <h3>In this project, I used a lot of libraries from React:</h3>
                        <div className="row mt-5 ">
                            <div className="col-md-6">

                                <ul>
                                    <li>useState</li>
                                    <li>useEffect</li>
                                    <li>jwt-decode</li>
                                    <li>framer-motion</li>
                                    <li>popmotion</li>
                                    <li>react-three/fiber</li>
                                    <li>Yup</li>
                                    <li>useContext</li>
                                    <li>useNavigate</li>
                                </ul>
                            </div>


                            <div className="col-md-6">

                                <ul>
                                    <li>useFormik</li>
                                    <li>RouterProvider</li>
                                    <li>createBrowserRouter</li>
                                    <li>react-hot-toast</li>
                                    <li>react-day-and-night-toggle</li>
                                    <li>Protected Routes</li>
                                    <li>react-detect-offline</li>
                                    <li>react-helmet</li>
                                </ul>
                            </div>
                        </div>

                    </div>




                    <div className="col-md-6 ">
                        <h2>Yummy </h2>

                        <img className='w-100  mb-5 rounded-5 ' src={img5} alt="" />
                        <div className="row">

                            <div className="col-md-4">
                                <img className='w-100 mb-3 rounded-5' src={img6} alt="" />
                            </div>
                            <div className="col-md-4">
                                <img className='w-100 mb-3 rounded-5' src={img7} alt="" />
                            </div> <div className="col-md-4">
                                <img className='w-100 mb-3 rounded-5' src={img4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>In this project, I used a lot of libraries from React:</h3>
                        <div className="row mt-5 ">
                            <div className="col-md-6">
                                <h3>Technologies Used:</h3>
                                <ul>
                                    <li>axios to fetch the data</li>
                                    <li>bootstrap</li>
                                    <li>jQuiry</li>
                                    <li>css</li>
                                    <li>html</li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h3>Additional Skills:</h3>
                                <ul>
                                    <li>responsive web design</li>
                                    <li>DOM manipulation with JavaScript</li>
                                    <li>form handling in HTML</li>
                                    <li>styling with CSS Grid</li>
                                    <li>event handling in JavaScript</li>
                                    <li>semantic HTML structure</li>
                                    <li>media queries for mobile optimization</li>
                                    <li>CSS animations and transitions</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div >


    )
}
