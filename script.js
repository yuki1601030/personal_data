const pointLabels = {
  trust: "信頼ポイント",
  growth: "成長期待ポイント",
  thanks: "感謝ポイント",
  collaboration: "協働ポイント",
};


const growthReportToneByPoint = {
  trust: {
    theme: "安心して任せられる信頼感",
    strength: "周囲から安心して任せられる存在として認識されている傾向が見られます。",
    expectation: "引き続き、進行の見通しづくりや判断材料の整理でチームを支えることへの期待が集まっています。",
    challenge: "信頼を土台に、少し不確実性の高いテーマの初期設計に挑戦すると、さらに成長機会が広がりそうです。",
  },
  growth: {
    theme: "新しい挑戦への期待",
    strength: "今後の伸びしろや新しい挑戦への期待が集まっている傾向が見られます。",
    expectation: "新しい視点を持ち込み、未経験のテーマにも前向きに関わることが期待されています。",
    challenge: "関心のあるテーマで小さなリード役を担うと、期待を具体的な経験に変えやすくなりそうです。",
  },
  thanks: {
    theme: "周囲を支える前向きな貢献",
    strength: "周囲を支援し、チームに前向きな影響を与えていることがうかがえます。",
    expectation: "困っているメンバーへの後押しや、場の空気を明るくする関わりへの期待が集まっています。",
    challenge: "支援した内容をチームの学びとして共有すると、貢献がより広がりやすくなりそうです。",
  },
  collaboration: {
    theme: "また一緒に働きたい協働力",
    strength: "また一緒に働きたいと思われる協働力が強みとして表れています。",
    expectation: "多様な意見をつなぎ、メンバー同士が前向きに動き出せる関係づくりへの期待が集まっています。",
    challenge: "関係者が多いテーマの橋渡し役に挑戦すると、協働の強みがさらに活かされそうです。",
  },
};

const initialMembers = [
  {
    id: "aoi-mori",
    name: "森 あおい",
    role: "プロジェクトリーダー",
    specialty: "前向きな合意形成と進行設計",
    points: { trust: 42, growth: 34, thanks: 28, collaboration: 38 },
    previousScore: 130,
    strengthTags: ["巻き込み力", "課題整理", "調整力"],
    growthOpportunities: ["新規企画のリードに挑戦", "若手メンバーのメンターを担当"],
  },
  {
    id: "ren-kisaragi",
    name: "如月 蓮",
    role: "UXデザイナー",
    specialty: "利用者視点の体験整理",
    points: { trust: 31, growth: 45, thanks: 36, collaboration: 29 },
    previousScore: 118,
    strengthTags: ["顧客理解", "アイデア創出", "課題整理"],
    growthOpportunities: ["顧客ヒアリングの設計を担当", "他職種メンバーとの協働プロジェクトに参加"],
  },
  {
    id: "haru-nanase",
    name: "七瀬 晴",
    role: "エンジニア",
    specialty: "試作を素早く形にする実装力",
    points: { trust: 39, growth: 41, thanks: 26, collaboration: 32 },
    previousScore: 146,
    strengthTags: ["実行推進", "チーム支援", "課題整理"],
    growthOpportunities: ["データを使った意思決定テーマを担当", "新しい試作テーマの技術検証を担当"],
  },
  {
    id: "mio-asahi",
    name: "朝日 美緒",
    role: "ビジネス企画",
    specialty: "アイデアを行動計画へ変える構想力",
    points: { trust: 27, growth: 43, thanks: 33, collaboration: 35 },
    previousScore: 138,
    strengthTags: ["アイデア創出", "巻き込み力", "調整力"],
    growthOpportunities: ["新規企画のリードに挑戦", "他職種メンバーとの協働プロジェクトに参加"],
  },
  {
    id: "sora-tachibana",
    name: "橘 空",
    role: "データアナリスト",
    specialty: "数字から次の仮説を見つける分析力",
    points: { trust: 35, growth: 37, thanks: 30, collaboration: 34 },
    previousScore: 136,
    strengthTags: ["データ分析", "課題整理", "チーム支援"],
    growthOpportunities: ["データを使った意思決定テーマを担当", "顧客ヒアリング結果の分析設計を担当"],
  },
];

