import { GetAddressType } from "@/types/addressTypes";
import { DeleteSvg, EditSvg } from "@/ui/icon";

type SingleAddressProps = {
  address: GetAddressType;
  onDelete: () => void;
};

export default function SingleAddress({
  address: { fullAddress, addressDetails, selectedAsDefault, title },
  onDelete,
}: SingleAddressProps) {
  return (
    <div
      className={`${selectedAsDefault ? "border-2 border-primary-500" : "border border-neutral-200"} w-full flex flex-col bg-neutral-Pure_White gap-4 shadow-primary-2 rounded-primary-1   p-4`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-medium cursor-pointer">{title}</h3>
          {selectedAsDefault && (
            <span className="text-xs font-bold text-primary-500">آدرس پیش فرض</span>
          )}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button>
            <EditSvg className="w-7 h-7" />
          </button>
          <button onClick={onDelete}>
            <DeleteSvg className="w-5 h-5" />
          </button>
        </div>
      </div>
      <p className="text-xs font-light leading-5">{fullAddress + " " + addressDetails}</p>
    </div>
  );
}
