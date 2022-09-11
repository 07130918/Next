## セクション4: Reactに触れてみる
- 090: propsで子コンポーネントにデータを渡す
- 110: childrenという特別なプロパティ
## セクション5: イベントリスナと状態管理(State)
- 060: オブジェクト型のステートを使う
- 080: ステートを複数のコンポーネントで管理する
## セクション6: JSXの制御とフォームの制御
- 060: 条件分岐付きレンダリング
- 130: ToDoリストを作り、データの受け渡し、preventDefaultを学ぶ
## セクション7: スタイリング
#### スタイリング適用の種類
1. CSSファイルの読み込み(コンポーネントに関係なく適用される)
2. インラインスタイル(パファーマンスが悪く、疑似要素が使えない)
3. CSS Module(将来使用できなくなる可能性大)
4. CSS in JS(jsオブジェクトとしてcssを書く、推奨)

- 040: CSS in JSの使い方
- 050: Chakra UIの使い方

## セクション8: ReactでDOM操作
- 010: 基本的なモーダルの作り方
- 030: useRef
- 040: forwardRef
- 050: useImperativeHandle
## セクション10: 関数型プログラミング
- 020: 関数型プログラミングとは、純粋関数とは
- 060: Reactにおける不変性
## セクション11: React Hooks 様々な状態管理の方法
- 020: useReducerの使い方、useStateとの違い
- 025: useReducer練習問題
- 030: useContextの使い方
- 040: useContextでstateを管理する

![Screen Shot 2022-09-06 at 8 38 00](https://user-images.githubusercontent.com/70265286/189475315-42275163-e020-47c9-9bc8-a60df0c808b3.jpg)
- 050, 060: useContextのリファクタリング
- 065: useContextとuseReducerの組み合わせ
## セクション12: React Hooks useEffectとカスタムフック
### キーワード: 副作用
#### コンポーネントは、JSXを構築する場所であり、JSXの生成に直接関係ない処理は全て副作用として扱われる。
- 020: useEffectと依存配列
- 030: useEffectの戻り値(クリーンアップ処理)
- 040: useEffectのライフサイクル

![useEffect_lifecycle](https://user-images.githubusercontent.com/70265286/188259529-02376652-9d4a-4c06-883d-c705a0069b71.jpg)
- 050: useLayoutEffect
- 070, 075: カスタムフック
## セクション13: ReduxとRedux Toolkit
- 010: Reduxの使い方

![Screen Shot 2022-09-06 at 8 38 56](https://user-images.githubusercontent.com/70265286/189475382-6c567a73-e525-441f-ad46-0d6449ef6f09.jpg)

![Screen Shot 2022-09-10 at 14 15 30](https://user-images.githubusercontent.com/70265286/189475425-9fd664ca-9101-408b-bb93-02b37aa514d9.jpg)
- 030: Redux Toolkitの使い方
- 040: Redux Toolkitにおけるイミュータブルな値の変更
- 050: Redux Thunkで副作用を処理する
- 060: createAsyncThunkで非同期処理のステータスを画面に表示する
- 070: Redux Middlewareの定義
## セクション14: クラスコンポーネント
## セクション15: パフォーマンス最適化
## セクション16: Rest APIでサーバーと通信
## セクション17: Next.js
## セクション18: Next.js
## セクション19: テスト
- 030: 基本的なテストの行い方
- 040: テストをグループ化するdescribe関数
- 050, 055: userEventを使いイベントを発火し挙動を確認する
- 060: 外部APIのテスト
- 070: 外部APIをモック化しテストをアプリ内で完結させる
## セクション20: TypeScript
- 050: オブジェクトの型定義
- 070: 型エイリアス
- 080: 関数の型定義
- 090: ジェネリクス(型引数を受け取る関数を作る)
- 120: propsの型定義
- 150: useStateの型定義
- 160: TypeScriptでToDoリストを作る
