// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験・調査について",
          "content": "本実験・調査の実施責任者は慶應義塾大学メディアコミュニケーション研究所李光鎬研究会ゼミの八幡美生です。本実験・調査への参加へあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "content": "キャラクター属性変更に対する観客受容の研究について調べることが本実験・調査の目的です。",
          "title": "１.本実験・調査の目的"
        },
        {
          "required": true,
          "type": "text",
          "title": "2.本実験の手続き",
          "content": "もし、あなたが本実験・調査に参加した場合、あなたは動画の視聴と質問の回答にしてもらいます。この実験・調査の所要時間は約10分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "content": "実験による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，自由に実験を中止していただけます（6.参加と中止もご参照ください）",
          "title": "3.潜在的なリスク・苦痛など"
        },
        {
          "required": true,
          "type": "text",
          "title": "4.参加による利益",
          "content": "あなたが本実験・調査に参加することでメディア心理学・映画表象についての研究を発展に繋がります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5.参加と中止",
          "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。また，参加した場合でも，いつでも，どのような理由でも，途中で実験・調査を中止することができます。 もし，途中で実験・調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで実験・調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "本実験・調査に対して質問がある場合は，実施責任者にお問い合わせください。",
          "title": "6.実験・調査実施者への問い合わせ"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "informedConsennt"
            }
          ],
          "name": "esc"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "informedConsent"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "videoURL": "movie1.mp4",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {
        "アナ雪１.mp4": "embedded\u002Fa3d42ea7eb020c434c9bed5455ae477f52947db8b31ae71098afb69bb8b7f294.mp4"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "type": "text",
            "title": "\u003Cdiv\u003E  \u003Cvideo id=\"video-player\" autoplay playsinline\u003E    \u003Csource src=\"${parameters.videoURL}\" type=\"video\u002Fmp4\"\u003E    お使いのブラウザはビデオタグをサポートしていません。  \u003C\u002Fvideo\u003E \u003C\u002Fdiv\u003E"
          }
        ],
        "scrollTop": true,
        "submitButtonText": "Continue →",
        "submitButtonPosition": "right",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Page"
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください。",
          "name": "Age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "性別",
          "options": [
            {
              "label": "女性",
              "coding": ""
            },
            {
              "label": "男性"
            },
            {
              "label": "回答したくない"
            }
          ],
          "help": "性別を選んでください。",
          "name": "Gender"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demgraphic"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": false,
          "type": "textarea",
          "label": "調査・実験時の問題",
          "help": "調査・実験の際に問題があった方は内容をご入力ください。問題がなかった方は空欄のままで結構です。",
          "name": "Error Report"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Error Report"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "name": "a1",
          "question": "原作キャラクターの設定は可能な陰り尊重されるべきだ。"
        },
        {
          "name": "a2",
          "question": "属性変更があっても作品の本質が変わらなければ問題ない。"
        },
        {
          "name": "b1",
          "question": "映画業界は多様性をさらに推進する必要がある。"
        },
        {
          "name": "b2",
          "question": "多様性のためだけにキャラクターの属性を変更するべきではない。"
        },
        {
          "name": "c1",
          "question": "映画は差別や偏見をなくすことに貢献できる。"
        },
        {
          "name": "c2",
          "question": "映画は娯楽であり、社会問題を扱う必要がない。"
        },
        {
          "name": "d1",
          "question": "ストーリーが面白ければキャラクターの属性は気にならない。"
        },
        {
          "name": "d2",
          "question": "キャラクターが原作と違うと物語に集中できない。"
        },
        {
          "name": "e1",
          "question": "映画を見るときにキャラクターの人種や性別を意識することは少ない。"
        },
        {
          "name": "e2",
          "question": "映画を評価するとき、キャラクターの属性より作品全体の印象を重視する。"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {
        "movie1.mp4": "embedded\u002Fa3d42ea7eb020c434c9bed5455ae477f52947db8b31ae71098afb69bb8b7f294.mp4"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "type": "text",
            "content": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
          },
          {
            "required": true,
            "type": "radio",
            "label": "${this.parameters.question}",
            "options": [
              {
                "label": "1.非常にそう思わない",
                "coding": "1"
              },
              {
                "label": "2.とてもそう思わない",
                "coding": "2"
              },
              {
                "label": "3.ややそう思わない",
                "coding": "3"
              },
              {
                "label": "4.どちらでもない",
                "coding": "4"
              },
              {
                "label": "5.ややそう思う",
                "coding": "5"
              },
              {
                "label": "6.とてもそう思う",
                "coding": "6"
              },
              {
                "label": "7.非常にそう思う",
                "coding": "7"
              }
            ],
            "name": "${this.parameters.name}"
          }
        ],
        "scrollTop": true,
        "submitButtonText": "Continue →",
        "submitButtonPosition": "right",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Questionnaire"
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "videoURL": "https:\u002F\u002Fryoshida-cyber.github.io\u002Fmovie\u002F1.mp4",
          "": ""
        },
        {
          "videoURL": "https:\u002F\u002Fryoshida-cyber.github.io\u002Fmovie\u002F2.mp4",
          "": ""
        },
        {
          "videoURL": "https:\u002F\u002Fryoshida-cyber.github.io\u002Fmovie\u002F3.mp4",
          "": ""
        },
        {
          "videoURL": "https:\u002F\u002Fryoshida-cyber.github.io\u002Fmovie\u002F4.mp4",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "required": true,
            "type": "html",
            "content": "\u003Cdiv\u003E\n\u003Cvideo id=\"video-player\" autoplay playsinline\u003E\n\u003Csource src=\"${parameters.videoURL}\" type=\"video\u002Fmp4\"\u003E\nお使いのブラウザはビデオタグをサポートしていません。\n\u003C\u002Fvideo\u003E\n\u003C\u002Fdiv\u003E\n",
            "name": ""
          }
        ],
        "scrollTop": true,
        "submitButtonText": "Continue →",
        "submitButtonPosition": "right",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Page"
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "name": "a1",
          "questions": "この動画に満足した。"
        },
        {
          "name": "a2",
          "questions": "この動画を他の人にも勧めたいと思う。"
        },
        {
          "name": "b1",
          "questions": "この動画は印象に残った。"
        },
        {
          "name": "b2",
          "questions": "動画に違和感を感じなかった。"
        },
        {
          "name": "c1",
          "questions": "登場人物に魅力を感じた。"
        },
        {
          "name": "c2",
          "questions": "登場人物は物語にあっていたと感じた。"
        },
        {
          "name": "d1",
          "questions": "映像表現は魅力的だった。"
        },
        {
          "name": "d2",
          "questions": "演出は作品にあっていた。"
        },
        {
          "name": "e1",
          "questions": "作品の世界観に入り込むことができた。"
        },
        {
          "name": "e2",
          "questions": "最後まで集中して視聴できた。"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "type": "text",
            "content": "「以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。」"
          },
          {
            "required": true,
            "type": "radio",
            "label": "${this.parameters.questions}",
            "options": [
              {
                "label": "1. 非常にそう思わない",
                "coding": "1"
              },
              {
                "label": "2. とてもそう思わない",
                "coding": "2"
              },
              {
                "label": "3. ややそう思わない",
                "coding": "3"
              },
              {
                "label": "4. どちらでもない",
                "coding": "4"
              },
              {
                "label": "5. ややそう思う",
                "coding": "5"
              },
              {
                "label": "6.とてもそう思う",
                "coding": "6"
              },
              {
                "label": "7.非常にそう思う",
                "coding": "7"
              }
            ],
            "name": "dollarthis.parameters.questions"
          }
        ],
        "scrollTop": true,
        "submitButtonText": "次へ",
        "submitButtonPosition": "right",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Questionnaire"
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": -11,
          "top": -25,
          "angle": 0,
          "width": 480,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "これで実験は終了です。\nご協力ありがとうございました。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous() {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "fzd0g5xqYwT7",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "Screen",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()