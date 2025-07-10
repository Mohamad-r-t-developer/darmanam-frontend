import { DoneSvg } from "@/ui/icon";


type RequestRegisterProps = {
  title: string;
};

export default function RequestRegister({ title }: RequestRegisterProps) {
  return (
    <div className="w-full flex items-center gap-2">
      <div className="p-1 flex items-center text-neutral-Pure_White justify-center rounded-full bg-secondary-400">
        <DoneSvg className="w-5 h-5" />
      </div>
      <h3 className="font-medium">{`درخواست ${title} شما ثبت شد !`}</h3>
    </div>
  );
}
