# controller

## rendering

register や useFormContext を活用して input のコンポーネントを定義すると onBlur や submit 時に全体再レンダリングが走る。

## name 属性

コンポーネントを generics 付きのコンポーネントにすることで name 属性をリテラル型で縛ることができた。（ただ分かりづらいので非推奨）

```tsx
type Input<T> = {
  name: keyof T & string;
  label: string;
};

/**
 * Genericsのオブジェクトのキーがname属性になる。
 */
export const Component = <T extends { [key: string]: unknown }>(
  props: Input<T>
) => <>...</>;
```

## A component is changing an uncontrolled input to be controlled.

React での controlled と uncontrolled は value を state で管理しているかどうか。<br>
value を state で管理しているにも関わらず上記のエラーが発生する場合は state の初期値が null か undefined になっている可能性がある。

```tsx
export const Input: React.FC<Input> = ({
  name,
  label,
  //  value,
  value = "", // 初期値を設定
  error,
  onChange,
  onBlur,
}) => (
  <>
    <label>{label}</label>
    <input value={value} name={name} onChange={onChange} onBlur={onBlur} />
    <span>{error ?? ""}</span>
    <br />
  </>
);
```
