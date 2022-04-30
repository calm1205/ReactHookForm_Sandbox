/**
 * core nodejs moduleの1つ。
 * デフォルトでnodejsが提供しているmodule
 */
const path = require("path");

module.exports = {
  entry: "./dist/main.js",
  output: {
    /**
     * [contenthash]をつけることでbundle後のファイル名にフィンガープリントをつけることができる。
     * bundle後のファイル名が必ず同じファイル名だとコードの差分があってもcacheされたbundleファイルをクライアントが読み込んでしまう。
     * フィンガープリントがあることでコードの差分が出るとファイル名も変わるのでコードの差分がある場合はクライアント側でもcacheを破棄して新しいbundleファイルを読み込める。
     */
    filename: "[contenthash]bundle.js",
    /**
     * __dirnameはnodeの変数で絶対パスを返す。
     * path.resolveを活用するのはパスの区切りが/でない場合もあるため。
     * path.resolveを活用すればパスの区切りを環境によって使い分けて結合してくれる
     */
    path: path.resolve(__dirname, "dist"),
  },
};
