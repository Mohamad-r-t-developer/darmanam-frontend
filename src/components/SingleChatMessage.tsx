type SingleChatMessageProps = {
  message: string;
  type: "send" | "recive";
  owner: string;
};

export default function SingleChatMessage({ message, type, owner }: SingleChatMessageProps) {
  return (
    <div className={`w-full flex ${type === "send" ? "justify-start" : "justify-end"}`}>
      <div
        className={`${type === "send" ? "bg-primary-50 text-neutral-900 rounded-bl-primary-2" : "bg-secondary-50 text-secondary-500 rounded-br-primary-2"} relative  text-[11px]  p-2 rounded-[4px] `}
      >
        <p className="">{message}</p>
        <div
          className={`absolute -bottom-4 ${type === "send" ? "right-0 text-primary-200" : "left-0 text-secondary-200"}  `}
        >
          <span className="text-[9px]">{owner}</span>
        </div>
      </div>
    </div>
  );
}
