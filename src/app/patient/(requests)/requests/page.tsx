import RequestHeader from "@/components/RequestHeader";
import FavoriteCardSvg from "@/ui/icon/FavoriteCardSvg";
import OrdersList from "./_/components/OrdersList";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <RequestHeader title="سبد درخواست ها" Icon={FavoriteCardSvg} />
      <div className="flex-1 h-[calc(100%-56px)] pb-14 w-full overflow-y-auto scrollbar-hide">
        <OrdersList />
      </div>
    </div>
  );
}
