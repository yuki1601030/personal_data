const pointTypes = {
  trust: { label: "信頼", icon: "🛡️", color: "#2563eb" },
  growth: { label: "成長期待", icon: "🌱", color: "#19c6a8" },
  thanks: { label: "感謝", icon: "🤝", color: "#f59e0b" },
  collaboration: { label: "協働", icon: "✨", color: "#f43f5e" },
};

const members = [
  {
    id: "sato",
    name: "佐藤 健太",
    role: "プロジェクトリーダー",
    department: "事業推進部",
    specialty: "合意形成・進行管理",
    tags: ["推進力", "安心感", "巻き込み"],
    scores: { trust: 34, growth: 18, thanks: 22, collaboration: 26 },
    opportunities: ["次世代PMのメンター", "部門横断プロジェクトのリード"],
  },
  {
    id: "suzuki",
    name: "鈴木 美咲",
    role: "UXデザイナー",
    department: "プロダクトデザイン室",
    specialty: "ユーザー調査・体験設計",
    tags: ["共感力", "可視化", "探索"],
    scores: { trust: 20, growth: 31, thanks: 28, collaboration: 24 },
    opportunities: ["新規サービス検証のUXリード", "若手デザイナーのレビュー担当"],
  },
  {
    id: "tanaka",
    name: "田中 翔太",
    role: "エンジニア",
    department: "開発グループ",
    specialty: "フロントエンド・改善提案",
    tags: ["技術探求", "改善", "実装力"],
    scores: { trust: 25, growth: 33, thanks: 18, collaboration: 20 },
    opportunities: ["技術負債改善タスクフォース", "プロトタイプ開発のリード"],
  },
  {
    id: "yamamoto",
    name: "山本 葵",
    role: "ビジネス企画",
    department: "新規事業開発部",
    specialty: "仮説構築・社内調整",
    tags: ["構想力", "調整力", "挑戦"],
    scores: { trust: 18, growth: 29, thanks: 21, collaboration: 30 },
    opportunities: ["社内副業テーマの企画", "顧客共創ワークショップの設計"],
  },
  {
    id: "takahashi",
    name: "高橋 直人",
    role: "データアナリスト",
    department: "データ戦略室",
    specialty: "分析設計・示唆抽出",
    tags: ["分析", "誠実", "学習支援"],
    scores: { trust: 27, growth: 22, thanks: 30, collaboration: 19 },
    opportunities: ["評価データの可視化設計", "分析勉強会のファシリテーション"],
  },
];

let investments = [
  {
    id: createInvestmentId(),
    senderId: "suzuki",
    receiverId: "sato",
    type: "trust",
    amount: 8,
    reason: "プロジェクトで論点を整理し、議論を前に進めてくれた。",
    date: "2026-06-08 09:20",
  },
  {
    id: createInvestmentId(),
    senderId: "sato",
    receiverId: "yamamoto",
    type: "collaboration",
    amount: 7,
    reason: "他部署との調整を粘り強く進め、チーム全体の合意形成を助けてくれた。",
    date: "2026-06-07 16:45",
  },
  {
    id: createInvestmentId(),
    senderId: "takahashi",
    receiverId: "tanaka",
    type: "growth",
    amount: 6,
    reason: "初めての領域にも前向きに挑戦し、短期間で実装まで進めていた。",
    date: "2026-06-07 11:10",
  },
  {
    id: createInvestmentId(),
    senderId: "tanaka",
    receiverId: "suzuki",
    type: "thanks",
    amount: 9,
    reason: "ユーザー視点の整理がわかりやすく、開発側の迷いを減らしてくれた。",
    date: "2026-06-06 15:05",
  },
];

let selectedMemberId = members[0].id;

