import Slider from "@/components/Slider";
import Image from "next/image";
import SingleHealthPackage from "./_/components/SingleHealthPackage";
import Services from "./_/components/Services";
import { getAllServicesApi } from "@/services/servicesService";
import Link from "next/link";

export default async function page() {
  const { data: services } = await getAllServicesApi();
  return (
    <div className="w-full flex pt-4 flex-col gap-8 items-center">
      <div className="w-[90%]">
        <Slider
          indicatorColors="bg-neutral-0"
          indicatorBottomPosition="bottom-2"
          slides={[<SingleSlide key={0} />, <SingleSlide key={1} />, <SingleSlide key={2} />]}
        />
      </div>
      {/* services */}
      <h2 className="font-medium">سرویس های درمانی</h2>
      <Services servicesList={services} />
      <h2 className="font-medium">آموزش</h2>
      <Link
        href="/patient/blogs"
        className="bg-secondary-200 text-neutral-0 w-[90%] rounded-primary-2 flex items-center justify-center h-10"
      >
        رفتن به صفحه آموزش
      </Link>
      {/* packages */}
      <div className="w-full flex flex-col gap-4 items-center">
        <h2 className="font-medium">پکیج های درمانی</h2>
        <div className="w-[90%] flex items-center gap-2 scrollbar-hide overflow-x-auto p-1">
          <SingleHealthPackage />
          <SingleHealthPackage />
        </div>
      </div>
    </div>
  );
}

function SingleSlide() {
  return (
    <div className="aspect-[2/1] rounded-primary-1 relative overflow-hidden">
      <Image src="/images/banner.png" alt="slide" fill className="object-cover object-center" />
    </div>
  );
}
