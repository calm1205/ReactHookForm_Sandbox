# ReactHookForm の最小構成

## useForm

useForm が全ての起点となる hook.<br>
返り値の regitser メソッドを各フォームの props として渡すことで`form`タグ内の input を制御できる。

useForm に name 属性の型を渡すことで register に渡せる name 属性を縛ることができる。

## register

第一引数は input の name 属性<br>

## hundleSubmit

引数は callback 関数<br>
callback 関数の引数は register された input の value を集めたオブジェクト