function createInvestmentId() {
  return `investment-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}


const elements = {
  heroTotalScore: document.querySelector("#heroTotalScore"),
  totalPoints: document.querySelector("#totalPoints"),
  memberCount: document.querySelector("#memberCount"),
  latestInvestment: document.querySelector("#latestInvestment"),
  memberGrid: document.querySelector("#memberGrid"),
  senderSelect: document.querySelector("#senderSelect"),
  receiverSelect: document.querySelector("#receiverSelect"),
  pointTypeSelect: document.querySelector("#pointTypeSelect"),
  pointAmount: document.querySelector("#pointAmount"),
  reasonInput: document.querySelector("#reasonInput"),
  investmentForm: document.querySelector("#investmentForm"),
  formMessage: document.querySelector("#formMessage"),
  profileCard: document.querySelector("#profileCard"),
  timelineList: document.querySelector("#timelineList"),
};

function totalScore(member) {
  return Object.values(member.scores).reduce((sum, score) => sum + score, 0);
}

function findMember(id) {
  return members.find((member) => member.id === id);
}

function formatDate(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  return formatter.format(date).replaceAll("/", "-");
}

function renderStats() {
  const total = members.reduce((sum, member) => sum + totalScore(member), 0);
  elements.heroTotalScore.textContent = total.toLocaleString("ja-JP");
  elements.totalPoints.textContent = total.toLocaleString("ja-JP");
  elements.memberCount.textContent = members.length;

  const latest = investments[0];
  const receiver = latest ? findMember(latest.receiverId) : null;
  elements.latestInvestment.textContent = latest && receiver
    ? `${receiver.name}へ +${latest.amount}`
    : "まだありません";
}

function renderSelectOptions() {
  const options = members
    .map((member) => `<option value="${member.id}">${member.name}（${member.role}）</option>`)
    .join("");
  elements.senderSelect.innerHTML = options;
  elements.receiverSelect.innerHTML = options;
  elements.senderSelect.value = members[0].id;
  elements.receiverSelect.value = members[1].id;
}

function renderMembers() {
  const maxScore = Math.max(...members.map(totalScore));
  elements.memberGrid.innerHTML = members.map((member) => {
    const total = totalScore(member);
    const initials = member.name.replace(" ", "").slice(0, 2);
    const rows = Object.entries(pointTypes).map(([key, type]) => {
      const value = member.scores[key];
      const width = Math.round((value / Math.max(maxScore / 3, 1)) * 100);
      return `
        <div class="point-row">
          <span>${type.label}</span>
          <div class="bar" aria-hidden="true"><span style="width:${Math.min(width, 100)}%; background:${type.color}"></span></div>
          <strong>${value}</strong>
        </div>
      `;
    }).join("");

    return `
      <article class="member-card">
        <div class="member-head">
          <div class="avatar" aria-hidden="true">${initials}</div>
          <div class="score-badge"><span>総合スコア</span>${total}</div>
        </div>
        <h3>${member.name}</h3>
        <p class="muted">${member.department} / ${member.role}</p>
        <p>${member.specialty}</p>
        <div class="tags">${member.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}</div>
        <div class="point-breakdown">${rows}</div>
        <div class="card-actions">
          <button class="button primary" type="button" data-action="invest" data-member-id="${member.id}">ポイントを送る</button>
          <button class="button secondary" type="button" data-action="profile" data-member-id="${member.id}">詳細を見る</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderProfile() {
  const member = findMember(selectedMemberId) || members[0];
  const received = investments.filter((investment) => investment.receiverId === member.id).slice(0, 4);
  const feedbackItems = received.length
    ? received.map((investment) => `<li>${pointTypes[investment.type].label} +${investment.amount}：${investment.reason}</li>`).join("")
    : "<li>まだフィードバックはありません。ポイント投資を送るとここに蓄積されます。</li>";

  elements.profileCard.innerHTML = `
    <div class="profile-grid">
      <div>
        <p class="eyebrow">${member.department}</p>
        <h3>${member.name}</h3>
        <p class="muted">${member.role} / ${member.specialty}</p>
        <div class="tags">${member.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}</div>
        <div class="point-breakdown">
          ${Object.entries(pointTypes).map(([key, type]) => `
            <div class="point-row">
              <span>${type.label}</span>
              <div class="bar" aria-hidden="true"><span style="width:${Math.min(member.scores[key] * 3, 100)}%; background:${type.color}"></span></div>
              <strong>${member.scores[key]}</strong>
            </div>
          `).join("")}
        </div>
      </div>
      <div>
        <h3>受け取ったフィードバック</h3>
        <ul class="feedback-list">${feedbackItems}</ul>
        <h3>推奨される成長機会</h3>
        <ul class="opportunity-list">${member.opportunities.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function renderTimeline() {
  elements.timelineList.innerHTML = investments.map((investment) => {
    const sender = findMember(investment.senderId);
    const receiver = findMember(investment.receiverId);
    const type = pointTypes[investment.type];
    return `
      <article class="timeline-item">
        <div class="timeline-icon" style="background:${type.color}" aria-hidden="true">${type.icon}</div>
        <div>
          <strong>${sender.name} → ${receiver.name}</strong>
          <p>${investment.reason}</p>
          <div class="timeline-meta">${investment.date} / ${type.label}ポイント</div>
        </div>
        <div class="timeline-points">+${investment.amount}</div>
      </article>
    `;
  }).join("");
}

function renderAll() {
  renderStats();
  renderMembers();
  renderProfile();
  renderTimeline();
}

function handleInvestmentSubmit(event) {
  event.preventDefault();

  const senderId = elements.senderSelect.value;
  const receiverId = elements.receiverSelect.value;
  const type = elements.pointTypeSelect.value;
  const amount = Number(elements.pointAmount.value);
  const reason = elements.reasonInput.value.trim();

  if (senderId === receiverId) {
    elements.formMessage.textContent = "送信者と送信先は別のメンバーを選択してください。";
    return;
  }

  if (!reason) {
    elements.formMessage.textContent = "投資理由を入力してください。";
    return;
  }

  const receiver = findMember(receiverId);
  receiver.scores[type] += amount;
  selectedMemberId = receiverId;

  investments.unshift({
    id: createInvestmentId(),
    senderId,
    receiverId,
    type,
    amount,
    reason,
    date: formatDate(),
  });

  elements.formMessage.textContent = `${receiver.name}へ${pointTypes[type].label}ポイントを${amount}pt送りました。`;
  elements.reasonInput.value = "";
  renderAll();
}

function handleMemberGridClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const memberId = button.dataset.memberId;
  if (button.dataset.action === "invest") {
    elements.receiverSelect.value = memberId;
    document.querySelector("#invest").scrollIntoView({ behavior: "smooth" });
  }

  if (button.dataset.action === "profile") {
    selectedMemberId = memberId;
    renderProfile();
    document.querySelector("#profile").scrollIntoView({ behavior: "smooth" });
  }
}

elements.investmentForm.addEventListener("submit", handleInvestmentSubmit);
elements.memberGrid.addEventListener("click", handleMemberGridClick);

renderSelectOptions();
renderAll();