const initialTimeline = [
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

const dashboardSummary = document.querySelector("#dashboard-summary");
const dashboardChart = document.querySelector("#dashboard-chart");
const dashboardComments = document.querySelector("#dashboard-comments");
const dashboardSpotlights = document.querySelector("#dashboard-spotlights");
const portfolioList = document.querySelector("#portfolio-list");
const memberList = document.querySelector("#member-list");
const memberSearchInput = document.querySelector("#member-search");
const memberSortSelect = document.querySelector("#member-sort");
const tagFilterList = document.querySelector("#tag-filter-list");
const memberFilterStatus = document.querySelector("#member-filter-status");
const resetMemberFiltersButton = document.querySelector("#reset-member-filters");
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
const resetSampleDataButton = document.querySelector("#reset-sample-data");
const storageStatus = document.querySelector("#storage-status");

const storageKey = "growthPointsPrototypeData";
const storageStatusDefaultText = "ブラウザに保存済み";
const allTagsLabel = "すべて";
const dashboardPointTypes = ["trust", "growth", "thanks", "collaboration"];
const strengthTagFilters = [
  allTagsLabel,
  "巻き込み力",
  "課題整理",
  "顧客理解",
  "実行推進",
  "データ分析",
  "チーム支援",
  "アイデア創出",
  "調整力",
];
const sortOptions = {
  score: { label: "総合スコアが高い順", getValue: calculateScore },
  growth: { label: "成長期待ポイントが高い順", getValue: (member) => member.points.growth },
  trust: { label: "信頼ポイントが高い順", getValue: (member) => member.points.trust },
  thanks: { label: "感謝ポイントが高い順", getValue: (member) => member.points.thanks },
  collaboration: { label: "協働ポイントが高い順", getValue: (member) => member.points.collaboration },
  change: { label: "前回比が高い順", getValue: calculateScoreChange },
};

let members = [];
let timeline = [];
let memberFilters = {
  searchText: "",
  selectedTag: allTagsLabel,
  sortKey: "score",
};
let lastFocusedElement = null;
let activeModalMemberId = null;
let storageStatusTimer = null;

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function createSampleAppData() {
  return {
    members: cloneData(initialMembers),
    timeline: cloneData(initialTimeline),
  };
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isValidPoints(points) {
  return isPlainObject(points) && Object.keys(pointLabels).every((type) => Number.isFinite(points[type]) && points[type] >= 0);
}

function isValidStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isValidMember(member) {
  return isPlainObject(member)
    && typeof member.id === "string"
    && typeof member.name === "string"
    && typeof member.role === "string"
    && typeof member.specialty === "string"
    && isValidPoints(member.points)
    && Number.isFinite(member.previousScore)
    && isValidStringArray(member.strengthTags)
    && isValidStringArray(member.growthOpportunities);
}

function isValidTimelineItem(item) {
  return isPlainObject(item)
    && typeof item.recipientId === "string"
    && Object.prototype.hasOwnProperty.call(pointLabels, item.type)
    && Number.isFinite(item.points)
    && item.points > 0
    && typeof item.reason === "string"
    && typeof item.date === "string";
}

function isValidAppData(data) {
  return isPlainObject(data)
    && Array.isArray(data.members)
    && data.members.length > 0
    && data.members.every(isValidMember)
    && Array.isArray(data.timeline)
    && data.timeline.every(isValidTimelineItem);
}

function setAppData(data) {
  members = cloneData(data.members);
  timeline = cloneData(data.timeline);
}

function getAppData() {
  return {
    members: cloneData(members),
    timeline: cloneData(timeline),
  };
}

function setStorageStatus(message = storageStatusDefaultText, temporary = false) {
  if (!storageStatus) {
    return;
  }

  storageStatus.textContent = message;
  storageStatus.classList.toggle("is-saved-now", temporary);

  if (storageStatusTimer) {
    window.clearTimeout(storageStatusTimer);
  }

  if (temporary) {
    storageStatusTimer = window.setTimeout(() => {
      storageStatus.textContent = storageStatusDefaultText;
      storageStatus.classList.remove("is-saved-now");
      storageStatusTimer = null;
    }, 2200);
  }
}

function saveAppData(temporaryStatus = false) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(getAppData()));
    setStorageStatus(temporaryStatus ? "保存しました" : storageStatusDefaultText, temporaryStatus);
    return true;
  } catch (error) {
    setStorageStatus("保存できませんでした");
    return false;
  }
}

