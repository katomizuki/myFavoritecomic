

const target = document.getElementById('target');

const characterList = {
"ワンピース":"言わずとしれた名作",
"Dr'Stone":"科学が好きになる！",
"バクマン":"夢を追いかけたくなる！",
"DEATH NOTE":"心理戦が熱い",
"ヒロアカ":"主人公を応援したくなる！",
"チェンソーマン":"主人公のイカレ具合が最高！",
"キングダム":"王騎かっこいい！！",
"東京喰種":"金木がかっこいい",
"ゴールデンカムイ":"食べ物がおいしそう！",
"かぐや様は告らせたい":"笑える恋愛マンガ！",
"青の祓魔師":"絵が好き",
"ワールドトリガー":"設定が面白い！",
  "11分の1": "泣ける",
"プラチナエンド":"最終回が腑に落ちない、、",
"怪獣8号":"人気爆発中！",
"SPY×FAMILY":"人気爆発中！！",
"推しの子":"ストーリーが最高！",
"銀の匙":"命とはなにかを考えさせられる",
"葬送フリーレン":"まだ途中までしか読めていない",
"東京卍リベンジャーズ":"ちょっと血が多いけどおもしろい",
"ランウェイで笑って":"服が好きな人に読んでほしい",
"宇宙兄弟":"名言だらけ。挑戦する人全員に読んでほしい",
"ブルーピリオド":"加藤瑞樹史上一番熱くなった漫画",
"ブルージャイアント":"TDさんおすすめ！",
"スタンドUPスタート":"起業しようぜ！！",
  "君の放課後インソムニア":"恋愛したくなる！", 
  "ドラゴン桜":"名作！",
   "BEASTARS":"深すぎるめちゃめちゃ好きなまんが",
   "トリリオンゲーム":"展開が早いスタートアップ漫画",
   "モブサイコ100":"悩み続ける主人公、、",
   "ダンジョン飯":"ほのぼの",
   "インベスターZ":"勉強になる",
   "進撃の巨人":"完結！",
};
const charaUrlList = {
  "ワンピース": "https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181127/20181127232844.png",
  "Dr'Stone": "https://image.books.rakuten.co.jp/e-book/article/assets/2019/06/drstone/drstone_22.png",
  "バクマン": "https://i2.wp.com/jumpmatome2ch.biz/wp-content/uploads/2019/12/65bfb0956200dfc1706009337f7f66e0.png?w=700",
  "DEATH NOTE": "https://livedoor.blogimg.jp/jin115/imgs/2/8/28dacd62.jpg",
  "ヒロアカ": "https://livedoor.blogimg.jp/anigei-mangabox/imgs/3/c/3c9a2adb.jpg",
  "チェンソーマン":"https://livedoor.sp.blogimg.jp/anigei-mangabox/imgs/d/5/d5afa055.jpg",
  "キングダム": "https://m-uroko.com/wp-content/uploads/2017/10/8630a351c78e5c329136bfc3e1f62755.jpg",
  "東京喰種": "https://cdn-ak.f.st-hatena.com/images/fotolife/h/honobono-mode/20180625/20180625155217.jpg",
  "ゴールデンカムイ": "https://dot.asahi.com/S2000/upload/2018060700012_2.jpg",
  "かぐや様は告らせたい": "https://dip6t338iqjb9.cloudfront.net/user_data/img/special/20190901kaguyasamahakokuraretai/1016koma.jpg",
  "青の祓魔師": "https://festy.jp/wp-content/uploads/festy/2016/01/13/18/23/11/747/IMG_4420.jpg",
  "ワールドトリガー": "https://pbs.twimg.com/media/EMSD1D2U4AASB_K.jpg:small",
  "プラチナエンド": "https://stat.ameba.jp/user_images/20170328/08/dandanshi/f5/d1/j/o0320023013900099112.jpg?caw=800",
  "11分の1":"https://comic-navi.s3-ap-northeast-1.amazonaws.com/manga-frame/compressed/19501_vol3.jpg",
  "怪獣8号": "https://ipcprlegislative.org/wp-content/uploads/2021/03/kaizyu-8gou-e1615296945436.jpg",
  "SPY×FAMILY": "https://dragonnninja.com/wp-content/uploads/2019/11/spyfamily1.png",
  "推しの子": "https://assets.st-note.com/production/uploads/images/32405398/rectangle_large_type_2_a9bf34b4263029ee9ff4ef52eaa91bd3.png?width=800",
  "銀の匙": "http://cdn-ak.f.st-hatena.com/images/fotolife/e/ejejej0318/20150329/20150329144722.jpg",
  "葬送フリーレン": "https://image.books.rakuten.co.jp/e-book/article/assets/2021/03/mangataisho/mangataisho_kv.jpg",
  "東京卍リベンジャーズ": "https://mngbu03.com/wp-content/uploads/2018/11/IMG_8607.jpg",
  "ランウェイで笑って": "https://ken-horimoto.com/wp/wp-content/uploads/2018/07/4f7d052e2339e7141f8095aa0143697f.jpg",
  "宇宙兄弟": "https://prtimes.jp/i/11621/216/resize/d11621-216-194810-0.jpg",
  "ブルーピリオド": "https://maruwoblog.com/wp-content/uploads/2021/02/1dae000a677ad22480c425b18af49a58-1.jpg",
  "ブルージャイアント": "https://www.bluegiantdqw.com/wp-content/uploads/2020/02/dai.jpg",
  "スタンドUPスタート":"https://cdn-ak.f.st-hatena.com/images/fotolife/t/tonarinoyj-op/20201014/20201014010316.jpg",
  "君の放課後インソムニア": "https://dime.jp/genre/files/2020/03/fc6927a4cd7fc6f068de9eb5d3ae4aff-3-770x403.jpg",
  "ドラゴン桜": "https://tk.ismcdn.jp/mwimgs/9/7/1140/img_97b1cc2e37b5872dd76a6797ab19035d521225.jpg",
  "BEASTARS": "https://animemiru.jp/wp-content/uploads/2019/09/beastars-haru-05.png",
  "トリリオンゲーム": "https://comics.shogakukan.co.jp/ex-image.php?i=9784098610105&f=9784098610105_0055.jpg",
  "モブサイコ100": "https://stat.dokusho-ojikan.jp/ac0ebf0f-21fc-4871-9261-78045b9442e3.jpg",
  "インベスターZ": "https://pbs.twimg.com/media/DOL2juUV4AE3oGZ.jpg",
  "進撃の巨人":"https://www.fashion-press.net/img/news/53555/FSU.jpg"
};


