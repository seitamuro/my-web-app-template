cdkでバックグラウンド、フロントをvite+Reactで作成したwebアプリケーションのテンプレートです。

# セットアップ

```
pnpm run cdk:deploy # バックエンドのセットアップ
pnpm run web:deploy # フロントエンドをbuildしてs3にアップロード
pnpm run web:dev # フロントエンドの開発環境の立ち上げ
```

# フロントエンドの更新

```
pnpm run web:deploy
```

# コードのフォーマット

```
cd package/web
pnpm run format
pnpm run lint:fix
```