function loadAppData() {
  const sampleData = createSampleAppData();

  try {
    const storedData = localStorage.getItem(storageKey);

    if (!storedData) {
      setAppData(sampleData);
      saveAppData();
      return;
    }

    const parsedData = JSON.parse(storedData);

    if (!isValidAppData(parsedData)) {
      throw new Error("Invalid localStorage data");
    }

    setAppData(parsedData);
    setStorageStatus();
  } catch (error) {
    setAppData(sampleData);
    saveAppData();
  }
}

function resetToSampleData() {
  const confirmed = window.confirm("現在のポイント履歴を削除し、サンプルデータに戻します。よろしいですか？");

  if (!confirmed) {
    return;
  }

  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    // localStorageを利用できない環境でも、画面上のデータはサンプルに戻します。
  }

  setAppData(createSampleAppData());
  saveAppData(true);
  renderMemberOptions();
  renderApp();

  if (memberModal.classList.contains("is-open") && activeModalMemberId) {
    const member = getMemberById(activeModalMemberId);

    if (member) {
      renderMemberModal(member);
    } else {
      closeMemberModal();
    }
  }

  formMessage.textContent = "サンプルデータに戻しました。";
}

function getMemberById(id) {
  return members.find((member) => member.id === id);
}

function calculateScore(member) {
  return Object.values(member.points).reduce((sum, value) => sum + value, 0);
}

function formatNumber(value) {
  return value.toLocaleString("ja-JP");
}

function calculateScoreChange(member) {
  return calculateScore(member) - member.previousScore;
}

function formatScoreChange(value) {
  if (value > 0) {
    return `+${formatNumber(value)}`;
  }

  if (value < 0) {
    return `-${formatNumber(Math.abs(value))}`;
  }

  return "±0";
}

function getInvestmentStatus(member) {
  const scoreChange = calculateScoreChange(member);

  if (scoreChange >= 12) {
    return "急成長";
  }

  if (member.points.growth >= 42) {
    return "注目人材";
  }

  if (member.points.trust >= 40) {
    return "安定成長";
  }

  if (member.points.thanks >= 34) {
    return "支援期待";
  }

  return "専門性強化中";
}

function getScoreChangeClass(value) {
  if (value > 0) {
    return "is-up";
  }

  if (value < 0) {
    return "is-down";
  }

  return "is-flat";
}

function getRankedMembers() {
  return [...members].sort((first, second) => calculateScore(second) - calculateScore(first));
}

function normalizeText(value) {
  return String(value).trim().toLocaleLowerCase("ja-JP");
}

function getMemberSearchText(member) {
  return normalizeText([
    member.name,
    member.role,
    member.specialty,
    ...member.strengthTags,
  ].join(" "));
}

