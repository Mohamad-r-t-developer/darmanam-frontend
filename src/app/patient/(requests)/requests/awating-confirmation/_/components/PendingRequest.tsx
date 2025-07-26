import { RequestStatusType } from "@/types/requestTypes";
import RequestStatus from "./RequestStatus";
import RequestDetail from "@/components/RequestDetail";
import RequestActions from "@/components/RequestActions";

type PendingRequestProps = {
  status: RequestStatusType;
};

export default function PendingRequest({ status }: PendingRequestProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <RequestStatus status={status} />
      {/*  */}
      <RequestDetail />
      <RequestActions requestStatus={status} nurseStatus="on-the-way" />
    </div>
  );
}
