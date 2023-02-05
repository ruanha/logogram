export default function Input({ value, onChange }: InputProps) {
  return (
    <form>
      <label htmlFor="first-name">Input your first name:</label>
      <input
        required
        id="first-name"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
}

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};
