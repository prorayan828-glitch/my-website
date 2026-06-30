// =======================================
// 🎨 لعبة لون بسرعة
// =======================================

const colorArea = document.getElementById("colorArea");
const colorWord = document.getElementById("colorWord");
const colorButtons = document.getElementById("colorButtons");

let colorScore = 0;
let colorTime = 20;
let colorTimer = null;

const colors = [

{
name:"أحمر",
value:"red"
},

{
name:"أزرق",
value:"blue"
},

{
name:"أخضر",
value:"green"
},

{
name:"أصفر",
value:"gold"
}

];

function startColor(){

colorScore=0;
colorTime=20;

document.getElementById("colorScore").textContent=0;
document.getElementById("colorTime").textContent=20;

clearInterval(colorTimer);

showQuestion();

colorTimer=setInterval(()=>{

colorTime--;

document.getElementById("colorTime").textContent=colorTime;

if(colorTime<=0){

clearInterval(colorTimer);

finishColor();

}

},1000);

}

function showQuestion(){

colorButtons.innerHTML="";

const correct=Math.floor(Math.random()*colors.length);

const display=Math.floor(Math.random()*colors.length);

colorWord.textContent=colors[correct].name;

colorWord.style.color=colors[display].value;

colors.forEach((item,index)=>{

const button=document.createElement("button");

button.textContent=item.name;

button.style.background=item.value;
button.style.color="white";

button.onclick=function(){

chooseColor(index,correct);

};

colorButtons.appendChild(button);

});

}

// =======================================
// اختيار اللون
// =======================================

function chooseColor(selected,correct){

    if(selected===correct){

        colorScore++;

        totalScore++;

        updateTotalScore();

        document.getElementById("colorScore").textContent=colorScore;

    }

    showQuestion();

}

// =======================================
// نهاية اللعبة
// =======================================

function finishColor(){

    colorArea.innerHTML=`

    <div class="win">

        <h2>🎉 انتهى الوقت</h2>

        <p style="font-size:24px;margin:20px 0;">

        أحسنت!

        </p>

        <h1 style="color:#16a34a;">

        ⭐ ${colorScore}

        </h1>

        <button onclick="goHome()">

        🏠 العودة للرئيسية

        </button>

    </div>

    `;

}