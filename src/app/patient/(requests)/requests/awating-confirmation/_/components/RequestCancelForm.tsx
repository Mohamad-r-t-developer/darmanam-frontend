export default function RequestCancelForm() {
  return (
    <form className="w-full space-y-6">
      <div className="w-full flex flex-col gap-4">
        <label htmlFor="">علت لغو را انتخاب کنید</label>
        <select className="outline-none w-full text-sm bg-neutral-Pure_White border border-r-neutral-200 rounded-primary-1 p-2">
          <option value="">انتخاب کنید</option>
          <option value="">عدم قبول درخواست توسط پرستار</option>
          <option value="">انتظار طولانی</option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="">توضیح علت لغو</label>
        <textarea className="resize-none outline-none text-sm w-full h-32 border border-neutral-200 p-4 rounded-primary-1" />
      </div>
      <div className="w-full flex items-center gap-4 text-sm font-medium">
        <button className="flex-1 bg-primary-500 rounded-primary-1 py-3 text-neutral-Pure_White">ارسال</button>
        <button className="flex-1 text-tertiary-500 border py-3 rounded-primary-1 border-tertiary-500">انصراف</button>
      </div>
    </form>
  );
}
