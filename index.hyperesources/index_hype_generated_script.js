//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"colorClicked",source:"function(hypeDocument, element, event) {\t\n\tif (window.buttonsClickable == true) {\n\t\n\t\tif (element.id == \"redDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"red\") {\n\t\t\t\thypeDocument.startTimelineNamed('redBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"greenDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"green\") {\n\t\t\t\thypeDocument.startTimelineNamed('greenBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"blueDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"blue\") {\n\t\t\t\thypeDocument.startTimelineNamed('blueBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"yellowDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"yellow\") {\n\t\t\t\thypeDocument.startTimelineNamed('yellowBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\t\n\t\t}\n\n\t\tif (window.gameOver == true ) { \n\t\t\twindow.buttonsClickable = false;\n\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t}\n\n\t\tif ((window.currentElement) == window.sequenceCount) {\n\t\t\twindow.currentElement = 0;\n\t\t\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + window.sequenceCount;\n\t\t\twindow.buttonsClickable = false;\n\t\t\tif ((window.sequenceCount%5) != 0) {\n\t\t\t\twindow.sequenceCount++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('roundComplete'); }, 500);\n\t\t\t\tsetTimeout(function(){ window.playInterval = setInterval(selectColor, window.intervalSpeed); }, 1500);\n\t\t\t} else {\n\t\t\t\tvar tempString = window.sequenceCount + \" ROUNDS<br/>\";\n\t\t\t\tif (window.sequenceCount == (5 || 25 || 50 || 75 || 100)) { \n\t\t\t\t\ttempString += \"BRILLIANT!\";\n\t\t\t\t} else if (window.sequenceCount == (10 || 30 || 55 || 80)) {\n\t\t\t\t\ttempString += \"AMAZING!\";\n\t\t\t\t} else if (window.sequenceCount == (15 || 35 || 60 || 85)) {\n\t\t\t\t\ttempString += \"GENIUS!\";\n\t\t\t\t} else if (window.sequenceCount == (20 || 40 || 65 || 90)) {\n\t\t\t\t\ttempString += \"OUTSTANDING!\";\n\t\t\t\t} else if (window.sequenceCount == (25 || 45 || 70 || 95)) {\n\t\t\t\t\ttempString += \"EXTRAOURDINARY!\";\n\t\t\t\t} \n\t\t\t\tdocument.getElementById(\"badgeMessage\").innerHTML = tempString;\n\t\t\t\twindow.sequenceCount++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('showBadge'); }, 500);\n\t\t\t}\n\t\t}\n\t}\n\t\n}",identifier:"49"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\twindow.selectColor = function() {\n\t\tvar color = window.colorSequence[window.currentElement];\n\t\tif (color == \"blue\") { \n\t\t\thypeDocument.startTimelineNamed('blueBeep');   \n\t\t} else if (color == \"red\") { \n\t\t\thypeDocument.startTimelineNamed('redBeep');    \n\t\t} else if (color == \"green\") { \n\t\t\thypeDocument.startTimelineNamed('greenBeep');  \n\t\t} else if (color == \"yellow\") { \n\t\t\thypeDocument.startTimelineNamed('yellowBeep'); \n\t\t}\n\t\t\n\t\tif (window.currentElement < (window.sequenceCount - 1)) {\n\t\t\twindow.currentElement++;\n\t\t} else {\n\t\t\tclearInterval(window.playInterval);\n\t\t\tlistenSequence();\n\t\t}\n\t};\n\n\twindow.listenSequence = function() {\n\t\twindow.buttonsClickable = true;\n\t\twindow.currentElement = 0;\n\t};\n\t\n\tclearInterval(window.playInterval);\n\t\n\twindow.sequenceCount = 1;\n\twindow.currentElement = 0;\n\twindow.buttonsClickable = false;\n\tvar i; \n\tvar temp1;\n\tvar temp2 = new Array();\n\tfor (i = 0; i < 100; i++) {\n\t\ttemp1 = Math.floor(Math.random()*4);\n\t\tif (temp1 == 0) { \t\ttemp2[i] = \"red\"; }\n\t\telse if (temp1 == 1) {\ttemp2[i] = \"blue\"; }\n\t\telse if (temp1 == 2) {\ttemp2[i] = \"yellow\"; }\n\t\telse if (temp1 == 3) {\ttemp2[i] = \"green\"; }\n\t}\n\twindow.colorSequence = temp2;\n\tconsole.log(\"The color sequence is \" + window.colorSequence);\n\t\n\twindow.gameOver = false;\n\twindow.buttonsClickable = false;\n\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + window.sequenceCount;\n\twindow.playInterval = setInterval(selectColor, window.intervalSpeed);\n\t\n}",identifier:"52"},{name:"resumeGame",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.startTimelineNamed('hideBadge');\n\tsetTimeout(function(){ window.playInterval = setInterval(selectColor, window.intervalSpeed); }, 1500);\n\t\n}",identifier:"97"},{name:"chooseSpeed",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\twindow.intervalSpeed = 1000;\n\t} else {\n\t\twindow.intervalSpeed = 400;\n\t}\n\thypeDocument.showSceneNamed('main');\n\t\n}",identifier:"102"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"-2":{n:"blank.gif"},"25":{p:1,n:"BlueGlow.png",g:"122",o:true,t:"@1x"},"18":{p:1,n:"PurpleGlow_2x.png",g:"114",o:true,t:"@2x"},"10":{p:2,n:"Tone-3.mp3",g:"29",t:"audio/mpeg"},"26":{p:1,n:"BlueGlow_2x.png",g:"122",o:true,t:"@2x"},"19":{p:1,n:"Purple-1.png",g:"116",o:true,t:"@1x"},"11":{p:2,n:"Tone-4.mp3",g:"30",t:"audio/mpeg"},"27":{p:1,n:"Blue.png",g:"124",o:true,t:"@1x"},"0":{p:2,n:"gameOver.mp3",g:"58",t:"audio/mpeg"},"12":{p:2,n:"Title%20song.mp3",g:"106",t:"audio/mpeg"},"1":{p:2,n:"roundComplete.mp3",g:"61",t:"audio/mpeg"},"28":{p:1,n:"Blue_2x.png",g:"124",o:true,t:"@2x"},"20":{p:1,n:"Purple-1_2x.png",g:"116",o:true,t:"@2x"},"2":{p:2,n:"badgeFanfare.mp3",g:"77",t:"audio/mpeg"},"13":{p:1,n:"RedGlow.png",g:"110",o:true,t:"@1x"},"3":{p:1,n:"background.jpg",g:"104",o:true,t:"@1x"},"21":{p:1,n:"GreenGlow.png",g:"118",o:true,t:"@1x"},"14":{p:1,n:"RedGlow_2x.png",g:"110",o:true,t:"@2x"},"4":{p:1,n:"Red-1.png",g:"9",t:"@1x"},"29":{p:1,n:"Victory.png",g:"71",t:"@1x"},"5":{p:1,n:"Green-1.png",g:"13",t:"@1x"},"15":{p:1,n:"Red.png",g:"112",o:true,t:"@1x"},"22":{p:1,n:"GreenGlow_2x.png",g:"118",o:true,t:"@2x"},"6":{p:1,n:"Blue-1.png",g:"11",t:"@1x"},"23":{p:1,n:"Green.png",g:"120",o:true,t:"@1x"},"16":{p:1,n:"Red_2x.png",g:"112",o:true,t:"@2x"},"7":{p:1,n:"Purple.png",g:"15",t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:2,n:"Tone-1.mp3",g:"27",t:"audio/mpeg"},"24":{p:1,n:"Green_2x.png",g:"120",o:true,t:"@2x"},"17":{p:1,n:"PurpleGlow.png",g:"114",o:true,t:"@1x"},"9":{p:2,n:"Tone-2.mp3",g:"28",t:"audio/mpeg"}},h,[],d,[{n:"splash",o:"62",X:[0]},{n:"main",o:"1",X:[1]}],[{A:{a:[{p:12,o:"106",q:false}]},o:"64",p:"600px",cA:false,Y:800,Z:600,B:{a:[{p:13,o:"106",q:false}]},c:"#000000",L:[],bY:1,d:800,U:{},T:{"70_hover":{i:"70_hover",n:"70_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FEFFFA",o:"131"},{f:"c",y:0,z:1,i:"B",e:"#FFFB00",s:"#2D3667",o:"131"},{f:"c",y:0,z:1,i:"C",e:"#FFFB00",s:"#2D3667",o:"131"},{f:"c",y:0,z:1,i:"D",e:"#FFFB00",s:"#2D3667",o:"131"},{f:"c",y:0,z:1,i:"A",e:"#FFFB00",s:"#2D3667",o:"131"},{y:1,i:"G",s:"#FFFB00",z:0,o:"131",f:"c"},{y:1,i:"B",s:"#FFFB00",z:0,o:"131",f:"c"},{y:1,i:"C",s:"#FFFB00",z:0,o:"131",f:"c"},{y:1,i:"D",s:"#FFFB00",z:0,o:"131",f:"c"},{y:1,i:"A",s:"#FFFB00",z:0,o:"131",f:"c"}],f:30},"103_hover":{i:"103_hover",n:"103_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"A",e:"#FFFB00",s:"#2D3667",o:"126"},{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FFFBFA",o:"126"},{f:"c",y:0,z:1,i:"C",e:"#FFFB00",s:"#2D3667",o:"126"},{f:"c",y:0,z:1,i:"B",e:"#FFFB00",s:"#2D3667",o:"126"},{f:"c",y:0,z:1,i:"D",e:"#FFFB00",s:"#2D3667",o:"126"},{y:1,i:"A",s:"#FFFB00",z:0,o:"126",f:"c"},{y:1,i:"G",s:"#FFFB00",z:0,o:"126",f:"c"},{y:1,i:"C",s:"#FFFB00",z:0,o:"126",f:"c"},{y:1,i:"B",s:"#FFFB00",z:0,o:"126",f:"c"},{y:1,i:"D",s:"#FFFB00",z:0,o:"126",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:48,b:[],a:[{f:"c",y:0,z:3.28,i:"e",e:0.050000000000000003,s:1,o:"130"},{f:"c",y:0,z:3.29,i:"e",e:0.050000000000000003,s:1,o:"139"},{f:"c",y:0,z:3.24,i:"e",e:0.050000000000000003,s:1,o:"133"},{f:"c",y:0,z:3.27,i:"e",e:0.050000000000000003,s:1,o:"137"},{f:"c",y:0.01,z:1.29,i:"a",e:187,s:206,o:"127"},{f:"c",y:0.01,z:1.28,i:"d",e:376,s:339,o:"127"},{f:"c",y:0.01,z:1.28,i:"b",e:124,s:142,o:"127"},{f:"c",y:0.01,z:1.28,i:"c",e:385,s:347,o:"127"},{f:"c",y:0.01,z:1.29,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:1.29,z:2.01,i:"c",e:347,s:385,o:"127"},{f:"c",y:1.29,z:2.01,i:"d",e:339,s:376,o:"127"},{f:"c",y:1.29,z:2.01,i:"b",e:142,s:124,o:"127"},{f:"c",y:2,z:2,i:"a",e:206,s:187,o:"127"},{f:"c",y:2,z:2,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:3.24,z:4.06,i:"e",e:1,s:0.050000000000000003,o:"133"},{f:"c",y:3.27,z:4.03,i:"e",e:1,s:0.050000000000000003,o:"137"},{f:"c",y:3.28,z:4.02,i:"e",e:1,s:0.050000000000000003,o:"130"},{f:"c",y:3.29,z:4.01,i:"e",e:1,s:0.050000000000000003,o:"139"},{f:"c",y:4,z:2.02,i:"d",e:376,s:339,o:"127"},{f:"c",y:4,z:2.02,i:"c",e:385,s:347,o:"127"},{f:"c",y:4,z:2.02,i:"b",e:124,s:142,o:"127"},{f:"c",y:4,z:2.02,i:"a",e:187,s:206,o:"127"},{f:"c",y:4,z:2.02,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:6.02,z:1.29,i:"d",e:339,s:376,o:"127"},{f:"c",y:6.02,z:1.29,i:"a",e:206,s:187,o:"127"},{f:"c",y:6.02,z:1.29,i:"b",e:142,s:124,o:"127"},{f:"c",y:6.02,z:1.29,i:"c",e:347,s:385,o:"127"},{f:"c",y:6.02,z:1.29,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:8,z:4,i:"e",e:0.050000000000000003,s:1,o:"130"},{f:"c",y:8,z:3.29,i:"e",e:0.050000000000000003,s:1,o:"139"},{f:"c",y:8,z:4,i:"e",e:0.050000000000000003,s:1,o:"133"},{f:"c",y:8,z:4,i:"e",e:0.050000000000000003,s:1,o:"137"},{f:"c",y:8.01,z:1.29,i:"a",e:187,s:206,o:"127"},{f:"c",y:8.01,z:1.28,i:"b",e:124,s:142,o:"127"},{f:"c",y:8.01,z:1.28,i:"c",e:385,s:347,o:"127"},{f:"c",y:8.01,z:1.28,i:"d",e:376,s:339,o:"127"},{f:"c",y:8.01,z:1.29,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:9.29,z:2.01,i:"c",e:347,s:385,o:"127"},{f:"c",y:9.29,z:2.01,i:"b",e:142,s:124,o:"127"},{f:"c",y:9.29,z:2.01,i:"d",e:339,s:376,o:"127"},{f:"c",y:10,z:2,i:"a",e:206,s:187,o:"127"},{f:"c",y:10,z:2,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:11.29,z:4,i:"e",e:1,s:0.050000000000000003,o:"139"},{f:"c",y:12,z:2.02,i:"a",e:187,s:206,o:"127"},{f:"c",y:12,z:2.02,i:"c",e:385,s:347,o:"127"},{f:"c",y:12,z:2.02,i:"d",e:376,s:339,o:"127"},{f:"c",y:12,z:2.02,i:"b",e:124,s:142,o:"127"},{f:"c",y:12,z:4,i:"e",e:1,s:0.050000000000000003,o:"130"},{f:"c",y:12,z:4,i:"e",e:1,s:0.050000000000000003,o:"133"},{f:"c",y:12,z:4,i:"e",e:1,s:0.050000000000000003,o:"137"},{f:"c",y:12,z:2.02,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:14.02,z:1.25,i:"d",e:339,s:376,o:"127"},{f:"c",y:14.02,z:1.25,i:"c",e:347,s:385,o:"127"},{f:"c",y:14.02,z:1.25,i:"b",e:142,s:124,o:"127"},{f:"c",y:14.02,z:1.25,i:"a",e:206,s:187,o:"127"},{f:"c",y:14.02,z:1.25,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:15.27,z:1.29,i:"a",e:187,s:206,o:"127"},{f:"c",y:15.27,z:1.28,i:"b",e:124,s:142,o:"127"},{f:"c",y:15.27,z:1.28,i:"c",e:385,s:347,o:"127"},{f:"c",y:15.27,z:1.28,i:"d",e:376,s:339,o:"127"},{f:"c",y:15.27,z:1.29,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:15.29,z:4.03,i:"e",e:0.050000000000000003,s:1,o:"139"},{f:"c",y:16,z:4.02,i:"e",e:0.050000000000000003,s:1,o:"130"},{f:"c",y:16,z:4.02,i:"e",e:0.050000000000000003,s:1,o:"133"},{f:"c",y:16,z:4,i:"e",e:0.050000000000000003,s:1,o:"137"},{f:"c",y:17.25,z:2.01,i:"c",e:347,s:385,o:"127"},{f:"c",y:17.25,z:2.01,i:"b",e:142,s:124,o:"127"},{f:"c",y:17.25,z:2.01,i:"d",e:339,s:376,o:"127"},{f:"c",y:17.26,z:2,i:"a",e:206,s:187,o:"127"},{f:"c",y:17.26,z:2,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:19.26,z:2.02,i:"a",e:187,s:206,o:"127"},{f:"c",y:19.26,z:2.02,i:"c",e:385,s:347,o:"127"},{f:"c",y:19.26,z:2.02,i:"d",e:376,s:339,o:"127"},{f:"c",y:19.26,z:2.02,i:"b",e:124,s:142,o:"127"},{f:"c",y:19.26,z:2.02,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:20,z:4,i:"e",e:1,s:0.050000000000000003,o:"137"},{f:"c",y:20.02,z:3.28,i:"e",e:1,s:0.050000000000000003,o:"130"},{f:"c",y:20.02,z:3.28,i:"e",e:1,s:0.050000000000000003,o:"139"},{f:"c",y:20.02,z:3.28,i:"e",e:1,s:0.050000000000000003,o:"133"},{f:"c",y:21.28,z:2.01,i:"d",e:339,s:376,o:"127"},{f:"c",y:21.28,z:2.01,i:"c",e:347,s:385,o:"127"},{f:"c",y:21.28,z:2.01,i:"b",e:142,s:124,o:"127"},{f:"c",y:21.28,z:2.01,i:"a",e:206,s:187,o:"127"},{f:"c",y:21.28,z:2.01,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:23.29,z:1.29,i:"a",e:187,s:206,o:"127"},{f:"c",y:23.29,z:1.28,i:"b",e:124,s:142,o:"127"},{f:"c",y:23.29,z:1.28,i:"c",e:385,s:347,o:"127"},{f:"c",y:23.29,z:1.28,i:"d",e:376,s:339,o:"127"},{f:"c",y:23.29,z:1.29,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:24,z:3.26,i:"e",e:0.050000000000000003,s:1,o:"130"},{f:"c",y:24,z:4,i:"e",e:0.050000000000000003,s:1,o:"139"},{f:"c",y:24,z:3.27,i:"e",e:0.050000000000000003,s:1,o:"133"},{f:"c",y:24,z:4,i:"e",e:0.050000000000000003,s:1,o:"137"},{f:"c",y:25.27,z:2.01,i:"c",e:347,s:385,o:"127"},{f:"c",y:25.27,z:2.01,i:"b",e:142,s:124,o:"127"},{f:"c",y:25.27,z:2.01,i:"d",e:339,s:376,o:"127"},{f:"c",y:25.28,z:2,i:"a",e:206,s:187,o:"127"},{f:"c",y:25.28,z:2,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:27.26,z:4.04,i:"e",e:1,s:0.050000000000000003,o:"130"},{f:"c",y:27.27,z:4.03,i:"e",e:1,s:0.050000000000000003,o:"133"},{f:"c",y:27.28,z:2.02,i:"a",e:187,s:206,o:"127"},{f:"c",y:27.28,z:2.02,i:"c",e:385,s:347,o:"127"},{f:"c",y:27.28,z:2.02,i:"d",e:376,s:339,o:"127"},{f:"c",y:27.28,z:2.02,i:"b",e:124,s:142,o:"127"},{f:"c",y:27.28,z:2.02,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:28,z:4,i:"e",e:1,s:0.050000000000000003,o:"139"},{f:"c",y:28,z:4,i:"e",e:1,s:0.050000000000000003,o:"137"},{f:"c",y:30,z:1.29,i:"d",e:339,s:376,o:"127"},{f:"c",y:30,z:1.29,i:"c",e:347,s:385,o:"127"},{f:"c",y:30,z:1.29,i:"b",e:142,s:124,o:"127"},{f:"c",y:30,z:1.29,i:"a",e:206,s:187,o:"127"},{f:"c",y:30,z:1.29,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:31.29,z:1.29,i:"a",e:187,s:206,o:"127"},{f:"c",y:31.29,z:1.28,i:"b",e:124,s:142,o:"127"},{f:"c",y:31.29,z:1.28,i:"c",e:385,s:347,o:"127"},{f:"c",y:31.29,z:1.28,i:"d",e:376,s:339,o:"127"},{f:"c",y:31.29,z:1.29,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:32,z:3.29,i:"e",e:0.050000000000000003,s:1,o:"130"},{f:"c",y:32,z:4,i:"e",e:0.050000000000000003,s:1,o:"139"},{f:"c",y:32,z:4,i:"e",e:0.050000000000000003,s:1,o:"133"},{f:"c",y:32,z:4,i:"e",e:0.050000000000000003,s:1,o:"137"},{f:"c",y:33.27,z:2.01,i:"c",e:347,s:385,o:"127"},{f:"c",y:33.27,z:2.01,i:"b",e:142,s:124,o:"127"},{f:"c",y:33.27,z:2.01,i:"d",e:339,s:376,o:"127"},{f:"c",y:33.28,z:2,i:"a",e:206,s:187,o:"127"},{f:"c",y:33.28,z:2,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:35.28,z:2.02,i:"a",e:187,s:206,o:"127"},{f:"c",y:35.28,z:2.02,i:"c",e:385,s:347,o:"127"},{f:"c",y:35.28,z:2.02,i:"d",e:376,s:339,o:"127"},{f:"c",y:35.28,z:2.02,i:"b",e:124,s:142,o:"127"},{f:"c",y:35.28,z:2.02,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:35.29,z:4.04,i:"e",e:1,s:0.050000000000000003,o:"130"},{f:"c",y:36,z:4.03,i:"e",e:1,s:0.050000000000000003,o:"139"},{f:"c",y:36,z:4.03,i:"e",e:1,s:0.050000000000000003,o:"133"},{f:"c",y:36,z:4.03,i:"e",e:1,s:0.050000000000000003,o:"137"},{f:"c",y:38,z:2,i:"d",e:339,s:376,o:"127"},{f:"c",y:38,z:2,i:"c",e:347,s:385,o:"127"},{f:"c",y:38,z:2,i:"b",e:142,s:124,o:"127"},{f:"c",y:38,z:2,i:"a",e:206,s:187,o:"127"},{f:"c",y:38,z:2,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:40,z:1.29,i:"a",e:187,s:206,o:"127"},{f:"c",y:40,z:1.28,i:"b",e:124,s:142,o:"127"},{f:"c",y:40,z:1.28,i:"c",e:385,s:347,o:"127"},{f:"c",y:40,z:1.28,i:"d",e:376,s:339,o:"127"},{f:"c",y:40,z:1.29,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{f:"c",y:40.03,z:3.23,i:"e",e:0.050000000000000003,s:1,o:"130"},{f:"c",y:40.03,z:3.23,i:"e",e:0.050000000000000003,s:1,o:"139"},{f:"c",y:40.03,z:3.24,i:"e",e:0.050000000000000003,s:1,o:"133"},{f:"c",y:40.03,z:3.23,i:"e",e:0.050000000000000003,s:1,o:"137"},{f:"c",y:41.28,z:2.01,i:"c",e:347,s:385,o:"127"},{f:"c",y:41.28,z:2.01,i:"b",e:142,s:124,o:"127"},{f:"c",y:41.28,z:2.01,i:"d",e:339,s:376,o:"127"},{f:"c",y:41.29,z:2,i:"a",e:206,s:187,o:"127"},{f:"c",y:41.29,z:2,i:"e",e:0.20000000000000001,s:0.28880537974683551,o:"127"},{f:"c",y:43.26,z:4.04,i:"e",e:1,s:0.050000000000000003,o:"130"},{f:"c",y:43.26,z:4.01,i:"e",e:1,s:0.050000000000000003,o:"139"},{f:"c",y:43.26,z:3.28,i:"e",e:1,s:0.050000000000000003,o:"137"},{f:"c",y:43.27,z:3.27,i:"e",e:1,s:0.050000000000000003,o:"133"},{f:"c",y:43.29,z:2.02,i:"a",e:187,s:206,o:"127"},{f:"c",y:43.29,z:2.02,i:"c",e:385,s:347,o:"127"},{f:"c",y:43.29,z:2.02,i:"d",e:376,s:339,o:"127"},{f:"c",y:43.29,z:2.02,i:"b",e:124,s:142,o:"127"},{f:"c",y:43.29,z:2.02,i:"e",e:0.28880537974683551,s:0.20000000000000001,o:"127"},{y:46.01,i:"d",s:376,z:0,o:"127",f:"c"},{y:46.01,i:"c",s:385,z:0,o:"127",f:"c"},{y:46.01,i:"b",s:124,z:0,o:"127",f:"c"},{y:46.01,i:"a",s:187,z:0,o:"127",f:"c"},{y:46.01,i:"e",s:0.28880537974683551,z:0,o:"127",f:"c"},{f:"c",p:2,y:47,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"63"}]},o:"kTimelineDefaultIdentifier"},{y:47.24,i:"e",s:1,z:0,o:"133",f:"c"},{y:47.24,i:"e",s:1,z:0,o:"137",f:"c"},{y:47.27,i:"e",s:1,z:0,o:"139",f:"c"},{y:48,i:"e",s:1,z:0,o:"130",f:"c"}],f:30}},bZ:180,O:["135","137","136","139","134","132","127","128","133","130","129","138","131","126"],n:"Untitled Layout","_":0,v:{"139":{h:"118",p:"no-repeat",x:"visible",a:630,q:"100% 100%",b:0,j:"absolute",dB:"img",z:8,k:"div",c:170,d:170,r:"inline",e:1},"128":{G:"#FFFFFF",bB:6,aU:8,c:584,d:256,bC:-4,aV:8,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:36,Z:"break-word",i:"splashDirections",w:"Can you complete Simons puzzle and uncover the secrets of the dungeon?<br>copy the patterns made by the gems<br>",j:"absolute",x:"visible",aZ:7,k:"div",y:"preserve",z:13,aS:8,aT:8,a:100,bA:"#000000",F:"center",b:170},"134":{h:"120",p:"no-repeat",x:"visible",a:629,q:"100% 100%",b:0,j:"absolute",dB:"img",z:7,k:"div",c:171,d:171,r:"inline"},"137":{h:"110",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:4,k:"div",c:171,d:171,r:"inline",e:1},"126":{b:450,z:15,K:"Solid",c:168,L:"Solid",d:52,aS:6,M:10,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,i:"hardButton",aV:6,j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#2D3667",B:"#2D3667",aM:"103_hover",Z:"break-word",C:"#2D3667",r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",D:"#2D3667",t:48,aA:{a:[{p:4,h:"102"}]},F:"center",G:"#FFFBFA",aP:"pointer",w:"HARD",x:"visible",I:"Solid",a:450,y:"preserve",J:"Solid"},"132":{aU:8,bB:8,G:"#FFFFFF",H:"underline",aV:8,bC:-2,r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:64,Z:"break-word",v:"bold",w:"Simons Dungeon",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",aZ:5,z:16,aS:8,aT:8,a:155,bA:"#000000",b:48},"135":{h:"104",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-76,j:"absolute",dB:"img",z:1,k:"div",c:1088,d:816,r:"inline"},"130":{h:"122",p:"no-repeat",x:"visible",a:-9,q:"100% 100%",b:434,j:"absolute",dB:"img",z:10,k:"div",c:171,d:171,r:"inline",e:1},"129":{h:"116",p:"no-repeat",x:"visible",a:629,q:"100% 100%",b:429,j:"absolute",dB:"img",z:5,k:"div",c:171,d:171,r:"inline"},"138":{h:"124",p:"no-repeat",x:"visible",a:-6,q:"100% 100%",b:436,j:"absolute",dB:"img",z:9,k:"div",c:164,d:164,r:"inline"},"127":{c:347,d:339,I:"Solid",e:0.20000000000000001,J:"Solid",bL:11.28362341772152,K:"Solid",g:"#F2D200",L:"Solid",M:20,N:20,aI:"50%",A:"#F19000",O:20,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#F19000",z:2,B:"#F19000",D:"#F19000",aK:"50%",P:20,a:206,aL:"50%",b:142},"133":{h:"114",p:"no-repeat",x:"visible",a:627,q:"100% 100%",b:424,j:"absolute",dB:"img",z:6,k:"div",c:176,d:176,r:"inline",e:1},"136":{h:"112",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:3,k:"div",c:171,d:171,r:"inline"},"131":{b:450,z:14,K:"Solid",c:168,L:"Solid",d:52,aS:6,M:10,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,i:"easyButton",aV:6,j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#2D3667",B:"#2D3667",aM:"70_hover",Z:"break-word",C:"#2D3667",r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",D:"#2D3667",t:48,aA:{a:[{p:4,h:"102"}]},F:"center",G:"#FEFFFA",aP:"pointer",w:"EASY",x:"visible",I:"Solid",a:150,y:"preserve",J:"Solid"}}},{A:{a:[{p:4,h:"52"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#00FDFF",L:[],bY:1,d:800,U:{},T:{"31":{i:"31",n:"blueBeep",z:0.1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"27",q:false}]},o:"31"},{f:"a",y:0,z:0.01,i:"b",e:-900,s:-300,o:"141"},{f:"a",y:0.01,z:0.08,i:"b",e:-900,s:-900,o:"141"},{f:"a",y:0.09,z:0.01,i:"b",e:-300,s:-900,o:"141"},{y:0.1,i:"b",s:-300,z:0,o:"141",f:"c"}],f:30},"74_hover":{i:"74_hover",n:"74_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#734C53",o:"143"},{f:"c",y:0,z:1,i:"B",e:"#000000",s:"#FF0000",o:"143"},{f:"c",y:0,z:1,i:"C",e:"#000000",s:"#FF0000",o:"143"},{f:"c",y:0,z:1,i:"D",e:"#000000",s:"#FF0000",o:"143"},{f:"c",y:0,z:1,i:"A",e:"#000000",s:"#FF0000",o:"143"},{y:1,i:"G",s:"#FF2600",z:0,o:"143",f:"c"},{y:1,i:"B",s:"#000000",z:0,o:"143",f:"c"},{y:1,i:"C",s:"#000000",z:0,o:"143",f:"c"},{y:1,i:"D",s:"#000000",z:0,o:"143",f:"c"},{y:1,i:"A",s:"#000000",z:0,o:"143",f:"c"}],f:30},"76":{i:"76",n:"showBadge",z:1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"77",q:false}]},o:"76"},{f:"f",y:0,z:1,i:"b",e:25,s:-500,o:"151"},{f:"f",y:0,z:1,i:"b",e:161,s:-364,o:"157"},{f:"f",y:0,z:1,i:"b",e:362,s:-163,o:"143"},{y:1,i:"b",s:25,z:0,o:"151",f:"c"},{y:1,i:"b",s:161,z:0,o:"157",f:"c"},{y:1,i:"b",s:362,z:0,o:"143",f:"c"}],f:30},"45":{i:"45",n:"yellowBeep",z:0.1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"30",q:false}]},o:"45"},{f:"a",y:0,z:0.01,i:"b",e:-900,s:-300,o:"150"},{f:"a",y:0.01,z:0.08,i:"b",e:-900,s:-900,o:"150"},{f:"a",y:0.09,z:0.01,i:"b",e:-300,s:-900,o:"150"},{y:0.1,i:"b",s:-300,z:0,o:"150",f:"c"}],f:30},"35":{i:"35",n:"redBeep",z:0.1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"28",q:false}]},o:"35"},{f:"a",y:0,z:0.01,i:"b",e:-600,s:0,o:"145"},{f:"a",y:0.01,z:0.08,i:"b",e:-600,s:-600,o:"145"},{f:"a",y:0.09,z:0.01,i:"b",e:0,s:-600,o:"145"},{y:0.1,i:"b",s:0,z:0,o:"145",f:"c"}],f:30},"101_hover":{i:"101_hover",n:"101_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#231515",o:"146"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#592D33",o:"146"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#592D33",o:"146"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#592D33",o:"146"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#592D33",o:"146"},{y:1,i:"G",s:"#FF2600",z:0,o:"146",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"146",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"146",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"146",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"146",f:"c"}],f:30},"90":{i:"90",n:"hideBadge",z:1,b:[],a:[{f:"e",y:0,z:1,i:"b",e:-163,s:362,o:"143"},{f:"e",y:0,z:1,i:"b",e:-364,s:161,o:"157"},{f:"e",y:0,z:1,i:"b",e:-500,s:25,o:"151"},{y:1,i:"b",s:-500,z:0,o:"151",f:"c"},{y:1,i:"b",s:-364,z:0,o:"157",f:"c"},{y:1,i:"b",s:-163,z:0,o:"143",f:"c"}],f:30},"59":{i:"59",n:"roundComplete",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"61",q:false}]},o:"59"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:16,b:[],a:[{f:"c",y:0,z:2,i:"G",e:"#FFFFFF",s:"rgba(0, 0, 0, 0.849)",o:"152"},{f:"c",y:2,z:2,i:"G",e:"#0433FF",s:"#FFFFFF",o:"152"},{f:"c",y:4,z:2,i:"G",e:"#FFFFFF",s:"#0433FF",o:"152"},{f:"c",y:6,z:2,i:"G",e:"#FFFB00",s:"#FFFFFF",o:"152"},{f:"c",y:8,z:2,i:"G",e:"#FFFFFF",s:"#FFFB00",o:"152"},{f:"c",y:10,z:2,i:"G",e:"#00F900",s:"#FFFFFF",o:"152"},{f:"c",y:12,z:2,i:"G",e:"#FFFFFF",s:"#00F900",o:"152"},{f:"c",y:14,z:2,i:"G",e:"#FF2600",s:"#FFFFFF",o:"152"},{f:"c",p:2,y:16,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{y:16,i:"G",s:"#FF2600",z:0,o:"152",f:"c"}],f:30},"41":{i:"41",n:"greenBeep",z:0.1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"29",q:false}]},o:"41"},{f:"a",y:0,z:0.01,i:"b",e:-600,s:0,o:"156"},{f:"a",y:0.01,z:0.08,i:"b",e:-600,s:-600,o:"156"},{f:"a",y:0.09,z:0.01,i:"b",e:0,s:-600,o:"156"},{y:0.1,i:"b",s:0,z:0,o:"156",f:"c"}],f:30},"57":{i:"57",n:"gameOver",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"58",q:false}]},o:"57"}],f:30}},bZ:180,O:["151","157","143","153","150","156","141","145","144","154","158","155","152","148","142","140","147","149","146"],n:"Untitled Layout","_":1,v:{"156":{h:"13",p:"no-repeat",x:"visible",i:"green",q:"100% 100%",b:0,a:-300,j:"absolute",z:1,k:"div",dB:"img",d:1200,bF:"155",c:600,r:"inline"},"151":{w:"",h:"71",p:"no-repeat",x:"visible",i:"badgeBackground",q:"100% 100%",b:-500,a:65,j:"absolute",z:18,k:"div",dB:"img",d:500,c:470,r:"inline"},"140":{k:"div",x:"hidden",c:300,d:300,z:4,i:"blueGroup",a:0,j:"absolute",b:300},"145":{h:"9",p:"no-repeat",x:"visible",i:"red",q:"100% 100%",b:0,a:0,j:"absolute",z:2,k:"div",dB:"img",d:1200,bF:"144",c:600,r:"inline"},"148":{G:"#4A161A",aU:8,c:184,d:144,aV:8,r:"inline",e:0.70000000000000007,s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:48,Z:"break-word",i:"sequenceValue",w:"SCORE<br>0\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:17,aS:8,aT:8,a:600,F:"center",b:250},"143":{b:-163,z:20,K:"Solid",c:73,L:"Solid",d:53,aS:6,M:5,bD:"none",N:5,aT:6,dB:"button",O:5,aU:6,P:5,i:"badgeButton",aV:6,j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#FF0000",Y:55,B:"#FF0000",aM:"74_hover",Z:"break-word",C:"#FF0000",r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",D:"#FF0000",t:24,aA:{a:[{p:4,h:"97"}]},F:"center",G:"#734C53",aP:"pointer",w:"NEXT",x:"visible",I:"Solid",a:253,y:"preserve",J:"Solid"},"154":{h:"104",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:800,d:600,r:"inline"},"157":{G:"#261E1F",bB:2,aU:8,c:223,d:112,bC:2,aV:8,r:"inline",s:"Optima,'Lucida Grande',Helvetica,sans-serif",t:40,Z:"break-word",i:"badgeMessage",w:"You\u2019ve completed 5 sets.<br>Well done!<br>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:19,aS:8,aT:8,a:180,bA:"#000000",F:"center",b:-364},"146":{b:525,z:22,K:"Solid",c:122,L:"Solid",d:18,aS:6,M:3,e:0.72443631329113922,bD:"none",N:3,aT:6,dB:"button",O:3,aU:6,P:3,i:"quitButton",aV:6,j:"absolute",k:"div",aI:23,aJ:23,aK:23,aL:23,A:"#592D33",B:"#592D33",aM:"101_hover",Z:"break-word",C:"#592D33",r:"inline",s:"Marion,'Hoefler Text',Baskerville,'Times New Roman',serif",D:"#592D33",t:24,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"62"}]},F:"center",G:"#231515",aP:"pointer",w:"QUIT",x:"visible",I:"Solid",a:630,y:"preserve",J:"Solid"},"141":{h:"11",p:"no-repeat",x:"visible",i:"blue",q:"100% 100%",b:-300,a:0,j:"absolute",z:1,k:"div",dB:"img",d:1200,bF:"140",c:600,r:"inline"},"152":{G:"rgba(0, 0, 0, 0.849)",bB:2,aU:8,c:184,d:164,bC:2,aV:8,e:0.66752373417721522,s:"Optima,'Lucida Grande',Helvetica,sans-serif",r:"inline",t:56,Z:"break-word",i:"title",w:"SIMON<br>SAYS",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:21,aS:8,aT:8,a:607,bA:"#000000",F:"center",b:24},"149":{k:"div",x:"hidden",c:300,d:300,z:8,i:"yellowGroup",a:300,j:"absolute",b:300},"144":{k:"div",x:"hidden",c:300,d:300,z:2,i:"redGroup",a:0,j:"absolute",b:0},"150":{h:"15",p:"no-repeat",x:"visible",i:"yellow",q:"100% 100%",b:-300,a:-300,j:"absolute",z:1,k:"div",dB:"img",d:1200,bF:"149",c:600,r:"inline"},"155":{k:"div",x:"hidden",c:300,d:300,z:6,i:"greenGroup",a:300,j:"absolute",b:0},"158":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"greenDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:14,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:300,b:0},"147":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"yellowDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:15,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:300,b:300},"142":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"blueDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:13,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:300},"153":{c:300,d:300,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"redDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:11,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1,b:0}}}],{},g,{f:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
