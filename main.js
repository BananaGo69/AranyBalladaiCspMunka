const NextKvizBtn = document.getElementById("((Placeholder))");
const Answer1Btn = document.getElementById("((Placeholder))");
const Answer2Btn = document.getElementById("((Placeholder))");
const Answer3Btn = document.getElementById("((Placeholder))");
const Answer4Btn = document.getElementById("((Placeholder))");
const AnswerBtns = document.querySelectorAll("((Placeholder))");
const Question = document.getElementById("((Placeholder))");
var QNum = 0;

const Questions = [
    {Que: "Melyik évben keletkezett az Ágnes asszony?", A1: "1846", A2: "1877", A3: "1865", A4:"1853", CA: "1853", R: "Arany a balladát nagykőrösi évei alatt, 1853-ban írta."},
    {Que: "Mit mos Ágnes asszony a patakban?", A1: "Ruhát a családnak", A2: "Véres lepedőt", A3: "Fehér kendőt", A4:"A szerető ruháját", CA: "Véres lepedőt", R: "A véres lepedő a férje meggyilkolásának nyoma, ezt próbálja kimosni."},
    {Que: "Mi a ballada központi konfliktusa?", A1: "A bűn és a lelkiismeret ütközése", A2: "Két család viszálya", A3: "Egy háború és a hazaszeretet", A4:"Szegénység és gazdagság", CA: "A bűn és a lelkiismeret ütközése", R: "A történet a külső igazságszolgáltatás és a belső bűntudat ellentétére épül."},
    {Que: "Melyik balladai sajátosság jellemző az Ágnes asszonyra?", A1: "Vidám, humoros hangvétel", A2: "Részletes, hosszú előtörténet", A3: "Boldog végkifejlet", A4:"Kihagyásos, sűrített szerkesztés", CA: "Kihagyásos, sűrített szerkesztés", R: "A ballada a bűn előzményeit alig mutatja be, a következményekre fókuszál."},
    {Que: "Miért képtelen Ágnes asszony megnyugodni a tett után?", A1: "Mert a lelkiismerete nem hagyja", A2: "Mert a szerető elhagyta", A3: "Mert nincs otthona", A4:"Mert menekülnie kell a hatóságok elől", CA: "Mert a lelkiismerete nem hagyja", R: "A ballada lényege, hogy a bűn nyoma belül él tovább, a tettes elméjében."},
    {Que: "Hol élt Arany János, amikor az Ágnes asszonyt írta?", A1: "Debrecen", A2: "Nagyszalonta", A3: "Pest", A4:"Nagykőrös", CA: "Nagykőrös", R: "1851–1860 között tanárként Nagykőrösön élt, itt keletkezett több híres balladája."}
]

NextKvizBtn.addEventListener("click", function(){
    QNum++;
    Question.innerText=Questions[QNum].Que;
    Answer1Btn.innerText=Questions[QNum].A1;
    Answer2Btn.innerText=Questions[QNum].A2;
    Answer3Btn.innerText=Questions[QNum].A3;
    Answer4Btn.innerText=Questions[QNum].A4;
    Answer1Btn.classList.remove(Correct, Wrong);
    Answer2Btn.classList.remove(Correct, Wrong);
    Answer3Btn.classList.remove(Correct, Wrong);
    Answer4Btn.classList.remove(Correct, Wrong);
})

AnswerBtns.addEventListener("click", function(){

})



switch (Questions[QNum].CA) {
    case A1:
        Answer1Btn.classList.add(Correct);
        Answer2Btn.classList.add(Wrong);
        Answer3Btn.classList.add(Wrong);
        Answer4Btn.classList.add(Wrong);
        break;
    case A2:
        Answer1Btn.classList.add(Wrong);
        Answer2Btn.classList.add(Correct);
        Answer3Btn.classList.add(Wrong);
        Answer4Btn.classList.add(Wrong);
        break;
    case A3:
        Answer1Btn.classList.add(Wrong);
        Answer2Btn.classList.add(Wrong);
        Answer3Btn.classList.add(Correct);
        Answer4Btn.classList.add(Wrong);
        break;
    case A4:
        Answer1Btn.classList.add(Wrong);
        Answer2Btn.classList.add(Wrong);
        Answer3Btn.classList.add(Wrong);
        Answer4Btn.classList.add(Correct);
        break;
    default:
        alert("Oh it's the wrong number, the wrong number song! We're very very sorry that we got it wrong!");
        break;
}