export default function Input({ value, onChange }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};