//一つ一つの要素クラスを作成
class Element {
  constructor(word, defintion,pictureUrl) {
    this.word = word;
    this.defintion = defintion;
    this.pictureUrl = pictureUrl;
  }
}

//漫画クラスを作成
class Manga { 
  constructor(zasshi, description,color, emoji, characters) {
    this.zasshi = zasshi;
    this.description = description;
    this.color = color;
    this.emoji = emoji;
    this.characters = characters;
  }
//漫画説明要素をゲットする関数。
  getMangaWords() {
    let res = [];
    for(let i = 0; i < this.characters.length; i++) {
      res.push(new Element(this.characters[i], characterList[this.characters[i]],charaUrlList[this.characters[i]]));//配列に入れている。
    }
    return res;//配列をかえす。
  }
  //
  getHtmlCotainerString() {//ｈｔｍｌを作成
    // alert('dd');
    let string = `
        <div id=${this.zasshi} style="background: ${this.color}">
            <div class="container py-3">
                <div class="p-3 text-white">
                    <h2>${this.zasshi}</h2>
                    <p>${this.description}</p>
                </div>
                <div class="d-flex justify-content-between flex-wrap">
        `;
//配列の文だけ繰り返して、全てのまんが要素を描画する
      for (let i = 0; i < this.getMangaWords().length; i++) {
        let obj = this.getMangaWords();
        string += `
            <div class="d-flex col-md-5 col-12 bg-white px-0 my-2">
                <div class="col-8">
                    <h4 class="pt-3">${obj[i].word}</h4>
                    <p class="pt-2">${obj[i].defintion}</p>
                </div>
                <div class="col-4 px-0 d-flex justify-content-center align-items-center">
                    <img class="col-12 imgFit p-1" src="${obj[i].pictureUrl}" alt="">
                </div>
            </div>
            `;
      }
      string += `</div>
                  </div>
                    </div>
                    `;
                    return string;
  }
}

