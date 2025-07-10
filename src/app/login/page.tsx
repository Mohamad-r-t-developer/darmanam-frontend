/* eslint-disable react/jsx-key */
import Slider from "@/components/Slider";
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
        <div className="absolute w-[80%] top-[20px] left-[50%] -translate-x-[50%]">
          <Slider slides={[<SingleSlide />, <SingleSlide />, <SingleSlide />]} indicatorBottomPosition="bottom-0" />
        </div>
      </div>
      {/* login input */}
      <LoginForm />
    </div>
  );
}
export default page;

function SingleSlide() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        style={{
          backgroundImage: `url("/images/slider.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[200px]"
      ></div>
      <p className="font-semibold text-justify text-xs text-secondary-950 py-4 px-2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است، چاپگرها و متون بلکه روزنامه و مجله در ستون لورم ایپسوم متن ساختگی با تولید سادگی
      </p>
    </div>
  );
}
