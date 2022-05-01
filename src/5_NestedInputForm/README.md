# input のコンポーネント化

## useFormContext

input のコンポーネント内で useFormContext を活用することで親コンポーネントの context にアクセスが可能になる。<br>
useFormContext を使うことで子の input のコンポーネントにわざわざ register プロパティを渡す必要がなくなる。<br>
register を渡す実装にしているとコンポーネントの Nest が深くなった時に register のバケツリレーが必要になる。<br>
ただその場合は input のコンポーネントを FormProvider でラップしている必要がある。

## FormProvider

子のコンポーネントが context にアクセスできるようにするために必要。

## name 属性の補完

register を直接渡さないのでそのままでは name 属性の補完が聞かない。
アサーションして name 属性の補完を聞かせるのが良い。
