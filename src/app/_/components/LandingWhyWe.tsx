import { IconType } from "@/types/iconType";
import {
  ConflictSvg,
  MedicalDoctorSvg,
  MonyTransferSvg,
  NurseSvg,
  OnlineSupportSvg,
  StarHotelSvg,
} from "@/ui/icon";

const reasons = [
  { title: "پرستاران تایید شده و مجرب", Icon: MedicalDoctorSvg },
  { title: "سرعت و راحتی", Icon: ConflictSvg },
  { title: "پشتیبانی 24 ساعته", Icon: OnlineSupportSvg },
  { title: "امتیاز دهی به پرستار", Icon: StarHotelSvg },
  { title: "پرداخت امن", Icon: MonyTransferSvg },
  { title: "شناخت پرستار", Icon: NurseSvg },
];

export default function LandingWhyWe() {
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <h2 className="font-bold text-neutral-500">چرا ما؟</h2>
      <div className="w-full grid grid-cols-2 gap-4">
        {reasons.map((r) => (
          <SingleReason key={r.title} title={r.title} Icon={r.Icon} />
        ))}
      </div>
    </div>
  );
}

function SingleReason({ title, Icon }: { title: string; Icon: IconType }) {
  return (
    <div className="bg-primary-50 rounded-primary-1 flex gap-2 items-center p-2">
      <div className="text-neutral-Pure_White bg-primary-700 shadow-primary-2 w-10 h-10 rounded-primary-2 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-xs font-bold text-primary-700">{title}</p>
    </div>
  );
}