function getFilteredAndSortedMembers() {
  const normalizedSearchText = normalizeText(memberFilters.searchText);
  const selectedTag = memberFilters.selectedTag;
  const sortOption = sortOptions[memberFilters.sortKey] || sortOptions.score;

  return members
    .filter((member) => {
      const matchesSearch = !normalizedSearchText || getMemberSearchText(member).includes(normalizedSearchText);
      const matchesTag = selectedTag === allTagsLabel || member.strengthTags.includes(selectedTag);

      return matchesSearch && matchesTag;
    })
    .sort((first, second) => {
      const sortDifference = sortOption.getValue(second) - sortOption.getValue(first);

      if (sortDifference !== 0) {
        return sortDifference;
      }

      return calculateScore(second) - calculateScore(first);
    });
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

function getDashboardTotals() {
  const pointTotals = dashboardPointTypes.reduce((totals, type) => {
    totals[type] = members.reduce((sum, member) => sum + member.points[type], 0);
    return totals;
  }, {});
  const totalScore = members.reduce((sum, member) => sum + calculateScore(member), 0);
  const averageScore = members.length ? Math.round(totalScore / members.length) : 0;
  const topPointType = dashboardPointTypes.reduce((topType, type) => {
    if (pointTotals[type] > pointTotals[topType]) {
      return type;
    }

    return topType;
  }, dashboardPointTypes[0]);

  return {
    memberCount: members.length,
    totalScore,
    averageScore,
    pointTotals,
    topPointType,
  };
}

function renderDashboardSummary(dashboardData) {
  const summaryItems = [
    { label: "総メンバー数", value: dashboardData.memberCount, unit: "members" },
    { label: "総ポイント数", value: dashboardData.totalScore, unit: "points" },
    { label: "平均総合スコア", value: dashboardData.averageScore, unit: "avg score" },
    { label: "最も多いポイント種類", value: pointLabels[dashboardData.topPointType], unit: "trend", isText: true },
    { label: "成長期待ポイント合計", value: dashboardData.pointTotals.growth, unit: "points" },
    { label: "信頼ポイント合計", value: dashboardData.pointTotals.trust, unit: "points" },
    { label: "感謝ポイント合計", value: dashboardData.pointTotals.thanks, unit: "points" },
    { label: "協働ポイント合計", value: dashboardData.pointTotals.collaboration, unit: "points" },
  ];

  dashboardSummary.innerHTML = summaryItems
    .map((item) => `
      <article class="dashboard-summary-card">
        <span>${escapeHtml(item.label)}</span>
        <strong>${item.isText ? escapeHtml(item.value) : formatNumber(item.value)}</strong>
        <small>${escapeHtml(item.unit)}</small>
      </article>
    `)
    .join("");
}

function renderDashboardChart(dashboardData) {
  const maxPointTotal = Math.max(...dashboardPointTypes.map((type) => dashboardData.pointTotals[type]), 1);

  dashboardChart.innerHTML = dashboardPointTypes
    .map((type) => {
      const total = dashboardData.pointTotals[type];
      const barRate = Math.max(6, Math.round((total / maxPointTotal) * 100));

      return `
        <div class="dashboard-chart-row">
          <div class="dashboard-chart-meta">
            <span>${escapeHtml(pointLabels[type])}</span>
            <strong>${formatNumber(total)}pt</strong>
          </div>
          <div class="dashboard-bar" aria-label="${escapeHtml(pointLabels[type])} ${formatNumber(total)}ポイント、最大値比 ${barRate}%">
            <span style="width: ${barRate}%"></span>
          </div>
        </div>
      `;
    })
    .join("");
}

function getDashboardMainComment(topPointType) {
  const comments = {
    trust: "このチームは、安心して任せられる関係性が強みとして表れている傾向が見られます。",
    growth: "このチームは、今後の挑戦や成長への期待が集まりやすい状態として確認できます。",
    thanks: "このチームは、互いに支援し合う文化が見えやすい状態として表れています。",
    collaboration: "このチームは、また一緒に働きたいと思える協働関係が形成されている傾向が見られます。",
  };

  return comments[topPointType];
}

function getDashboardBalanceComments(dashboardData) {
  const totals = dashboardData.pointTotals;
  const values = dashboardPointTypes.map((type) => totals[type]);
  const maxValue = Math.max(...values, 1);
  const averageValue = values.reduce((sum, value) => sum + value, 0) / values.length;
  const comments = [];
  const lowComments = {
    growth: "成長期待ポイントがやや少なめです。新しい挑戦や学びの機会を増やすことで、未来への期待が見えやすくなりそうです。",
    thanks: "感謝ポイントがやや少なめです。日々の小さな支援や貢献を言語化する機会を増やすと、チームの支援関係が見えやすくなりそうです。",
    trust: "信頼ポイントがやや少なめです。役割分担や約束の見える化を進めると、安心して任せられる関係が育ちやすくなります。",
    collaboration: "協働ポイントがやや少なめです。振り返りの中で“また一緒に働きたい理由”を共有すると、協働価値が見えやすくなります。",
  };

  dashboardPointTypes.forEach((type) => {
    if (totals[type] <= averageValue * 0.78 && totals[type] <= maxValue * 0.72) {
      comments.push(lowComments[type]);
    }
  });

  const highType = dashboardPointTypes.find((type) => totals[type] >= averageValue * 1.24 && totals[type] === maxValue);

  if (highType) {
    comments.unshift(`${pointLabels[highType]}が特に多く集まっています。${pointLabels[highType].replace("ポイント", "")}の傾向が強みとして表れています。`);
  }

  if (comments.length === 0) {
    comments.push("4種類のポイントが比較的バランスよく集まっています。今の関わり方を続けながら、日々の小さな変化も確認できそうです。");
  }

  return comments.slice(0, 3);
}

function renderDashboardComments(dashboardData) {
  const comments = [getDashboardMainComment(dashboardData.topPointType), ...getDashboardBalanceComments(dashboardData)];

  dashboardComments.innerHTML = comments
    .map((comment, index) => `
      <p class="dashboard-comment${index === 0 ? " is-main" : ""}">${escapeHtml(comment)}</p>
    `)
    .join("");
}

function getTopMemberByValue(getValue) {
  return [...members].sort((first, second) => getValue(second) - getValue(first))[0];
}

function renderDashboardSpotlights() {
  const spotlightDefinitions = [
    {
      reason: "総合スコアが最も高いメンバーとして、注目ポイントとして確認できます。",
      scoreLabel: "総合スコア",
      getMember: () => getTopMemberByValue(calculateScore),
      getScore: calculateScore,
    },
    {
      reason: "成長期待ポイントが最も高く、今後の挑戦への期待が集まっている傾向が見られます。",
      scoreLabel: pointLabels.growth,
      getMember: () => getTopMemberByValue((member) => member.points.growth),
      getScore: (member) => member.points.growth,
    },
    {
      reason: "感謝ポイントが最も高く、日々の支援や貢献が見えやすいメンバーとして確認できます。",
      scoreLabel: pointLabels.thanks,
      getMember: () => getTopMemberByValue((member) => member.points.thanks),
      getScore: (member) => member.points.thanks,
    },
  ];

  dashboardSpotlights.innerHTML = spotlightDefinitions
    .map((definition) => {
      const member = definition.getMember();

      return `
        <article class="spotlight-card">
          <span class="spotlight-label">${escapeHtml(definition.scoreLabel)}</span>
          <h4>${escapeHtml(member.name)}</h4>
          <p class="spotlight-role">${escapeHtml(member.role)}</p>
          <p class="spotlight-reason">${escapeHtml(definition.reason)}</p>
          <strong>${formatNumber(definition.getScore(member))}pt</strong>
        </article>
      `;
    })
    .join("");
}

function renderDashboard() {
  const dashboardData = getDashboardTotals();

  renderDashboardSummary(dashboardData);
  renderDashboardChart(dashboardData);
  renderDashboardComments(dashboardData);
  renderDashboardSpotlights();
}

function renderMemberOptions() {
  recipientSelect.innerHTML = members
    .map((member) => `<option value="${member.id}">${escapeHtml(member.name)} / ${escapeHtml(member.role)}</option>`)
    .join("");
}

function renderTagFilters() {
  tagFilterList.innerHTML = strengthTagFilters
    .map((tag) => {
      const isSelected = memberFilters.selectedTag === tag;

      return `
        <button
          type="button"
          class="tag-filter-button${isSelected ? " is-active" : ""}"
          data-tag="${escapeHtml(tag)}"
          aria-pressed="${isSelected}"
        >${escapeHtml(tag)}</button>
      `;
    })
    .join("");
}

function renderMemberFilterStatus(displayedCount) {
  const searchLabel = memberFilters.searchText ? `検索：${escapeHtml(memberFilters.searchText)}` : "検索：なし";
  const tagLabel = `タグ：${escapeHtml(memberFilters.selectedTag)}`;
  const sortLabel = `並び替え：${escapeHtml((sortOptions[memberFilters.sortKey] || sortOptions.score).label)}`;

  memberFilterStatus.innerHTML = `
    <span>表示中：${formatNumber(displayedCount)}人 / 全${formatNumber(members.length)}人</span>
    <span>${searchLabel}</span>
    <span>${tagLabel}</span>
    <span>${sortLabel}</span>
  `;
}

function renderPortfolio() {
  const rankedMembers = getRankedMembers();
  const maxScore = Math.max(...rankedMembers.map(calculateScore));

  portfolioList.innerHTML = rankedMembers
    .map((member, index) => {
      const score = calculateScore(member);
      const scoreChange = calculateScoreChange(member);
      const barRate = Math.max(8, Math.round((score / maxScore) * 100));
      const changeClass = getScoreChangeClass(scoreChange);
      const status = getInvestmentStatus(member);

      return `
        <article class="portfolio-card">
          <div class="portfolio-rank" aria-label="順位 ${index + 1}位">${index + 1}</div>
          <div class="portfolio-member">
            <h3>${escapeHtml(member.name)}</h3>
            <p>${escapeHtml(member.role)}</p>
          </div>
          <div class="portfolio-score">
            <span>人財スコア</span>
            <strong>${formatNumber(score)}</strong>
          </div>
          <div class="portfolio-growth">
            <span>成長期待ポイント</span>
            <strong>${formatNumber(member.points.growth)}</strong>
          </div>
          <div class="portfolio-change ${changeClass}">
            <span>前回比（成長変化）</span>
            <strong>${formatScoreChange(scoreChange)}</strong>
          </div>
          <div class="portfolio-status">
            <span>成長投資ステータス</span>
            <strong>${escapeHtml(status)}</strong>
          </div>
          <div class="portfolio-bar" aria-label="${escapeHtml(member.name)}さんの人財スコア横棒グラフ ${barRate}%">
            <span style="width: ${barRate}%"></span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMembers() {
  const visibleMembers = getFilteredAndSortedMembers();

  renderMemberFilterStatus(visibleMembers.length);

  if (visibleMembers.length === 0) {
    memberList.innerHTML = `
      <div class="empty-member-message" role="status">
        条件に一致するメンバーがいません
      </div>
    `;
    return;
  }

  memberList.innerHTML = visibleMembers
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

function getTopPointType(member) {
  return Object.keys(pointLabels).reduce((topType, type) => {
    if (member.points[type] > member.points[topType]) {
      return type;
    }

    return topType;
  }, "trust");
}

function getScoreChangeMessage(scoreChange) {
  if (scoreChange > 0) {
    return "直近ではスコアが上昇しており、周囲からの期待や信頼が高まっています。";
  }

  if (scoreChange < 0) {
    return "直近ではスコアがやや落ち着いています。次の挑戦機会や周囲との接点を増やすことで、再び成長変化が見えやすくなりそうです。";
  }

  return "直近のスコアは安定しており、継続的な貢献が見られます。";
}

function getFeedbackSummary(feedbackItems) {
  const recentFeedbackItems = feedbackItems.slice(0, 3);

  if (recentFeedbackItems.length === 0) {
    return "まだ十分なフィードバックが蓄積されていません。今後のプロジェクトや協働の中で、具体的な声を集めていきましょう。";
  }

  const pointThemes = [...new Set(recentFeedbackItems.map((item) => pointLabels[item.type].replace("ポイント", "")))];
  const reasonDigest = recentFeedbackItems
    .map((item) => item.reason.replace(/[。.!！?？]$/u, ""))
    .slice(0, 2)
    .join("、");

  return `最近は、${pointThemes.join("・")}に関する声が届いています。理由としては「${reasonDigest}」などがあり、日々の関わりの中で具体的な期待や感謝が集まりつつあります。`;
}

function generateGrowthReport(member) {
  const score = calculateScore(member);
  const scoreChange = calculateScoreChange(member);
  const topPointType = getTopPointType(member);
  const tone = growthReportToneByPoint[topPointType];
  const feedbackItems = getFeedbackForMember(member.id);
  const topStrengthTags = member.strengthTags.slice(0, 3).join("・");
  const nextOpportunity = member.growthOpportunities[0] || "小さな改善テーマのリード";
  const secondaryOpportunity = member.growthOpportunities[1] || "周囲との協働機会づくり";

  return {
    title: "成長レポート",
    currentStrengths: `${tone.strength} 強みタグでは「${topStrengthTags}」が見られ、総合スコアは${formatNumber(score)}ptです。`,
    expectations: `${tone.expectation} ${pointLabels[topPointType]}が最も高く、${tone.theme}がサンプルデータ上の特徴として表れています。`,
    nextChallenge: `${nextOpportunity}に挑戦すると、さらに成長機会が広がりそうです。あわせて「${secondaryOpportunity}」も次の一歩として検討できます。`,
    feedbackSummary: getFeedbackSummary(feedbackItems),
    comment: `${getScoreChangeMessage(scoreChange)} このレポートは練習用プロトタイプのサンプル文章であり、断定的な評価ではなく、成長を支援するための参考メモとして扱ってください。`,
  };
}

function formatGrowthReportText(member, report) {
  return [
    `${report.title}：${member.name} さん`,
    `現在の強み：${report.currentStrengths}`,
    `周囲から期待されていること：${report.expectations}`,
    `次に挑戦するとよさそうなこと：${report.nextChallenge}`,
    `最近のフィードバック要約：${report.feedbackSummary}`,
    `一言コメント：${report.comment}`,
  ].join("\n");
}

function renderGrowthReport(member) {
  const report = generateGrowthReport(member);
  const reportItems = [
    ["現在の強み", report.currentStrengths],
    ["周囲から期待されていること", report.expectations],
    ["次に挑戦するとよさそうなこと", report.nextChallenge],
    ["最近のフィードバック要約", report.feedbackSummary],
    ["一言コメント", report.comment],
  ];

  return `
    <section class="growth-report-card" aria-labelledby="growth-report-title">
      <div class="growth-report-header">
        <div>
          <p class="eyebrow">Sample Growth Memo</p>
          <h3 id="growth-report-title">${escapeHtml(report.title)}</h3>
        </div>
        <div class="copy-report-area">
          <button type="button" class="copy-report-button" data-member-id="${escapeHtml(member.id)}">レポートをコピー</button>
          <span class="copy-report-status" role="status" aria-live="polite"></span>
        </div>
      </div>
      <dl class="growth-report-list">
        ${reportItems
          .map(([label, text]) => `
            <div class="growth-report-item">
              <dt>${escapeHtml(label)}</dt>
              <dd>${escapeHtml(text)}</dd>
            </div>
          `)
          .join("")}
      </dl>
    </section>
  `;
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.inset = "0 auto auto 0";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();

  let copied = false;

  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  } finally {
    document.body.removeChild(helper);
  }

  return copied;
}

function setCopyReportStatus(button, message, isSuccess = true) {
  const status = button.parentElement.querySelector(".copy-report-status");

  if (!status) {
    return;
  }

  status.textContent = message;
  status.classList.toggle("is-error", !isSuccess);

  window.setTimeout(() => {
    if (status.textContent === message) {
      status.textContent = "";
      status.classList.remove("is-error");
    }
  }, 2200);
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

    ${renderGrowthReport(member)}

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
  activeModalMemberId = memberId;
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
  activeModalMemberId = null;

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
            <p class="timeline-title">${recipientName} さんへ ${pointName} を ${formatNumber(item.points)}pt 応援投資</p>
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
  renderDashboard();
  renderPortfolio();
  renderTagFilters();
  renderMembers();
  renderTimeline();
}

function resetMemberFilters() {
  memberFilters = {
    searchText: "",
    selectedTag: allTagsLabel,
    sortKey: "score",
  };
  memberSearchInput.value = memberFilters.searchText;
  memberSortSelect.value = memberFilters.sortKey;
  renderTagFilters();
  renderMembers();
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
  saveAppData(true);
  renderApp();

  if (memberModal.classList.contains("is-open") && activeModalMemberId === member.id) {
    renderMemberModal(member);
  }

  form.reset();
  document.querySelector("#points").value = 10;
  formMessage.textContent = `${member.name} さんへ ${formatNumber(newItem.points)}pt を送りました。`;
});

memberSearchInput.addEventListener("input", (event) => {
  memberFilters.searchText = event.target.value;
  renderMembers();
});

memberSortSelect.addEventListener("change", (event) => {
  memberFilters.sortKey = event.target.value;
  renderMembers();
});

tagFilterList.addEventListener("click", (event) => {
  const tagButton = event.target.closest(".tag-filter-button");

  if (!tagButton) {
    return;
  }

  memberFilters.selectedTag = tagButton.dataset.tag;
  renderTagFilters();
  renderMembers();
});

resetMemberFiltersButton.addEventListener("click", resetMemberFilters);

memberList.addEventListener("click", (event) => {
  const detailButton = event.target.closest(".detail-button");

  if (!detailButton) {
    return;
  }

  openMemberModal(detailButton.dataset.memberId);
});

modalCloseButton.addEventListener("click", closeMemberModal);
resetSampleDataButton.addEventListener("click", resetToSampleData);

memberModal.addEventListener("click", (event) => {
  if (event.target === memberModal) {
    closeMemberModal();
  }
});

memberModal.addEventListener("click", (event) => {
  const copyButton = event.target.closest(".copy-report-button");

  if (!copyButton) {
    return;
  }

  const member = getMemberById(copyButton.dataset.memberId);

  if (!member) {
    setCopyReportStatus(copyButton, "コピーできませんでした", false);
    return;
  }

  const report = generateGrowthReport(member);
  const reportText = formatGrowthReportText(member, report);

  copyTextToClipboard(reportText)
    .then((copied) => {
      setCopyReportStatus(copyButton, copied ? "コピーしました" : "コピー機能を利用できませんでした", copied);
    })
    .catch(() => {
      setCopyReportStatus(copyButton, "コピー機能を利用できませんでした", false);
    });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMemberModal();
  }
});

loadAppData();
renderMemberOptions();
renderApp();
