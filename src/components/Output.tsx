export default function Output({ value }: { value: string }) {
  return (
    <div className="output-box">
      <div className="arm">
        <div className="output-text">约翰</div>
      </div>

      <div className="palm"></div>

      <div className="fingers">
        <div className="finger"></div>
        <div className="finger"></div>
        <div className="finger"></div>
        <div className="finger"></div>
      </div>
    </div>
  );
}
