var net;if(!net)net={};else if("object"!=typeof net)throw Error("net already exists and is not an object");if(!net.pretopia)net.pretopia={};else if("object"!=typeof net.pretopia)throw Error("net.pretopia already exists and is not an object");if(net.pretopia.BrickIt)throw Error("net.pretopia.BrickIt already exists");
net.pretopia.BrickIt=function(d){var q,D;function T(a){for(var b=a.offsetLeft;a=a.offsetParent;)b+=a.offsetLeft;return b}function ja(a){for(var b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b}function Fa(){b.save();b.fillStyle="#000000";b.fillRect(0,0,f,e);b.restore()}function Pa(){document.onkeydown=function(a){switch(window.event?window.event.keyCode:a.which){case 13:case 32:switch(E){case 0:M=U;H=0;V();return;case 2:Ga();return;default:return}case 38:0<E?E--:E=2;break;case 40:2>E?E++:E=
0;break;case 37:1==E&&(0<m?m--:m=h.length-1);break;case 39:1==E&&(m<h.length-1?m++:m=0);break;case 83:ka&&(x=!x);break;default:return}v();return!1}}function Ha(){document.onkeydown=function(a){switch(window.event?window.event.keyCode:a.which){case 27:n();return;case 13:case 32:la();break;case 37:N=!0;break;case 39:O=!0;break;default:return}return!1};document.onkeyup=function(a){switch(window.event?window.event.keyCode:a.which){case 37:N=!1;break;case 39:O=!1;break;default:return}return!1}}function Qa(){document.onkeydown=
function(a){switch(window.event?window.event.keyCode:a.which){case 27:F=1;n();break;case 13:case 32:switch(F){case 0:if(W){n();break}cancelAnimationFrame(z);z=0;C=!1;v();break;case 1:n()}F=1;return!1;case 37:case 39:return F=F?0:1,b.save(),b.strokeStyle=0==F?"#ffffff":"#000000",b.strokeRect((f>>1)-150+.5,(e>>1)+25,140,50),b.strokeStyle=1==F?"#ffffff":"#000000",b.strokeRect((f>>1)+10.5,(e>>1)+25,140,50),b.restore(),!1}}}function X(a){N=O=!1;if("touchstart"==a.type){a=a.touches[0];var b=f/3,c=T(g),
h=ja(g);ua&&(ua=!1,Fa(),da(),Y(),I(),ea());g.removeEventListener("click",la,!1);g.removeEventListener("mousemove",Z,!1);a.pageX-c>=f-50&&a.pageY-h>=e-50&&!C?n():a.pageX-c<b?N=!0:a.pageX-c>2*b?O=!0:la()}}function va(a){var b=a.pageX-T(g);a=a.pageY-ja(g);b>=f-40&&a>=e-40&&!C?n():la()}function ma(a){var b=void 0!=a.touches?a.touches[0]:a,c=b.pageX-T(g),b=b.pageY-ja(g),d=e/10;Ia=void 0!=a.touches?!0:!1;c>(f>>1)-wa&&c<(f>>1)+wa&&b>(e>>1)-d+10&&b<(e>>1)+10?(M=U,H=0,V()):c>(f>>1)-A-60&&c<(f>>1)-A&&b>(e>>
1)-7+d&&b<(e>>1)+20+d?(0<m?m--:m=h.length-1,v()):c>(f>>1)+A&&c<(f>>1)+A+60&&b>(e>>1)-7+d&&b<(e>>1)+20+d?(m<h.length-1?m++:m=0,v()):c>(f>>1)-na&&c<(f>>1)+na&&b>(e>>1)+2.5*d+10&&b<(e>>1)+3.5*d+10?Ga():c>f-200&&b>e-30?window.location="http://twitter.com/tvanas":ka&&35>c&&b>e-35&&(x=!x,v())}function oa(a){var b=void 0!=a.touches?a.touches[0]:a;a=b.pageX-T(g);b=b.pageY-ja(g);a>=(f>>1)-150&&a<(f>>1)-10&&b>=(e>>1)+25&&b<(e>>1)+75?(cancelAnimationFrame(z),z=0,C=!1,v()):a>=(f>>1)+10&&a<(f>>1)+150&&b>=(e>>
1)+25&&b<(e>>1)+75&&n()}function Z(a){a=a.pageX-T(g);C||(P(),q=a>=Q?a<=f-Q?a-Q:q:q,I())}function aa(a){if(1==a.touches.length){var b=(new Date).getTime();b-Ja<2*xa||(Ja=b,a=a.touches[0].pageX-T(g),a<q-30||a>q+r+30||C||(N=O=!1,P(),q=a>=Q?a<=f-Q?a-Q:q:q,I()))}}function ea(){var a="Level: "+(m+1)+"     Lives: "+M+"     Score: "+H;b.save();W||(b.textAlign="left",b.font="17px Futura-CondensedExtraBold, Impact, Helvetica",b.clearRect(0,e-20,f,e),b.fillText(a,5,e-5));b.fillRect(f-24,e-23,4,17);b.fillRect(f-
15,e-23,4,17);b.restore()}function R(a,c){b.save();b.textAlign="center";c?(b.fillStyle="rgba(0, 0, 0, 0.8)",b.fillRect(0,0,f,e),b.lineWidth=3,b.strokeStyle="#ffffff",b.font="60px Futura-CondensedExtraBold, Impact, Helvetica",b.fillStyle=fa,b.strokeText(a,f>>1,e>>1),b.fillText(a,f>>1,e>>1)):(b.font="18px Futura-CondensedExtraBold, Impact, Helvetica",b.fillStyle="#f0f0f0",b.fillText(a,f>>1,(e>>1)+60));b.restore()}function n(a){if(void 0!=a&&"object"!=typeof a){if(a==C||0==z)return;C=!a}C?(Fa(),da(),
Y(),I(),ea(),g.removeEventListener("click",n,!1),g.removeEventListener("touchstart",n,!1),g.removeEventListener("click",oa,!1),g.removeEventListener("touchstart",oa,!1),myBrowser.isMobile||(g.addEventListener("mousemove",Z,!1),g.addEventListener("click",va,!1)),y&&Ha(),J&&(ya&&g.addEventListener("touchmove",aa,!1),g.addEventListener("touchstart",X,!1),g.addEventListener("touchend",X,!1)),C=!1):(C=!0,I(),R("Paused",!0),P(),W?(myBrowser.isMobile||g.addEventListener("click",n,!1),y&&(document.onkeydown=
n),J&&g.addEventListener("touchstart",n,!1)):(g.removeEventListener("click",va,!1),g.removeEventListener("touchstart",X,!1),g.removeEventListener("touchend",X,!1),g.removeEventListener("touchmove",aa,!1),myBrowser.isMobile||g.addEventListener("click",oa,!1),y&&Qa(),J&&g.addEventListener("touchstart",oa,!1),b.save(),a=b.createLinearGradient(0,(e>>1)+25,0,(e>>1)+75),a.addColorStop(0,"#222222"),a.addColorStop(.5,"#333333"),a.addColorStop(1,"#aaaaaa"),b.fillStyle=a,b.fillRect((f>>1)-150+.5,(e>>1)+25,
140,50),b.strokeStyle=y&&0==F?"#000000":"#ffffff",b.strokeRect((f>>1)-150+.5,(e>>1)+25,140,50),b.strokeStyle=y&&0==F?"#ffffff":"#000000",b.strokeRect((f>>1)-150+.5,(e>>1)+25,140,50),b.fillRect((f>>1)+10.5,(e>>1)+25,140,50),b.strokeStyle=y&&1==F?"#000000":"#ffffff",b.strokeRect((f>>1)+10.5,(e>>1)+25,140,50),b.strokeStyle=y&&1==F?"#ffffff":"#000000",b.strokeRect((f>>1)+10.5,(e>>1)+25,140,50),b.fillStyle="#f0f0f0",b.textAlign="center",b.font="18px Futura-CondensedExtraBold, Impact, Helvetica",b.fillText("Main Menu",
(f>>1)-80+.5,(e>>1)+55),b.fillText("Return to Game",(f>>1)+80.5,(e>>1)+55),b.restore()))}function la(){M&&0==c.vx&&(c.vx=Math.round(Math.random())?-B:B,c.vy=-1*(1==B?S:B))}function Ka(a){P();if(0<q&&0>a||q<f-r&&0<a)q+=a;I()}function I(){b.save();b.beginPath();b.strokeStyle=pa;b.lineWidth=K;b.lineCap="round";b.moveTo(q+r/20,D+za);b.lineTo(q+r-r/20,D+za);b.stroke();b.restore()}function P(){b.clearRect(q-r/20,D-1,r+r/10,K+2)}function Y(){var a=null;b.save();a=b.createRadialGradient(c.x,c.y,0,c.x,c.y,
L);a.addColorStop(0,"#ffffff");a.addColorStop(1,"#555555");b.fillStyle=a;b.beginPath();b.arc(c.x,c.y,L,0,2*Math.PI,!1);b.closePath();b.fill();b.restore()}function La(a){var c=null,c=null;b.save();switch(a.type){case 1:b.fillStyle=ga;break;case 5:b.fillStyle=qa;break;case 7:b.fillStyle=ra;break;case 8:c=b.createLinearGradient(a.x,a.y,a.x,a.y+p);0<a.hit?(c.addColorStop(0,"#001100"),c.addColorStop(1,"#00aa00")):(c.addColorStop(0,"#00aa00"),c.addColorStop(1,"#001100"));b.fillStyle=c;break;case 9:c=b.createLinearGradient(a.x,
a.y,a.x,a.y+p),c.addColorStop(0,"#222222"),c.addColorStop(1,"#aaaaaa"),b.fillStyle=c,b.strokeStyle="#f0f0f0"}b.fillRect(a.x+.5,a.y+.5,t,p);b.strokeRect(a.x+.5,a.y+.5,t,p);b.restore()}function da(){for(var a=0;a<G;a++)for(var b=0;b<w;b++)l[a][b].active&&(brickCoords={x:u+a*t,y:25+b*p,type:l[a][b].type,hit:l[a][b].hit},La(brickCoords))}function Ma(){z=requestAnimationFrame(Ma);Aa=Date.now();Ba=Aa-Na;if(!(20>Ba)){Na=Aa-Ba%20;var a=-1,k=-1,d=null,n=!1;if(!C)if(N?Ka(-sa):O&&Ka(sa),b.save(),b.fillStyle=
"#000000",b.beginPath(),b.arc(c.x,c.y,L+1,0,2*Math.PI,!1),b.closePath(),b.fill(),b.restore(),0==ha)cancelAnimationFrame(z),z=0,I(),h.length!=++m?(R("Congratulations!",!0),R("Proceed to level "+(m+1),!1),g.removeEventListener("touchmove",aa,!1),g.removeEventListener("mousemove",Z,!1),myBrowser.isMobile||g.addEventListener("click",V,!1),y&&(document.onkeydown=V),J&&g.addEventListener("touchstart",V,!1),P(),x&&audio_finishLevel&&audio_finishLevel.play()):(R("You're A Winner!",!0),R("You scored "+H+" points",
!1),m=0,g.removeEventListener("mousemove",Z,!1),g.removeEventListener("touchmove",aa,!1),myBrowser.isMobile||g.addEventListener("click",v,!1),y&&(document.onkeydown=v),J&&g.addEventListener("touchstart",v,!1),P(),x&&audio_winner&&audio_winner.play());else{if(c.getEast()>=f&&0<c.vx||0>=c.getWest()&&0>c.vx)c.vx=-c.vx;0>=c.getNorth()&&0>c.vy&&(c.vy=-c.vy);if(c.getSouth()>D+Math.max(c.vy,K))M--,ea(),O=N=!1,c.vx=c.vy=0,c.x=f>>1,c.y=ta((e<<1)/3)+15,da(),I(),1>M?(cancelAnimationFrame(z),z=0,g.removeEventListener("mousemove",
Z,!1),g.removeEventListener("touchmove",aa,!1),R("Game Over",!0),R("You scored "+H+" points",!1),myBrowser.isMobile||g.addEventListener("click",v,!1),y&&(document.onkeydown=v),J&&g.addEventListener("touchstart",v,!1),P(),x&&audio_gameOver&&audio_gameOver.play()):(x&&audio_loseLive&&audio_loseLive.play(),Y());else{c.getEast()>q&&c.getWest()<q+r&&c.getSouth()+c.vy>=D-1&&c.getSouth()<=D+Math.max(c.vy,K)&&(c.x<q+r/6?(c.vx=0<c.vx?-c.vx:-ia,c.vy=0<c.vx?-ia:-B):c.x>q+r-r/6?(c.vx=0<c.vx?ia:-c.vx,c.vy=0<c.vx?
-B:-ia):c.x<q+r/2.5?(c.vx=0<c.vx?B:-S,c.vy=0<c.vx?-S:-B):c.x>q+r-r/2.5?(c.vx=0<c.vx?S:-B,c.vy=0<c.vx?-B:-S):(c.vx=c.vx,c.vy=-c.vy),da(),x&&audio_hitPad&&audio_hitPad.play());if(c.getEast()>=u&&c.getWest()<=u+G*t&&25<=c.getSouth()&&c.getNorth()<=25+w*p&&(a=ta(((0<c.vx?c.getEast():c.getWest())-u)/t),k=ta(((0<c.vy?c.getSouth():c.getNorth())-25)/p),a=a==G?a-1:0>a?0:a,k=k==w?k-1:0>k?0:k,d={x:a*t+u,y:k*p+25},0>c.vy&&0>c.vx&&c.x>d.x+t&&c.y>d.y+p?k<w-1&&0<k&&l[a][k+1].active?(k++,d.y=k*p+25):a<G-1&&0<a&&
l[a+1][k].active&&(a++,d.x=a*t+u):0>c.vy&&0<c.vx&&c.x<d.x&&c.y>d.y+p?a<G-1&&0<a&&l[a-1][k].active?(a--,d.x=a*t+u):k<w-1&&0<k&&l[a][k+1].active&&(k++,d.y=k*p+25):0<c.vy&&0>c.vx&&c.x>d.x+t&&c.y<d.y?k<w-1&&0<k&&l[a][k-1].active?(k--,d.y=k*p+25):a<G-1&&0<a&&l[a+1][k].active&&(a++,d.x=a*t+u):0<c.vy&&0<c.vx&&c.x<d.x&&c.y<d.y&&(a<G-1&&0<a&&l[a-1][k].active?(a--,d.x=a*t+u):k<w-1&&0<k&&l[a][k-1].active&&(k--,d.y=k*p+25)),1==l[a][k].active)){(0<c.vx&&c.getEast()>=d.x&&c.getEast()<=d.x+c.vx||0>c.vx&&c.getWest()<=
d.x+t&&c.getWest()>=d.x+t+c.vx)&&(0>c.vy&&c.getNorth()<d.y+p-c.vy||0<c.vy&&c.getSouth()>d.y+c.vy)?(c.vx=-c.vx,n=!0):(0<c.vy&&c.getSouth()>=d.y&&c.getSouth()<=d.y+c.vy||0>c.vy&&c.getNorth()<=d.y+p&&c.getNorth()>=d.y+p+c.vy)&&(0>c.vx&&c.getWest()<d.x+t-c.vx||0<c.vx&&c.getEast()>d.x+c.vx)&&(c.vy=-c.vy,n=!0);n||(Math.abs(c.vx)>Math.abs(c.vy)?c.vx=-c.vx:c.vy=-c.vy);x&&audio_hitBrick&&audio_hitBrick.play();l[a][k].hit++;switch(l[a][k].type){case 9:H-=10*(w-k);if(10>l[a][k].hit)break;ha++;case 8:if(2>l[a][k].hit)break;
default:H+=10*(w-k)*l[a][k].type,l[a][k].active=!1,ha--,b.clearRect(d.x-1,d.y-1,t+2,p+2)}ea()}c.y+=c.vy;c.x+=c.vx;Y();c.getSouth()>=D-Math.abs(c.vy)&&I();if(-1<a)for(d=a-1;d<=a+1;d++)for(n=k-1;n<=k+1;n++)void 0!=l[d]&&"object"==typeof l[d][n]&&1==l[d][n].active&&La({x:d*t+u,y:n*p+25,type:l[d][n].type,hit:l[d][n].hit})}}}}function Oa(){var a=null,c=null;null==(a=document.getElementById(Ca))&&(a=document.body);null!=(c=document.getElementById(Ca+"_BrickItWrapper"))&&a.removeChild(c);c=document.createElement("div");
c.id=Ca+"_BrickItWrapper";c.className="BrickItWrapper";a.appendChild(c);g=document.createElement("canvas");g.className="BrickItGameCanvas";g.width=f;g.height=e;try{b=g.getContext("2d")}catch(d){c.className+=" BrickItError";c.innerHTML='<p>HTML5 Canvas is not supported in your browser.</p><p>Use a modern browser to play BrickIt, like <a href="http://www.google.com/chrome" target="_blank">Chrome</a>, <a href="http://www.getfirefox.com" target="_blank">Firefox</a>, <a href="http://www.apple.com/safari/" target="_blank">Safari</a> or <a href="http://www.microsoft.com/downloads/en/default.aspx" target="_blank">Internet Explorer 9</a>.';
return}b.fillStyle="#e3e3e3";b.strokeStyle="#f5f167";b.lineWidth=1;ga=b.createLinearGradient(u,25,u,25+w*p);ga.addColorStop(0,"#0d2257");ga.addColorStop(.5,"#1c46af");ga.addColorStop(1,"#4e78e2");qa=b.createLinearGradient(u,25,u,25+w*p);qa.addColorStop(0,"#ff0000");qa.addColorStop(1,"#330000");ra=b.createLinearGradient(u,25,u,25+w*p);ra.addColorStop(0,"#eaff00");ra.addColorStop(1,"#606900");pa=b.createLinearGradient(0,D,0,D+K);pa.addColorStop(0,"#f0f0f0");pa.addColorStop(1,"#333333");fa=b.createLinearGradient(0,
(e>>1)-50,0,(e>>1)+50);fa.addColorStop(0,"#0d2257");fa.addColorStop(.5,"#1c46af");fa.addColorStop(1,"#4e78e2");c.appendChild(g)}function V(){ha=0;w=h[m].length;G=h[m][0].length;u=f-G*t>>1;q=f-r>>1;D=e-Da;c.vx=0;c.vy=0;c.x=f>>1;c.y=ta((e<<1)/3)+15;Oa();l=Array(G);for(var a=0;a<G;a++){l[a]=Array(w);for(var d=0;d<w;d++)l[a][d]={active:0<h[m][d][a],type:h[m][d][a],hit:0},l[a][d].active&&9!=l[a][d].type&&ha++}da();0!=z&&cancelAnimationFrame(z);z=requestAnimationFrame(Ma);myBrowser.isMobile||(g.addEventListener("mousemove",
Z,!1),g.addEventListener("click",va,!1));y&&Ha();J&&(ya&&g.addEventListener("touchmove",aa,!1),g.addEventListener("touchstart",X,!1),g.addEventListener("touchend",X,!1));x&&audio_startGame&&audio_startGame.play();ea();I();Y();0==m&&Ia&&(ua=!0,b.save(),b.fillStyle="rgba(0, 0, 0, 0.7)",b.fillRect(0,0,f,e),leftThumbImg=document.getElementById("leftThumb"),rightThumbImg=document.getElementById("rightThumb"),b.drawImage(leftThumbImg,10,(e>>1)-(leftThumbImg.height>>1)-30),b.drawImage(rightThumbImg,f-rightThumbImg.width-
10,(e>>1)-(rightThumbImg.height>>1)-30),b.fillStyle="#ffff00",b.textAlign="center",b.font="20px Futura-CondensedExtraBold, Impact, Helvetica",b.fillText("MOVE LEFT",10+(leftThumbImg.width>>1),(e>>1)+(leftThumbImg.height>>1)-20),b.fillText("MOVE RIGHT",f-10-(rightThumbImg.width>>1),(e>>1)+(leftThumbImg.height>>1)-20),b.restore())}function Ga(){g.removeEventListener("click",ma,!1);g.removeEventListener("touchstart",ma,!1);myBrowser.isMobile||g.addEventListener("click",v,!1);y&&(document.onkeydown=v);
J&&g.addEventListener("touchstart",v,!1);b.save();var a=b.createRadialGradient(f>>2,e>>2,10,f>>1,f>>1,f);a.addColorStop(0,"#444444");a.addColorStop(.5,"#000010");a.addColorStop(1,"#000000");b.fillStyle="Android"==myBrowser.OS.name?"#000000":a;b.fillRect(0,0,f,e);a=e/19+3;instructionsText="The objective in BrickIt is to clear all colored;bricks in each level.;;Bricks are cleared when you hit them with the ball.;;You can control the pad using your keyboard,;mouse or touch screen. On a touch screen, touch the;left or right side of the field to move the pad,;and in the middle to release the ball.;;Click, touch or press any key to return to the menu.".split(";");
b.textAlign="left";b.fillStyle="#bbbbbb";b.font=a+"px Futura-CondensedExtraBold, Impact, Helvetica";for(var c=b.measureText(instructionsText[instructionsText.length-1]),c=f-c.width>>1,d=0;d<instructionsText.length;d++)b.fillText(instructionsText[d],c,a*d+3*a);b.restore()}function v(){var a=e/10;if(W)m=H=0,M=U,V();else{Oa();b.save();var d=b.createRadialGradient(f>>2,e>>2,10,f>>1,f>>1,f);d.addColorStop(0,"#444444");d.addColorStop(.5,"#000010");d.addColorStop(1,"#000000");b.fillStyle="Android"==myBrowser.OS.name?
"#000000":d;b.fillRect(0,0,f,e);d=b.createLinearGradient(0,40,0,100);d.addColorStop(0,"#0d2257");d.addColorStop(.5,"#1c46af");d.addColorStop(1,"#4e78e2");b.textAlign="center";b.fillStyle=d;b.strokeStyle="#ffffff";b.lineWidth=2;b.font=2.5*a+"px Futura-CondensedExtraBold, Impact, Helvetica";b.fillText("BrickIt",f>>1,2.5*a+10);b.strokeText("BrickIt",f>>1,2.5*a+10);b.fillStyle="#000000";b.lineWidth=1.5;b.font=a+"px Futura-CondensedExtraBold, Impact, Helvetica";b.fillText("Start Game",f>>1,e>>1);b.strokeText("Start Game",
f>>1,e>>1);b.fillText("Level "+(m+1),f>>1,(e>>1)+1.5*a);b.strokeText("Level "+(m+1),f>>1,(e>>1)+1.5*a);b.fillText("Instructions",f>>1,(e>>1)+3.5*a);b.strokeText("Instructions",f>>1,(e>>1)+3.5*a);var d=b.measureText("Start Game"),l=b.measureText("Level "+(m+1)),n=b.measureText("Instructions");wa=(d.width>>1)+25;A=(l.width>>1)+25;na=(n.width>>1)+25;b.moveTo((f>>1)+A,(e>>1)-7+a);b.lineTo((f>>1)+A,(e>>1)+20+a);b.lineTo((f>>1)+A+40,(e>>1)+20+a-((e>>1)+20+a-((e>>1)-7+a)>>1));b.lineTo((f>>1)+A,(e>>1)-7+
a);b.moveTo((f>>1)-A,(e>>1)-7+a);b.lineTo((f>>1)-A,(e>>1)+20+a);b.lineTo((f>>1)-A-40,(e>>1)+20+a-((e>>1)+20+a-((e>>1)-7+a)>>1));b.lineTo((f>>1)-A,(e>>1)-7+a);b.fill();b.stroke();b.font=a/2+"px Futura-CondensedExtraBold, Impact, Helvetica";b.fillStyle="#ffff00";b.fillText(h[m].title,f>>1,(e>>1)+1.5*a+a/1.5);b.font=a+"px Futura-CondensedExtraBold, Impact, Helvetica";ka&&(b.fillStyle=x?"#ff0000":"#000000",b.fillRect(10,e-25,15,15),b.strokeRect(10,e-25,15,15),b.font=a/3+"px Futura-CondensedExtraBold, Impact, Helvetica",
b.fillStyle="#f0f0f0",b.textAlign="left",b.fillText("Sound FX [s]",35,e-11));b.fillStyle="#cccccc";b.font="13px Helvetica";b.textAlign="right";b.fillText("v1.0 - By Thijs van As, 2010",f-7,e-10);b.restore();myBrowser.isMobile||g.addEventListener("click",ma,!1);y&&(c.x=(f>>1)-na-40,c.y=(e>>1)+a*(2==E?3.5:1.5*E)-a/3,Y(),Pa());J&&g.addEventListener("touchstart",ma,!1)}}var Ca=null!=d&&""!=d?d:"BrickItInstance",f=650,e=455,G=0,w=0,t=45,p=19,B=3,S=4,ia=5,sa=8,r=100,Q=r>>1,K=12,za=K>>1,Da=40,L=7,g=null,
b=null,ga=null,qa=null,ra=null,pa=null,fa=null,A=0,wa=0,na=0,y=!0,J=!1,ya=!1,N=!1,O=!1,E=0,F=1,Ia=!1,ua=!1,xa=18,z=0,Ja=0,C=!1,W=!1,U=5,M=U,ha=0,H=0,m=0,l=null,u=0;D=q=0;var c={x:0,y:0,vx:0,vy:0,getNorth:function(){return this.y-L},getEast:function(){return this.x+L},getSouth:function(){return this.y+L},getWest:function(){return this.x-L}},ka=!0,x=!0,ta=Math.floor,h=[];d=0;var Aa,Ba,Na=Date.now();h[d]=[[0,1,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,1,0,0,0,0,0,1,0,0,0],[0,0,0,1,1,
0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,1,1,1,1,0,0],[0,0,1,8,8,8,1,8,8,8,1,0,0],[0,1,1,1,5,1,1,1,5,1,1,1,0],[0,1,1,1,5,1,1,1,5,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,1,1,1,0,1],[0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,1,0,0,0,0,0,1,0,0,0]];h[d++].title="Invasion from Space";h[d]=[[5,1,1,1,1,1,1,1,1,1,5],[1,5,1,1,1,1,1,1,1,5,1],[1,1,5,1,1,1,1,1,5,1,1],[1,1,1,5,1,1,1,5,1,1,1],[1,1,1,1,5,1,5,1,1,1,1],[1,1,1,1,1,9,1,
1,1,1,1],[1,1,1,1,8,1,8,1,1,1,1],[1,1,1,8,1,1,1,8,1,1,1],[1,1,8,1,1,1,1,1,8,1,1]];h[d++].title="The Journey Begins";h[d]=[[1,5,1,0,0,0,0,0,1,5,1],[1,5,1,1,0,0,0,1,1,5,1],[1,5,1,1,1,0,1,1,1,5,1],[1,5,1,1,1,8,1,1,1,5,1],[1,5,1,1,0,5,0,1,1,5,1],[1,5,1,8,0,5,0,8,1,5,1],[1,5,1,0,0,5,0,0,1,5,1],[1,5,8,0,0,5,0,0,8,5,1],[1,5,0,0,0,5,0,0,0,5,1],[1,9,0,0,0,9,0,0,0,9,1],[1,0,0,0,0,0,0,0,0,0,1],[9,0,0,0,0,0,0,0,0,0,9]];h[d++].title="Ziltoid Attacks";h[d]=[[9,0,9,0,9,0,9,0,9,0,9],[0,0,0,0,0,0,0,0,0,0,0],[0,0,
0,0,0,0,0,0,0,0,0],[9,0,9,0,9,0,9,0,9,0,9],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[9,0,9,0,9,5,9,0,9,0,9],[0,0,0,0,5,8,5,0,0,0,0],[0,0,0,0,5,8,5,0,0,0,0],[9,0,9,0,9,5,9,0,9,0,9],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[9,0,9,0,9,0,9,0,9,0,9],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[9,0,9,0,9,0,9,0,9,0,9]];h[d++].title="Battle in Outer Space";h[d]=[[0,0,0,0,8,8,8,8,8,8,0,0,0,0],[0,0,0,0,0,8,8,8,8,0,0,0,0,0],[9,0,0,0,0,0,9,9,0,0,0,0,0,9],[9,9,0,0,0,0,0,0,0,0,0,0,9,9],[9,9,9,
0,0,0,0,0,0,0,0,9,9,9],[9,9,9,9,0,0,0,0,0,0,9,9,9,9],[9,9,9,9,9,0,0,0,0,9,9,9,9,9],[9,9,9,9,9,9,5,5,9,9,9,9,9,9],[0,0,0,5,5,5,5,5,5,5,5,0,0,0],[0,0,0,0,5,5,5,5,5,5,0,0,0,0],[0,0,0,0,0,5,5,5,5,0,0,0,0,0],[0,0,0,0,0,0,5,5,0,0,0,0,0,0]];h[d++].title="All Your Base Are Belong to Us";h[d]=[[9,0,9,0,9,0,9,0,9,0,9,0,9],[1,0,5,0,1,0,5,0,1,0,5,0,1],[1,0,5,0,1,0,5,0,1,0,5,0,1],[1,0,5,0,1,0,5,0,1,0,5,0,1],[8,0,8,0,8,0,8,0,8,0,8,0,8],[1,0,5,0,1,0,9,0,1,0,5,0,1],[1,0,5,0,1,9,5,9,1,0,5,0,1],[1,0,5,0,9,0,5,0,9,
0,5,0,1],[1,0,5,9,1,0,5,0,1,9,5,0,1],[8,0,9,0,8,0,8,0,8,0,9,0,8],[1,0,5,0,1,0,5,0,1,0,5,0,1],[1,0,5,0,1,0,7,0,1,0,5,0,1],[1,0,5,0,7,0,0,0,7,0,5,0,1],[1,0,5,0,0,0,0,0,0,0,5,0,1],[7,0,7,0,0,0,0,0,0,0,7,0,7]];h[d++].title="Asteroid Belt";h[d]=[[0,0,0,0,0,7,7,7,0,0,0,0,0],[0,0,0,0,7,7,7,7,7,0,0,0,0],[0,0,0,7,7,7,7,7,7,7,0,0,0],[0,0,0,7,1,7,7,7,1,7,0,0,0],[0,0,7,7,1,7,7,7,1,7,7,0,0],[0,0,7,7,7,7,7,7,7,7,7,0,0],[0,0,7,7,7,7,7,7,7,7,7,0,0],[0,0,7,7,7,7,7,7,7,7,7,0,0],[0,0,7,7,7,7,7,7,7,7,7,0,0],[0,0,7,7,
7,7,7,7,7,7,7,0,0],[0,0,0,7,0,7,7,7,0,7,0,0,0],[0,0,0,7,7,0,5,0,7,7,0,0,0],[0,0,0,0,7,7,5,7,7,0,0,0,0],[0,0,0,0,0,7,7,7,0,0,0,0,0]];h[d++].title="Smile!";h[d]=[[0,0,0,0,0,0,0,0,0,5,5,0,5,5],[0,0,0,0,0,0,0,0,0,5,5,0,5,5],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,8,8,0,8,8,0,0,0,0,8,8],[0,0,0,8,8,0,8,8,0,0,0,0,8,8],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,1,0,0,0,0,1,1],[0,0,0,1,1,0,1,1,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[7,7,0,0,0,0,7,7,0,0,0,0,7,7],[7,7,0,0,0,0,7,7,0,0,0,0,7,7],[0,0,0,0,0,
0,0,0,0,0,0,0,0,0],[9,9,0,9,9,0,9,9,0,9,9,0,9,9],[9,9,0,9,9,0,9,9,0,9,9,0,9,9]];h[d++].title="Fort HCNOP";h[d]=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[8,7,7,7,7,7,7,7],[8,8,8,8,7,7,7,1],[8,8,8,8,7,7,7,1],[8,8,8,8,7,7,7,1],[8,5,5,5,1,1,1,1],[8,5,5,5,1,1,1,1],[8,5,5,5,1,1,1,1],[5,5,5,5,5,5,5,1]];h[d++].title="Four Elements";h[d]=[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[7,7,7,7,7,0,0,0,0,0,0,0,0],[7,7,7,7,7,0,0,0,0,0,0,0,0],[7,0,0,0,7,0,0,0,0,0,0,0,0],[7,0,0,0,7,7,7,
7,7,7,7,7,7],[7,0,0,0,7,7,7,7,7,7,7,7,7],[7,0,0,0,7,0,0,7,0,7,0,7,7],[7,0,0,0,7,0,0,0,0,7,0,7,7],[7,7,7,7,7,0,0,0,0,0,0,7,7],[7,7,7,7,7,0,0,0,0,0,0,0,0]];h[d++].title="Key to the Universe";h[d]=[[9,9,9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9,9,9],[9,9,0,0,0,0,0,0,0,9,9],[9,9,0,0,0,0,0,0,0,9,9],[9,9,0,5,1,8,1,5,0,9,9],[9,9,0,5,1,8,1,5,0,9,9],[9,9,0,5,1,8,1,5,0,9,9],[9,9,0,5,1,8,1,5,0,9,9],[9,9,0,5,1,8,1,5,0,9,9],[9,9,0,5,1,8,1,5,0,9,9],[9,9,0,0,0,0,0,0,0,9,9],[9,9,0,0,0,0,0,0,0,9,9],[9,9,9,9,0,0,0,9,9,
9,9],[9,9,9,9,0,0,0,9,9,9,9]];h[d++].title="Encapsulated";h[d]=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,7,7,0,0,0,0,0,0],[0,0,7,7,7,7,0,0,0,0,0],[0,7,7,7,1,7,7,0,0,0,0],[0,7,7,7,7,7,7,0,0,0,0],[7,7,7,7,7,7,0,0,0,0,0],[7,7,7,7,7,0,0,0,0,5,5],[7,7,7,7,0,0,0,0,0,5,5],[7,7,7,7,7,0,0,0,0,0,0],[7,7,7,7,7,7,0,0,0,0,0],[0,7,7,7,7,7,7,0,0,0,0],[0,7,7,7,7,7,7,0,0,0,0],[0,0,7,7,7,7,0,0,0,0,0],[0,0,0,7,7,0,0,0,0,0,0]];h[d++].title="Mac Man";h[d]=[[9,0,9,0,0,0,9,0,9],[9,0,9,0,0,0,9,0,9],[9,9,9,0,0,0,9,9,9],[9,9,9,0,0,
0,9,9,9],[9,9,9,0,0,0,9,9,9],[9,9,9,0,0,0,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,5,5,5,9,9,9],[9,9,5,5,5,5,5,9,9],[9,9,5,5,5,5,5,9,9],[9,9,5,5,5,5,5,9,9],[9,9,5,5,5,5,5,9,9]];h[d++].title="Battering Ram";h[d]=[[0,5,5,0,0,0,5,5,0],[0,5,5,0,0,0,5,5,0],[5,0,0,5,0,5,0,0,5],[5,0,0,5,0,5,0,0,5],[5,0,0,5,0,5,0,0,5],[5,0,0,5,0,5,0,0,5],[0,5,5,0,0,0,5,5,0],[0,5,5,0,0,0,5,5,0],[5,0,0,5,0,5,0,0,5],[5,0,0,5,0,5,0,0,5],[5,0,0,5,0,5,0,0,5],[5,0,0,5,0,5,0,0,5],[0,5,5,0,0,0,5,5,0],[0,5,5,0,0,0,5,5,
0]];h[d++].title="7-Segment Display";h[d]=[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,8,0,0,0,8,0,0,0,0],[0,0,0,0,8,0,0,0,8,0,0,0,0],[0,0,0,0,8,0,0,0,8,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,5,0,0,0,0,0,0,0,0,0,5,0],[0,5,0,0,0,0,0,0,0,0,0,5,0],[0,5,0,0,0,0,0,0,0,0,0,5,0],[0,0,5,0,0,0,0,0,0,0,5,0,0],[0,0,5,0,0,0,0,0,0,0,5,0,0],[0,0,0,5,0,0,0,0,0,5,0,0,0],[0,0,0,0,5,0,0,0,5,0,0,0,0],[0,0,0,0,0,5,5,5,0,0,0,0,0]];h[d++].title="The Joker";h[d]=[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,
0,0,0,0,0,0,0],[5,0,0,7,5,7,5,7,5,0,0,5],[5,5,0,5,7,5,7,5,7,0,5,5],[5,5,5,7,5,7,5,7,5,5,5,5],[5,5,5,5,7,5,7,5,7,5,5,5],[5,5,5,7,5,7,5,7,5,5,5,5],[5,5,0,5,7,5,7,5,7,0,5,5],[5,0,0,7,5,7,5,7,5,0,0,5]];h[d++].title="Candy";h[d]=[[0,0,0,0,0,5,0,0,0,0,0],[1,1,1,0,5,5,5,0,1,1,1],[0,0,0,0,0,5,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,5,0,0,0,0,0,0,0,5,0],[5,5,5,0,1,1,1,0,5,5,5],[0,5,0,0,0,0,0,0,0,5,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0],[1,1,1,0,5,5,5,0,1,1,1],[0,0,0,0,0,5,0,0,0,0,0],[0,0,0,0,0,0,
0,0,0,0,0],[0,5,0,0,0,0,0,0,0,5,0],[5,5,5,0,1,1,1,0,5,5,5],[0,5,0,0,0,0,0,0,0,5,0]];h[d++].title="Force Field";h[d]=[[0,0,0,0,5,0,0,0,0],[0,0,0,1,5,1,0,0,0],[0,0,7,1,5,1,7,0,0],[0,0,0,1,5,1,0,0,0],[0,0,0,0,5,0,0,0,0],[0,0,0,1,5,1,0,0,0],[0,0,7,1,5,1,7,0,0],[0,0,0,1,5,1,0,0,0],[0,0,0,0,5,0,0,0,0],[0,0,0,1,5,1,0,0,0],[0,0,7,1,5,1,7,0,0],[0,0,0,1,5,1,0,0,0],[0,0,0,0,5,0,0,0,0]];h[d++].title="Totem";h[d]=[[1,5,7,5,1,0,1,5,7,5,1],[1,5,7,5,1,0,1,5,7,5,1],[1,5,7,5,1,0,1,5,7,5,1],[1,5,7,5,1,0,1,5,7,5,1],
[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,5,7,5,1,0,1,5,7,5,1],[1,5,7,5,1,0,1,5,7,5,1],[1,5,7,5,1,0,1,5,7,5,1],[1,5,7,5,1,0,1,5,7,5,1]];h[d++].title="Unprotected Areas";h[d]=Array(13);for(var ba=0;ba<h[d].length;ba++){h[d][ba]=Array(10);for(var Ea=0;Ea<h[d][ba].length;Ea++){var Ra=Math.floor(5*Math.random()),ca=0;if(0<ba)switch(Ra){case 1:ca=1;break;case 2:ca=5;break;case 3:ca=7;break;case 4:ca=8;break;default:ca=0}h[d][ba][Ea]=ca}}h[d++].title="Randomized Confetti Finale";
this.main=function(a){"object"==typeof a&&(m=void 0!=a.level?a.level-1:m,U=void 0!=a.lives?a.lives:U,y=void 0!=a.attachKeyboard?a.attachKeyboard:!0,J=void 0!=a.attachTouchControls?a.attachTouchControls:!0,ya=void 0!=a.attachTouchSwipe?a.attachTouchSwipe:!1,ka=x=void 0!=a.enableSoundFX?a.enableSoundFX:x,audio_hitBrick=void 0!=a.audio_hitBrick?document.getElementById(a.audio_hitBrick):null,audio_hitPad=void 0!=a.audio_hitPad?document.getElementById(a.audio_hitPad):null,audio_loseLive=void 0!=a.audio_loseLive?
document.getElementById(a.audio_loseLive):null,audio_startGame=void 0!=a.audio_startGame?document.getElementById(a.audio_startGame):null,audio_finishLevel=void 0!=a.audio_finishLevel?document.getElementById(a.audio_finishLevel):null,audio_gameOver=void 0!=a.audio_gameOver?document.getElementById(a.audio_gameOver):null,audio_winner=void 0!=a.audio_winner?document.getElementById(a.audio_winner):null,f=void 0!=a.gameAreaWidth?a.gameAreaWidth:f,e=void 0!=a.gameAreaHeight?a.gameAreaHeight:e,t=void 0!=
a.brickWidth?a.brickWidth:t,p=void 0!=a.brickHeight?a.brickHeight:p,r=void 0!=a.padWidth?a.padWidth:r,Q=r>>1,K=void 0!=a.padHeight?a.padHeight:K,za=K>>1,Da=void 0!=a.padBottomOffset?a.padBottomOffset:Da,L=void 0!=a.ballRadius?a.ballRadius:L,sa=void 0!=a.padSpeed?a.padSpeed:sa,B=void 0!=a.defaultBallSpeed?a.defaultBallSpeed:B,S=B+1,ia=S+1,xa=void 0!=a.coreLoopInterval?a.coreLoopInterval:xa,W=void 0!=a.skipMenu?a.skipMenu:W);v()};this.pause=n};