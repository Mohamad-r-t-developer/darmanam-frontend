export default function Costs() {
  return (
    <div className="w-full flex flex-col gap-4 bg-neutral-Pure_White p-4 text-sm">
      <div className="w-full flex items-center justify-between">
        <span>هزینه خدمت انجام شده:</span>
        <span className="font-medium">56,000 تومان</span>
      </div>
      <div className="w-full flex items-center justify-between">
        <span>هزینه زمان اضافه:</span>
        <span className="font-medium">20,000 تومان</span>
      </div>
      <div className="w-full flex items-center justify-between">
        <span>هزینه ایاب و ذهاب:</span>
        <span className="font-medium">30,000 تومان</span>
      </div>
      <div className="w-full flex items-center justify-between">
        <span>فاکتور دارو:</span>
        <span className="font-medium">290,000 تومان</span>
      </div>
      <div className="w-full flex items-center justify-between">
        <span>هزینه تهیه دارو:</span>
        <span className="font-medium">20,000 تومان</span>
      </div>
      <div className="w-full flex items-center font-medium justify-between">
        <span className="">کل هزینه با احتساب تخفیف</span>
        <span className="font-bold">140,000 تومان</span>
      </div>
    </div>
  );
}
