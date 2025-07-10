export default function RequestDetail() {
  return (
    <div className="w-full flex-1 flex flex-col p-4 bg-neutral-Pure_White">
      <h3 className="font-medium">جزییات درخواست</h3>
      <div className="w-full text-xs flex flex-col gap-4 border-b border-neutral-200 py-4">
        <div className="w-full flex items-center justify-between">
          <span>نوع خدمت</span>
          <span>پانسمان-سوختگی</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span>هزینه خدمت</span>
          <span>25000 تومان</span>
        </div>
      </div>
      <div className="w-full flex flex-col text-xs gap-4 py-4">
        <div className="w-full flex items-center justify-between">
          <span>هزینه ایاب و ذهاب</span>
          <span>40000 تومان</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span>تخفیف خدمات</span>
          <span>10000 تومان</span>
        </div>
        <div className="w-full flex items-center justify-between text-sm font-medium">
          <span className="">کل هزینه با احتساب تخفیف</span>
          <span>55000 تومان</span>
        </div>
      </div>
    </div>
  );
}
