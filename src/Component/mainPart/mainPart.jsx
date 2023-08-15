import React from 'react'
import img from '../../images/mahmoud.jpg'
export default function MainPart() {
    return (
        <div>
            <div className="container my-5 text-center  ">
                <h1 className='my-5' >About me</h1>

                <div className="row   ">
                    <div className="col-md-4">
                        <img className='w-100 rounded-4' src={img} alt="" />
                    </div>
                    <div className="col-md-6 mt-5 ">
                        <h2> <span style={{
                            color: "(151, 151, 141)"
                        }} >Mahmoud Sakr</span> </h2>
                        <p className='h5' >I am a dedicated student at the Faculty of Science, specializing in the Software Industry and Multimedia Department
                            at level 3. My aspiration is to become a proficient fullstack developer, equipped with the skills to excel in both front-end and back-end development.</p>
                        <h2 className='mt-5' >Skills:</h2>
                        <i className="fa-brands fa-react fa-3x me-2  " style={{ color: "#3dade6" }}></i>
                        <i className="fa-brands fa-angular fa-3x   me-2  " style={{ color: "#b30000" }}></i>
                        <i className="fa-brands fa-js fa-3x me-2" style={{ color: "#c2b200" }}></i>
                        <i class="fa-brands fa-html5 fa-3x me-2 " style={{ color: "#c78800" }}></i>
                        <i className="fa-brands fa-css3 fa-3x me-2" style={{ color: "#7da4e8 " }}></i>
                        <i class="fa-brands fa-linux fa-3x"></i>
                        <i class="fa-brands fa-sass  fa-3x "></i>   <br />

                        <i class="fa-brands fa-docker fa-3x " style={{color: "#24498a"}}></i>
                        <i class="fa-brands fa-github fa-3x me-2"></i>
                        <i class="fa-brands fa-node fa-3x " style={{ color: "#106100" }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
