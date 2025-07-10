type RequestHeaderProps = {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function RequestHeader({ title, Icon }: RequestHeaderProps) {
  return (
    <header className="bg-neutral-0 w-full h-14 flex items-center px-4 gap-2 border-b pt-4 pb-2 border-neutral-200">
      <Icon className="w-6 h-6" />
      <h2 className="font-medium">{title}</h2>
    </header>
  );
}
