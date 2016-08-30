# React SPA Boilerplate

## コマンドライン
````
$ npm start
````
+ 開発用サーバー起動
+ ファイル監視
+ オートリロード

````
$ npm run build
````
+ ビルドファイル出力

````
$ npm run release
````
+ 本番デプロイ用ファイル出力

````
$ npm run lint
````
+ jsのlint実行

````
$ npm run test
````
+ jsのテスト実行


## 構成

### View開発
+ react
+ redux
+ react-router, react-redux-router,
+ Material UI
+ ES2015（Babel）
+ Postcss

### Build
+ webpack

### Lint
+ eslint
+ eslint-config-airbnb

一部Ruleを上書きしている

### Test
ユニットテスト
+ mocha
+ power-assert
+ sinon
+ karma

### Directory

#### src
開発用ディレクトリ
````
src/
  |- index.html
  |- css
    |- base/
    |- parts/
    style.css
  |- js/
    |- index.js
    |- util.js
    |- actions/
    |- reducers/
    |- store/
    |- containers/
    |- components/
      |- modules/
      |- parts/
    |- img/
      |- pic.jpg
````

##### parts/
再利用を目的とした小さい単位のcomponentsはここ  
例
+ `Image.js`
  + ファイル名を受け取って`require()`し画像を出力

##### modules/
partsより大きい単位のcomponentsはここ  
例
+ `Layout.js`
  + ヘッダーやフッター、サイドバーを内包しcomponentsを入れ子にできる

#### dist
ビルド後に生成されるディレクトリ
````
dist/
  |- index.html
  |- js/
    |- bundle.js
  |- css/
    style.css
  |- img/
    |- pic.jpg
````

#### release
本番デプロイ用にgzip圧縮とハッシュ処理されたファイルを生成するディレクトリ
````
release/
  |- js/
    |- bundle-[hash].js
  |- css/
    style-[hash].css
  |- img/
    pic-[hash].jpg
````
