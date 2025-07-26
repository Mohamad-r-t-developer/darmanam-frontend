import { ServiceCategoryType } from "@/types/serviceTypes";

export default function transformCategoryToPersian(category: ServiceCategoryType) {
  switch (category) {
    case "DRESSING":
      return "پانسمان";
    case "INJECTION":
      return "تزریقات";
    case "CHECKUP":
      return "چک آپ";
    case "ADVANCED_CARE":
      return "مراقبت های تخصصی";
  }
}
