const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
let rightPressed = false;
let leftPressed = false;
let paddleX = (canvas.width - paddleWidth) / 2;
const interval = setInterval(draw, 10);
const brickRowCount=3;
const brickColumnCount=6;
const brickWidth=50;
const brickHeight=50;
const brickPadding=10;
const brickOffsetTop=30;
const brickOffsetLeft=30;
const bricks=[];
const chara = new Image();
var video= document.getElementById('video');
var vwidth=video.style.width;
var vheight=video.style.height;
chara.src="IMG_4628.jpg";


function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBall();
	drawPaddle();
	drawBricks();
	collisionDetection();

	x+=dx;
	y+=dy;
	if(x>=2*(brickWidth+brickPadding)+brickOffsetLeft&&x<=3*(brickWidth+brickPadding)+brickOffsetLeft
	&&y>=brickOffsetTop&&y<=brickOffsetTop+brickHeight){
	vshow();



}

	if(x+dx+ballRadius>canvas.width || x+dx<0){
		dx=-dx;
	}
	if(y+dy<ballRadius){
		dy=-dy;
	}else if(y+dy>canvas.height-ballRadius*2){
		if(x>paddleX&&x<paddleX+paddleWidth){
			dy=-dy;
		}else{
		alert("GAME OVER");
		document.location.reload();
		clearInterval(interval)
		}
	}
	if(rightPressed){
		paddleX+=7;
	}else if(leftPressed){
		paddleX-=7;
	}
	if(rightPressed){
		paddleX=Math.min(paddleX+7,canvas.width-paddleWidth);
	} else if(leftPressed){
		paddleX=Math.max(paddleX-7,0)
	}
	}

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(e){
	if(e.key==="Right"||e.key==="ArrowRight"){
		rightPressed=true;
	}else if(e.key==="Left"||e.key==="ArrowLeft"){
		leftPressed=true;
	}
}
function keyUpHandler(e){
	if(e.key==="Right"||e.key==="ArrowRight"){
		rightPressed=false;
	}else if(e.key==="Left"||e.key==="ArrowLeft"){
		leftPressed=false;
	}
}




	function drawBall(){
	ctx.beginPath();
	ctx.arc(x,y,ballRadius,0,Math.PI*2);
	ctx.fillStyle="#0095DD";
	ctx.fill();
	ctx.closePath();
	}

	function drawPaddle(){
		ctx.beginPath();
		ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,
		paddleHeight);
		ctx.fillStyle="#0095DD";
		ctx.fill();
		ctx.closePath();
	}

	for(let c=0;c<brickColumnCount;c++){
		bricks[c]=[];
	for(let r=0;r<brickRowCount;r++){
		bricks[c][r]={x:0,y:0,status:1};
	}

}

function drawBricks(){
	for(let c=0;c<brickColumnCount;c++){
		for(let r=0;r<brickRowCount;r++){
			if(bricks[c][r].status===1){
			const brickX=c*(brickWidth+brickPadding)+brickOffsetLeft;
			const brickY=r*(brickHeight+brickPadding)+brickOffsetTop;
			bricks[c][r].x=brickX;
			bricks[c][r].y=brickY;
			ctx.beginPath();
			if(c!==2||r!==0){
			ctx.rect(brickX,brickY,brickWidth,brickHeight);

		}else{
			ctx.drawImage(chara,2*(brickWidth+brickPadding)+brickOffsetLeft ,brickOffsetTop,brickWidth,brickHeight
			);

		}
			ctx.fillStyle="#0095DD";
			ctx.fill();
			ctx.closePath();
		}
		}
	}
}
	function collisionDetection(){
		for(let c=0;c<brickColumnCount;c++){
			for(let r=0;r<brickRowCount;r++){
				const b = bricks[c][r];
				if(b.status===1){
				if(x>b.x&&x<b.x+brickWidth&&y>b.y&&y<b.y+brickHeight){
					dy=-dy;
					b.status=0;
				}
			}
		}
	}
}
function showButton() {
document.getElementById('button').style.display = 'block';
}
function vshow(){
	video.play();
}


	/*function yamashita(){
		if(x>2*(brickWidth+brickPadding)+brickOffsetLeft&&x<,3*(brickWidth+brickPadding)+brickOffsetLeft
		&&y<brickOffsetTop&&y>brickOffsetTop+brickHeight){
			alert("GAME OVER");
			document.location.reload();
			clearInterval(interval)
		}


	}*/
