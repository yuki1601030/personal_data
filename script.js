const pointLabels = {
  trust: "信頼ポイント",
  growth: "成長期待ポイント",
  thanks: "感謝ポイント",
  collaboration: "協働ポイント",
};

const members = [
  {
    id: "sato",
    name: "佐藤 健太",
    role: "プロジェクトリーダー",
    specialty: "プロジェクト推進・意思決定支援",
    tags: ["巻き込み力", "安定感", "課題整理"],
    points: { trust: 42, growth: 30, thanks: 24, collaboration: 36 },
  },
  {
    id: "suzuki",
    name: "鈴木 美咲",
    role: "UXデザイナー",
    specialty: "ユーザー調査・体験設計",
    tags: ["共感力", "可視化", "ファシリテーション"],
    points: { trust: 34, growth: 38, thanks: 29, collaboration: 41 },
  },
  {
    id: "tanaka",
    name: "田中 翔太",
    role: "エンジニア",
    specialty: "フロントエンド開発・品質改善",
    tags: ["実装力", "改善提案", "学習速度"],
    points: { trust: 37, growth: 45, thanks: 31, collaboration: 28 },
  },
  {
    id: "yamamoto",
    name: "山本 葵",
    role: "ビジネス企画",
    specialty: "事業仮説検証・ステークホルダー調整",
    tags: ["仮説構築", "調整力", "推進力"],
    points: { trust: 29, growth: 36, thanks: 33, collaboration: 32 },
  },
  {
    id: "takahashi",
    name: "高橋 直人",
    role: "データアナリスト",
    specialty: "分析設計・インサイト抽出",
    tags: ["分析力", "構造化", "説明力"],
    points: { trust: 31, growth: 40, thanks: 27, collaboration: 26 },
  },
];

let timeline = [
  {
    senderId: "sato",
    receiverId: "suzuki",
    type: "collaboration",
    amount: 8,
    reason: "ユーザーインタビューの気づきを分かりやすく整理し、次の検証方針をチームで合意できる状態にしてくれました。",
    date: "2026-06-06 15:20",
  },
  {
    senderId: "yamamoto",
    receiverId: "tanaka",
    type: "growth",
    amount: 10,
    reason: "短期間で新しい実装方針を吸収し、品質面のリスクまで先回りして提案してくれました。",
    date: "2026-06-05 11:05",
  },
  {
    senderId: "takahashi",
    receiverId: "sato",
    type: "trust",
    amount: 7,
    reason: "判断に迷う場面で論点を明確にし、安心して次のアクションへ進める状態を作ってくれました。",
    date: "2026-06-04 17:45",
  },
];

const memberGrid = document.querySelector("#memberGrid");
const timelineList = document.querySelector("#timelineList");
const totalPoints = document.querySelector("#totalPoints");
const memberCount = document.querySelector("#memberCount");
const latestInvestment = document.querySelector("#latestInvestment");
const pointForm = document.querySelector("#pointForm");
const senderSelect = document.querySelector("#sender");
const receiverSelect = document.querySelector("#receiver");
const formMessage = document.querySelector("#formMessage");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getMember(id) {
  return members.find((member) => member.id === id);
}

function getTotalScore(member) {
  return Object.values(member.points).reduce((sum, point) => sum + point, 0);
}

function getAllPoints() {
  return members.reduce((sum, member) => sum + getTotalScore(member), 0);
}

function renderSelectOptions() {
  const options = members
    .map((member) => `<option value="${escapeHtml(member.id)}">${escapeHtml(member.name)}（${escapeHtml(member.role)}）</option>`)
    .join("");

  senderSelect.innerHTML = options;
  receiverSelect.innerHTML = options;
  receiverSelect.selectedIndex = 1;
}

function renderSummary() {
  totalPoints.textContent = getAllPoints().toLocaleString("ja-JP");
  memberCount.textContent = members.length;

  const latest = timeline[0];
  const sender = getMember(latest.senderId);
  const receiver = getMember(latest.receiverId);
  latestInvestment.textContent = `${sender.name} → ${receiver.name}：${pointLabels[latest.type]} +${latest.amount}`;
}

function renderMembers() {
  const maxPoint = Math.max(...members.flatMap((member) => Object.values(member.points)));

  memberGrid.innerHTML = members
    .map((member) => {
      const total = getTotalScore(member);
      const initials = member.name
        .split(" ")
        .map((word) => word[0])
        .join("");
      const pointRows = Object.entries(pointLabels)
        .map(([key, label]) => {
          const value = member.points[key];
          const width = Math.max(8, Math.round((value / maxPoint) * 100));
          return `
            <div class="point-row">
              <span>${escapeHtml(label)}</span>
              <div class="bar" aria-hidden="true"><span style="width: ${width}%"></span></div>
              <strong>${value}</strong>
            </div>
          `;
        })
        .join("");

      return `
        <article class="member-card">
          <div class="member-top">
            <div class="avatar" aria-hidden="true">${escapeHtml(initials)}</div>
            <div>
              <h3 class="member-name">${escapeHtml(member.name)}</h3>
              <p class="member-role">${escapeHtml(member.role)}</p>
            </div>
          </div>
          <p class="member-specialty">得意領域：${escapeHtml(member.specialty)}</p>
          <div class="tags" aria-label="強みタグ">
            ${member.tags.map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="score-box">
            <span class="score-label">総合スコア</span>
            <span class="score-value">${total}</span>
          </div>
          <div class="point-breakdown">${pointRows}</div>
        </article>
      `;
    })
    .join("");
}

function renderTimeline() {
  timelineList.innerHTML = timeline
    .map((item) => {
      const sender = getMember(item.senderId);
      const receiver = getMember(item.receiverId);

      return `
        <article class="timeline-item">
          <div class="timeline-meta">
            <span>${escapeHtml(item.date)}</span>
            <span>${escapeHtml(pointLabels[item.type])} +${item.amount}</span>
          </div>
          <div class="timeline-title">${escapeHtml(sender.name)} から ${escapeHtml(receiver.name)} へ</div>
          <p class="timeline-reason">${escapeHtml(item.reason)}</p>
        </article>
      `;
    })
    .join("");
}

function rerender() {
  renderMembers();
  renderSummary();
  renderTimeline();
}

function formatDate(date) {
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.format(date).replaceAll("/", "-");
}

pointForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(pointForm);
  const senderId = formData.get("sender");
  const receiverId = formData.get("receiver");
  const type = formData.get("pointType");
  const amount = Number(formData.get("amount"));
  const reason = formData.get("reason").trim();

  if (senderId === receiverId) {
    formMessage.textContent = "送信者と送信先は別のメンバーを選択してください。";
    return;
  }

  if (!reason) {
    formMessage.textContent = "投資理由を入力してください。";
    return;
  }

  if (!pointLabels[type] || !Number.isInteger(amount) || amount < 1 || amount > 20) {
    formMessage.textContent = "ポイント種類とポイント数を正しく入力してください。";
    return;
  }

  const receiver = getMember(receiverId);
  receiver.points[type] += amount;

  timeline = [
    {
      senderId,
      receiverId,
      type,
      amount,
      reason,
      date: formatDate(new Date()),
    },
    ...timeline,
  ];

  rerender();
  pointForm.reset();
  receiverSelect.selectedIndex = 1;
  formMessage.textContent = `${receiver.name}へ${pointLabels[type]}を${amount}ポイント送りました。`;
});

renderSelectOptions();
rerender();
