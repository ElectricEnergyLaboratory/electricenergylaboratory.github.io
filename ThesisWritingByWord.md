# マイクロソフトワードで論文を書く時に

当学科では、卒業論文や修士論文の参考文献リストは、AIPもしくはIEEEに準拠しなければ・・・ マイクロソフトワードでのIEEEスタイルにはバグがあるので、ご注意ください。

[MS Wordのアドイン](https://qiita.com/qmiyajun/items/ce424c50f0f8b399e1d0)つかってみました。styleはアドインのなかで検索してくれるようになったです。便利です。

American Inst. Phys.えらぶとハッピーかも。デフォルトは、どっかの哲学系雑誌だから、我々が慣れ親しんだやつと全然ちがっていて、とまどいます。まずはここを解決するといいです。

それにしても、むかしむかしつかったときとは雰囲気がちがい、`Insert Citation`コマンドが2か所にあって、そいつらの順番が大事みたいだし。。。牧野の場合は、`update references`必要でした。
おなじこともう一回やれっていわれてもできるか？わからないかんじ。
[Qiitaのひと](https://qiita.com/qmiyajun/items/ce424c50f0f8b399e1d0)は古いバージョンのMendeleyのそれなので、最新版をアップしてくれると、行き詰ってるひとのお役に立てるかもしれないです。

既存のもの（Planレポにあります）をうまいこと変換する気力があれば、もともとMS-Wordに備わってる類似機能がつかえます。

[研究室共有文献データベース](https://github.com/ElectricEnergyLaboratory/Plan/blob/main/SharedRefDB/mybibincloud.bib)

## 参考文献リスト注意事項

お使いのバージョンのWord (2019)では、文献目録フォーマットファイルが壊れているため、巻・号を正しく表示することができません。

以下のリンクから、修正版(IEEE2006OfficeOnline.xsl)をダウンロードして、同名の文献目録フォーマットファイルに上書きしてみてください。

https://gist.github.com/sadlame/317a2699c219dbf39cdcf5dd606b3cb1

文献目録フォーマットファイルの場所は、Officeのバージョンによって異なりますが、

MSI版(通常版)のOffice 2019をお使いの場合は、C:\Users\(ユーザー名)\AppData\Roaming\Microsoft\Bibliography\Style以下、

ストアアプリ版のOffice 2019をお使いの場合は、C:\Users\(ユーザー名)\AppData\Local\Packages\Microsoft.Office.Desktop_8wekyb3d8bbwe\LocalCache\Roaming\Microsoft\Bibliography\Style以下となります。

(隠しファイルの表示をONにして、探してみてください。)
