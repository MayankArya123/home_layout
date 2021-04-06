//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
 import Image from './images/lecture2.jpg'


function App() {
  return (
    <div className="App">
     
         <section className="top_navigation">
             <div className="container">
                <div className="branding">
                     <h4 className="brand_name"> Tutedude
                     | Digital Marketing
                      </h4>
                    
                </div>
                <div className="links">
                     <a href="#">login </a>
                     <a href="#"> Sign up </a>
                </div>
             </div>
         </section>

         <section className="main">
             <div className="row ct">
                  <div className="col-6 con1">
                       <h4> Digital Marketing </h4>
                       <h5>Learn from Serial Entrepreneur who grew 2 ventures to 15 Mn+ Monthly Traffic - Step by Step Process for Digital Success</h5>
                        <hr className="horizontal_row"></hr>
                       <button>Go to the course</button>
                       </div>
                  <div className="col-6 con2">
                     <h2> Course By </h2>
                      <button> Jitasmita Banerjee </button> 
                  </div>
             </div>
         </section>

         <section className="About">
            <div className="row">
               <div className="col-2">
               
               </div>
               <div className="col-8">
                    <h2 className="text-center">About this course</h2>
                    <p>This course is an ideal course for someone running his own business or someone who is responsible for digital marketing at a company. The whole digital marketing arena is really confusing and has a goldmine of opportunities at the same time. You can either spend months into understanding the small nuances and waste Thousands of dollars and your precious time or you can take this course and see those nuances in minutes.</p>
               
                     <p className="text-center">What Makes me Qualified to Take this Course ?</p>
                     
                     <p>I have taught over thousands of students over the past few years and I can vouch for the fact that after this course, there wil be nothing you won't know about digital marketing GET READY TO TAKE ACTION
                     </p>
                     <p className="">Throughout the entire course, you'll be taking action!</p>
                     <button className="read_more">Read more</button>
                     </div>
               <div className="col-2">
               
               </div>
            
            </div>
         
         </section>

         <section className="course_corriculum">
              <div className="row">
                   <div className="col-8 cont1">
                      <h4>Curriculum</h4>
                       <p>✔14section ✔ 192lectures ✔ 28h 26m total length</p>
                         <div className="button_container">
                         <button> Introduction to Digital Marketing Course</button>
                         <button> Market Research</button>
                         <button> Website planning and creation using wordpress</button>
                         <button> Email Marketing</button>
                         <button> Read More</button>
                         </div>
                       </div>
                   <div className="col-4 cont2">
                       
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
         <div className="row ">
         <div className="col-6">
         <h4  className="head_text_1">overview</h4>
         </div>
         <div className="col-6">      
         <h4 className= "head_text_2"> Who is this course for ?</h4>
         </div>
         </div>
 
           <div className="row">
                <div className="col-4">
                <div className="card card_1">
                <p>✔ Drive Free Traffic through SEO and Social Media</p>
                <p>✔ How to market on all major social media platforms</p>
                <p>✔ Do Experiments on various Paid Channels to find the ROI positive ads and then scale them
                </p>
             </div>
                </div>
                <div className="col-4">
                <div className="card card_2">
                <p>✔ Drive Free Traffic through SEO and Social Media</p>
                <p>✔ How to market on all major social media platforms</p>
                <p>✔ Do Experiments on various Paid Channels to find the ROI positive ads and then scale them
                </p>
             </div>
                </div>
                <div className="col-3">
                  <div className="card card_3">
               <p>✔ Anyone who is running his/her own business </p> 
               <p> ✔ Anyone who is responsible for Digital Marketing at her company</p>
               <p> ✔ Anyone who is looking to start her Digital Marketing Career</p>
               <p> ✔ Someone who gets thrills by seeing growth in Real Time GA traffic on a day to day basis</p>
               </div>
                </div>
         
           </div>
         
         </section>

         <section className="footer">
             <div className="row">
                 <div className="col-4 conta_1">
                      <h4> OUR VISION</h4>
                       <p>
                       Our vision is to provide all the students with all the resources so that they can learn any new skill from their homes.
                       </p>

                 </div>
                 <div className="col-4 conta_2">
                     <h4> USEFUL LINKS</h4>
                     <div className="useful_links">
                     <a href="#"> About Us </a>
                     <a href="#"> Contact Us </a>
                     <a href="#"> Become A Mentor </a>
                     <a href="#"> FAQ </a>
                     </div>
                 </div>
                 <div className="col-4 conta_3">
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
