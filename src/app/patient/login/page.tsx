import Image from "next/image";
import LoginForm from "./_/components/LoginForm";

function page() {
  return (
    <div className="relative w-full bg-primary-50 h-full">
      <div
        style={{
          backgroundImage: 'url("/images/bg-login.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative w-full bg-secondary-300 h-[490px]"
      >
        <div className="absolute w-[80%] flex flex-col items-center top-[20px] left-[50%] -translate-x-[50%]">
          <div className="w-44 relative aspect-square">
            <Image
              fill
              src="/images/slider.png"
              alt="nurse"
              className="object-cover object-center"
            />
          </div>
          <p className="font-semibold text-xs text-secondary-950 py-4 px-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون لورم ایپسوم متن ساختگی با تولید سادگی
          </p>
        </div>
      </div>
      {/* login input */}
      <LoginForm />
    </div>
  );
}
export default page;
