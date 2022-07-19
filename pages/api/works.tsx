import { NextApiResponse } from 'next'

export default (req: any, res: NextApiResponse) => {
    res.status(200).json([
        {
            name: "NicoCommeDon",
            thumbnail: "https://shared-vps.compositecomputer.club/media/images/system/asset-1.png",
            genre: "デスクトップアプリ",
            description: "ニコニコのコメントみたいにマストドンのトゥートが流れるLTサポートツール．WindowsとLinuxに対応．",
            url: "https://qiita.com/PigeonsHouse/items/2ec02d570e0c8be69ae5",
            download_url: "https://github.com/PigeonsHouse/NicoCommeDon/releases/",
            source_url: "https://github.com/PigeonsHouse/NicoCommeDon",
            created_at: "2021年1月〜8月",
        },
        {
            name: "EmoMee",
            thumbnail: "https://emom.ee/_nuxt/img/logo.67aaeb6.png",
            genre: "backend",
            description: "Open Hack U 2021 Online Vol.4で作成したアプリケーションのバックエンドを担当．WebSocketでリアルタイムな通信が可能．",
            url: "https://emom.ee",
            source_url: "https://github.com/hackz-hackathon-ankylo/task_burner_backend",
            created_at: "2022年3月"
        },
        {
            name: "OnakaAPI",
            thumbnail: "https://topaz.dev/_next/image?url=https%3A%2F%2Fptera-publish.topaz.dev%2Fproject%2F01G86RXXJ6AM3CZAVPA3DHFFED.png&w=1920&q=75",
            genre: "Web",
            description: "先輩の背中ハッカソン vol.2の作品．バックエンド，インフラ，フロントのCSS部分を担当．シンプルなSNSとなっている．詳細はTopazのページから．",
            url: "https://topaz.dev/projects/6b6081da16f2c2be43d3",
            source_url: "https://github.com/PigeonsHouse/OnakaAPI",
            created_at: "2022年7月"
        },
        {
            name: "Magic Adventure(共同制作)",
            thumbnail: "https://raw.githubusercontent.com/PigeonsHouse/red-action/master/Assets/Sprites/OP.png",
            genre: "ゲーム",
            description: "C3の部員との共同制作．初めてきちんと完成させたゲーム．",
            url: "https://unityroom.com/games/magic_action_game_c3",
            download_url: null,
            source_url: null,
            created_at: "2020年5月〜7月",
        },
        {
            name: "進捗ちゃんBot",
            thumbnail: "https://cdn.discordapp.com/avatars/821046992460316733/59f462a6e76bf3a3d15e7c476c7aec5b.png",
            genre: "DiscordBot",
            description: "Discord上で作業の開始・終了を宣言すると時間を計測して進捗を記録してくれるBot．月始めに先月の総作業量を報告してくれる．",
            url: "https://qiita.com/PigeonsHouse/items/9d86e35dbb6550d8f853",
            download_url: "https://discord.com/api/oauth2/authorize?client_id=821046992460316733&permissions=0&scope=bot",
            source_url: "https://github.com/PigeonsHouse/ShinchokuChanBot",
            created_at: "2021年3,4月",
        },
        {
            name: "水嵩 ﾐｽﾞｶｻ",
            thumbnail: "https://raw.githubusercontent.com/PigeonsHouse/Mizukasa/main/%E3%82%B5%E3%83%A0%E3%83%8D.png",
            genre: "ゲーム",
            description: "UnityRoom主催の1WeekGameJamでの作品．初めて一人で作ったゲーム．",
            url: "https://unityroom.com/games/vow_game_pigeon-house",
            download_url: null,
            source_url: "https://github.com/PigeonsHouse/Mizukasa",
            created_at: "2020年8月",
        },
        {
            name: "鳩屋敷Bot",
            thumbnail: "https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/000/005/580/original/aef9c28c66c78da4.png",
            genre: "MastodonBot",
            description: "製作者である鳩屋敷の投稿を全て学習させ鳩屋敷っぽい投稿をするBot．深層学習に興味を持ち，GPT2のファインチューニングで試しに作ってみた．",
            url: "https://mastodon.compositecomputer.club/@hatoBot",
            download_url: null,
            source_url: null,
            created_at: "2021年6月",
        },
        {
            name: "TaskBurner",
            thumbnail: "https://ptera-publish.topaz.dev/project/01FQ7GFX3DE67RQVPS7BQS1QV6.png",
            genre: "backend",
            description: "ハックツハッカソンアンキロカップで作成した作品．タスクが溜まると温度が上がっていき晒されるタスク管理アプリ．バックエンドを担当．フロントエンドは以下のTopazのページから．",
            url: "https://topaz.dev/projects/c4438719fb8b9941e8e3",
            source_url: "https://github.com/hackz-hackathon-ankylo/task_burner_backend",
            created_at: "2021年12月"
        },
        {
            name: "ReaBar",
            thumbnail: "https://ptera-publish.topaz.dev/project/01FY6ZAR8JTQXTA59CBVXFW60D.png",
            genre: "backend",
            description: "ハックツハッカソンギガノトカップで作成した作品．読んだ本のバーコードを読み取るとISBNから情報を取得し，ランキングなどを表示してくれるアプリ．バックエンドを担当．",
            url: "https://topaz.dev/projects/1861f56c53c14c2237f1",
            source_url: "https://github.com/Kyutech-C3/ReaBar-backend",
            created_at: "2022年3月"
        },
        {
            name: "夏の赤ペン先生",
            thumbnail: "https://ptera-publish.topaz.dev/project/01FG5MC0PA23BNKNNVT7X4MW8E.png",
            genre: "backend",
            description: "ハックツハッカソンスピノカップで作成した作品．画像から夏っぽさを検出し採点してくれるアプリ．バックエンドを担当．",
            url: "https://topaz.dev/projects/77c14bd26cd40d732333",
            source_url: "https://github.com/PigeonsHouse/spino-server",
            created_at: "2021年9月"
        },
        {
            name: "Detailer",
            thumbnail: "https://ptera-publish.topaz.dev/project/01F8M03YTRR5T4X561TSVRWEN3.png",
            genre: "backend",
            description: "ハックツハッカソンステゴカップで作成した作品．投稿した本人やその環境などの情報まで投稿できるSNS．バックエンドを担当．フロントエンドは以下のTopazのページから．",
            url: "https://topaz.dev/projects/a31afdce4c6753b62fd0",
            source_url: "https://github.com/rkun123/stego-server",
            created_at: "2021年6月"
        },
        {
            name: "Initial_is_Goo",
            thumbnail: "https://ptera-publish.topaz.dev/project/01ESZEHY0D7CKX14XC54R5TK3A.png",
            genre: "backend",
            description: "ハックツハッカソンプレシオカップで作成した作品．オンラインでカメラから手を検出しじゃんけんできるWebサイト．バックエンドを担当．",
            url: "https://topaz.dev/projects/c00svaa23akg008ogeog",
            source_url: "https://github.com/rkun123/Initial_is_Goo",
            created_at: "2020年12月"
        },
        {
            name: "RSA暗号特設サイト",
            thumbnail: "https://pbs.twimg.com/media/E7YqUEiVkAAqbqE.png",
            genre: "Webサイト",
            description: "某YoutuberのRSA暗号の解説動画に興味を持ち作成．解説と同じ手順で暗号化・復号ができるサイト．",
            url: "https://rsa-qk.pigeons.house",
            download_url: null,
            source_url: "https://github.com/PigeonsHouse/rsa_qk",
            created_at: "2021年7月",
        },
        {
            name: "ロックマン.EXE Bot",
            thumbnail: "/rockman.png",
            genre: "MastodonBot",
            description: "C3部内のSNS，Mastodon内で稼働しているBot．C3部員の生活に役立ったり立たなかったりする機能が搭載している．",
            url: "https://mastodon.compositecomputer.club/@Rockmanexe",
            download_url: null,
            source_url: "https://github.com/PigeonsHouse/rockman_exe_bot",
            created_at: "2020年9月",
        },
    ]);
}
