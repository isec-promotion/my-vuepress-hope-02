---
home: true
title: レコーダー
heroImage: /logo.svg
heroText: レコーダー
tagline: レコーダー トップページ

copyright: false
footer: Theme by <a href="https://vuepress-theme-hope.github.io/v2/" target="_blank">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope
---

## 初期設定

  <div class="headline-wrapper">
  <router-link class="headline-item" to="/recorder/recorder-first-operation">スタートアップガイド</router-link>
  <router-link class="headline-item" to="/recorder/function06-ip-camera">IPカメラ接続手順</router-link>
  <router-link class="headline-item" to="/">ポート開放による遠隔監視設定方法</router-link>
  <router-link class="headline-item" to="/">スマートフォンでの遠隔監視設定</router-link>
  <router-link class="headline-item" to="/">P2P接続方法</router-link>
  </div>

## 機能の説明

  <div class="headline-wrapper">
  <router-link class="headline-item" to="/">画面表示アイコンの説明</router-link>
  <router-link class="headline-item" to="/">録画方法の種類</router-link>
  <router-link class="headline-item" to="/">録画方法の種類</router-link>
  </div>

## 録画設定

  <div class="headline-wrapper">
  <router-link class="headline-item" to="/">センサー録画設定方法</router-link>
  <router-link class="headline-item" to="/">モーション録画設定方法</router-link>
  <router-link class="headline-item" to="/">スケジュール録画設定方法</router-link>
  <router-link class="headline-item" to="/">手動録画設定方法</router-link>
  </div>

## 録画再生、バックアップ

  <div class="headline-wrapper">
  <router-link class="headline-item" to="/">録画再生の方法</router-link>
  <router-link class="headline-item" to="/">USB、外付けHDDへの録画バックアップ方法</router-link>
  <router-link class="headline-item" to="/">UMSを使った録画バックアップ方法</router-link>
  </div>

## 各種設定

  <div class="headline-wrapper">
  <router-link class="headline-item" to="/">レコーダー時刻設定方法</router-link>
  <router-link class="headline-item" to="/">WindowsPCをNTPサーバーにする方法</router-link>
  <router-link class="headline-item" to="/">ファームウェアアップデート方法</router-link>
  <router-link class="headline-item" to="/">パスワード設定</router-link>
  <router-link class="headline-item" to="/">ログデータの確認方法</router-link>
  </div>

## 便利機能

  <div class="headline-wrapper">
  <router-link class="headline-item" to="/">レコーダー同士の接続方法</router-link>
  <router-link class="headline-item" to="/">音声発報機能の使い方</router-link>
  <router-link class="headline-item" to="/">メール送信機能の使い方</router-link>
  <router-link class="headline-item" to="/">プッシュ通知機能</router-link>
  <router-link class="headline-item" to="/">レコーダーのシリアル番号確認方法</router-link>
  <router-link class="headline-item" to="/">チャンネル番号を日本語表記にする方法</router-link>
  <router-link class="headline-item" to="/">OSDメニューの表示非表示設定方法</router-link>
  <router-link class="headline-item" to="/">IPカメラの音声を取込む方法</router-link>
  </div>

<style>
.headline-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
  justify-content: start;
}
.headline-item {
  position: relative;
  flex-basis: calc(32% - 3rem);
  margin: 0.5rem;
  padding: 1rem;
  color: var(--text-color);
  border: solid;
  border-radius: 0.5rem;
  transition: background var(--color-transition),
    box-shadow var(--color-transition), transform var(--transform-transition);
}
.headline-item:hover {
  color: var(--theme-color);
  border-color: var(--theme-color);
  cursor: pointer;
}
.headline-item.link {
}
@media screen and (max-width: 768px) {
    .headline-item {
        flex-basis: calc(48% - 3rem);
    }
}
</style>
