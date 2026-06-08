const pointLabels = {
  trust: "信頼ポイント",
  growth: "成長期待ポイント",
  thanks: "感謝ポイント",
  collaboration: "協働ポイント",
};

const members = [
  {
    id: "aoi-mori",
    name: "森 あおい",
    role: "プロジェクトリーダー",
    specialty: "前向きな合意形成と進行設計",
    points: { trust: 42, growth: 34, thanks: 28, collaboration: 38 },
    strengthTags: ["巻き込み力", "課題整理", "調整力"],
    growthOpportunities: ["新規企画のリードに挑戦", "若手メンバーのメンターを担当"],
  },
  {
    id: "ren-kisaragi",
    name: "如月 蓮",
    role: "UXデザイナー",
    specialty: "利用者視点の体験整理",
    points: { trust: 31, growth: 45, thanks: 36, collaboration: 29 },
    strengthTags: ["顧客理解", "アイデア創出", "課題整理"],
    growthOpportunities: ["顧客ヒアリングの設計を担当", "他職種メンバーとの協働プロジェクトに参加"],
  },
  {
    id: "haru-nanase",
    name: "七瀬 晴",
    role: "エンジニア",
    specialty: "試作を素早く形にする実装力",
    points: { trust: 39, growth: 41, thanks: 26, collaboration: 32 },
    strengthTags: ["実行推進", "チーム支援", "課題整理"],
    growthOpportunities: ["データを使った意思決定テーマを担当", "新しい試作テーマの技術検証を担当"],
  },
  {
    id: "mio-asahi",
    name: "朝日 美緒",
    role: "ビジネス企画",
    specialty: "アイデアを行動計画へ変える構想力",
    points: { trust: 27, growth: 43, thanks: 33, collaboration: 35 },
    strengthTags: ["アイデア創出", "巻き込み力", "調整力"],
    growthOpportunities: ["新規企画のリードに挑戦", "他職種メンバーとの協働プロジェクトに参加"],
  },
  {
    id: "sora-tachibana",
    name: "橘 空",
    role: "データアナリスト",
    specialty: "数字から次の仮説を見つける分析力",
    points: { trust: 35, growth: 37, thanks: 30, collaboration: 34 },
    strengthTags: ["データ分析", "課題整理", "チーム支援"],
    growthOpportunities: ["データを使った意思決定テーマを担当", "顧客ヒアリング結果の分析設計を担当"],
  },
];

const timeline = [
  {
    recipientId: "ren-kisaragi",
    type: "growth",
    points: 12,
    reason: "新しい視点で画面案を整理し、改善の方向性を明るく示してくれたため。",
    date: "2026-06-08 09:40",
  },
  {
    recipientId: "haru-nanase",
    type: "thanks",
    points: 10,
    reason: "短時間で試作品を動く形にして、みんなが次の議論に進みやすくなったため。",
    date: "2026-06-07 16:15",
  },
  {
    recipientId: "mio-asahi",
    type: "collaboration",
    points: 8,
    reason: "意見を引き出しながら前向きにまとめてくれて、また一緒に進めたいと感じたため。",
    date: "2026-06-06 11:20",
  },
];

const memberList = document.querySelector("#member-list");
const recipientSelect = document.querySelector("#recipient");
const timelineList = document.querySelector("#timeline-list");
const form = document.querySelector("#point-form");
const formMessage = document.querySelector("#form-message");
const memberCount = document.querySelector("#member-count");
const totalPoints = document.querySelector("#total-points");
const recentInvestments = document.querySelector("#recent-investments");
const memberModal = document.querySelector("#member-modal");
const memberModalCard = document.querySelector(".member-modal-card");
const memberModalContent = document.querySelector("#member-modal-content");
const modalCloseButton = document.querySelector(".modal-close");

let lastFocusedElement = null;

function getMemberById(id) {
  return members.find((member) => member.id === id);
}

