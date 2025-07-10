import { useRef, useState } from "react";

interface FileInputProps {
  onFilesSelected: (files: FileList) => void;
}
export default function FileInput({ onFilesSelected }: FileInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSelectedFile, setIsSelectedFile] = useState(false);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(e.target.files);
      setIsSelectedFile(true);
    }
  };

  return (
    <div className="w-full space-y-4">
      <label className="text-sm font-medium">آپلود فایل یا تصویر پزشکی</label>
      <div className="w-full bg-neutral-100 rounded-primary-1 h-12  flex items-center justify-between">
        <span className="flex-1 text-center text-sm truncate text-neutral-300">
          {isSelectedFile ? "فایل ها انخاب شدند" : " فایلی انتخاب نشده است"}
        </span>
        <button
          onClick={clickHandler}
          className="h-full bg-primary-500 text-neutral-0 px-4 py-3 rounded-primary-1 font-medium text-sm"
        >
          انتخاب فایل
        </button>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleChange}
          multiple
          className="hidden"
        />
      </div>
      <span className="text-[11px] text-neutral-300">آزمایشات / عکس از زخم و ....</span>
    </div>
  );
}
