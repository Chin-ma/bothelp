/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import EmailValidator from 'email-validator';
import 'semantic-ui-css/semantic.min.css';
import emailjs from 'emailjs-com';
import '@sweetalert2/themes/default';
import './styles/Responsive.css';
import './styles/App.css';
import 'animate.css';

export default function App() {
       const SERVICE_ID = "service_zet5mvy";
       const TEMPLATE_ID = "template_2d12218";
       const USER_ID = "user_yjzIcgP3CielUVbDJdRCL";
       const [showText, setShowText] = useState(false);
       // const click = () => setShowText(true);
       function click() {
        setShowText(true);
        setTimeout(function() {
            setShowText(false);
        }, 2000);
       }
       function know() {
        Swal.fire({
            title: 'You will know them better while using the bot.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
       }
       
       const [isLoading, setLoading] = useState(true);
       useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
       }, []);

       const override = `position: relative;
                         display: flex;
                         align-items: center;

                         justify-content: center;
                         background-color: #23272A;
                         height: 1000px;
                         margin: auto;`

       const handleOnSubmit = (e) => {
           e.preventDefault();
           emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target,
             USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message sent successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops something went wrong',
                    text: error.text
                })
            });
            e.target.reset();
       };

       const videoRef = useRef();
       const setPlayBack = () => {
           videoRef.current.playbackRate = 2;
       };

       const [emailInput, setEmail] = useState("");
       const [validEmail, validateEmail] = useState(true);

       const [showNav, setShowNav] = useState(false);

       return(
        isLoading ?
        <ScaleLoader color={'#FF9900'} isLoading={isLoading} css={override} size={200} />:
        <div className="background">
        <header>
            <div className="navbar" id="nav">
                <div className="logo"><img src="logo.png" alt="logo"/></div>
                <span className="logo-text" id="l-text">AwesomeBOT</span>
                <ul className="link-list">
                    <li className="links"><a href="/App.js">Home</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="links"><a href="#" onClick={click}>Features</a></li>
                    <li className="links"><a href="#a-us">About us</a></li>
                    <li className="links"><a href="#contact-us">Contact us</a></li>
                    {
                        showText ?
                        <div className="dropContent">
                            <a href="#summon">Summon</a>
                            <a href="#song-q">Queue shuffle</a>
                            <a href="#song-loop">Loops song</a>
                         </div>
                        :null
                    }
                </ul>
                
            </div>
            <div className="hamburger">
                <Icon link name="bars" color="orange" className="ham" id="collapse" size="big" onClick={() => setShowNav(!showNav)}>{showNav ? '' : ''}</Icon>
                {showNav && <div><ul className="side-list">
                            <li className="links1"><a href="/App.js">Home</a></li>
                            <li className="links1"><a href="#summon">Features</a></li>
                            <li className="links1"><a href="#a-us">About us</a></li>
                            <li className="links1"><a href="#contact-us">Contact us</a></li>
                        </ul></div>}
            </div>
        </header>

        <article>
            <div className="some-text">
                Add AwesomeBOT to your<br></br> server and enjoy all the<br></br> music features for<br></br> free.
            </div>

            <div className="btns">
                <button className="func-btns" id="add-discord" onClick={() => window.open("https://discordapp.com/api/oauth2/authorize?client_id=705684970466967572&permissions=1312152647&scope=bot", "popup", "width=600,height=600,top=200,left=650").focus()}>Add to discord</button>
                <button className="func-btns" id="see-features" onClick={() => window.open("#summon", "_self")}>See Features</button>
            </div>
            
            <div className="sc-1">
                <img src="sc_1.png" alt="" />
            </div>

            <div className="images">
                <div className="some-img" id="img1"><img src="sidement.png" alt=""/></div>
                <div className="some-img" id="img2"><img src="sidement.png" alt=""/></div>
                <div className="some-img" id="img3"><img src="sidement.png" alt=""/></div>
            </div>

            <div className="force-add">
                <span className="force-text">24/7 Online. Add songs to queue and relax. <button className="func-btns" id="add-discord-2" onClick={() => window.open("https://discordapp.com/api/oauth2/authorize?client_id=705684970466967572&permissions=1312152647&scope=bot", "popup", "width=600,height=600,top=200,left=650")}>Add to discord</button></span>
            </div>

            <a className="f1" id="summon">Summon</a><br></br>
            <video src="summon.mp4" type="video/mp4" loop={true} autoPlay={true} playsInline muted id="vid" className="vid1" ref={videoRef} onCanPlay={setPlayBack}></video>
            <div className="summon-text">
                Hurry!<br></br> use summon<br></br> command and bot will<br></br> join the respective<br></br> channel.
            </div> 
            <img src="logo.png" alt="" className="logo-summon" />
            
            <a className="f1" id="song-q">Queue Shuffle</a><br></br>
            <video src="shuffle.mp4" type="video/mp4" loop={true} autoPlay={true} playsInline muted id="vid" className="vid2" ref={videoRef} onCanPlay={setPlayBack}></video>
            <div className="q-text">
                Add<br></br> songs to queue<br></br> and shuffle them<br></br> to enjoy the<br></br> variety.
            </div>
            <img src="logo.png" alt="" className="logo-q" id="logo-q1" />
            <img src="logo.png" alt="" className="logo-q" id="logo-q2" />
            <img src="logo.png" alt="" className="logo-q" id="logo-q3" />

            <a className="f1" id="song-loop">Loops Song</a>
            <video src="loop.mp4" type="video/mp4" loop={true} autoPlay={true} playsInline muted className="vid3" ref={videoRef} onCanPlay={setPlayBack}></video>
            <div className="l-text">
                Love listening<br></br> to specific Song a lot<br></br> then looooop your song<br></br> with loop command. 
            </div>
            <img src="logo.png" alt="" className="logo-loop" />

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="f1" id="contact-us">Contact Us</a>

            <div className="contact-form">
                <Form onSubmit={handleOnSubmit} className="form-group">
                    <Form.Field
                        id='form-input-control-email'
                        control={Input}                        
                        name='user_email'
                        placeholder='Email'
                        required
                        autoComplete='off'
                        icon='mail'
                        iconPosition='left'
                        value={emailInput}
                        onChange={e => {
                            setEmail(e.target.value);
                            validateEmail(EmailValidator.validate(e.target.value));
                        }}
                        error={validEmail ? false : {
                            content: 'Please enter a valid Email',
                            pointing: 'below'
                        }} />
                    <Form.Field 
                        id='form-input-control-last-name'
                        control={Input}                       
                        name='user_name'
                        placeholder='Name'
                        required
                        autoComplete='off'
                        icon='user circle'
                        iconPosition='left' />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        name='user_message'
                        placeholder='Message…'
                        required />
                    <Button 
                        type='submit' 
                        id="form-control-button"
                        disabled={!validEmail} 
                        color='green'>
                        Submit
                    </Button>
                </Form>
            </div>

            <div className="about">
                <a className="f1" id="a-us">About Us</a>
                <div className="about-us">
                    <div className="about-lay" id="myself">
                        <img src="myself.png" alt="" className="my-pic" />
                        <span className="my-name">Chinmay Phanasgaonkar</span>
                        <a onClick={() => window.open("https://github.com/Chin-ma", "_blank")}><Icon link name="github icon" size="big" color="blue" id="my-git"></Icon></a>
                        <a onClick={() => window.open("https://stackoverflow.com/users/12539063/chinmay-phanasgaonkar", "_blank")}><Icon link name="stack overflow" size="big" color="orange" id="my-stack"></Icon></a>
                        <a onClick={() => window.open("https://www.instagram.com/__chinmay__.py/", "_blank")}><Icon link name="instagram" size="big" color="pink" id="my-insta"></Icon></a>
                    </div>
                    <div className="about-lay" id="mate">
                        <img src="mate.png" alt="" className="mate-pic" />
                        <span className="mate-name">Pranil Chitre</span>
                        <a onClick={() => window.open("https://github.com/devout-coder", "_blank")}><Icon link name="github icon" size="big" color="blue" id="mate-git"></Icon></a>
                        <a onClick={() => window.open("https://stackoverflow.com/users/14502224/pranil", "_blank")}><Icon link name="stack overflow" size="big" color="orange" id="mate-stack"></Icon></a>
                        <a onClick={() => window.open("https://www.instagram.com/devout_coder/", "_blank")}><Icon link name="instagram" size="big" color="pink" id="mate-insta"></Icon></a>
                    </div>
                </div>
            </div>
            
            
        </article>
            
        <footer>
            <div className="dev-info" id="dev">
                <img src="logo.png" alt="#" className="logo" id="about-logo"/>
                <span className="logo-text" id="about-logo-text">AwesomeBOT</span>
                <span className="dev-links">
                    <a href="/App.js">Home</a>
                    <a href="#summon">Features</a>
                    <a href="#a-us">About us</a>
                    <a href="#contact-us">Contact us</a>
                </span><br></br>
                <span className="dev-links" id="dev2">
                    <a href="#dev" onClick={know}>Commands</a>
                    <a href="#summon">Features</a>
                    <a href="#a-us">About us</a>
                    <a href="#contact-us">Contact us</a>
                </span>

                <a href="#nav" className="go-up"><Icon link name="chevron circle up" size="big" color="orange" /></a>

            </div>
            
        </footer>
                    
    </div>  
    ) 

}

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAQUmazeVXQUSd83xtf8ITPZxk_H5Qxz-Y",
//   authDomain: "awesome-bot-bb27d.firebaseapp.com",
//   projectId: "awesome-bot-bb27d",
//   storageBucket: "awesome-bot-bb27d.appspot.com",
//   messagingSenderId: "499521787496",
//   appId: "1:499521787496:web:9b1bfdad0aa4f396bc0ddd",
//   measurementId: "G-B0SGPYFSPZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);