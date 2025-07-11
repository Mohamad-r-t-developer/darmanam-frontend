import {
  InstagramSvg,
  LoacationSvg,
  Logo2CustomSvg,
  Logo3CustomSvg,
  PhoneSvg,
  Share2Svg,
  TelegramSvg,
  TwitterSvg,
  WhatsappSvg,
  YoutubeSvg,
} from "@/ui/icon";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="w-full bg-gradient-to-t from-primary-800 p-4 to-primary-700 flex flex-col gap-6">
      {/* logo */}
      <div className="w-full flex items-center justify-center gap-4 text-primary-400">
        <Logo3CustomSvg className="w-10" />
        <Logo2CustomSvg className="w-14" />
      </div>
      {/*links */}
      <div className="w-full text-neutral-0 space-y-4">
        <h3 className="font-bold">لینک های پرکاربرد</h3>
        <div className="w-full grid grid-cols-2 text-sm gap-4">
          <Link href="/">تماس با ما</Link>
          <Link href="/">همکاری با ما</Link>
          <Link href="/">حریم خصوصی</Link>
          <Link href="/">وبلاگ</Link>
          <Link href="/">شرایط استفاده</Link>
          <Link href="/">نحوه درخواست پرستار</Link>
        </div>
      </div>
      {/* social media */}
      <div className="w-full space-y-4 text-neutral-0">
        <h3 className="font-bold">شبکه های اجتماعی</h3>
        <div className="w-full flex items-center justify-center gap-4 text-primary-800">
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-primary-3 bg-primary-50"
          >
            <TelegramSvg className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-primary-3 bg-primary-50"
          >
            <WhatsappSvg className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-primary-3 bg-primary-50"
          >
            <TwitterSvg className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-primary-3 bg-primary-50"
          >
            <InstagramSvg className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-primary-3 bg-primary-50"
          >
            <YoutubeSvg className="w-5 h-5" />
          </Link>
        </div>
      </div>
      {/* Introducing to friends */}
      <div className="w-full text-primary-50">
        <Link
          href=""
          className="flex items-center h-12 rounded-primary-1 justify-center gap-4 border-2 border-primary-300 bg-primary-600"
        >
          <span className="text-sm font-medium">معرفی به دوستان</span>
          <Share2Svg className="w-5 h-5" />
        </Link>
      </div>
      {/* address and tel */}
      <div className="w-full space-y-4 text-neutral-0">
        <h3 className="font-bold">نشانی و شماره تماس ما</h3>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex items-center gap-4">
            <div className="bg-primary-700 text-primary-400 rounded-full p-1">
              <LoacationSvg className="w-5 h-5" />
            </div>
            <span className="text-sm">
              قم - قم - بلوار امین - کوچه 14 - فرعی پنجم - پلاک 213 - طبقه چهارم - واحد ششم
            </span>
          </div>
          <a href="tel:02538874142">
            <div className="w-full flex items-center gap-4">
              <div className="bg-primary-700 text-primary-400 rounded-full p-1">
                <PhoneSvg className="w-5 h-5" />
              </div>
              <span className="text-sm">025-38874142</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
