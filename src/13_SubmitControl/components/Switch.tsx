type Input = {
  checked: boolean;
  onChange: () => void;
};

/**
 * 表示/非表示を切り替えるためのコンポーネント
 */
export const Switch: React.FC<Input> = ({ checked, onChange }) => {
  return (
    <>
      <label>
        {checked ? "表示" : "非表示"}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
      <br />
    </>
  );
};
