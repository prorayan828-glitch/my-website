// =======================================
// 🎁 لعبة افتح الصندوق
// =======================================

const boxArea = document.getElementById("boxArea");
const questionBox = document.getElementById("questionBox");

let openedBoxes = 0;

const questions = [

{
q:"كم عدد أركان الإسلام؟",
a:["4","5","6"],
c:1
},

{
q:"ما أكبر كوكب؟",
a:["الأرض","المشتري","المريخ"],
c:1
},

{
q:"15 + 8 = ؟",
a:["22","23","24"],
c:1
},

{
q:"كم عدد الصلوات المفروضة؟",
a:["4","5","6"],
c:1
},

{
q:"أسرع حيوان بري؟",
a:["الفهد","الأسد","الحصان"],
c:0
},

{
q:"كم عدد أيام الأسبوع؟",
a:["6","7","8"],
c:1
},

{
q:"ما عاصمة السعودية؟",
a:["جدة","الرياض","مكة"],
c:1
},

{
q:"أي هذه فاكهة؟",
a:["تفاح","بطاطس","جزر"],
c:0
},

{
q:"10 × 5 = ؟",
a:["45","50","55"],
c:1
},

{
q:"ما الكوكب الأحمر؟",
a:["المريخ","الأرض","زحل"],
c:0
},

{
q:"كم عدد القارات؟",
a:["5","6","7"],
c:2
},

{
q:"أول سورة في القرآن؟",
a:["البقرة","الفاتحة","الإخلاص"],
c:1
}

];

function startBox(){

boxArea.innerHTML="";
questionBox.innerHTML="";
openedBoxes=0;

let list=[...questions];

shuffle(list);

for(let i=0;i<12;i++){

const box=document.createElement("div");

box.className="box";

box.innerHTML="📦";

box.onclick=function(){

openBox(box,list[i]);

};

boxArea.appendChild(box);

}

}

// =======================================
// فتح الصندوق
// =======================================

function openBox(box,question){

if(box.classList.contains("opened")) return;

box.classList.add("opened");

questionBox.innerHTML=`

<div class="questionPopup">

<h3>${question.q}</h3>

<button onclick="checkAnswer(${question.c},0,this,${openedBoxes})">
${question.a[0]}
</button>

<button onclick="checkAnswer(${question.c},1,this,${openedBoxes})">
${question.a[1]}
</button>

<button onclick="checkAnswer(${question.c},2,this,${openedBoxes})">
${question.a[2]}
</button>

</div>

`;

currentBox=box;

openedBoxes++;

}

// =======================================

let currentBox;

// =======================================

function checkAnswer(correct,selected,btn){

if(selected===correct){

currentBox.innerHTML="⭐";

currentBox.style.background="#FFD700";

totalScore+=5;

updateTotalScore();

}else{

currentBox.innerHTML="❌";

currentBox.style.background="#9CA3AF";

}

questionBox.innerHTML="";

if(openedBoxes===12){

setTimeout(finishBox,500);

}

}

// =======================================

function finishBox(){

boxArea.innerHTML=`

<div class="win">

<h2>🎉 أحسنت</h2>

<p style="font-size:24px">

أنهيت لعبة الصندوق

</p>

<button onclick="goHome()">

🏠 العودة للرئيسية

</button>

</div>

`;

}