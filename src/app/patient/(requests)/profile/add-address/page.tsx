import AddAddressForm from "@/components/AddAddressForm";
import PageHeader from "@/components/PageHeader";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <PageHeader title="افزودن آدرس" />
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
        <AddAddressForm />
      </div>
    </div>
  );
}
