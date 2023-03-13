---
home: true
icon: home
title: トップページ
heroImage: /logo.jpg
heroText: オンライン取説
tagline: アイゼック製品のサポートページです。

features:
  - title: カメラ
    icon: camera
    details: カメラの使い方はこちら
    link: /camera/

  - title: レコーダー
    icon: server
    details: レコーダーの使い方はこちら
    link: /recorder/

  - title: 映像伝送装置
    icon: hard-drive
    details: 映像伝送装置の使い方はこちら
    link: /transfer/

  - title: ソフトウェア
    icon: icons
    details: ソフトウェアの使い方はこちら
    link: /software/

copyright: false
footer: Theme by <a href="https://vuepress-theme-hope.github.io/v2/" target="_blank">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope
---

## レコーダー

## 初期設定

## 機能の説明

## 録画設定

## 録画再生、バックアップ

  <div class="headline-wrapper">
    <div class="headline-item">
    録画再生の方法
    </div>
    <div class="headline-item">
    USB、外付けHDDへの録画バックアップ方法
    </div>
    <div class="headline-item">
    UMSを使った録画バックアップ方法
    </div>
  </div>

## 各種設定

<!-- <Headline /> -->

## 便利機能

<style>
.headline-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
  justify-content: space-between;
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
