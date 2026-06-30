// =======================================
// 👀 لعبة وين اختفى؟
// =======================================

const cups=document.getElementById("cups");
const cupMessage=document.getElementById("cupMessage");

let cupScore=0;

let currentRound=0;

let ballCup=0;

function startCup(){

cupScore=0;

currentRound=0;

nextRound();

}

function nextRound(){

cups.innerHTML="";

cupMessage.innerHTML="👀 أين الكرة؟";

ballCup=Math.floor(Math.random()*3);

for(let i=0;i<3;i++){

const cup=document.createElement("button");

cup.className="cup";

cup.innerHTML="🥤";

cup.onclick=function(){

chooseCup(i,cup);

};

cups.appendChild(cup);

}

}

// =======================================
// اختيار الكوب
// =======================================

function chooseCup(index,cup){

const allCups=document.querySelectorAll(".cup");

// تعطيل الضغط على جميع الأكواب
allCups.forEach(item=>{

item.disabled=true;

});

// إظهار مكان الكرة
allCups[ballCup].innerHTML="⚽";

if(index===ballCup){

cupScore++;

totalScore++;

updateTotalScore();

cupMessage.innerHTML="🎉 أحسنت! وجدتها.";

}else{

cupMessage.innerHTML="😊 ليست هنا، حاول في الجولة القادمة.";

}

// الجولة التالية
setTimeout(()=>{

currentRound++;

if(currentRound>=5){

finishCup();

}else{

nextRound();

}

},1500);

}

// =======================================
// نهاية اللعبة
// =======================================

function finishCup(){

cups.innerHTML="";

cupMessage.innerHTML=`

<div class="win">

<h2>🏆 انتهت اللعبة</h2>

<p style="font-size:24px;margin:20px 0;">

نتيجتك

</p>

<h1 style="color:#f59e0b;">

⭐ ${cupScore} / 5

</h1>

<button onclick="goHome()">

🏠 العودة للرئيسية

</button>

</div>

`;

}