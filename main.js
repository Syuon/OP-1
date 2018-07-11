var ctx;
var i;
var sc={w:undefined,h:undefined};
var scc={w:undefined,h:undefined};
var mp={x:0,y:0};
var img_max=20;
var img = [];
var counter=0;
var ccounter=0;
var scounter=0;
var gcounter=0;
//-----------------------------------------------------------------------------
window.onload = function () {
	//1920x1080
	width = document.documentElement.clientWidth - 2;
	height = document.documentElement.clientHeight - 2;
	screenCanvas = document.getElementById('screen');
	screenCanvas.width = (width/1920>=height/1080?height*1920/1080:width);
	screenCanvas.height = (height/1080>width/1920?width*1080/1920:height);
	ctx = screenCanvas.getContext('2d');
	sc.w=screenCanvas.width;
	sc.h=screenCanvas.height;
	scc.w=screenCanvas.width/2;
	scc.h=screenCanvas.height/2

	setInterval(function(){ccounter+=0.1;},100);

	for(i=1;i<=img_max;i++){
		img.push(i);
		img[i]= new Image();	
	};
	//-----------------------------------------------------------------------------	
	img[1].src = "img/1.png";
	img[2].src = "img/2.png";
	img[3].src = "img/3.bmp";
	img[4].src = "img/4.png";
	img[5].src = "img/5.png";
	img[6].src = "img/6.png";
	img[7].src = "img/7.png";
	img[8].src = "img/8.png";
	img[9].src = "img/9.png";
	img[10].src = "img/10.png";
	img[11].src = "img/11.png";
	img[12].src = "img/12.png";
	img[13].src = "img/13.png";
	img[14].src = "img/14.png";
	img[15].src = "img/15.png";
	img[16].src = "img/16.png";
	img[17].src = "img/17.png";
	img[18].src = "img/18.png";
	img[19].src = "img/19.png";
	img[20].src = "img/20.png";

	//-----------------------------------------------------------------------------
	(function () {
		counter++;
		scounter+=(ccounter>=11?1:0);
		gcounter+=(scounter>=100&&gcounter<=5?.1:0);

		ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
		ctx.globalCompositeOoperation = "source-over";
		ctx.drawImage(img[7], mp.x+0, mp.y+0, screenCanvas.width, screenCanvas.height);

		if(scounter<100){
			if(ccounter<=5.2){
				ctx.drawImage(img[19],mp.x+scc.w-scc.h,mp.y,sc.h,sc.h);
			}		

			if(ccounter>=5){
				ctx.save();
				ctx.translate(mp.x+scc.w,mp.y+scc.h);	
				ctx.rotate(-counter/3 * Math.PI / 180)
				ctx.translate(-(mp.x+scc.w),-(mp.y+scc.h));
				ctx.drawImage(img[13],mp.x+scc.w-scc.h,mp.y,sc.h,sc.h);
				ctx.restore();

				ctx.strokeStyle='rgba(255,255,255,1)';
				ctx.lineWidth=5;
				ctx.beginPath();
				ctx.arc(mp.x+scc.w,mp.y+scc.h,scc.h-2.5,0, Math.PI * 2, false);
				ctx.stroke();
				ctx.closePath();
			}

			if(ccounter>=8){
				ctx.strokeStyle='rgba(255,255,255,1)';
				ctx.lineWidth=5;

				ctx.save();
				ctx.translate(mp.x+scc.w,mp.y+scc.h);	
				ctx.rotate(counter/2 * Math.PI / 180)
				ctx.translate(-(mp.x+scc.w),-(mp.y+scc.h));
				ctx.drawImage(img[11],mp.x+scc.w-scc.h-100,mp.y-100,sc.h+200,sc.h+200);
				ctx.restore();

				ctx.beginPath();
				ctx.arc(mp.x+scc.w,mp.y+scc.h,scc.h+100,0, Math.PI * 2, false);
				ctx.stroke();
				ctx.closePath();

				ctx.beginPath();
				ctx.arc(mp.x+scc.w,mp.y+scc.h,scc.h+48,0, Math.PI * 2, false);
				ctx.stroke();
				ctx.closePath();
			}

			if(ccounter>=14){
				ctx.save();
				ctx.translate(mp.x+scc.w,mp.y+scc.h);	
				ctx.rotate(scounter/2 * Math.PI / 180)
				ctx.translate(-(mp.x+scc.w),-(mp.y+scc.h));
				ctx.drawImage(img[20],mp.x+scc.w-scc.h-100,mp.y-100,sc.h+200,sc.h+200);
				ctx.restore();
			}

			if(ccounter>=11){
				ctx.save();
				ctx.translate(mp.x+scc.w,mp.y+scc.h);	
				ctx.rotate(-counter/4 * Math.PI / 180)
				ctx.translate(-(mp.x+scc.w),-(mp.y+scc.h));
				ctx.drawImage(img[18],mp.x+scc.w-scc.h-700,mp.y-700,sc.h+1400,sc.h+1400);
				ctx.restore();
			}

			if(ccounter>=4.9&&ccounter<=5.2||ccounter>=7.9&&ccounter<=8.2||ccounter>=10.9&&ccounter<=11.2||ccounter>=13.9&&ccounter<=13.2){
				ctx.fillRect(0,0,sc.w,sc.h);
			}
		}else{
			ctx.globalAlpha = gcounter/5;
			ctx.drawImage(img[5], mp.x+0, mp.y+0, screenCanvas.width, screenCanvas.height);
		}
		//繰り返し読み込み-------------------------------------------------------------
		requestAnimationFrame(arguments.callee);
	})();
};