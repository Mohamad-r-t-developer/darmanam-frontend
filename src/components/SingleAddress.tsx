import { DeleteSvg, EditSvg } from "@/ui/icon";


type SingleAddressProps = {
  address: string;
  addressTitle: string;
};

export default function SingleAddress({ address, addressTitle }: SingleAddressProps) {
  return (
    <div className="w-full flex flex-col bg-neutral-Pure_White gap-4 shadow-primary-2 rounded-primary-1 border border-neutral-200 p-4">
      <div className="w-full flex items-center justify-between">
        <h3 className="font-medium">{addressTitle}</h3>
        <div className="flex items-center justify-center gap-4">
          <EditSvg className="w-7 h-7" />
          <DeleteSvg className="w-5 h-5" />
        </div>
      </div>
      <p className="text-xs font-light leading-5">{address}</p>
    </div>
  );
}