//カテゴリー一覧を配列に入れておく
const mangalist = [
  new Manga("ジャンプ", "集英社が発行する日本の週刊少年漫画雑誌", "red", "🐲", ["ワンピース", "Dr'Stone", "バクマン", "DEATH NOTE", "ヒロアカ", "チェンソーマン"]),
  new Manga("ヤングジャンプ", "集英社が発行する日本の週刊青年漫画雑誌", "pink", "🐳", ["キングダム", "東京喰種", "ゴールデンカムイ", "かぐや様は告らせたい"]),
  new Manga("ジャンプスクエア", "集英社が刊行する日本の月刊漫画雑誌", "lightblue", "🐶", ["青の祓魔師", "ワールドトリガー", "プラチナエンド","11分の1"]),
  new Manga("ジャンプ+", "2014年9月22日より集英社が配信する『週刊少年ジャンプ』のアプリケーションおよびウェブサイト", "grey", "🦄", ["怪獣8号", "SPY×FAMILY", "推しの子"]),
  new Manga("サンデー", "小学館が発行する日本の週刊少年漫画雑誌", "purple", "🐹", ["銀の匙", "葬送フリーレン"]),
  new Manga("マガジン", "講談社が発行する日本の週刊少年漫画雑誌", "green", "🐧", ["東京卍リベンジャーズ", "ランウェイで笑って","進撃の巨人"]),
  new Manga("その他", "加藤瑞樹が読んでいるもの", "orange", "🦊", ["宇宙兄弟", "ブルーピリオド", "ブルージャイアント", "スタンドUPスタート","君の放課後インソムニア","ドラゴン桜","BEASTARS","トリリオンゲーム","モブサイコ100","インベスターZ"])
];

//helper関数クラスを作成しておく。
class helperFunction {

  static generateCategoryElements(mangaList) {
    let container = document.createElement("div");//divを作成
    container.classList.add("container", "d-flex", "justify-content-center", "flex-wrap");//クラスを追加

    let shuffled = helperFunction.shuffleArray(mangaList);//配列シャッフルして変数に入れてからfor文で変数に入れて、クラスを追加しつつ、
    for (let i = 0; i < shuffled.length; i++) {//htmlに描画しておく
      let mangaObj = shuffled[i];

      let content = document.createElement("div");//divの作成
      content.classList.add("expandLink", "col-12", "col-md-6", "col-lg-3", "p-4", "m-4", "text-center");
      content.style.background = `${mangaObj.color}`;

      content.innerHTML =
        `
                <a href=#${mangaObj.zasshi}></a>
                <h3 class="text-white">${mangaObj.zasshi}</h3>
                <h1>${mangaObj.emoji}</h1>
                <p class="text-white">${mangaObj.description}</p>
            `
      container.append(content);
    }

    target.append(container);
    return target;
  }

  static generateMangaElements(mangaObjList) {
    let container = document.createElement("div");//divを作成
    let htmlString = '';//初期化
    for (let i = 0; i < mangaObjList.length; i++) {//繰り返し処理
      console.log(mangaObjList[i]);
      htmlString += `${mangaObjList[i].getHtmlCotainerString()}`;//htmｌを描画する関数をおこなう
    }
    container.innerHTML = htmlString;//完成したものをコンテナに入れて
    target.append(container);//全体に入れて
    return target;//リターン
  }

  static shuffleArray(arr) {//配列をシャッフルする関数。
    for (let i = arr.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));//ランダムな数字を変数に入れつつ
      let temp = arr[i];//仮にindexのものをいれ
      arr[i] = arr[j];//iを更新し
      arr[j] = temp;//jも更新する
    }
    return arr;
  }
}

helperFunction.generateCategoryElements(mangalist);
helperFunction.generateMangaElements(mangalist);