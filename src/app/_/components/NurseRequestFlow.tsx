import { DashedLineSvg } from "@/ui/icon";

export default function NurseRequestFlow() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="font-bold text-neutral-500">نحوه درخواست پرستار</h2>
      <div className="w-full  grid grid-cols-3 grid-rows-6">
        <SingleFlow
          title="1- ثبت درخواست"
          className="bg-tertiary-50 col-start-1 col-span-1 text-tertiary-700"
        />
        <DashedLineSvg className="col-start-2 self-end translate-y-2 rotate-180 w-12" />
        <SingleFlow
          title="2- تایید مکان و زمان"
          className="bg-danger-100 text-danger-500 col-start-2 col-span-1 row-start-2"
        />
        <DashedLineSvg className="col-start-2 -translate-y-5 row-start-3 place-self-end w-12" />
        <SingleFlow
          title="3- تایید درخواست توسط پرستار"
          className="bg-tertiary-50 col-start-3 col-span-1 row-start-3  text-tertiary-700"
        />
        <DashedLineSvg className="col-start-3 rotate-[65deg] row-start-4 w-12" />
        <SingleFlow
          title="4- انجام خدمت"
          className="bg-primary-50 text-primary-700 col-start-2 col-span-1 row-start-4"
        />
        <DashedLineSvg className="col-start-1 place-self-end translate-y-2  -rotate-[110deg]  row-start-4 w-12" />
        <SingleFlow
          title="5- پرداخت"
          className="bg-secondary-50 text-secondary-700 col-start-1 col-span-1 row-start-5"
        />
        <DashedLineSvg className="col-start-1 place-self-end -translate-y-6  row-start-6 w-12" />
        <SingleFlow
          title="6- امتیاز دهی"
          className="bg-secondary-700 col-span-1 col-start-2 row-start-6  text-secondary-0"
        />
      </div>
    </div>
  );
}

function SingleFlow({
  title,
  className,
}: {
  title: string;
  className: React.HTMLAttributes<HTMLDivElement>["className"];
}) {
  return (
    <div
      className={`${className} text-center z-[200] flex items-center justify-center font-medium text-sm p-2 rounded-primary-1`}
    >
      {title}
    </div>
  );
}
