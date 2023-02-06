export default function Input({ value, onChange, onSubmit }: InputProps) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="first-name">Input your first name:</label>
      <input
        required
        id="first-name"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="submit-button" type="submit">
        MAKE ME A SWEET TATOO!
      </button>
    </form>
  );
}

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