function calculateScore(member) {
  return Object.values(member.points).reduce((sum, value) => sum + value, 0);
}

function formatNumber(value) {
  return value.toLocaleString("ja-JP");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

function renderStats() {
  const total = members.reduce((sum, member) => sum + calculateScore(member), 0);

  memberCount.textContent = formatNumber(members.length);
  totalPoints.textContent = formatNumber(total);
  recentInvestments.textContent = formatNumber(timeline.length);
}

function renderMemberOptions() {
  recipientSelect.innerHTML = members
    .map((member) => `<option value="${member.id}">${member.name} / ${member.role}</option>`)
    .join("");
}

function renderMembers() {
  memberList.innerHTML = members
    .map((member) => {
      const score = calculateScore(member);
      const initials = escapeHtml(member.name.replace(" ", "").slice(0, 2));
      const name = escapeHtml(member.name);
      const role = escapeHtml(member.role);
      const specialty = escapeHtml(member.specialty);
      const tags = member.strengthTags
        .map((tag) => `<span class="tag-label">${escapeHtml(tag)}</span>`)
        .join("");

      return `
        <article class="member-card">
          <div class="member-header">
            <div class="avatar" aria-hidden="true">${initials}</div>
            <div>
              <h3 class="member-name">${name}</h3>
              <p class="role">${role}</p>
            </div>
            <div class="score-badge">
              <span>総合スコア</span>
              <strong>${formatNumber(score)}</strong>
            </div>
          </div>
          <p class="specialty">得意領域：${specialty}</p>
          <div class="tag-list compact" aria-label="${name}の強みタグ">${tags}</div>
          <div class="point-list" aria-label="${name}のポイント内訳">
            <div class="point-row"><span>${pointLabels.trust}</span><strong>${formatNumber(member.points.trust)}</strong></div>
            <div class="point-row"><span>${pointLabels.growth}</span><strong>${formatNumber(member.points.growth)}</strong></div>
            <div class="point-row"><span>${pointLabels.thanks}</span><strong>${formatNumber(member.points.thanks)}</strong></div>
            <div class="point-row"><span>${pointLabels.collaboration}</span><strong>${formatNumber(member.points.collaboration)}</strong></div>
          </div>
          <button type="button" class="detail-button" data-member-id="${member.id}">詳細を見る</button>
        </article>
      `;
    })
    .join("");
}

function getFeedbackForMember(memberId) {
  return timeline.filter((item) => item.recipientId === memberId);
}

function renderFeedbackList(feedbackItems) {
  if (feedbackItems.length === 0) {
    return `<p class="empty-feedback">まだフィードバックはありません</p>`;
  }

  return `
    <ul class="feedback-list">
      ${feedbackItems
        .map(
          (item) => `
            <li>
              <span class="feedback-meta">${escapeHtml(item.date)} / ${escapeHtml(pointLabels[item.type])} ${formatNumber(item.points)}pt</span>
              <p>${escapeHtml(item.reason)}</p>
            </li>
          `,
        )
        .join("")}
    </ul>
  `;
}

function renderGrowthOpportunities(member) {
  return `
    <ul class="opportunity-list">
      ${member.growthOpportunities.map((opportunity) => `<li>${escapeHtml(opportunity)}</li>`).join("")}
    </ul>
  `;
}

function renderMemberModal(member) {
  const score = calculateScore(member);
  const feedbackItems = getFeedbackForMember(member.id);
  const maxScore = Math.max(...members.map(calculateScore), score);
  const scoreRate = Math.max(8, Math.round((score / maxScore) * 100));
  const tags = member.strengthTags
    .map((tag) => `<span class="tag-label">${escapeHtml(tag)}</span>`)
    .join("");

  memberModalContent.innerHTML = `
    <div class="modal-member-header">
      <div>
        <p class="eyebrow">Member Detail</p>
        <h2 id="modal-member-name">${escapeHtml(member.name)}</h2>
        <p class="modal-role">${escapeHtml(member.role)}</p>
      </div>
      <div class="modal-score" aria-label="総合スコア ${formatNumber(score)}">
        <span>総合スコア</span>
        <strong>${formatNumber(score)}</strong>
        <div class="score-meter" aria-hidden="true"><span style="width: ${scoreRate}%"></span></div>
      </div>
    </div>

    <div class="modal-section specialty-section">
      <h3>得意領域</h3>
      <p>${escapeHtml(member.specialty)}</p>
    </div>

    <div class="modal-point-grid" aria-label="ポイント内訳">
      <div><span>${pointLabels.trust}</span><strong>${formatNumber(member.points.trust)}</strong></div>
      <div><span>${pointLabels.growth}</span><strong>${formatNumber(member.points.growth)}</strong></div>
      <div><span>${pointLabels.thanks}</span><strong>${formatNumber(member.points.thanks)}</strong></div>
      <div><span>${pointLabels.collaboration}</span><strong>${formatNumber(member.points.collaboration)}</strong></div>
    </div>

    <div class="modal-section">
      <h3>強みタグ</h3>
      <div class="tag-list">${tags}</div>
    </div>

    <div class="modal-section">
      <h3>最近受け取ったフィードバック</h3>
      ${renderFeedbackList(feedbackItems)}
    </div>

    <div class="modal-section">
      <h3>おすすめの成長機会</h3>
      ${renderGrowthOpportunities(member)}
    </div>
  `;
}

function openMemberModal(memberId) {
  const member = getMemberById(memberId);

  if (!member) {
    return;
  }

  lastFocusedElement = document.activeElement;
  renderMemberModal(member);
  memberModal.classList.add("is-open");
  memberModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  memberModalCard.focus();
}

function closeMemberModal() {
  if (!memberModal.classList.contains("is-open")) {
    return;
  }

  memberModal.classList.remove("is-open");
  memberModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function renderTimeline() {
  timelineList.innerHTML = timeline
    .map((item) => {
      const member = getMemberById(item.recipientId);
      const recipientName = escapeHtml(member ? member.name : "架空メンバー");
      const pointName = escapeHtml(pointLabels[item.type]);
      const reason = escapeHtml(item.reason);
      const date = escapeHtml(item.date);

      return `
        <article class="timeline-item">
          <div class="timeline-icon" aria-hidden="true">＋</div>
          <div>
            <p class="timeline-title">${recipientName} さんへ ${pointName} を ${formatNumber(item.points)}pt 投資</p>
            <p class="timeline-meta">${date}</p>
            <p class="timeline-reason">${reason}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderApp() {
  renderStats();
  renderMembers();
  renderTimeline();
}

function createTimelineItem(formData) {
  return {
    recipientId: formData.get("recipient"),
    type: formData.get("pointType"),
    points: Number(formData.get("points")),
    reason: formData.get("reason").trim(),
    date: new Date().toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const newItem = createTimelineItem(formData);
  const member = getMemberById(newItem.recipientId);

  if (!member || !newItem.type || newItem.points < 1 || !newItem.reason) {
    formMessage.textContent = "入力内容を確認してください。";
    return;
  }

  member.points[newItem.type] += newItem.points;
  timeline.unshift(newItem);
  renderApp();

  form.reset();
  document.querySelector("#points").value = 10;
  formMessage.textContent = `${member.name} さんへ ${formatNumber(newItem.points)}pt を送りました。`;
});

memberList.addEventListener("click", (event) => {
  const detailButton = event.target.closest(".detail-button");

  if (!detailButton) {
    return;
  }

  openMemberModal(detailButton.dataset.memberId);
});

modalCloseButton.addEventListener("click", closeMemberModal);

memberModal.addEventListener("click", (event) => {
  if (event.target === memberModal) {
    closeMemberModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMemberModal();
  }
});

renderMemberOptions();
renderApp();
