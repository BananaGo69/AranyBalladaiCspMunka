const NextKvizBtn = document.getElementById("KvizKovGomb");
const Answer1Btn = document.getElementById("KvizGomb1");
const Answer2Btn = document.getElementById("KvizGomb2");
const Answer3Btn = document.getElementById("KvizGomb3");
const Answer4Btn = document.getElementById("KvizGomb4");
const AnswerBtns = document.querySelectorAll("KvizValaszok");
const Reset = document.getElementById("KvizUjraGomb");
const Question = document.getElementById("KvizKerdes");
const Cim = document.getElementById("KvizCim");
const KvizDiv = document.getElementById("KvizDiv");
const VegPont = document.getElementById("VegPont");
const Visszajel = document.getElementById("Visszajel");
let QNum = 0;

const Questions = [
    {Que: "Melyik évben keletkezett az Ágnes asszony?", A1: "1846", A2: "1877", A3: "1865", A4:"1853", CA: "1853", R: "Arany a balladát nagykőrösi évei alatt, 1853-ban írta."},
    {Que: "Mit mos Ágnes asszony a patakban?", A1: "Ruhát a családnak", A2: "Véres lepedőt", A3: "Fehér kendőt", A4:"A szerető ruháját", CA: "Véres lepedőt", R: "A véres lepedő a férje meggyilkolásának nyoma, ezt próbálja kimosni."},
    {Que: "Mi a ballada központi konfliktusa?", A1: "A bűn és a lelkiismeret ütközése", A2: "Két család viszálya", A3: "Egy háború és a hazaszeretet", A4:"Szegénység és gazdagság", CA: "A bűn és a lelkiismeret ütközése", R: "A történet a külső igazságszolgáltatás és a belső bűntudat ellentétére épül."},
    {Que: "Melyik balladai sajátosság jellemző az Ágnes asszonyra?", A1: "Vidám, humoros hangvétel", A2: "Részletes, hosszú előtörténet", A3: "Boldog végkifejlet", A4:"Kihagyásos, sűrített szerkesztés", CA: "Kihagyásos, sűrített szerkesztés", R: "A ballada a bűn előzményeit alig mutatja be, a következményekre fókuszál."},
    {Que: "Miért képtelen Ágnes asszony megnyugodni a tett után?", A1: "Mert a lelkiismerete nem hagyja", A2: "Mert a szerető elhagyta", A3: "Mert nincs otthona", A4:"Mert menekülnie kell a hatóságok elől", CA: "Mert a lelkiismerete nem hagyja", R: "A ballada lényege, hogy a bűn nyoma belül él tovább, a tettes elméjében."},
    {Que: "Hol élt Arany János, amikor az Ágnes asszonyt írta?", A1: "Debrecen", A2: "Nagyszalonta", A3: "Pest", A4:"Nagykőrös", CA: "Nagykőrös", R: "1851–1860 között tanárként Nagykőrösön élt, itt keletkezett több híres balladája."}
]

function Start() {
    Cim.innerText=`${QNum+1}. kérdés.`;
    Question.innerText=Questions[QNum].Que;
    Answer1Btn.innerText=Questions[QNum].A1;
    Answer2Btn.innerText=Questions[QNum].A2;
    Answer3Btn.innerText=Questions[QNum].A3;
    Answer4Btn.innerText=Questions[QNum].A4;
}
Start();




NextKvizBtn.addEventListener("click", function(){
    if (QNum==5) {
        VegPont.innerText=`Végső pontszám: ${Points}/${QNum+1}`;
    } else {
    QNum++;
    Cim.innerText=`${QNum+1}. kérdés.`;
    Question.innerText=Questions[QNum].Que;
    Answer1Btn.innerText=Questions[QNum].A1;
    Answer2Btn.innerText=Questions[QNum].A2;
    Answer3Btn.innerText=Questions[QNum].A3;
    Answer4Btn.innerText=Questions[QNum].A4;
    Answer1Btn.style.backgroundColor="white";
    Answer2Btn.style.backgroundColor="white";
    Answer3Btn.style.backgroundColor="white";
    Answer4Btn.style.backgroundColor="white";
    Visszajel.innerText="";
    NotAnswered = true
    }
    
    
})

Reset.addEventListener("click", function(){
    
    QNum=0;
    Cim.innerText=`${QNum+1}. kérdés.`;
    Question.innerText=Questions[QNum].Que;
    Answer1Btn.innerText=Questions[QNum].A1;
    Answer2Btn.innerText=Questions[QNum].A2;
    Answer3Btn.innerText=Questions[QNum].A3;
    Answer4Btn.innerText=Questions[QNum].A4;
    Visszajel.innerText="";
    VegPont.innerText="";
    Points=0;
})


let NotAnswered = true;
let Points = 0;
Answer1Btn.addEventListener("click", function(){
if (NotAnswered) {
    Visszajel.innerText=Questions[QNum].R;
    switch (Questions[QNum].CA) {
    case Questions[QNum].A1:
        Answer1Btn.style.backgroundColor="Green";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        Points++;
        break;
    case Questions[QNum].A2:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Green";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A3:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Green";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A4:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Green";
        NotAnswered = false;
        break;
    default:
        alert("Oh it's the wrong number, the wrong number song! We're very very sorry that we got it wrong!");
        break;
    }
    
}
})
Answer2Btn.addEventListener("click", function(){
if (NotAnswered) {
    Visszajel.innerText=Questions[QNum].R;
    switch (Questions[QNum].CA) {
    case Questions[QNum].A1:
        Answer1Btn.style.backgroundColor="Green";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A2:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Green";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        Points++;
        break;
    case Questions[QNum].A3:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Green";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A4:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Green";
        NotAnswered = false;
        break;
    default:
        alert("Oh it's the wrong number, the wrong number song! We're very very sorry that we got it wrong!");
        break;
    }
}
})
Answer3Btn.addEventListener("click", function(){
if (NotAnswered) {
    Visszajel.innerText=Questions[QNum].R;
    switch (Questions[QNum].CA) {
    case Questions[QNum].A1:
        Answer1Btn.style.backgroundColor="Green";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A2:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Green";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A3:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Green";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        Points++;
        break;
    case Questions[QNum].A4:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Green";
        NotAnswered = false;
        break;
    default:
        alert("Oh it's the wrong number, the wrong number song! We're very very sorry that we got it wrong!");
        break;
    }
}
})
Answer4Btn.addEventListener("click", function(){
if (NotAnswered) {
    Visszajel.innerText=Questions[QNum].R;
    switch (Questions[QNum].CA) {
    case Questions[QNum].A1:
        Answer1Btn.style.backgroundColor="Green";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A2:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Green";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A3:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Green";
        Answer4Btn.style.backgroundColor="Red";
        NotAnswered = false;
        break;
    case Questions[QNum].A4:
        Answer1Btn.style.backgroundColor="Red";
        Answer2Btn.style.backgroundColor="Red";
        Answer3Btn.style.backgroundColor="Red";
        Answer4Btn.style.backgroundColor="Green";
        NotAnswered = false;
        Points++;
        break;
    default:
        alert("Oh it's the wrong number, the wrong number song! We're very very sorry that we got it wrong!");
        break;
    }
}
})



