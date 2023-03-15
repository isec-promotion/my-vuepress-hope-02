import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
  '/camera/': [
    {
      icon: 'book',
      text: '商品の基本操作',
      prefix: '',
      link: '',
      collapsible: true,
      children: [
        'camera-plugin',
        'camera-face-comparison',
        'camera-face-capture',
        'camera-muilti-target',
        'camera-line-crossing',
        'camera-area-detection',
        'camera-linkage-methods',
        'camera-queue-management',
        'camera-ddns',
        'camera-wifi-setup',
        'camera-sd-monitor',
        'camera-ipv6-setup',
        'camera-p2p-connect',
      ],
    },
  ],
  '/recorder/': [
    {
      icon: 'book',
      text: '使い方',
      prefix: '',
      link: '',
      collapsible: true,
      children: [
        'recorder-basic-overview',
        {
          text: '１.スタートアップガイド',
          icon: 'paperclip',
          children: [
            'recorder-first-operation',
            'function06-ip-camera',
            'recorder-p2p',
            'faq05-remote-viewer',
          ],
        },
        {
          text: '２.機能の説明',
          icon: 'paperclip',
          children: [
            'recorder-monitor-realtime',
            'record01-introduce',
            
        ],
        },
        {
          text: '３.録画設定',
          icon: 'paperclip',
          children: [
            'record02-sensor',
            'record03-motion',
            'record04-schedule',
            'record05-manual',
          ],
        },
        {
          text: '４.録画再生、バックアップ',
          icon: 'paperclip',
          children: [
            'recorder-play02-howto',
            'backup02-hdd',
            'backup03-usb',
        ],
        },
        {
          text: '５.各種設定',
          icon: 'paperclip',
          children: [ 
            'recorder-ntp-adjust',
            'faq04-ntp',
            'faq-upgrade-firmware',
            'faq01-password',
            'recorder-log-message',
          ],
        },
        {
          text: '６.便利機能',
          icon: 'paperclip',
          children: [
            'function-ip-connection',
            'function05-sound',
            'function04-mail',
            
          ],
        },
      ],
    },
    {
      icon: 'wrench',
      text: 'シーン別便利機能',
      collapsible: true,
      children: [
        'recorder-password-off',
        {
          text: '遠隔監視',
          icon: 'paperclip',
          children: [
            'function-ip-connection',
            'recorder-dijital-zoom',
            'function-spot-monitoring',
          ],
        },
        {
          text: '便利機能（通知など）',
          icon: 'paperclip',
          children: [
            'function05-sound',
            'function02-ios',
            'recorder-system-event',
            'recorder-event-log',
          ],
        },
        {
          text: 'メンテナンス',
          icon: 'paperclip',
          children: ['recorder-log-message', 'recorder-mail-notification'],
        },
      ],
    },
    {
      icon: 'hammer',
      text: 'よくある質問',
      collapsible: true,
      children: [
        'faq03-language',
        'faq04-ntp',
        'recorder-ums-event-message',
        'recorder-ums-update',
        'recorder-password-remote',
        {
          text: 'お問い合わせ時に必要な情報を知りたい',
          icon: 'paperclip',
          children: ['faq02-serial'],
        },
        {
          text: '各部の名称と働き',
          icon: 'paperclip',
          children: ['recorder-names-functions'],
        },
        {
          text: '保障・アフターサービス',
          icon: 'paperclip',
          children: ['recorder-warranty-after-sales'],
        },
      ],
    },
  ],
  '/transfer/': [
    {
      icon: 'discover',
      text: '全機種共通',
      prefix: '',
      link: '',
      collapsible: true,
      children: [
        'common-basic-overview',
        'common-setup',
        'common-firmware-update',
        'common-config-download',
        'common-usb-record',
        'common-snmp',
        'common-srt',
        'common-transfer',
      ],
    },
    {
      icon: 'discover',
      text: 'LAN-HD264E',
      collapsible: true,
      children: [
        'encoder-instruction',
        'encoder-264e-setup',
        'encoder-remote',
        'encoder-vlc',
        'encoder-streaming',
        'encoder-capture-image',
        'encoder-hdcp-split',
      ],
    },
    {
      icon: 'discover',
      text: 'LAN-HD264D',
      collapsible: true,
      children: [
        'decoder-instruction',
        'decoder-264d-setup',
        'decoder-rtsp',
        'decoder-ipcamera',
        'decoder-output-change',
        'decoder-multiple',
      ],
    },
  ],
  '/software/': [
    {
      icon: 'discover',
      text: 'PC（UMS、UMS-M）',
      prefix: '',
      link: '',
      collapsible: true,
      children: [
        'pc-connect-recorder',
        'pc-ums-add-list',
        'pc-ums-backup',
        'pc-ums-capture',
      ],
    },
    {
      icon: 'discover',
      text: 'スマホ（iUMS、iUMS+）',
      collapsible: true,
      children: ['mobile-ums-readme', 'mobile-ums-android'],
    },
  ],
});
