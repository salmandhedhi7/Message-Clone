import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";



// import { Stack, Button } from "react-bootstrap";
// import { ArrowRight, Envelope, HandThumbsUp, ChatLeftText, Share } from "react-bootstrap-icons";
import profileImg from "./img/profile.jpeg";

function Hi () {
    return (
        <div>
            <stack direction="vertical" gap={2}>
                <button as="a" variant="primary">
                    {/* <ArrowRight /> */}
                    Button as link
                </button>
                <button as="a" variant="success">
                    {/* <Envelope />  */}
                    button as link
                </button>
            </stack>

            <stack direction="vertical" gap={2}>
                <button>Click me</button>
                Hello <strong>Salman</strong>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <div className="last">{5 + 10}</div>
                {60 * 4}
                <img width={200} src={profileImg} alt=""/>
            </stack>
        </div>
    );
}

function Post(props) {
    return (
        <div className="post">
            <div className="postHead">
                <img src={props.profileImg} width={65} height={65} alt="" />
                <div>
                    <h1> {props.name} </h1>
                    <div className="date"> {props.date}</div>
                </div>
            </div>

            <p> {props.text} </p>
            <img className="postImg" src={props.img} alt="" />

          <div className="postFooter">
             <div className="button">
               <i className="bi bi-hand-thumbs-up"> Like</i>
             </div>
              <div className="button">
                <i className="bi bi-chat-left"> Comment</i>
             </div>
              <div className="button">
                <i className="bi bi-share"> Share</i>
             </div>
         </div>
        </div>
     );  
}   


ReactDOM.render(
    <div>
      <Post
        profileImg={profileImg}
        name="Salman"
        date="15-May-2008 7:30 pm"
        img="https://2.bp.blogspot.com/-VZxiLefab0M/WBDvhnD64bI/AAAAAAAABRA/LUYa3CSFJDImRtw-lkVQTNKDxUgQcWnPgCLcB/s1600/Alter%2BBikes%2BPictures.jpg"
        text="The Honda CG125 or Honda CG is a commuter motorcycle made by Honda of Japan. It was in production from 1976 to 2008 in Japan and has been in production since 1992 in Pakistan. The CG was originally manufactured in Japan, but the source for the European market was eventually moved to Brazil in 1985, and to Pakistan and Turkey in 1992 for the W and M models. The CG125 is powered by a 124 cc (7.6 cu in) four-stroke, overhead valve, single-cylinder engine that has changed little over the years.

        The CG125 was developed from the CB125 for developing countries' markets. The two models were very similar, with many parts in common. The main difference was in the top ends: the CB had an overhead cam (OHC). One fault with many Honda OHC engines of that era (generally denoted CB), was that they had a tendency to wear the camshaft bearings if oil changes were skipped. The CG engine was developed specifically to address this problem (amongst others) as Honda realised that riders in developing countries performed little or no preventative maintenance. To make the bike more reliable with minimal servicing, the CG125 uses overhead valves (OHV) with pushrods, a washable foam air filter, and fully enclosed chain. The fully enclosed chain was dropped in 2004.[2]"
      />
       <Post
      profileImg={profileImg}
      name="Shahid"
      date="20-June-2012 5:00 pm"
      text="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
    />
    <Post
      profileImg={profileImg}
      name="Ameen"
      date="09-December-2019 5:00 pm"
      text="Strawberries are a nutritional powerhouse and can feed our bodies all kinds of goodness. They are fantastic sources of vitamins C and K, as well as fibre, manganese, potassium and folate, which is key for healthy pregnancies. They also contain plenty of phytonutrients and flavonoids, which give them that gorgeous red hue."
      img="https://images.unsplash.com/photo-1661609302742-677605a9762d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    />
  </div>,
  document.querySelector("#root")
);