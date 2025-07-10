export default function Discount() {
  return (
    <div className="w-full flex items-center gap-2 p-4 bg-neutral-Pure_White">
      <input
        type="text"
        className="outline-none text-xs rounded-primary-2 flex-1 p-4 border border-neutral-200"
      />
      <button className="bg-primary-500 text-neutral-0 rounded-primary-2 text-sm px-2 py-3">
        اعمال کد تخفیف
      </button>
    </div>
  );
}
