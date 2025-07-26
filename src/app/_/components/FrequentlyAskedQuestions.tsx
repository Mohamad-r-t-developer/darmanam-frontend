"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const questions = [
  { title: "مجوز فعالیت", answer: "تمامی خدمات درمانی، پرستاری و مراقبتی که از طریق این سامانه در منزل ارائه می‌شوند، تحت مجوز رسمی از دانشگاه علوم پزشکی و مطابق با مقررات وزارت بهداشت، درمان و آموزش پزشکی انجام می‌گیرند. این مجوز، تضمین‌کننده‌ی نظارت تخصصی، ایمنی و کیفیت خدمات سلامت در منزل است." },
  {
    title: "مدارک پرستاران",
    answer:
      "همه پرستاران ما دارای مدرک دانشگاهی معتبر پرستاری از دانشگاه‌های زیر نظر وزارت بهداشت هستند و سابقه کار بالینی در بیمارستان‌های دولتی و خصوصی دارند. همچنین، مدارک شناسایی و صلاحیت حرفه‌ای آن‌ها پیش از شروع همکاری به دقت بررسی شده است.",
  },
  {
    title: "نحوه محاسبه هزینه خدمات",
    answer:
      "هزینه هر خدمت پیش از ثبت نهایی، به‌صورت شفاف در اپلیکیشن نمایش داده می‌شود. مبلغ پرداختی بر اساس نوع خدمت، مدت زمان، تخصص پرسنل و مسافت اعزام محاسبه شده و هیچ هزینه پنهانی وجود ندارد.پرداخت‌ها به‌صورت آنلاین و از طریق درگاه بانکی معتبر انجام می‌شود. فاکتور رسمی نیز پس از ارائه خدمت در دسترس کاربران قرار می‌گیرد.",
  },
  {
    title: "همکاری بیمه ها",
    answer:
      "در حال حاضر برخی از خدمات با هماهنگی بیمه‌های پایه و تکمیلی در حال بررسی برای پوشش بیمه‌ای هستند. به‌محض نهایی شدن توافق‌ها، امکان استفاده از خدمات با تخفیف یا پرداخت از سوی بیمه برای کاربران فراهم خواهد شد.تا آن زمان، کاربران می‌توانند پس از دریافت خدمت، فاکتور رسمی جهت ارائه به بیمه تکمیلی خود دریافت کنند..",
  },
  {
    title: "پرستار اطفال",
    answer:
      "خدمات پرستاری اطفال توسط پرستاران آموزش‌دیده و با تجربه‌ی بالینی در بخش‌های کودکان و نوزادان بیمارستان‌ها انجام می‌شود. این خدمات شامل مراقبت از نوزاد تازه‌متولدشده، انجام تزریقات، کنترل تب و علائم حیاتی و همراهی کودک در زمان بیماری است.",
  },
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
              className="overflow-hidden leading-8"
            >
              {activeQuestion.answer}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
