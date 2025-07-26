import { RequestStatusType } from "@/types/requestTypes";
import NurseDetail from "./NurseDetail";
import RequestDetail from "@/components/RequestDetail";
import RequestActions from "@/components/RequestActions";

type FoundedNurseProps = {
  status: RequestStatusType;
};

export default function FoundedNurse({ status }: FoundedNurseProps) {
  return (
    <div className="w-full h-full flex flex-col gap-1">
      {/* nurse detail */}
      <NurseDetail status="in-progress" />
      {/* request detail */}
      <RequestDetail />
      <RequestActions requestStatus={status} nurseStatus="in-progress" />
    </div>
  );
}
