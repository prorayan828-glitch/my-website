// =======================================
// 🐟 لعبة صيد السمك
// =======================================

const fishArea = document.getElementById("fishArea");

let fishScore = 0;
let fishTime = 30;

let fishCreator;
let fishTimer;

// أنواع الكائنات البحرية
const seaAnimals = [

{emoji:"🐟",points:1,speed:4},
{emoji:"🐠",points:2,speed:5},
{emoji:"🐡",points:4,speed:3},
{emoji:"⭐",points:6,speed:6},
{emoji:"🦈",points:-3,speed:7}

];

function startFish(){

    fishArea.innerHTML="";

    fishScore=0;
    fishTime=30;

    document.getElementById("fishScore").textContent=0;
    document.getElementById("fishTime").textContent=30;

    clearInterval(fishCreator);
    clearInterval(fishTimer);

    fishCreator=setInterval(createFish,700);

    fishTimer=setInterval(()=>{

        fishTime--;

        document.getElementById("fishTime").textContent=fishTime;

        if(fishTime<=0){

            clearInterval(fishCreator);
            clearInterval(fishTimer);

            finishFish();

        }

    },1000);

}

function createFish(){

    const fish=document.createElement("div");

    fish.className="fish";

    const type=seaAnimals[Math.floor(Math.random()*seaAnimals.length)];

    fish.innerHTML=type.emoji;

    fish.dataset.points=type.points;

    fish.style.top=Math.random()*75+"%";

    const fromLeft=Math.random()>0.5;

    let x=fromLeft?-80:window.innerWidth;

    fish.style.left=x+"px";

    fishArea.appendChild(fish);

    const move=setInterval(()=>{

        if(fromLeft){

            x+=type.speed;

        }else{

            x-=type.speed;

        }

        fish.style.left=x+"px";

        if(x>window.innerWidth+100 || x<-100){

            clearInterval(move);

            fish.remove();

        }

    },20);

    fish.onclick=()=>{

        clearInterval(move);

        catchFish(fish);

    };

}

// =======================================
// صيد السمكة
// =======================================

function catchFish(fish){

    const points = Number(fish.dataset.points);

    fish.remove();

    fishScore += points;

    if(fishScore < 0){
        fishScore = 0;
    }

    totalScore += points;

    if(totalScore < 0){
        totalScore = 0;
    }

    updateTotalScore();

    document.getElementById("fishScore").textContent = fishScore;

    // تأثير بسيط عند الصيد
    for(let i=0;i<5;i++){

        const bubble=document.createElement("div");

        bubble.innerHTML="🫧";

        bubble.style.position="absolute";
        bubble.style.left=fish.style.left;
        bubble.style.top=fish.style.top;
        bubble.style.fontSize="22px";
        bubble.style.pointerEvents="none";

        fishArea.appendChild(bubble);

        let x=(Math.random()*80)-40;
        let y=(Math.random()*80)+20;

        bubble.animate([

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

            bubble.remove();

        },700);

    }

}

// =======================================
// نهاية اللعبة
// =======================================

function finishFish(){

    fishArea.innerHTML = `

    <div class="win">

        <h2>🐟 انتهت اللعبة</h2>

        <p style="margin:20px 0;font-size:24px;">

        مجموع نقاطك

        </p>

        <h1 style="color:#0ea5e9;">

        ${fishScore}

        </h1>

        <button onclick="goHome()">

        العودة للرئيسية

        </button>

    </div>

    `;

}