const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0
let availableQuestion = [];

let questions = [{question:"Inside Which HTML Element Do We Put JavaScript?" , 
    choice1: "<script>" , 
    choice2: "<javascript>" ,
    choice3: "<js>" , 
    choice4:"<scripting>" , 
    answer:1
} , 
{question:"'What Is The Correct Syntax For Referring To An External Script Called 'xxx.js'" , 
    choice1:"<script href= 'xxx.js'>",
    choice2:"<script name= 'xxx.js'>",
    choice3:"<script src= 'xxx.js'>",
    choice4:"<script file= 'xxx.js'>",
    answer: 3
} ,
{question:
    choice1:
    choice2:
    choice3:
    choice4:
}]