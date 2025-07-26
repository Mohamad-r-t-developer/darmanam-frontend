
import FrequentlyAskedQuestions from "./_/components/FrequentlyAskedQuestions";
import LandingAmar from "./_/components/LandingAmar";
import LandingFooter from "./_/components/LandingFooter";
import LandingHeader from "./_/components/LandingHeader";
import LandingSlider from "./_/components/LandingSlider";
import LandingWhyWe from "./_/components/LandingWhyWe";
import NurseRequestFlow from "./_/components/NurseRequestFlow";
import ProvidedServices from "./_/components/ProvidedServices";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <LandingHeader />
      <div className="w-full flex-1 h-[calc(100%-80px)]  overflow-y-auto scrollbar-hide">
        <div className="space-y-14 p-4">
          <LandingSlider />
          <ProvidedServices />
          <LandingWhyWe />
          <NurseRequestFlow />
          <LandingAmar />
          <FrequentlyAskedQuestions />
        </div>
        <LandingFooter />
      </div>
    </div>
  );
}
