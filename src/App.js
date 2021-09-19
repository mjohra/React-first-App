import logo from './logo.svg';
import './App.css';
import mni from './tutorials.json';
import { useEffect,useState } from 'react';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Main></Main>
    </div>
  );
}

//header component
function Header(){
  return(
    <header>

        <div class="nav">
            <h3> That Js Dude</h3>
            <button class="sign-in"> Sign In</button>
        </div>

        <div class="header-main">
            <h1>Exclusive React Workshop for beginners!</h1>
            <p>Once in a year opportunity to learn and build your first React app</p>
            <button class="details">Learn More</button>
        </div>
    </header>

  )
}

///parent component--->1.left 2.right

function Main(){
return(
  <section className="main">
      <Left></Left>
      <Right></Right>
  </section>
)
}

///left part
function Left(){
  const [tutorials ,setTutorials]=useState([])
  useEffect(()=>{
    setTutorials(mni) 
  },[])

  return(
    <div className="left">
      <JsConfig></JsConfig>
      <div id="tutorials-container">
        {
              tutorials.map(tutorial=><Tutorial   title={tutorial.title}  desc={tutorial.desc}></Tutorial>)
        }
      </div>
    </div>
  )
}

function Tutorial(props){
  const {title,desc}=props
  return(
    <div class="tutorial">
      <h2>{title}</h2>
   <p>{desc}</p>
   <button class="details">
   View Details
 </button>
 </div>  
  )
}

//right part
function Right(){
  return(
      <div className="right">
        <PersonalTraining></PersonalTraining>
        <RecentVideos></RecentVideos>
      </div>
  )
}

//left single component
function JsConfig(){
  return(
    // <!-- js-config -->
            <div class="js-config">
                <h4>JS Confusing Parts</h4>
                <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event
                    delegation, dom, timers and many more caveats.</p>
            </div>
  )
}

///right part details

function PersonalTraining(){
  return(
    <div id="personal-training">
                <h2>Personal Training for $30</h2>
                <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything
                    else,
                    you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a
                    time
                    slot You can Book me</p>
            </div>
  )
}

function RecentVideos(){
  return(
    <div id="recent-videos">
                <h2>Recent Videos</h2>
                <ul>
                    <li>15+ tricks for dev tool</li>
                    <li>Understanding this</li>
                    <li>be expert in JS Array</li>
                    <li>How Browsers works in 4 min</li>
                </ul>
            </div>
  )
}

export default App;
