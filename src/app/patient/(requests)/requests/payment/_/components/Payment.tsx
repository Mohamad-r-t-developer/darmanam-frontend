import RequestDetail from "@/components/RequestDetail";
import Costs from "./Costs";
import Discount from "./Discount";
import PaymentMethode from "./PaymentMethode";
import RequestActions from "@/components/RequestActions";


export default function Payment() {
  return (
    <div className="w-full flex flex-col gap-1">
      <RequestDetail />
      <Discount />
      <Costs />
      <PaymentMethode />
      <RequestActions requestStatus="founded" nurseStatus="finish" />
    </div>
  );
}
