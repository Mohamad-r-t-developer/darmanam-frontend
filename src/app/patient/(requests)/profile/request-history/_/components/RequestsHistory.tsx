type Request = {
  Type: string;
  requestDate: string;
  patientName: string;
  nurseName: string;
  status: "رزرو شده" | "انجام شده" | "کنسل شده" | "در حال انجام";
  reservationDate: string;
  paymentStatus: "نقدی" | "آنلاین";
  price: string;
};

const statusStyleMap: Record<string, string> = {
  "انجام شده": "text-secondary-400",
  "رزرو شده": "text-primary-500",
  "کنسل شده": "text-tertiary-500",
  "در حال انجام": "text-danger-300",
};

const sampleRequests: Request[] = [
  {
    Type: "پانسمان",
    requestDate: "1403/03/15",
    patientName: "زهرا احمدی",
    nurseName: "الهه رضایی",
    status: "انجام شده",
    reservationDate: "1403/03/16",
    paymentStatus: "آنلاین",
    price: "250,000",
  },
  {
    Type: "پانسمان",
    requestDate: "1403/03/15",
    patientName: "زهرا احمدی",
    nurseName: "الهه رضایی",
    status: "رزرو شده",
    reservationDate: "1403/03/16",
    paymentStatus: "نقدی",
    price: "250,000",
  },
  {
    Type: "پانسمان",
    requestDate: "1403/03/15",
    patientName: "زهرا احمدی",
    nurseName: "الهه رضایی",
    status: "کنسل شده",
    reservationDate: "1403/03/16",
    paymentStatus: "آنلاین",
    price: "250,000",
  },
  {
    Type: "پانسمان",
    requestDate: "1403/03/15",
    patientName: "زهرا احمدی",
    nurseName: "الهه رضایی",
    status: "در حال انجام",
    reservationDate: "1403/03/16",
    paymentStatus: "آنلاین",
    price: "250,000",
  },
];

export default function RequestsHistory() {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <div className="w-full overflow-x-auto scrollbar-hide flex items-center gap-2">
        <span className="bg-neutral-100 cursor-pointer block text-nowrap text-neutral-300 text-sm rounded-primary-1 px-4 py-2">
          همه
        </span>
        <span className="bg-primary-500 cursor-pointer block text-nowrap text-neutral-Pure_White text-sm rounded-primary-1 px-4 py-2">
          درخواست های در حال انجام
        </span>
        <span className="bg-neutral-100 cursor-pointer block text-nowrap text-neutral-300 text-sm rounded-primary-1 px-4 py-2">
          درخواست های انجام شده
        </span>
        <span className="bg-neutral-100 cursor-pointer block text-nowrap text-neutral-300 text-sm rounded-primary-1 px-4 py-2">
          درخواست های کنسل شده
        </span>
        <span className="bg-neutral-100 cursor-pointer block text-nowrap text-neutral-300 text-sm rounded-primary-1 px-4 py-2">
          درخواست های رزرو شده
        </span>
      </div>
      <div className="flex-1 w-full flex flex-col gap-2">
        {sampleRequests.map((req, index) => (
          <SingleRequest key={index} request={req} />
        ))}
      </div>
    </div>
  );
}

function SingleRequest({
  request: {
    Type,
    nurseName,
    patientName,
    price,
    paymentStatus,
    requestDate,
    reservationDate,
    status,
  },
}: {
  request: Request;
}) {
  const render = () => {
    switch (status) {
      case "انجام شده":
        return <InfoRow label="وضعیت پرداخت" value={paymentStatus} />;
      case "رزرو شده":
        return <InfoRow label="تاریخ رزرو" value={reservationDate} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-neutral-Pure_White flex flex-col gap-1 shadow-primary-2 rounded-primary-1 p-4">
      <InfoRow label={Type} value={requestDate} />
      <InfoRow label="نام بیمار" value={patientName} />
      <InfoRow label="نام پرستار" value={nurseName} />
      <InfoRow label="وضعیت" value={status} />
      {render()}
      <InfoRow label="هزینه درخواست" value={price} />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  const baseClass = "text-sm";

  const renderValue = () => {
    if (label === "وضعیت") {
      const colorClass = statusStyleMap[value] || "";
      return <span className={`${baseClass} ${colorClass}`}>{value}</span>;
    }

    return (
      <span className={baseClass}>
        {value} {label === "هزینه درخواست" && "تومان"}
      </span>
    );
  };

  return (
    <div className="w-full flex items-center justify-between">
      <h3>{label}</h3>
      {renderValue()}
    </div>
  );
}
