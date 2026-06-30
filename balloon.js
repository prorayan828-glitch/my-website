// =======================================
// 🎈 لعبة فرقعة البالونات
// =======================================

const balloonArea = document.getElementById("balloonArea");

let balloonScore = 0;
let balloonTime = 30;

let balloonCreator;
let balloonTimer;

const balloonColors = [

{color:"#ef4444",points:1},
{color:"#22c55e",points:2},
{color:"#facc15",points:5},
{color:"#111827",points:-3}

];

function startBalloon(){

balloonArea.innerHTML="";

balloonScore=0;

balloonTime=30;

document.getElementById("balloonScore").textContent=0;

document.getElementById("balloonTime").textContent=30;

clearInterval(balloonCreator);

clearInterval(balloonTimer);

balloonCreator=setInterval(createBalloon,700);

balloonTimer=setInterval(()=>{

balloonTime--;

document.getElementById("balloonTime").textContent=balloonTime;

if(balloonTime<=0){

clearInterval(balloonCreator);

clearInterval(balloonTimer);

finishBalloon();

}

},1000);

}

function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon";

const type=balloonColors[Math.floor(Math.random()*balloonColors.length)];

balloon.style.background=type.color;

balloon.dataset.points=type.points;

balloon.style.left=Math.random()*90+"%";

balloon.onclick=()=>popBalloon(balloon);

balloonArea.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},7000);

}

// =======================================
// فرقعة البالون
// =======================================

function popBalloon(balloon){

    const points = Number(balloon.dataset.points);

    balloon.remove();

    balloonScore += points;

    if(balloonScore < 0){
        balloonScore = 0;
    }

    totalScore += points;

    if(totalScore < 0){
        totalScore = 0;
    }

    updateTotalScore();

    document.getElementById("balloonScore").textContent = balloonScore;

    // نجوم بسيطة عند الفرقعة
    for(let i=0;i<6;i++){

        const star=document.createElement("div");

        star.innerHTML="✨";

        star.style.position="absolute";
        star.style.left=balloon.style.left;
        star.style.bottom="120px";
        star.style.fontSize="24px";
        star.style.pointerEvents="none";

        balloonArea.appendChild(star);

        let x=(Math.random()*80)-40;
        let y=(Math.random()*80)+20;

        star.animate([

            {
                transform:"translate(0,0)",
                opacity:1
            },

            {
                transform:`translate(${x}px,-${y}px)`,
                opacity:0
            }

        ],{

            duration:700

        });

        setTimeout(()=>{

            star.remove();

        },700);

    }

}

// =======================================
// نهاية اللعبة
// =======================================

function finishBalloon(){

    balloonArea.innerHTML=`

    <div class="win">

        <h2>🎉 انتهى الوقت</h2>

        <p style="margin:20px 0;font-size:24px;">
        مجموع نقاطك
        </p>

        <h1 style="color:#f59e0b;">
        ${balloonScore}
        </h1>

        <button onclick="goHome()">
        العودة للرئيسية
        </button>

    </div>

    `;

}