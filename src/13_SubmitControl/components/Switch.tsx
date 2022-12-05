type Input = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

/**
 * 表示/非表示を切り替えるためのコンポーネント
 */
export const Switch: React.FC<Input> = ({ label, checked, onChange }) => {
  return (
    <>
      <label>
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
      <br />
    </>
  );
};
