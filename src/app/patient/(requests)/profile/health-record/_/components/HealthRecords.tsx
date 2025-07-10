import { EditSvg, HealthGraphSvg } from "@/ui/icon";

export default function HealthRecords() {
  return (
    <div className="w-full h-full flex flex-col p-4">
      <SingleHealthRecord user="یاسر" />
    </div>
  );
}

function SingleHealthRecord({ user }: { user: string }) {
  return (
    <div className="w-full rounded-primary-1 bg-neutral-Pure_White shadow-primary-2 flex items-center justify-between px-4 py-2">
      <div className="flex items-center justify-center gap-2">
        <HealthGraphSvg className="w-5 h-5 text-neutral-300" />
        <span className="text-sm font-medium">{user}</span>
      </div>
      <EditSvg className="w-7 h-7" />
    </div>
  );
}
