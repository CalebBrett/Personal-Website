(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(4),r=a(6),i=a(5),s=a(7),l=a(0),c=a.n(l),h=a(21),u=a.n(h),m=a(22),d=a.n(m),p=a(23),g=a.n(p),b=(a(39),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"document"},c.a.createElement(w,null),c.a.createElement(f,null),c.a.createElement(y,{data:[{name:"Chess Robot",extension:".mp4",blerb:"          I along with two of my classmates built a robot that plays chess with you. The robot can accurately navigate the board, pick up the pieces and preform complex moves such as castling. It is also able to detect where the pieces are on the board and make a move \n\rautonomously\r.\n          We used a Lego NXT kit and laser cut gear tracks to build the robot. \n\rRobotC\r was used to program the movements in the NXT brick and to connect the brick via Bluetooth to an app. We made the app in \n\rJava\r using \n\rAndroid Studio\r. The app was divided into three parts: Bluetooth communications, computer vision and the neural network. I made the \n\rcomputer vision\r using \n\rOpenCV\r. My part of the app would take a picture and detect what colors were present and where they were in the image. Colors were painted on the top of each piece so I could convert this information into an output string which contained the location and type of piece present on the board. This output string was fed into a \n\rcustom neural network\r that my classmate made, where the next best move would be calculated. The neural network would output this move as a command that our RobotC program could interpret. Finally, the command was given to the \n\rBluetooth\r communications part of the app where it was then sent to the robot to be executed."},{name:"ecoSphere",extension:".png",blerb:"          This was a project for the hackathon \n\thttps://www.hackathon.com/event/ecodinghacks-5c635dab6be8e6001bfb736d\tECOding Hacks\t. EcoSphere is an \n\randroid app\r that encourages people to recycle through fun animations and pictures. Users are presented with a virtual environment that is polluted. In order to clean up the pollution they must recycle in real life. Each time they \n\rrecycle in real life\r they can press the recycle bin button on the app to increase their score. As your score increases the environment brightens up, the fish come back to life and the garbage goes away. In other words, users can see this virtual environment being cleaned as they continue to report that they have recycled.\n          This was \n\rmy first hackathon\r and I had a ton of fun. Even though we only had \n\r7 hours\r to come up with an idea and create a prototype we were able to make this app. I had to learn how to program using \n\rLua\r during the hackathon which was a fun challenge to face while under a time constraint. EcoSphere came close to winning in its category, so close that the organizers created an \n\rhonorable mention\r just for our project as usually they would only announce the winners of each category.\n          This application was built primarily with \n\rCorona SDK\r, but the graphics were made in \n\rAdobe Photoshop\r. Corona SDK uses the programming language Lua and allowed me to quickly create and emulate a \n\rmobile application\r."},{name:"Pong",extension:".jpg",blerb:'          I made this game using \n\rJavaScript\r. This was my first program built using JavaScript, so I started by making a basic game of Pong and then adding extra features. I added \n\rsingle player\r and \n\rmultiplayer\r modes that you can switch between by pressing the "1" and "2" keys. I also added the ability to pause the game when you press "p". As well as some small features such as changing background colors and sounds that will play when you hit the ball. The \u201cw\u201d, \u201cs\u201d and arrow keys move the paddles. If you would like to play, \n\thttps://calebbrett.github.io/Pong/PongRetroWColor.html\tclick here\t.'},{name:"Camera Mount",extension:".mp4",blerb:"          I built a motorized pan and tilt camera mount that is controlled by an Arduino, C# and OpenCV. The main program was written in \n\rC#\r, it uses OpenCV and contains the \n\rGUI\r. The GUI has 3 components: buttons that turn on features such as the camera, a display to show the input from the camera, and a green square used to control where the camera is pointed. The green square works by converting the position of your mouse when it is over the square into coordinates. These coordinates are sent to the \n\rArduino\r. The Arduino\u2019s program then moves the servo motors to the appropriate position.\n          Currently, the \n\rOpenCV\r aspect is used to get the camera input from the webcam. My hope is that in the future I will be able to have it track and follow an object. I have started to do this by analyzing the video for specific coloured pixels and retrieving their coordinates. However, I am still working on a way to determine where most of the colour is and how to move the camera with that information."},{name:"Tip n Tilt",blerb:"          This is the first \n\rmobile application\r I built. The controls for the game are tilting and taping. Tilting your phone one way or the other causes the smiley face to roll in that direction. Tapping on the side of the screen will cause the character to jump in that direction. The goal of the game is to gain as many points as possible by rolling down the \n\rprocedurally generated map\r while avoiding the spikes.\n          I built this using the \n\rUnity game engine\r and \n\rC#\r. I wanted to try incorporating many things I did not have experience with. So, when designing the app, I wanted to try to use different input methods like tilting. I also wanted to make a procedurally generated map so that the game could be played for a long time and the level would keep changing. This app was on the \n\rGoogle Play store\r for a few years but due to a policy change it was taken off."},{name:"Raft",extension:".jpg",blerb:"          I designed and built a raft to leave out on the river so that my family could swim to it and jump off in the summer. I used wooden boards to make the frame, plastic barrels to make it float and metal straps to keep the barrels secured to the frame. It is about 12x12 feet and uses 6 barrels to stay afloat. I designed the raft so that the boards on top of the frame are removeable. This made the raft much lighter and easier to transport."}]}))}}]),t}(c.a.Component)),w=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"TitleBar"},c.a.createElement("div",{id:"Slider"}),c.a.createElement("img",{id:"TitleImage",src:"./Images/Title.svg",alt:"NO"}))}}]),t}(c.a.Component),f=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"goToProjects",value:function(){var e=document.getElementById("About-Section");window.scrollTo(0,e.offsetTop+e.offsetHeight)}},{key:"goToGithub",value:function(){window.open("https://github.com/CalebBrett/","_newtab")}},{key:"goToLinkedIn",value:function(){window.open("https://www.linkedin.com/in/caleb-brett/","_newtab2")}},{key:"render",value:function(){return c.a.createElement("div",{id:"About-Section"},c.a.createElement(g.a,{className:"particles",params:j}),c.a.createElement("div",{id:"About"},c.a.createElement("img",{id:"portrait",src:"./Images/Portrait.png",alt:""}),c.a.createElement("h1",null,c.a.createElement("u",null,"About Me")),c.a.createElement("p",null,"I am a ",c.a.createElement("b",null,"Mechatronics Engineering")," student at the University of Waterloo. I have ",c.a.createElement("b",null,"7\xa0years")," of programming experience, most of which is self-taught. I am a skilled ",c.a.createElement("b",null,"full stack and desktop developer"),". I can use a variety of programming languages including ",c.a.createElement("b",null,"Java, C#, C++, Visual Basic, Javascript, SQL and many more"),". I am also interested in hardware, so I have created many circuits from scratch as well as with microcontrollers such as Arduino. I enjoy playing a variety of sports and outdoor activities. My favorites are sailing, surfing, running, skiing and camping. I am always looking for opportunities to expand my knowledge and ",c.a.createElement("b",null,"learn new things"),". Currently, I am focusing on gaining more experience with ",c.a.createElement("b",null,"Mechanical Design")," and ",c.a.createElement("b",null,"Hardware"),". I am a passionate, enthusiastic, problem solver with excellent collaborative and interpersonal skills."),c.a.createElement("div",{id:"Links"},c.a.createElement("button",{onClick:this.goToProjects},c.a.createElement("img",{src:"./Images/arrow.svg",alt:""}),"   Projects"),c.a.createElement("button",{onClick:this.goToGithub},c.a.createElement("img",{src:"./Images/github.svg",alt:""}),"   GitHub"),c.a.createElement("button",{onClick:this.goToLinkedIn},c.a.createElement("img",{src:"./Images/linkedin.svg",alt:""}),"   LinkedIn"))))}}]),t}(c.a.Component),y=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},this.props.data.map(function(e,t){return c.a.createElement("div",{className:"contentItem",key:t},c.a.createElement(v,{name:e.name,extension:e.extension,data:e.blerb,number:t}))}))}}]),t}(c.a.Component),v=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={float:"left"},t={float:"right",marginLeft:"5%"};return this.props.number%2===0&&(e={float:"right"},t={float:"left",marginRight:"5%"}),c.a.createElement("div",{className:"contentElement"},c.a.createElement("h1",{align:"centered"},c.a.createElement("u",null,this.props.name)),function(e,t,a){if(null!=a)return".mp4"===a?c.a.createElement(d.a,{height:"30vw",width:"30%",style:t,alt:"",url:"./Images/"+e+a,playing:!0,loop:!0,controls:!0,muted:!0}):c.a.createElement("img",{width:"30%",style:t,src:"./Images/"+e+a,alt:""})}(this.props.name,t,this.props.extension),c.a.createElement("pre",{style:e},function(e){for(var t,a=e.split("\n"),n=[],o=0;o<a.length;o++)"\t"===a[o].charAt(0)?(n.splice(-1),t=a[o].split("\t"),n.push(c.a.createElement("a",{href:t[1],target:"_blank",rel:"noopener noreferrer"},t[2])),a[o]=t[3]):"\r"===a[o].charAt(0)&&(n.splice(-1),t=a[o].split("\r"),n.push(c.a.createElement("b",null,t[1])),a[o]=t[2]),n.push(a[o]),o<a.length-1&&n.push(c.a.createElement("br",{key:o}));return n}(this.props.data)))}}]),t}(c.a.Component);function k(){I<E.length&&window.pageYOffset+window.innerHeight/8*7>=E[I].offsetTop&&(E[I].style.animationPlayState="running",I++)}var I=0,E=document.getElementsByClassName("contentItem");window.onscroll=k,window.onload=k;var j={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#FFFFFF"},shape:{type:"star",stroke:{width:0,color:"#FFFFFF"},polygon:{nb_sides:7}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:200,color:"#FFFFFF",opacity:.4,width:2},move:{enable:!0,speed:.4,direction:"bottom",random:!0,straight:!1,out_mode:"out",bounce:!1}}};u.a.render(c.a.createElement(b,null),document.getElementById("root"))},39:function(e,t,a){}},[[24,2,1]]]);
//# sourceMappingURL=main.3b8c50fa.chunk.js.map