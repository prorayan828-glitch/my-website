// =======================================
// 🧩 لعبة الذاكرة
// =======================================

const memoryBoard = document.getElementById("memoryBoard");

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

// الرموز (8 أزواج = 16 بطاقة)

const memoryIcons = [

"🍎","🍎",
"🍌","🍌",
"🍇","🍇",
"🍉","🍉",
"🍒","🍒",
"🥝","🥝",
"🍍","🍍",
"🍓","🍓"

];

// خلط البطاقات

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        let j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

// بداية اللعبة

function startMemory(){

    memoryBoard.innerHTML="";

    matchedPairs=0;

    firstCard=null;
    secondCard=null;
    lockBoard=false;

    const cards=[...memoryIcons];

    shuffle(cards);

    cards.forEach(icon=>{

        const card=document.createElement("div");

        card.className="card";

        card.dataset.icon=icon;

        card.innerHTML="❓";

        card.onclick=function(){

            flipCard(card);

        };

        memoryBoard.appendChild(card);

    });

}

// قلب البطاقة

function flipCard(card){

    if(lockBoard) return;

    if(card===firstCard) return;

    if(card.classList.contains("matched")) return;

    card.innerHTML=card.dataset.icon;

    if(firstCard==null){

        firstCard=card;

        return;

    }

    secondCard=card;

    lockBoard=true;

    if(firstCard.dataset.icon===secondCard.dataset.icon){

        correctPair();

    }else{

        wrongPair();

    }

}

// =======================================
// زوج صحيح
// =======================================

function correctPair(){

    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    matchedPairs++;

    totalScore += 2;

    updateTotalScore();

    setTimeout(()=>{

        firstCard.style.visibility="hidden";
        secondCard.style.visibility="hidden";

        resetCards();

        if(matchedPairs===8){

            finishMemory();

        }

    },600);

}

// =======================================
// زوج خاطئ
// =======================================

function wrongPair(){

    setTimeout(()=>{

        firstCard.innerHTML="❓";
        secondCard.innerHTML="❓";

        resetCards();

    },800);

}

// =======================================
// إعادة المتغيرات
// =======================================

function resetCards(){

    firstCard=null;
    secondCard=null;

    lockBoard=false;

}

// =======================================
// نهاية اللعبة
// =======================================

function finishMemory(){

    memoryBoard.innerHTML=`

    <div class="win">

        <h2>🧩 أحسنت!</h2>

        <p style="font-size:24px;margin:20px 0;">

        أنهيت لعبة الذاكرة

        </p>

        <h1 style="color:#8b5cf6;">

        ⭐ +16 نقطة

        </h1>

        <button onclick="goHome()">

        العودة للرئيسية

        </button>

    </div>

    `;

}