export default function LandingAmar() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="font-bold text-neutral-500">آمار به روز درمانم</h2>
      <div className="w-full grid grid-cols-2 gap-6 grid-rows-2">
        <SingleAmar title="تعداد کاربران ثبت نام شده" amar="100 نفر" />
        <SingleAmar title="تعداد خدمات انجام شده" amar="500 عدد" />
        <SingleAmar title="تعداد پرستاران تا به امروز" amar="20 نفر" />
        <SingleAmar title="میانگین امتیاز پرستاران" amar="4.5" />
      </div>
    </div>
  );
}

function SingleAmar({ title, amar }: { title: string; amar: string }) {
  const words = title.split(" ");
  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");

  return (
    <div className="relative p-6 text-sm  rounded-primary-2 min-h-20 border border-primary-300 flex flex-col items-center justify-center bg-gradient-to-t from-primary-200 to-primary-50">
      <p>{firstLine}</p>
      <p>{secondLine}</p>
      <p className="absolute bottom-0 min-w-20 text-center rounded-primary-2 text-neutral-0 py-1 px-2 translate-y-1/2 bg-primary-700">
        {amar}
      </p>
    </div>
  );
}
