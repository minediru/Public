const story = [
    { // シーン0
        text: "メンズエステ「アロマティック・ヘヴン」\n"
    + "華やかな外見とは裏腹に、訪れた人が行方不明になる黑い噂のある店だ！\n"
	+ "先月から音信不通になっている兄が最後に訪れた場所なので\n"
	+ "一抹の手がかりを求め、俺はやってきた……",
        background: "images/aroma_heaven.jpg",
        characters: "",
        choices: [
            { text: "エステに潜入する", nextScene: 1 }
        ]
    },
    { // シーン1
        text: "受付に到着しました。どうしますか？",
        background: "images/reception.jpg",
        character: "",
        choices: [
            { text: "受付に話しかける", nextScene: 2 },
            { text: "周りを見渡す", nextScene: 3 }
        ]
    },
    { // シーン2
        text: "受付「いらっしゃいませ。ご予約はありますか？」",
        background: "images/reception.jpg",
        character: "images/receptionist.png",
        choices: [
            { text: "予約はないと伝える", nextScene: 4 },
            { text: "兄のことを尋ねる", nextScene: 5 }
        ]
    },
    { // シーン3
        text: "周りを見渡すと、奥に進むための通路が見えました。\n"
        + "女「ここから先はプレイルームで立ち入り禁止よ！」",
        background: "images/hallway.jpg",
        character: "",
        choices: [
            { text: "受付に戻る", nextScene: 2 },
            { text: "気にせず奥に進む", nextScene: 6 }
        ]
    },
    { // シーン4
        text: "受付「では、何分コースがご希望ですか？」",
        background: "images/reception.jpg",
        character: "images/receptionist.png",
        choices: [
            { text: "一番短いコースを頼む", nextScene: 7 },
            { text: "ロングのオプションマシマシコースを頼む", nextScene: 8 }
        ]
    },
    { // シーン5
        text: "受付：お兄様の名前は？",
        background: "images/reception.jpg",
        character: "images/receptionist.png",
        choices: [
            { text: "素直に教える", nextScene: 9 },
            { text: "店を出る", nextScene: 10 }
        ]
    },
    { // シーン6
        text: "女を振り払い奥に進むと、不思議な香りが漂ってくる部屋に辿り着きました。\n"
        + "部屋の中央には見るからに怪しいキャンドルがあった……",
        background: "images/aroma_room.jpg",
        character: "",
        choices: [
            { text: "キャンドルに近づく", nextScene: 11 },
            { text: "引き返す", nextScene: 1 }
        ]
    },
    { // シーン7
        text: "奥の部屋に通された俺はサービスを楽しんだ。\n"
        + "特に怪しい所はなかったが、仄かに香るアロマキャンドルの匂いが鼻孔に残った。\n"
        + "コースが終了した俺は…",
        background: "images/shot.jpg",
        character: "images/character.png",
        choices: [
            { text: "延長してロングコースにする", nextScene: 8 },
            { text: "店を出る", nextScene: 10 }
        ]
    },
    { // シーン8
        text: "ロングコースが始まるとセラピストはアロマを焚きマッサージが開始される。\n"
        + "彼女の腕はやがてだんだんと鼠径部へと近づいてきたかと思うと\n"
        + "迷いなく手コキが始まった",
        background: "images/long.jpg",
        character: "images/character.png",
        choices: [
            { text: "手コキを楽しむ", nextScene: 12 },
            { text: "慌てて店を出る", nextScene: 10 }
        ]
    },
    { // シーン9
        text: "受付：そのような方がご来店した様子はないですね",
        background: "images/reception.jpg",
        character: "images/receptionist.png",
        choices: [
            { text: "店を出る", nextScene: 10 },
            { text: "さらに質問する", nextScene: 13 }
        ]
    },
    { // シーン10
        text: "店を出た瞬間！\n"
        + "路地裏から現れた女性が誘惑するようにこっちによってくるとに\n"
        + "おもむろにジッパーを下げてフェラチオをしてくる。\n"
        + "彼女の超絶テクで昇天してしまった早漏の俺は\n"
        + "意識が薄れ遠のいていった……",
        background: "images/street.jpg",
        character: "",
        choices: [
            { text: "意識が戻るとエステの前にいた", nextScene: 0 },
            { text: "何故か地獄にいた", nextScene: 16 }
        ]
    },
    { // シーン11
        text: "オイルに近づくと強烈な香りがしました。\n"
        + "ふと見ると、横で女性がお尻が丸出し状態で寝転がっています\n"
        + "アナタはどうしますか？",
        background: "images/siri.jpg",
        character: "",
        choices: [
            { text: "さらにオイルを調べる", nextScene: 15 },
            { text: "寝ている女性にイタズラする", nextScene: 14 }
        ]
    },
    { // シーン12
        text: "ヤバい！\n"
        + "イク、イク！イクゥゥゥぅ！\n"
        + "ドクドクドクドク！\n"
        + "手コキに強制発射の快感が強すぎて俺は意識を失ってしまった…",
        background: "images/tekoki.jpg",
        character: "",
        choices: [
            { text: "意識を取り戻すと……", nextScene: 16 }
        ]
    },
    { // シーン13
        text: "あなたはさらに質問しましたが、\n"
        + "受付嬢は事務的に対応するだけで得られる情報はなかった…",
        background: "images/reception.jpg",
        character: "images/receptionist.png",
        choices: [
            { text: "店を出る", nextScene: 10 },
            { text: "ラチが開かないので強引に奥の通路へと進む", nextScene: 3 }
        ]
    },
    { // シーン14
        text: "おもむろにパンティーをズリ下げると、すでに濡れそぼったアソコはまるでアナタを誘うようにビショビショに濡れていた。\n"
        + "一気に膣奥まで挿入すると寝ている女性は目をさます\n"
        + "そのまま嫌がるわけでもなく俺の全てを受け入れてくれて中出しをしてしまった……\n"
        + "何だろうキャンドルの匂いのせいか妙に性欲が高まっている気がする……",
        background: "images/nakadasi.jpg",
        character: "",
        choices: [
            { text: "アロマキャンドルを調べる", nextScene: 15 }
        ]
    },
    { // シーン15
        text: "アロマキャンドルを調べていると、だんだんと頭がフラフラとしてきた\n"
        + "甘い香りに徐々に意識が遠のいていくのが分かる……\n"
        + "ヤバいと分かっていても、アナタは抗いきれず気を失ってしまった……",
        background: "images/aroma_room.jpg",
        character: "",
        choices: [
            { text: "目を覚ます", nextScene: 16 }
        ]
    },
    { // シーン16
        text: "目を覚ますと、ここは何処だろうか？\n"
        + "何処か閉鎖された空間のようで、目の前ては探し求めた兄が女悪魔サキュバスと汗だくでセックスをしていた。\n"
        + "兄の表情は生気がなく虚ろな表情で無心に腰をふり、サキュバスに精子を搾り取られているようだった…",
        background: "images/hell.jpg",
        character: "",
        choices: [
            { text: "状況を把握する", nextScene: 17 },
            { text: "大声で呼ぶ", nextScene: 18 }
        ]
    },
    { // シーン17
        text: "よく見ると兄がいる部屋とはマジックミラーで区切られていた。\n"
        + "俺は今いる部屋を見渡すが、扉は何処にもなく、すみの方であのキャンドルが燃えていた……\n"
        + "他には壁に「セックスしないと出られない部屋」と書かれた紙が貼りつけられている。\n"
        + "しかし、セックスしようにも周りには誰も居ないぞ……",
        background: "images/hell.jpg",
        character: "",
        choices: [
            { text: "マジックミラーを叩く", nextScene: 19 },
            { text: "その場で待つ", nextScene: 20 }
        ]
    },
    { // シーン18
        text: "アナタは大声での呼びかけも虚しく、兄は虚ろな表情のままセックスを続けていた…\n"
        + "それを見透かしたようにサキュバスは一瞬こちらをチラりと見て冷酷な笑みを浮かべたののであった……\n"
        + "くそっ！どうなってやがる……\n"
        + "一体何が何なんだ？",
        background: "images/hell.jpg",
        character: "",
        choices: [
            { text: "状況を観察する", nextScene: 17 }
        ]
    },
    { // シーン19
        text: "叩く音が聞こえたのが僅かに兄が反応した気がするぞ。",
        background: "images/hell.jpg",
        character: "images/brother.png",
        choices: [
            { text: "兄に話しかける", nextScene: 21 },
            { text: "本当に兄なのか？", nextScene: 22 }
        ]
    },
    { // シーン20
        text: "その場に留まっていると、セクシーな女性がいつの間にか隣にいる。\n"
        + "「さあ、脱出するためにセックスを始めましょう」",
        background: "images/sex3.jpg",
        character: "",
        choices: [
            { text: "素直にする", nextScene: 23 },
            { text: "頑固、拒否する！", nextScene: 24 }
        ]
    },
    { // シーン21
        text: "聞こえるはずのない兄の声が聞こえてきます\n"
        + "「ここはマジでヤバい？もう帰れない！俺たちは死ぬまで精子を搾り取られるんだ！」\n"
        + "ほら、お前の横にもいつの間にかサキュバスが表れたぞ！\n"
        + "「うふふ、早く楽しみましょう」",
        background: "images/akuma.jpg",
        character: "images/brother.jpg",
        choices: [
            { text: "脱出する方法はないのか？", nextScene: 25 },
            { text: "セックスする", nextScene: 23 }
        ]
    },
    { // シーン22　兄を疑う
        text: "こんな現実があるはずがない……\n"
        + "きっとあの兄は偽物だ！じゃなければ幻覚だろ！\n"
        + "アナタは言い知れぬ恐怖に駆られ否定しますが、何処にも逃げみちはありません。",
        background: "images/hell.jpg",
        character: "",
        choices: [
            { text: "部屋の中を調べる", nextScene: 27 },
            { text: "絶望する", nextScene: 26 }
        ]
    },
    { // シーン23
        text: "ああ……気持ちい……\n"
        + "何て締まりだ…まるでチンポが千切れんばかりの凄い締め付け\n"
        + "ヤバいイク、イキそうだ。どうする？",
        background: "images/sex2.jpg",
        character: "",
        choices: [
            { text: "中で出す", nextScene: 29 },
            { text: "これは罠だ！逆に女性をイカす", nextScene: 30 }
        ]
    },
    { // シーン24　20から来ている
        text: "「うふふ……ここに連れてきた時点でもう手遅れなのよ……嫌がるなら違う意味で食べてあげるわ」\n"
        + "そういうと女性は見にくい化け物に変わり、俺を頭からバリバリと食べ始めた……\n",
        background: "images/hosyoku.jpg",
        character: "",
        choices: [
            { text: "初めから再挑戦する", nextScene: 1 },
            { text: "途中から始める", nextScene: 16 }
        ]
    },
    { // シーン25
        text: "兄：「脱出方法はある。\n"
        + "ただリスクがあるんだ。\n"
        + "それにエロセラピストに負けないお前の強い心が必要だ。」",
        background: "images/akuma.jpg",
        character: "images/brother.jpg",
        choices: [
            { text: "方法を聞く", nextScene: 32 },
            { text: "絶望する", nextScene: 26 }
        ]
    },
    { // シーン26
        text: "アナタは不可思議な状況にアナタは全てを諦めて絶望して座り込んでしまいました。\n"
        + "ですが、その肩に優しく女性の手が置かれます。\n"
        + "「大丈夫よセックスで全てを忘れされてあげる❤」\n"
        + "その声に従い、兄のようにただ死ぬまでセックスをする存在になってしまった……",
        background: "images/sex2.jpg",
        character: "",
        choices: [
            { text: "初めから再挑戦する", nextScene: 1 },
            { text: "途中から始める", nextScene: 16 }
        ]
    },
    { // シーン27
        text: "アナタは部屋を調べますが、例のアロマキャンドル以外には目ぼしい物はなかった……",
        background: "images/aroma_room.jpg",
        character: "",
        choices: [
            { text: "もっと探す", nextScene: 28 }
        ]
    },
    { // シーン28
        text: "どれだけ探しても部屋には何もなく、かなりの時間が虚しく過ぎていった……\n"
        + "やがて喉が渇き…腹も減ってくる………\n"
        + "しかし、ここには水も食料もない……\n"
        + "アナタは薄れいく意識の中で、何時間もセックスを続ける異様な兄の姿を見つめながら死んだ……",
        background: "images/hell.jpg",
        character: "",
        choices: [
            { text: "初めから再挑戦する", nextScene: 1 },
            { text: "途中から始める", nextScene: 16 }
        ]
    },
    { // シーン29
        text: "イクゥゥウ！！！\n"
        + "誘惑に負け中出してしまったアナタはサキュバスの性奴隷になり\n"
        + "このまま死ぬまでここで精子を縛られるのだった……",
        background: "images/sex2.jpg",
        character: "",
        choices: [
            { text: "初めから再挑戦する", nextScene: 1 },
            { text: "途中から始める", nextScene: 16 }
        ]
    },
    { // シーン30
        text: "アナタは我慢しましたがオマンコの締め付けには勝てずスグに絶頂に達してしまいました…\n"
        + "「この早漏男め、二回目もモチロンできるわよね？」\n"
        + "アナタはこのまま性奴隷として死ぬまで精液を絞られるのでした",
        background: "images/sex2.jpg",
        character: "",
        choices: [
            { text: "初めから再挑戦する", nextScene: 1 },
            { text: "途中から始める", nextScene: 16 }
        ]
    },
    { // シーン31
        text: "部屋の外にでると、サキュバスが追ってきた…\n"
        + "どこからともなく兄の声が聞こえる「最後のエネルギーを使った俺はもう助からない……せめてお前だけでも無事に脱出してくれ……\n"
        + "全力で走るんだ！他の悪魔たちも気付いて迫っていきたぞ！急いで逃げるんだ！！\n"
        + "俺は言われるがままに走るしかなかった……",
        background: "images/hell2.jpg",
        character: "images/brother.jpg",
        choices: [
            { text: "エンディングへ", nextScene: 36 }
        ]
    },
    { // シーン32
        text: "兄：「良いかよく聞いてくれ、今から俺の残された全生体エネルギーをお前に送る！\n"
        + "そのエネルギーでお前のチンポは帳極太のおチンポとなり、サキュバスを逆に快楽で落とすんだ。\n"
        + "ただし、この作戦にも危険があり、お前が先にイッてしまったら台無しだ……\n"
        + "イカされた方が快楽堕ちするんだ、しっかりやれよ……",
        background: "images/akuma.jpg",
        character: "images/brother.jpg",
        choices: [
            { text: "分かった", nextScene: 33 },
        ]
    },
    { // シーン33
        text: "やってみるけど、早漏だし大丈夫かな？\n"
        + "不安はあったが！覚悟を決めた俺はサキュバスの膣口にペニスを挿入した\n"
        + "その刹那！キツマンと数の子天井の刺激で秒でイキそうになってしまった！",
        background: "images/sex.jpg",
        character: "",
        choices: [
            { text: "イキそうなのを必死で我慢してピストンする", nextScene: 34 }
        ]
    },
    { // シーン34
        text: "兄「頑張れ、俺も応援する。今、エネルギーを送った」\n"
        + "サキュバス「何、この人間のおチンポ、シュごぃぃ、ショゴスギィィ、オマンコ壊れちゃぅぅぅ」\n"
        + "俺「よし聞いているぞ、もっと奥までついてやるぅぅ！",
        background: "images/akumaz.jpg",
        character: "",
        choices: [
            { text: "次へ", nextScene: 35 }
        ]
    },
    { // シーン35
        text: "ああ…ラメメェェェ！いくっイク\n"
        + "人間なんかにイカされてしまう、あああ………\n"
        + "絶頂を迎えた瞬間サキュバスの気が緩んだのか、部屋の出口が表れた！\n"
        + "急いで俺は扉を乱暴に開けて建物から逃げ出した！",
        background: "images/akumaz.jpg",
        character: "",
        choices: [
            { text: "全力でダッシュ", nextScene: 31 }
        ]
    },
    { // シーン36
        text: "どのくらい走ったのか？いつの間にかアロマティック・ヘヴンがあった場所にたどり着いたのだが、そこには空き地だけが残った……\n"
        + "兄を救う事はできなかたが、兄から託された極太おチンポで女悪魔でもをヒーヒーして言わしてやる！\n"
        + "空き地に落ちていたアロマキャンドルを拾いあげると俺は復讐を胸に決め……この地を後にしたのだった……",
        background: "images/go.jpg",
        character: "",
        choices: [
            { text: "もう一度遊ぶ", nextScene: 0 } // 再挑戦選択肢なし
        ]
    }
];
