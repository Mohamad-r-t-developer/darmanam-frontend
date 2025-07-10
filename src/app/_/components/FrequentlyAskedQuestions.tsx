"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const questions = [
  { title: "مجوز فعالیت", answer: "توضیحات مجوز فعالیت" },
  { title: "مدارک پرستاران", answer: "توضیحات مدارک پرستاران" },
  { title: "نحوه محاسبه هزینه خدمات", answer: "توضیحات نحوه محاسبه هزینه خدمات" },
  { title: "همکاری بیمه ها", answer: "توضیحات همکاری بیمه ها" },
  { title: "پرستار اطفال", answer: "توضیحات پرستاران مخصوص اطفال" },
];

export default function FrequentlyAskedQuestions() {
  const [activeQuestion, setActiveQuestion] = useState(questions[0]);

  const selectHandler = (title: string) => {
    const selectedQuestion = questions.find((question) => question.title === title);
    if (selectedQuestion) setActiveQuestion(selectedQuestion);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="font-bold text-neutral-500">سوالات متداول</h2>
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col gap-4">
          {questions.map((question) => {
            const isActive = question.title === activeQuestion.title;
            return (
              <button
                onClick={() => selectHandler(question.title)}
                key={question.title}
                className={`${isActive ? "text-neutral-0 bg-primary-500 rounded-l-primary-1 rounded-r-lg" : "bg-primary-50 text-primary-300 rounded-lg"} text-xs  h-12 transition-all duration-300 ease-out px-4`}
              >
                {question.title}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <div className="col-span-2 border text-secondary-950 text-xs border-primary-200 rounded-primary-1 p-4">
            <motion.div
              key={activeQuestion.title}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {activeQuestion.answer}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
