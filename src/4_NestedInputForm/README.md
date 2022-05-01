# input のコンポーネント化

## useFormContext

input のコンポーネント内で useFormContext を活用することで親コンポーネントの context にアクセスが可能になる。<br>
ただその場合は input のコンポーネントを FormProvider でラップしている必要がある。

## FormProvider

子のコンポーネントが context にアクセスできるようにするために必要
