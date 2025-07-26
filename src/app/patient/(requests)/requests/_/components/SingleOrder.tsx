
import { AddSvg, DeleteSvg, MinusSvg } from "@/ui/icon";
import transformCategoryToPersian from "@/utility/transformCategoryToPersian";

export default function SingleOrder({ request }) {

  const categoryTitle = transformCategoryToPersian(request.category);
  const increase = () => {};
  const decrease = () => {};
  return (
    <div className="w-full p-4 flex flex-col shadow-primary-2 rounded-primary-1 border border-neutral-200">
      {/* header */}
      <div className="w-full flex flex-col gap-4 pb-4 border-b border-neutral-200">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-medium">نوع درخواست</h3>
          <h3 className="font-medium">{categoryTitle}-{request.serviceName}</h3>
        </div>
        <div className="w-full flex items-center justify-between">
          <h3>میزان جراحت</h3>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2 py-2 border border-neutral-200 rounded-primary-2">
              <button onClick={increase} type="button" className="px-2">
                <AddSvg className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1 text-[11px] font-bold">
                <span>cm</span>
                <span>{request.woundLength}</span>
              </div>
              <button onClick={decrease} type="button" className="px-2 ">
                <MinusSvg className="w-4 h-4" />
              </button>
            </div>
            <DeleteSvg className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-2 pt-3">
        <h4>هزینه درخواست</h4>
        <span className="font-bold text-[11px]">25000 تومان</span>
      </div>
    </div>
  );
}
