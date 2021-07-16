//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
 import Image from './images/lecture2.jpg'
 import IMAGE1 from './images/proshark-intelligent-websites-4.webp'
 import IMAGE2 from './images/proshark-engagement.webp'
 import IMAGE3 from './images/construction-800x400-1.jpg'
 import $ from "jquery"
 import {useState} from 'react'
//  import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fab);


  
function App() {

      
      const [Show,setShow] = useState(false)


      const toggle=()=>{
           console.log('h')
            $(".side_bar").toggleClass("show")
      }

  return (
    <div className="App">
     
         <section className="top_navigation">
             <div className="container-fluid">
                <div className="branding">
                     <h4 className="brand_name"> Tutedude
                     | Digital Marketing
                      </h4>
                    
                </div>
                <div className="links">
                     <a href="#">login </a>
                     <a href="#"> Sign up </a>
                </div>
                 <div className="mobile_menu" onClick={()=>toggle()}>
                 <div className="line"></div>
                 <div className="line"></div>
                 <div className="line"></div>
                 </div>
             </div>
             <ul className="side_bar">
                <li> login </li>
                <li> signup</li>
             </ul>
         </section>

         <section className="main">
             <div className="row ct">
                  <div className="col-lg-6 col-xm-12 col-sm-12 con1">
                       <h4> Digital Marketing </h4>
                       <h5>Learn from Serial Entrepreneur who grew 2 ventures to 15 Mn+ Monthly Traffic - Step by Step Process for Digital Success</h5>
                        <hr className="horizontal_row"></hr>
                       <button>Go to the course</button>
                       </div>
                  <div className="col-lg-6 col-xm-12 col-sm-12 con2">
                     <h2> Course By </h2>
                      <button> Jitasmita Banerjee </button> 
                  </div>
             </div>
         </section>

         <section className="About">
            <div className="row ct">
               <div className="col-2">
               
               </div>
               <div className="col-8">
                    <h2 className="text-center">About this course</h2>
                    <p className="text-center">This course is an ideal course for someone running his own business or someone who is responsible for digital marketing at a company. The whole digital marketing arena is really confusing and has a goldmine of opportunities at the same time. You can either spend months into understanding the small nuances and waste Thousands of dollars and your precious time or you can take this course and see those nuances in minutes.</p>
               
                     <p className="text-center">What Makes me Qualified to Take this Course ?</p>
                     
                     <p className="text-center">I have taught over thousands of students over the past few years and I can vouch for the fact that after this course, there wil be nothing you won't know about digital marketing GET READY TO TAKE ACTION
                     </p>
                     <p className="text-center">Throughout the entire course, you'll be taking action!</p>
                     <p className="text-center "> <button className="read_more">Read more</button></p>
                     </div>
               <div className="col-2">
               
               </div>
            
            </div>
         
         </section>

         <section className="course_corriculum">
              <div className="row ct">
                   <div className="col-lg-8 col-sm-12 cont1">
                      <h4>Curriculum</h4>
                       <p className="make_it_wide">✔14section ✔ 192lectures ✔ 28h 26m total length</p>
                         <div className="button_container">
                         <button> Introduction to Digital Marketing Course</button>
                         <button> Market Research</button>
                         <button> Website planning and creation using wordpress</button>
                         <button> Email Marketing</button>
                         <button className={Show ? "hide" : 'read_button' } onClick={()=>setShow(true)}> Read More</button>
                           <div className={Show ? "show1": "hide" }>
                           <button> Introduction to Digital Marketing Course</button>
                           <button> Market Research</button>
                           <button> Website planning and creation using wordpress</button>
                           <button> Email Marketing</button>
                           <button> Introduction to Digital Marketing Course</button>
                           <button> Market Research</button>
                           <button> Website planning and creation using wordpress</button>
                           <button> Email Marketing</button>
                           <button> Email Marketing</button>
                           <button> Introduction to Digital Marketing Course</button>
                           <button> Website planning and creation using wordpress</button>
                           <button> Email Marketing</button>
                           </div>
                       
                         </div>
                       </div>
                   <div className="col-lg-4 col-sm-12 cont2">
                       
                   <div class="card" >
                   <img class="card-img-top" src={Image} alt="Card image cap" />
                   <div class="card-body">
                     <h5 class="card-title">Digital Marketing</h5>
                     <p> This Course includes</p>
                     <p class="card-text">28.5 Hr Video lectures
                     Full Lifetime Access
                     Personal Mentorship
                     Course By Jitasmita Banerjee</p>
                     <a href="#" class="btn btn-primary">Go to the course</a>
                   </div>
                 </div>
                              
                   </div>
              </div>
         </section>

         <section className="overview_section">
         <div className="row ct x">
         <div className="col-lg-6 col-sm-12 text-center">
         <h4  className="head_text_1">overview</h4>
         </div>
         <div className="col-lg-6 col-sm-12 contain">      
         <h4 className= "head_text_2"> Who is this course for ?</h4>
         </div>
         </div>
 
           <div className="row ct uplift">
                <div className="col-lg-4 col-sm-12">
                <div className="card card_1">
                <p>✔ Drive Free Traffic through SEO and Social Media</p>
                <p>✔ How to market on all major social media platforms</p>
                <p>✔ Do Experiments on various Paid Channels to find the ROI positive ads and then scale them
                </p>
             </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                <div className="card card_2">
                <p>✔ Drive Free Traffic through SEO and Social Media</p>
                <p>✔ How to market on all major social media platforms</p>
                <p>✔ Do Experiments on various Paid Channels to find the ROI positive ads and then scale them
                </p>
             </div>
                </div>
                
                <div className="col-lg-4 col-sm-12">
                 <p className="head_text_2 d-lg-none"> who is this course for  </p>
                  <div className="card card_3">
               <p>✔ Anyone who is running his/her own business </p> 
               <p> ✔ Anyone who is responsible for Digital Marketing at her company</p>
               <p> ✔ Anyone who is looking to start her Digital Marketing Career</p>
               <p> ✔ Someone who gets thrills by seeing growth in Real Time GA traffic on a day to day basis</p>
               </div>
                </div>

           </div>
         
         </section>

         <section className="section_new">
                <div className="head_content">
                       <hr className="blue_row"></hr>
                </div>
              <div className="main_cont">
                  <div className="cont cont_1">
                       <div className="img_cont">
                       <img class="card-img-top" src={IMAGE1} alt="Card image cap" />
                       </div>
                         <h5>intelligent websites</h5>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem officia numquam illo nobis magnam similique voluptas qui? Quis, reiciendis.</p>
                         <button>click me</button>
                  </div>
                  <div className="cont cont_2">
                       <div className="img_cont">
                       <img class="card-img-top" src={IMAGE2} alt="Card image cap" />
                       </div>
                         <h5>
                         Marketing vs Engagement</h5>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem officia numquam illo nobis magnam similique voluptas qui? Quis, reiciendis.</p>
                         <button>click me</button>
                  </div>
                  <div className="cont cont_3">
                       <div className="img_cont">
                       <img class="card-img-top" src={IMAGE3} alt="Card image cap" />
                       </div>
                         <h5>Case studies</h5>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem officia numquam illo nobis magnam similique voluptas qui? Quis, reiciendis.</p>
                         <button>click me</button>
                  </div>
              </div>
         </section>

         <section className="rough">
                 <div className="row ct cb">
                      <div className="col-lg-4 col-md-12 col-sm-12 col-xm-12">
                      <div className="img_cont">
                      <img class="card-img-top" src={IMAGE1} alt="Card image cap" />
                      </div>
                        <h5>intelligent websites</h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem officia numquam illo nobis magnam similique voluptas qui? Quis, reiciendis.</p>
                        <p className="text-center">  <button >click me</button> </p> 
                      </div> 
                      <div className="col-lg-4 col-md-12 col-sm-12 col-xm-12">
                      <div className="img_cont">
                      <img class="card-img-top" src={IMAGE2} alt="Card image cap" />
                      </div>
                        <h5>
                        Marketing vs Engagement</h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem officia numquam illo nobis magnam similique voluptas qui? Quis, reiciendis.</p>
                        <p className="text-center">  <button >click me</button> </p> 
                      </div> 
                      <div className="col-lg-4 col-md-12 col-sm-12 col-xm-12">
                      <div className="img_cont">
                      <img class="card-img-top" src={IMAGE3} alt="Card image cap" />
                      </div>
                        <h5>Case studies</h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem officia numquam illo nobis magnam similique voluptas qui? Quis, reiciendis.</p>
                      <p className="text-center">  <button >click me</button> </p> 
                      </div> 
                 </div>
         </section>

         <section className="footer">
             <div className="row ct">
                 <div className="col-lg-4 conta_1 text-center">
                      <h4> OUR VISION</h4>
                       <p>
                       Our vision is to provide all the students with all the resources so that they can learn any new skill from their homes.
                       </p>

                 </div>
                 <div className="col-lg-4 conta_2">
                     <h4 className="y"> USEFUL LINKS</h4>
                     <div className="useful_links">
                     <a href="#"> About Us </a>
                     <a href="#"> Contact Us </a>
                     <a href="#"> Become A Mentor </a>
                     <a href="#"> FAQ </a>
                     </div>
                 </div>
                 <div className="col-lg-4 conta_3">
                     <h4> CONTACT </h4>
                      <p> sector-6, Haryana , India</p>
                      <p> sector-6, Haryana , India</p>
                      <p> sector-6, Haryana , India</p>
                 </div>
             </div>
         
         </section>
  
    </div>
  );
}

export default App;
