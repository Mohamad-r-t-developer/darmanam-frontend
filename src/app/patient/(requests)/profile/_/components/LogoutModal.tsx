export default function LogoutModal() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3>آیا واقعا میخواهید از برنامه خارج شوید؟</h3>
      <div className="w-full flex items-center gap-4">
        <button className="flex-1 py-2 text-sm font-medium text-neutral-0 rounded-primary-1 bg-primary-500">خروج</button>
        <button className="flex-1 py-2 text-sm font-medium text-tertiary-500 border border-tertiary-500 rounded-primary-1">انصراف</button>
      </div>
    </div>
  )
}