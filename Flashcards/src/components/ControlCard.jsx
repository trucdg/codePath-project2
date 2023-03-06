import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";

const ControlCard = () => {
  // in the library array, the first component will be the start-intro card,
  // the next cards will store question-answer pairs
  let cardLibrary = [
    {
      question: "Start!",
      answer: "Press the arrow to start the flashcards :)",
    },
    {
      question: "What is 'Encapsulation'?",
      answer:
        "Encapsulation is bundling data and methods that work on that data into one unit, like a class in Java. Encapsulation can also refer to a way to restrict the direct access to some components of an object.",
    },
    {
      question: "What is 'Coupling' in software engineering?",
      answer:
        "Coupling refers to the degree of interdependence between software modules. High coupling means that modules are closely connected and changes in one module may affect other modules. Low coupling means that modules are independent and changes in one module have little impact on other modules.",
    },
    {
      question: "What are the various phases of SDLC?",
      answer:
        "- Requirement Analysis, Design, Develop, Testing and Maintenance ",
    },
    {
      question: "What is Object Oriented-Programming (OOP)?",
      answer:
        "OOP is a “style” of programming characterized by the identification of classes of objects closely linked with the methods (functions) and attributes with which they are associated.",
    },
    {
      question: "What are the 4 basics of OOP?",
      answer: "Abstraction, Encapsulation, Inheritance, Polymorphism",
    },
    {
      question: "What is 'Polymorphism' in OOP?",
      answer:
        "Polymorphism is an OOP concept that refers to the ability of objects to take on multiple form. It is the ability of a programming language to present the same interface for several different underlying data types.",
    },
    {
      question: "What is 'Caching'?",
      answer:
        "Caching is a mechanism in which a subset of data is stored in a computer’s memory so that future requests for that data are served up faster than making costly requests to databases.",
    },
    {
      question: "What is an Application Programming Interface (API)?",
      answer:
        "An API is a set of definitions and protocols to build a software and enable that software to communicate with different softwares using requests and responses.",
    },
    {
      question: "What does CRUD stand for in programming?",
      answer:
        "CRUD stands for create, read, update and delete. They are the four basic operations of persistent data elements.",
    },
  ];

  const [cardNum, setCardNum] = useState(cardLibrary[0]);
  const [isQuestion, setIsQuestion] = useState(true);

  const clickFlipCardHandler = () => {
    setIsQuestion(!isQuestion);
  };

  const clickNextCardHandler = () => {
    // randomly pick a next card number ranging from [1, cardLibrary.length - 1]
    // since we don't pick the first card (which is the start card)
    let nextCardNum = Math.floor(Math.random() * (cardLibrary.length - 1)) + 1;
    setIsQuestion(true);
    setCardNum(cardLibrary[nextCardNum]);
  };

  return (
    <div>
      <div className="card" onClick={clickFlipCardHandler}>
        {isQuestion ? (
          <QuestionCard question={cardNum.question} />
        ) : (
          <AnswerCard answer={cardNum.answer} />
        )}
      </div>
      <button className="nextCard" onClick={clickNextCardHandler}>
        Next Card <i className="fa-solid fa-circle-chevron-right"></i>
      </button>
    </div>
  );
};

export default ControlCard;
