interface ToggleSwitchProps {
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

export default function ToggleSwitch({
  label,
  checked,
  onChange,
}: ToggleSwitchProps) {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <label className="flex items-center justify-between cursor-pointer gap-2">
      {label && <span className="text-sm">{label}</span>}
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleToggle}
        />
        <div className="w-8 h-2 rounded-full bg-neutral-200 transition-colors duration-300" />
        <div
          className={`absolute -top-[4px] left-0 w-4 h-4 rounded-full transition-transform duration-300 ${
            checked ? "translate-x-4 bg-primary-500" : "translate-x-0 bg-neutral-300"
          }`}
        />
      </div>
    </label>
  );
}
