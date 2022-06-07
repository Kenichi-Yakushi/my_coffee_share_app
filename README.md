# my_coffee_share_app
## 環境構築用 React18.0.9 TypeScript4.6.4 Express4.17.2 Babel Webpack MySQL8.0

### webpack モジュールバンドラー コマンド
``` yarn build ```

### babel ECMAScript トランスパイラー コマンド
``` yarn babel ```

### node.js サーバー起動 コマンド
``` yarn start ```

## README - 環境構築手順 -
package.json から node_modules を以下のコマンドで導入する
``` yarn install ```

.env-sample から .env ファイルを作成する
.envファイルに、Discordグループチャンネルで連携した.env情報を転記して保存する
``` cp .env-sample .env ```

docker-compose buildを初回だけ起動し、Ctrl + Cで停止し、
再度以下のコマンドで、起動する
``` docker-compose up ```

docker停止手順
``` docker-compose stop ```

dockerコンテナ廃棄手順
``` docker-compose down ```

再度起動する手順（-dをつけると、バックグラウンドでプロセスが起動する）
``` docker-compose up -d ```
