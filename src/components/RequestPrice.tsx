type RequestPriceProps = {
  price: number;
  buttonTitle?: string;
  disabled?: boolean;
};

export default function RequestPrice({
  price,
  buttonTitle = "ادامه",
  disabled = false,
}: RequestPriceProps) {
  return (
    <div className="fixed max-w-screen-xs m-auto bottom-16 h-14 w-full flex items-center gap-4 p-4 bg-neutral-100">
      <button
        type="submit"
        disabled={disabled}
        className={`disabled:bg-primary-100 bg-primary-500 py-3 flex-1 text-sm text-neutral-0 rounded-primary-1`}
      >
        {buttonTitle}
      </button>
      <div className="flex-1 flex flex-col items-center justify-center">
        <span className="text-neutral-400 text-[11px]">جمع هزینه های درمانی</span>
        <div className="flex items-center gap-1">
          <span className="font-bold">{price.toLocaleString("fa-IR")}</span>
          <span className="text-neutral-400 text-[11px]">تومان</span>
        </div>
      </div>
    </div>
  );
}
