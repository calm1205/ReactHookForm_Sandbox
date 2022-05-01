# input のコンポーネント化

## useFormContext

input のコンポーネント内で useFormContext を活用することで親コンポーネントの context にアクセスが可能になる。<br>
useFormContext を使うことで子の input のコンポーネントにわざわざ register プロパティを渡す必要がなくなる<br>
ただその場合は input のコンポーネントを FormProvider でラップしている必要がある。

## FormProvider

子のコンポーネントが context にアクセスできるようにするために必要。
