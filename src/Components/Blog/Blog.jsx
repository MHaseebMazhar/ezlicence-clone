import React from "react";
import "./Blog.css"; // import simple CSS
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
     const Footer1 = () => (
    <footer className="footer-support">
     

      {/* Floating Support Button */}
      {!isOpen && (
        <button
          className="support-button"
          onClick={() => setIsOpen(true)}
        >
          
          Support
        </button>
      )}

      {/* Iframe Widget */}
      {isOpen && (
        <div className="iframe-container">
          <iframe
            title="Support Options"
            id="webWidget"
            srcDoc={`<!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 16px;
                      background: #f3f3f3ff;
                    }
                    h2 {
                      font-size: 18px;
                      margin-bottom: 12px;
                      color: #333;
                    }
                    ul {
                      list-style: none;
                      padding: 0;
                    }
                    li {
                      margin-bottom: 10px;
                    }
                    button {
                      width: 100%;
                      padding: 12px;
                      border: 1px solid #ccc;
                      border-radius: 6px;
                      background: #f9f9f9;
                      cursor: pointer;
                      transition: all 0.2s ease-in-out;
                    }
                    button:hover {
                      background: #222;
                      color: white;
                    }
                  </style>
                </head>
                <body>
                  <h2>Please select your issue</h2>
                  <ul>
                    <li><button>I am learning to drive</button></li>
                    <li><button>I am a Driving Instructor</button></li>
                    <li><button>I am a Driving Instructor interested in joining EzLicence</button></li>
                    <li><button>I have a Media / PR enquiry</button></li>
                  </ul>
                </body>
              </html>`}
          />
          <button className="iframe-close" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
      )}
    </footer>
  );

  return (
    <div className="blog-container">
      <Topbar />
      <Navbar />
        <div className="container-blog">
        {/* Header */}
        <header className="header-blog">
          <h1 className="logo-blog">Blog</h1>
          <div className="social-blog">
            <span className="follow-text-blog">Follow Ezlicence on</span>
            <div className="icons-blog">
              <a href="/" className="icon-blog">
                👍
              </a>
              <a href="/" className="icon-blog">
                ⭐
              </a>
            </div>
          </div>
        </header>

        {/* First Blog Post */}
        <div className="card-blog">
          <div className="card-text-blog">
            <h2>The Most Googled Highway Codes In The UK</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
            Even after passing the driving test, many of us still turn to Google to make sense of the Highway Codes. From drivers wondering if it’s acceptable to drive in flip-flops to asking if they can drive with a cracked window screen, some road rules remain confusing.   

To uncover the most common sources of confusion, our team at EzLicence analysed UK search data to reveal the top ten most Googled Highway Code questions. 
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/istock-808138210_.1-.jpg"
              alt="Blog 1"
            />
          </div>
        </div>

        {/* Second Blog Post */}
        <div className="card-blog">
          <div className="card-text-blog">
            <h2>How Many Driving Lessons Do I Need?</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              The number of driving lessons you’ll need depends on how quickly you learn and how comfortable you feel behind the wheel. It’s important to avoid rushing through your learning process, as being underprepared for your driving test can end up costing you both time and money.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/blog.jpeg"
              alt="Blog 2"
            />
          </div>
        </div>
        {/* Third Blog Post */}
        <div className="card-blog">
          <div className="card-text-blog">
            <h2>How to Find an Instructor Where There is No Availability</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              Finding a driving instructor can be challenging, especially in areas with high demand. If you’re struggling to find an instructor with availability, consider expanding your search to nearby areas or using online platforms that connect learners with instructors. Additionally, booking lessons during off-peak times may increase your chances of finding an available instructor.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/istock-808138210_.1-.jpg"
              alt="Blog 3"
            />
          </div>
        </div>
        {/* Fourth Blog Post */}
        <div className="card-blog">
          <div className="card-text-blog">
            <h2>Payment Options</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              At EzLicence, we offer a variety of payment options to make it easier for you to manage the cost of your driving lessons. You can choose to pay per lesson, purchase lesson packages at a discounted rate, or opt for monthly payment plans. We also accept various payment methods, including credit/debit cards and PayPal.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/blog.jpeg"
              alt="Blog 4"
            />
          </div>
        </div>
        {/* Fifth Blog Post */}
        <div className="card-blog">

          <div className="card-text-blog">
            <h2>How to Cancel a Booking with Your Instructor</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              If you need to cancel a booking with your driving instructor, it’s important to do so as soon as possible to avoid any cancellation fees. Most instructors require at least 24-48 hours’ notice for cancellations. You can usually cancel by contacting your instructor directly via phone or email, or through the booking platform if you used one to schedule your lessons.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/istock-808138210_.1-.jpg"
              alt="Blog 5"
            />
          </div>
        </div>
        {/* Sixth Blog Post */}
        <div className="card-blog">
          <div className="card-text-blog">
            <h2>How to Request a Late Cancellation with Your Instructor (Less Than 48 Hrs)</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              If you need to request a late cancellation with your driving instructor, it’s best to contact them as soon as possible to explain your situation. While many instructors have strict cancellation policies, they may be willing to accommodate late cancellations in certain circumstances, such as emergencies. Be polite and understanding of their policies, and try to reschedule your lesson if possible.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/blog.jpeg"
              alt="Blog 6"
            />
          </div>
        </div>
        {/* Seventh Blog Post */}
         <div className="card-blog">
          <div className="card-text-blog">
            <h2>How to Request a Late Cancellation with Your Instructor (Less Than 48 Hrs)</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              If you need to request a late cancellation with your driving instructor, it’s best to contact them as soon as possible to explain your situation. While many instructors have strict cancellation policies, they may be willing to accommodate late cancellations in certain circumstances, such as emergencies. Be polite and understanding of their policies, and try to reschedule your lesson if possible.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/blog.jpeg"
              alt="Blog 6"
            />
          </div>
        </div>
        {/* Eighth Blog Post */}
         <div className="card-blog">
          <div className="card-text-blog">
            <h2>How to Request a Late Cancellation with Your Instructor (Less Than 48 Hrs)</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              If you need to request a late cancellation with your driving instructor, it’s best to contact them as soon as possible to explain your situation. While many instructors have strict cancellation policies, they may be willing to accommodate late cancellations in certain circumstances, such as emergencies. Be polite and understanding of their policies, and try to reschedule your lesson if possible.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/blog.jpeg"
              alt="Blog 6"
            />
          </div>
        </div>
        {/* Ninth Blog Post */}
         <div className="card-blog">
          <div className="card-text-blog">
            <h2>How to Request a Late Cancellation with Your Instructor (Less Than 48 Hrs)</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              If you need to request a late cancellation with your driving instructor, it’s best to contact them as soon as possible to explain your situation. While many instructors have strict cancellation policies, they may be willing to accommodate late cancellations in certain circumstances, such as emergencies. Be polite and understanding of their policies, and try to reschedule your lesson if possible.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/blog.jpeg"
              alt="Blog 6"
            />
          </div>
        </div>
        {/* Tenth Blog Post */}
         <div className="card-blog">
          <div className="card-text-blog">
            <h2>How to Request a Late Cancellation with Your Instructor (Less Than 48 Hrs)</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              If you need to request a late cancellation with your driving instructor, it’s best to contact them as soon as possible to explain your situation. While many instructors have strict cancellation policies, they may be willing to accommodate late cancellations in certain circumstances, such as emergencies. Be polite and understanding of their policies, and try to reschedule your lesson if possible.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/blog.jpeg"
              alt="Blog 6"
            />
          </div>
        </div>
        {/* End of Blog Posts */}
         <div className="card-blog">
          <div className="card-text-blog">
            <h2>How to Request a Late Cancellation with Your Instructor (Less Than 48 Hrs)</h2>
            <p className="author-blog">by Ezlicence</p>
            <p>
              If you need to request a late cancellation with your driving instructor, it’s best to contact them as soon as possible to explain your situation. While many instructors have strict cancellation policies, they may be willing to accommodate late cancellations in certain circumstances, such as emergencies. Be polite and understanding of their policies, and try to reschedule your lesson if possible.
            </p>
            <button className="btn-blog">Continue Reading</button>
          </div>
          <div className="card-img-blog">
            <img
              src="/blog.jpeg"
              alt="Blog 6"
            />
          </div>
        </div>
      </div>
        


      <Footer1 />
      <Footer />
      </div>
  )};

export default Blog;