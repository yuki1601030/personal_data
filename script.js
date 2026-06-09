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
    scoreHistory: [118, 123, 127, 130, 142],
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
    scoreHistory: [106, 112, 118, 129, 141],
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
    scoreHistory: [148, 146, 139, 136, 138],
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
    scoreHistory: [120, 126, 132, 138, 138],
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
    scoreHistory: [124, 128, 132, 136, 136],
    strengthTags: ["データ分析", "課題整理", "チーム支援"],
    growthOpportunities: ["データを使った意思決定テーマを担当", "顧客ヒアリング結果の分析設計を担当"],
  },
];

const initialTimeline = [
  {
    senderId: "aoi-mori",
    recipientId: "ren-kisaragi",
    type: "growth",
    points: 12,
    reason: "新しい視点で画面案を整理し、改善の方向性を明るく示してくれたため。",
    date: "2026-06-08 09:40",
  },
  {
    senderId: "ren-kisaragi",
    recipientId: "haru-nanase",
    type: "thanks",
    points: 10,
    reason: "短時間で試作品を動く形にして、みんなが次の議論に進みやすくなったため。",
    date: "2026-06-07 16:15",
  },
  {
    senderId: "haru-nanase",
    recipientId: "mio-asahi",
    type: "collaboration",
    points: 8,
    reason: "意見を引き出しながら前向きにまとめてくれて、また一緒に進めたいと感じたため。",
    date: "2026-06-06 11:20",
  },
];

const growthOpportunities = [
  {
    id: "new-service-planning",
    name: "新規サービス企画リード",
    category: "企画系",
    requiredTags: ["アイデア創出", "顧客理解", "巻き込み力"],
    description: "新しいサービス案を構想し、関係者を巻き込みながら仮説検証を進める機会です。",
  },
  {
    id: "data-improvement",
    name: "データ活用改善プロジェクト",
    category: "分析系",
    requiredTags: ["データ分析", "課題整理", "実行推進"],
    description: "業務データをもとに課題を可視化し、改善案を提案する機会です。",
  },
  {
    id: "team-onboarding-support",
    name: "チームオンボーディング支援",
    category: "支援系",
    requiredTags: ["チーム支援", "調整力", "信頼形成"],
    description: "新しく参加したメンバーが早く力を発揮できるように支援する機会です。",
  },
  {
    id: "customer-interview-design",
    name: "顧客ヒアリング設計",
    category: "顧客理解系",
    requiredTags: ["顧客理解", "課題整理", "協働推進"],
    description: "ユーザーや顧客の声を集め、課題仮説を整理する機会です。",
  },
  {
    id: "junior-mentor",
    name: "若手メンター担当",
    category: "支援系",
    requiredTags: ["チーム支援", "信頼形成", "調整力"],
    description: "経験の浅いメンバーの相談相手となり、成長を支援する機会です。",
  },
];

const dashboardSummary = document.querySelector("#dashboard-summary");
const dashboardChart = document.querySelector("#dashboard-chart");
const dashboardComments = document.querySelector("#dashboard-comments");
const biasAlerts = document.querySelector("#bias-alerts");
const dashboardSpotlights = document.querySelector("#dashboard-spotlights");
const portfolioList = document.querySelector("#portfolio-list");
const scoreMarketSummary = document.querySelector("#score-market-summary");
const scoreMarketSortList = document.querySelector("#score-market-sort-list");
const scoreMarketComment = document.querySelector("#score-market-comment");
const scoreMarketList = document.querySelector("#score-market-list");
const memberList = document.querySelector("#member-list");
const addMemberButton = document.querySelector("#add-member-button");
const managedMemberList = document.querySelector("#managed-member-list");
const memberEditorModal = document.querySelector("#member-editor-modal");
const memberEditorCard = document.querySelector(".member-editor-card");
const memberEditorForm = document.querySelector("#member-editor-form");
const memberEditorTitle = document.querySelector("#member-editor-title");
const memberEditorErrors = document.querySelector("#member-editor-errors");
const memberEditorModeInput = document.querySelector("#member-editor-mode");
const memberEditorIdInput = document.querySelector("#member-editor-id");
const memberEditorCloseButton = document.querySelector(".editor-modal-close");
const memberEditorCancelButton = document.querySelector(".editor-cancel-button");
const opportunityFilterList = document.querySelector("#opportunity-filter-list");
const growthOpportunityList = document.querySelector("#growth-opportunity-list");
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
const operatorUserSelect = document.querySelector("#operator-user-select");
const operatorUserStatus = document.querySelector("#operator-user-status");
const myPortfolioContent = document.querySelector("#my-portfolio-content");
const timelineFilterList = document.querySelector("#timeline-filter-list");

const storageKey = "growthPointsPrototypeData";
const storageStatusDefaultText = "ブラウザに保存済み";
const allTagsLabel = "すべて";
const opportunityCategories = ["すべて", "企画系", "分析系", "支援系", "顧客理解系"];
const dashboardPointTypes = ["trust", "growth", "thanks", "collaboration"];
const timelineFilters = {
  all: "すべて",
  sent: "自分が送った",
  received: "自分が受け取った",
};
const defaultTimelineFilter = "all";
const biasAlertLevelLabels = { info: "参考情報", caution: "注意", warning: "要確認" };
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
const marketSortOptions = {
  score: { label: "人財スコア順", getValue: calculateScore },
  growthRate: { label: "成長変化率順", getValue: calculateGrowthRate },
  support: { label: "応援投資数順", getValue: getSupportInvestmentCount },
  trust: { label: "信頼ポイント順", getValue: (member) => member.points.trust },
  collaboration: { label: "協働ポイント順", getValue: (member) => member.points.collaboration },
};

const sortOptions = {
  score: { label: "総合スコアが高い順", getValue: calculateScore },
  growth: { label: "成長期待ポイントが高い順", getValue: (member) => member.points.growth },
  trust: { label: "信頼ポイントが高い順", getValue: (member) => member.points.trust },
  thanks: { label: "感謝ポイントが高い順", getValue: (member) => member.points.thanks },
  collaboration: { label: "協働ポイントが高い順", getValue: (member) => member.points.collaboration },
  change: { label: "前回比が高い順", getValue: calculateScoreChange },
};

const careerProfileWarning = "このプロフィールは練習用プロトタイプによる自動生成例です。実際の転職・採用・評価には使用しないでください。実在する個人情報や社内情報は入力しないでください。";

const careerHeadlineByPoint = {
  trust: "安心して任せられる、信頼蓄積型",
  growth: "次の挑戦に期待が集まる、成長加速型",
  thanks: "周囲を支える、チーム貢献型",
  collaboration: "また一緒に働きたいと思われる、協働推進型",
};

const collaborationStyleByPoint = {
  trust: "課題を整理し、周囲を巻き込みながら前に進めるスタイル",
  growth: "新しいアイデアを出しながら、周囲と一緒に形にしていくスタイル",
  thanks: "困っているメンバーを支援し、チーム全体の前進を助けるスタイル",
  collaboration: "多様な意見をつなぎ、チームの意思決定を支えるスタイル",
};

let members = [];
let timeline = [];
let currentOperatorUserId = null;
let activeTimelineFilter = defaultTimelineFilter;
let memberFilters = {
  searchText: "",
  selectedTag: allTagsLabel,
  sortKey: "score",
};
let marketSortKey = "score";
let selectedOpportunityCategory = allTagsLabel;
let lastFocusedElement = null;
let activeModalMemberId = null;
let activeEditorMemberId = null;
let storageStatusTimer = null;

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function createSampleAppData() {
  return {
    members: cloneData(initialMembers),
    timeline: cloneData(initialTimeline),
    currentOperatorUserId: initialMembers[0]?.id || null,
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
    && (member.scoreHistory === undefined || (Array.isArray(member.scoreHistory) && member.scoreHistory.every(Number.isFinite)))
    && isValidStringArray(member.strengthTags)
    && isValidStringArray(member.growthOpportunities);
}

function isValidTimelineItem(item) {
  return isPlainObject(item)
    && (item.senderId === undefined || typeof item.senderId === "string")
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
    && data.members.every(isValidMember)
    && Array.isArray(data.timeline)
    && data.timeline.every(isValidTimelineItem)
    && (data.currentOperatorUserId === undefined || data.currentOperatorUserId === null || typeof data.currentOperatorUserId === "string");
}

function normalizeMemberData(member) {
  const normalizedMember = cloneData(member);
  const currentScore = calculateScore(normalizedMember);
  const rawHistory = Array.isArray(normalizedMember.scoreHistory) ? normalizedMember.scoreHistory.filter(Number.isFinite) : [];

  normalizedMember.scoreHistory = rawHistory.slice(-5);

  if (normalizedMember.scoreHistory.at(-1) !== currentScore) {
    normalizedMember.scoreHistory = [...normalizedMember.scoreHistory, currentScore].slice(-5);
  }

  if (normalizedMember.scoreHistory.length < 2) {
    normalizedMember.scoreHistory = [normalizedMember.previousScore, currentScore].filter(Number.isFinite).slice(-5);
  }

  return normalizedMember;
}

function getFallbackSenderId(recipientId) {
  const fallbackMember = members.find((member) => member.id !== recipientId) || members[0];

  return fallbackMember ? fallbackMember.id : null;
}

function normalizeTimelineItem(item) {
  const normalizedItem = cloneData(item);

  if (!normalizedItem.senderId) {
    normalizedItem.senderId = getFallbackSenderId(normalizedItem.recipientId);
  }

  return normalizedItem;
}

function ensureOperatorUserId(preferredUserId = currentOperatorUserId) {
  if (members.length === 0) {
    currentOperatorUserId = null;
    return currentOperatorUserId;
  }

  if (!preferredUserId || !getMemberById(preferredUserId)) {
    currentOperatorUserId = members[0].id;
    return currentOperatorUserId;
  }

  currentOperatorUserId = preferredUserId;
  return currentOperatorUserId;
}

function setAppData(data) {
  members = cloneData(data.members).map(normalizeMemberData);
  currentOperatorUserId = data.currentOperatorUserId || null;
  ensureOperatorUserId(currentOperatorUserId);
  timeline = cloneData(data.timeline).map(normalizeTimelineItem);
}

function getAppData() {
  return {
    members: cloneData(members),
    timeline: cloneData(timeline),
    currentOperatorUserId,
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

function saveData(temporaryStatus = false) {
  return saveAppData(temporaryStatus);
}

function loadData() {
  return loadAppData();
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
    if (!parsedData.currentOperatorUserId || parsedData.timeline.some((item) => !item.senderId)) {
      saveAppData();
    } else {
      setStorageStatus();
    }
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
  renderAll();

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

function calculateGrowthRate(member) {
  if (!member.previousScore) {
    return 0;
  }

  return ((calculateScore(member) - member.previousScore) / member.previousScore) * 100;
}

function formatGrowthRate(value) {
  const roundedValue = Math.abs(value).toFixed(1);

  if (value > 0) {
    return `+${roundedValue}%`;
  }

  if (value < 0) {
    return `-${roundedValue}%`;
  }

  return "±0.0%";
}

function getSupportInvestmentCount(member) {
  return timeline.filter((item) => item.recipientId === member.id).length;
}

function getMemberScoreHistory(member) {
  const history = Array.isArray(member.scoreHistory) ? member.scoreHistory.filter(Number.isFinite) : [];

  return (history.length > 0 ? history : [member.previousScore, calculateScore(member)]).slice(-5);
}

function updateMemberScoreHistory(member, score) {
  const history = getMemberScoreHistory(member);

  if (history.at(-1) === score) {
    member.scoreHistory = history.slice(-5);
    return;
  }

  member.scoreHistory = [...history, score].slice(-5);
}

function generateMemberId(name) {
  const base = normalizeText(name)
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "sample-member";
  const uniquePart = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

  return `${base}-${uniquePart}`;
}

function generateScoreHistory(currentScore) {
  const baseScore = Math.max(0, Math.round(currentScore));
  const offsets = [-6, -2, 3, -1, 0];

  return offsets.map((offset, index) => Math.max(0, baseScore + offset + (index % 2 === 0 ? 1 : -1)));
}

function splitCommaValues(value, fallbackValues = []) {
  const values = String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return values.length > 0 ? values : fallbackValues;
}

function parsePointInput(value, label, errors) {
  if (String(value).trim() === "") {
    return 0;
  }

  const numericValue = Number(value);

  if (!Number.isFinite(numericValue) || numericValue < 0) {
    errors.push(`${label}は0以上の数値で入力してください。`);
    return 0;
  }

  return Math.round(numericValue);
}

function renderMiniScoreChart(member, label = "過去5回分の人財スコア推移") {
  const history = getMemberScoreHistory(member);
  const maxScore = Math.max(...history, 1);

  return `
    <div class="mini-score-chart" role="img" aria-label="${escapeHtml(member.name)}さんの${escapeHtml(label)}：${history.map(formatNumber).join("、")}">
      ${history
        .map((score, index) => {
          const height = Math.max(18, Math.round((score / maxScore) * 100));

          return `
            <span class="mini-score-bar" style="height: ${height}%">
              <span class="mini-score-value">${formatNumber(score)}</span>
              <span class="sr-only">${index + 1}回目 ${formatNumber(score)}</span>
            </span>
          `;
        })
        .join("")}
    </div>
  `;
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
    return "急成長中";
  }

  if (member.points.growth >= 42) {
    return "期待集中";
  }

  if (member.points.trust >= 40) {
    return "安定成長";
  }

  if (member.points.thanks >= 34) {
    return "支援貢献";
  }

  return "じっくり蓄積";
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

function getFilteredGrowthOpportunities() {
  if (selectedOpportunityCategory === allTagsLabel) {
    return growthOpportunities;
  }

  return growthOpportunities.filter((opportunity) => opportunity.category === selectedOpportunityCategory);
}

function getMatchingReasons(member, opportunity, matchedTags, scoreChange) {
  const reasons = [];

  if (matchedTags.length > 0) {
    reasons.push(`必要タグと強みタグ（${matchedTags.join("・")}）が一致しています。`);
  }

  if (member.points.growth >= 40) {
    reasons.push("成長期待ポイントが高く、新しい挑戦との相性がよさそうです。");
  }

  if (member.points.collaboration >= 34 || matchedTags.includes("巻き込み力") || matchedTags.includes("調整力")) {
    reasons.push("協働ポイントや調整の強みがあり、関係者を巻き込む機会に向いていそうです。");
  }

  if (scoreChange > 0) {
    reasons.push("直近のスコアが上昇しており、次の挑戦機会として検討できます。");
  }

  if (reasons.length === 0) {
    reasons.push("現在の強みやポイント傾向から、候補として確認できます。");
  }

  return reasons.slice(0, 2);
}

function calculateOpportunityMatch(member, opportunity) {
  const matchedTags = opportunity.requiredTags.filter((tag) => member.strengthTags.includes(tag));
  const scoreChange = calculateScoreChange(member);
  const tagScore = matchedTags.length * 22;
  const growthScore = Math.min(18, Math.round(member.points.growth / 3));
  const collaborationScore = Math.min(14, Math.round(member.points.collaboration / 4));
  const changeScore = scoreChange > 0 ? Math.min(10, scoreChange) : 0;
  const trustBonus = member.points.trust >= 38 ? 6 : 0;
  const matchRate = Math.min(100, tagScore + growthScore + collaborationScore + changeScore + trustBonus);

  return {
    member,
    matchRate,
    matchedTags,
    reasons: getMatchingReasons(member, opportunity, matchedTags, scoreChange),
  };
}

function getOpportunityMatches(opportunity) {
  return members
    .map((member) => calculateOpportunityMatch(member, opportunity))
    .sort((first, second) => {
      if (second.matchRate !== first.matchRate) {
        return second.matchRate - first.matchRate;
      }

      return calculateScore(second.member) - calculateScore(first.member);
    });
}

function getMemberOpportunityMatches(member) {
  return growthOpportunities
    .map((opportunity) => ({
      opportunity,
      ...calculateOpportunityMatch(member, opportunity),
    }))
    .sort((first, second) => second.matchRate - first.matchRate);
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

function getCurrentOperatorUser() {
  return currentOperatorUserId ? getMemberById(currentOperatorUserId) : null;
}

function renderOperatorUserSelect() {
  ensureOperatorUserId();

  if (!operatorUserSelect || !operatorUserStatus) {
    return;
  }

  if (members.length === 0) {
    operatorUserSelect.innerHTML = `<option value="">操作ユーザーなし</option>`;
    operatorUserSelect.disabled = true;
    operatorUserStatus.textContent = "操作ユーザーなし：架空メンバーを追加すると疑似ログインを選べます。";
    return;
  }

  operatorUserSelect.disabled = false;
  operatorUserSelect.innerHTML = members
    .map((member) => `<option value="${escapeHtml(member.id)}">${escapeHtml(member.name)}</option>`)
    .join("");
  operatorUserSelect.value = currentOperatorUserId;

  const operatorUser = getCurrentOperatorUser();
  operatorUserStatus.textContent = operatorUser
    ? `現在の操作ユーザー：${operatorUser.name} さん（練習用の疑似ログイン）`
    : "操作ユーザーを選択してください。";
}

function getTimelineSender(item) {
  return item.senderId ? getMemberById(item.senderId) : null;
}

function getTimelineRecipient(item) {
  return getMemberById(item.recipientId);
}

function getTimelineTotal(items) {
  return items.reduce((sum, item) => sum + item.points, 0);
}

function getPointBreakdown(items) {
  return dashboardPointTypes.reduce((totals, type) => {
    totals[type] = items
      .filter((item) => item.type === type)
      .reduce((sum, item) => sum + item.points, 0);
    return totals;
  }, {});
}

function getTopPointType(items) {
  const breakdown = getPointBreakdown(items);

  return dashboardPointTypes.reduce((topType, type) => {
    if (breakdown[type] > breakdown[topType]) {
      return type;
    }

    return topType;
  }, dashboardPointTypes[0]);
}

function getSupportStyleComment(items) {
  if (items.length === 0) {
    return "まだ応援投資の履歴がありません。気になる架空メンバーにポイントを送ってみましょう。";
  }

  const topPointType = getTopPointType(items);
  const comments = {
    growth: "このユーザーは、今後の挑戦や伸びしろに注目して応援投資する傾向が見られます。",
    thanks: "このユーザーは、日々の支援や貢献に感謝を伝える応援が多い傾向です。",
    trust: "このユーザーは、安心して任せられる関係性を重視して応援する傾向があります。",
    collaboration: "このユーザーは、また一緒に働きたい相手に応援投資する傾向が見られます。",
  };

  return comments[topPointType];
}

function renderMyPortfolio() {
  if (!myPortfolioContent) {
    return;
  }

  const operatorUser = getCurrentOperatorUser();

  if (!operatorUser) {
    myPortfolioContent.innerHTML = `
      <article class="my-portfolio-empty" role="status">
        <h3>操作ユーザーなし</h3>
        <p>架空メンバーを追加し、操作ユーザーを選ぶと自分の応援ポートフォリオを確認できます。</p>
      </article>
    `;
    return;
  }

  const sentItems = timeline.filter((item) => item.senderId === operatorUser.id && getTimelineRecipient(item));
  const totalSentPoints = getTimelineTotal(sentItems);
  const supportedMemberIds = [...new Set(sentItems.map((item) => item.recipientId))];
  const topPointType = sentItems.length > 0 ? getTopPointType(sentItems) : null;
  const recentItems = sentItems.slice(0, 3);

  const summaryCards = [
    ["自分が送った総ポイント", `${formatNumber(totalSentPoints)}pt`],
    ["応援したメンバー数", `${formatNumber(supportedMemberIds.length)}人`],
    ["最も多く送ったポイント種類", topPointType ? pointLabels[topPointType] : "-"],
  ];

  const recipientCards = supportedMemberIds
    .map((recipientId) => {
      const member = getMemberById(recipientId);
      const memberItems = sentItems.filter((item) => item.recipientId === recipientId);
      const memberTotal = getTimelineTotal(memberItems);
      const breakdown = getPointBreakdown(memberItems);
      const latestItem = memberItems[0];
      const ratio = totalSentPoints > 0 ? Math.round((memberTotal / totalSentPoints) * 100) : 0;

      return `
        <article class="support-recipient-card">
          <div class="support-recipient-heading">
            <div>
              <h3>${escapeHtml(member.name)}</h3>
              <p>${escapeHtml(member.role)}</p>
            </div>
            <strong>${formatNumber(memberTotal)}pt</strong>
          </div>
          <div class="support-breakdown-grid">
            ${dashboardPointTypes.map((type) => `<div><span>${escapeHtml(pointLabels[type])}</span><strong>${formatNumber(breakdown[type])}</strong></div>`).join("")}
          </div>
          <p class="latest-support-reason">最新の応援理由：${escapeHtml(latestItem ? latestItem.reason : "-")}</p>
          <div class="support-ratio" aria-label="${escapeHtml(member.name)}さんへの応援比率 ${ratio}%">
            <div class="support-ratio-label"><span>応援比率</span><strong>${ratio}%</strong></div>
            <div class="support-ratio-bar" aria-hidden="true"><span style="width: ${ratio}%"></span></div>
          </div>
        </article>
      `;
    })
    .join("");

  myPortfolioContent.innerHTML = `
    <article class="my-portfolio-card">
      <div class="my-portfolio-header">
        <div>
          <p class="eyebrow">Practice User Portfolio</p>
          <h3>${escapeHtml(operatorUser.name)} さんの応援ポートフォリオ</h3>
          <p>本物の評価ではなく、架空データによる関係性の可視化です。</p>
        </div>
      </div>
      <div class="my-portfolio-summary">
        ${summaryCards.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
      </div>
      <div class="support-style-comment">${escapeHtml(getSupportStyleComment(sentItems))}</div>
      <div class="recent-support-block">
        <h4>最近の応援投資</h4>
        ${recentItems.length > 0
          ? `<ul>${recentItems.map((item) => {
              const recipient = getTimelineRecipient(item);
              return `<li>${escapeHtml(recipient ? recipient.name : "架空メンバー")}｜${escapeHtml(pointLabels[item.type])} +${formatNumber(item.points)}｜${escapeHtml(item.date)}</li>`;
            }).join("")}</ul>`
          : `<p class="empty-feedback">まだ最近の応援投資はありません。</p>`}
      </div>
      <div class="support-recipient-list">
        ${recipientCards || `<p class="empty-feedback">応援先メンバー別のポイントはまだありません。</p>`}
      </div>
    </article>
  `;
}

function renderTimelineFilters() {
  if (!timelineFilterList) {
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(timelineFilters, activeTimelineFilter)) {
    activeTimelineFilter = defaultTimelineFilter;
  }

  timelineFilterList.innerHTML = Object.entries(timelineFilters)
    .map(([key, label]) => {
      const isActive = key === activeTimelineFilter;
      return `<button type="button" class="timeline-filter-chip${isActive ? " is-active" : ""}" data-timeline-filter="${escapeHtml(key)}" aria-pressed="${isActive}">${escapeHtml(label)}</button>`;
    })
    .join("");
}

function getFilteredTimeline() {
  const operatorUser = getCurrentOperatorUser();

  if (!operatorUser || activeTimelineFilter === "all") {
    return timeline;
  }

  if (activeTimelineFilter === "sent") {
    return timeline.filter((item) => item.senderId === operatorUser.id);
  }

  if (activeTimelineFilter === "received") {
    return timeline.filter((item) => item.recipientId === operatorUser.id);
  }

  return timeline;
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

function getShortReasonCount() {
  return timeline.filter((item) => item.reason.trim().length < 10).length;
}

function getDominantPointType(points) {
  const total = dashboardPointTypes.reduce((sum, type) => sum + points[type], 0);

  if (total === 0) {
    return null;
  }

  const topType = dashboardPointTypes.reduce((currentTopType, type) => {
    if (points[type] > points[currentTopType]) {
      return type;
    }

    return currentTopType;
  }, dashboardPointTypes[0]);
  const ratio = points[topType] / total;

  return { type: topType, ratio, total };
}

function createBiasAlert(level, title, message, detail) {
  return { level, title, message, detail };
}

function detectBiasAlerts(dashboardData) {
  const alerts = [];
  const totalScore = dashboardData.totalScore;
  const feedbackCount = timeline.length;
  const averageScore = members.length ? totalScore / members.length : 0;

  if (totalScore > 0) {
    const topMember = getTopMemberByValue(calculateScore);
    const topMemberRatio = calculateScore(topMember) / totalScore;

    if (topMemberRatio >= 0.4) {
      alerts.push(createBiasAlert(
        "warning",
        "特定メンバーへの集中",
        "一部のメンバーにポイントが集中している傾向があります。目立ちにくい貢献も拾えるよう、振り返り対象を広げてみましょう。",
        `${topMember.name}さんが全体の約${Math.round(topMemberRatio * 100)}%を受け取っています。`,
      ));
    }
  }

  if (feedbackCount === 0 || feedbackCount < members.length) {
    alerts.push(createBiasAlert(
      feedbackCount === 0 ? "warning" : "caution",
      "フィードバック不足",
      "フィードバック件数がまだ少なめです。判断材料を増やすために、具体的な行動や場面を記録していきましょう。",
      `現在のフィードバック件数は${formatNumber(feedbackCount)}件、メンバー数は${formatNumber(members.length)}人です。`,
    ));
  }

  const dominantPointType = getDominantPointType(dashboardData.pointTotals);

  if (dominantPointType && dominantPointType.ratio >= 0.5) {
    alerts.push(createBiasAlert(
      "caution",
      "ポイント種類の偏り",
      "特定のポイント種類に偏りが見られます。信頼・成長期待・感謝・協働の複数観点で見ると、より立体的に人材価値を捉えられます。",
      `${pointLabels[dominantPointType.type]}が全体の約${Math.round(dominantPointType.ratio * 100)}%です。`,
    ));
  }

  if (feedbackCount > 0) {
    const shortReasonCount = getShortReasonCount();
    const shortReasonRatio = shortReasonCount / feedbackCount;

    if (shortReasonCount >= 2 && shortReasonRatio >= 0.4) {
      alerts.push(createBiasAlert(
        shortReasonRatio >= 0.65 ? "caution" : "info",
        "理由が短すぎるフィードバック",
        "理由が短いフィードバックが見られます。なぜポイントを送ったのかを具体的に書くと、成長支援に使いやすくなります。",
        `10文字未満の理由文が${formatNumber(shortReasonCount)}件あります。`,
      ));
    }
  }

  if (members.length >= 2 && averageScore > 0) {
    const lowScoreMembers = members.filter((member) => calculateScore(member) <= averageScore * 0.72);

    if (lowScoreMembers.length > 0) {
      alerts.push(createBiasAlert(
        "caution",
        "低スコアメンバーの放置",
        "スコアが相対的に低いメンバーがいます。評価を下げる目的ではなく、接点や成長機会が不足していないかを確認してみましょう。",
        `${lowScoreMembers.map((member) => `${member.name}さん`).join("・")}は平均より低めの傾向です。`,
      ));
    }
  }

  if (alerts.length === 0) {
    alerts.push(createBiasAlert(
      "info",
      "大きな偏りは未検知",
      "現時点では大きな偏りは検知されていません。引き続き、具体的なフィードバックを蓄積していきましょう。",
      "このコメントは簡易チェックにもとづく参考情報です。",
    ));
  }

  return alerts;
}

function renderBiasAlerts(dashboardData) {
  biasAlerts.innerHTML = detectBiasAlerts(dashboardData)
    .map((alert) => `
      <article class="bias-alert-card is-${escapeHtml(alert.level)}">
        <div class="bias-alert-meta">
          <span class="bias-alert-level">${escapeHtml(biasAlertLevelLabels[alert.level])}</span>
          <strong>${escapeHtml(alert.title)}</strong>
        </div>
        <p>${escapeHtml(alert.message)}</p>
        <small>${escapeHtml(alert.detail)}</small>
      </article>
    `)
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
  if (members.length === 0) {
    dashboardSpotlights.innerHTML = `<p class="empty-member-message" role="status">まだメンバーが登録されていません。まずは架空メンバーを追加してみましょう。</p>`;
    return;
  }

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
  renderBiasAlerts(dashboardData);
  renderDashboardComments(dashboardData);
  renderDashboardSpotlights();
}

function updateMemberSelectOptions() {
  if (members.length === 0) {
    recipientSelect.innerHTML = `<option value="">メンバーを追加してください</option>`;
    recipientSelect.disabled = true;
    return;
  }

  recipientSelect.disabled = false;
  recipientSelect.innerHTML = members
    .map((member) => `<option value="${escapeHtml(member.id)}">${escapeHtml(member.name)} / ${escapeHtml(member.role)}</option>`)
    .join("");
}

function renderMemberOptions() {
  updateMemberSelectOptions();
}

function getAvailableStrengthTagFilters() {
  const dynamicTags = members.flatMap((member) => member.strengthTags);

  return [allTagsLabel, ...new Set([...strengthTagFilters.filter((tag) => tag !== allTagsLabel), ...dynamicTags])];
}

function renderTagFilters() {
  const availableTags = getAvailableStrengthTagFilters();

  if (!availableTags.includes(memberFilters.selectedTag)) {
    memberFilters.selectedTag = allTagsLabel;
  }

  tagFilterList.innerHTML = availableTags
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

function renderOpportunityFilters() {
  opportunityFilterList.innerHTML = opportunityCategories
    .map((category) => {
      const isSelected = selectedOpportunityCategory === category;

      return `
        <button
          type="button"
          class="opportunity-filter-button${isSelected ? " is-active" : ""}"
          data-category="${escapeHtml(category)}"
          aria-pressed="${isSelected}"
        >${escapeHtml(category)}</button>
      `;
    })
    .join("");
}

function renderOpportunityMatchBadge(matchRate) {
  return `
    <div class="match-meter" aria-label="マッチ度 ${matchRate}%">
      <div class="match-meter-heading">
        <span>マッチ度</span>
        <strong>${matchRate}%</strong>
      </div>
      <div class="match-meter-bar" aria-hidden="true"><span style="width: ${matchRate}%"></span></div>
    </div>
  `;
}

function renderGrowthMatching() {
  renderGrowthOpportunityMatching();
}

function renderGrowthOpportunityMatching() {
  const visibleOpportunities = getFilteredGrowthOpportunities();

  if (members.length === 0) {
    growthOpportunityList.innerHTML = `<p class="empty-member-message" role="status">まだメンバーが登録されていません。まずは架空メンバーを追加してみましょう。</p>`;
    return;
  }

  if (visibleOpportunities.length === 0) {
    growthOpportunityList.innerHTML = `<p class="empty-member-message" role="status">条件に一致する成長機会がありません</p>`;
    return;
  }

  growthOpportunityList.innerHTML = visibleOpportunities
    .map((opportunity) => {
      const requiredTags = opportunity.requiredTags
        .map((tag) => `<span class="tag-label">${escapeHtml(tag)}</span>`)
        .join("");
      const topMatches = getOpportunityMatches(opportunity).slice(0, 3);

      return `
        <article class="growth-opportunity-card">
          <div class="growth-opportunity-header">
            <span class="category-badge">${escapeHtml(opportunity.category)}</span>
            <h3>${escapeHtml(opportunity.name)}</h3>
            <p>${escapeHtml(opportunity.description)}</p>
          </div>
          <div class="required-tag-block">
            <span>必要タグ</span>
            <div class="tag-list compact">${requiredTags}</div>
          </div>
          <div class="recommended-members-block">
            <h4>おすすめメンバー上位3名</h4>
            <div class="recommended-member-list" aria-label="${escapeHtml(opportunity.name)}のおすすめメンバー上位3名">
              ${topMatches
              .map((match, index) => `
                <article class="recommended-member-card">
                  <div class="recommended-member-heading">
                    <span class="recommend-rank">${index + 1}</span>
                    <div>
                      <h4>${escapeHtml(match.member.name)}</h4>
                      <p>${escapeHtml(match.member.role)}</p>
                    </div>
                  </div>
                  ${renderOpportunityMatchBadge(match.matchRate)}
                  <ul class="match-reason-list">
                    ${match.reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
                  </ul>
                </article>
              `)
              .join("")}
            </div>
          </div>
        </article>
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

function getMarketSortedMembers() {
  const sortOption = marketSortOptions[marketSortKey] || marketSortOptions.score;

  return [...members].sort((first, second) => {
    const sortDifference = sortOption.getValue(second) - sortOption.getValue(first);

    if (sortDifference !== 0) {
      return sortDifference;
    }

    return calculateScore(second) - calculateScore(first);
  });
}

function getScoreMarketData() {
  const totalTrustAssets = members.reduce((sum, member) => sum + calculateScore(member), 0);
  const averageScore = members.length > 0 ? Math.round(totalTrustAssets / members.length) : 0;
  const growthMembers = members.filter((member) => calculateScoreChange(member) > 0);
  const topGrowthMember = getTopMemberByValue(calculateGrowthRate);
  const topSupportMember = getTopMemberByValue(getSupportInvestmentCount);

  return {
    totalTrustAssets,
    averageScore,
    growthMembersCount: growthMembers.length,
    topGrowthMember,
    topSupportMember,
  };
}

function renderScoreMarketSummary(marketData) {
  const summaryItems = [
    ["信頼資産総量", `${formatNumber(marketData.totalTrustAssets)}pt`, "全メンバーの人財スコア合計"],
    ["平均人財スコア", `${formatNumber(marketData.averageScore)}pt`, "現在の平均的な蓄積状況"],
    ["成長変化が大きいメンバー", marketData.topGrowthMember ? marketData.topGrowthMember.name : "-", marketData.topGrowthMember ? formatGrowthRate(calculateGrowthRate(marketData.topGrowthMember)) : "-"],
    ["応援投資が集まっているメンバー", marketData.topSupportMember ? marketData.topSupportMember.name : "-", marketData.topSupportMember ? `${formatNumber(getSupportInvestmentCount(marketData.topSupportMember))}件` : "-"],
    ["スコア上昇メンバー数", `${formatNumber(marketData.growthMembersCount)}名`, "前回比がプラスのメンバー"],
  ];

  scoreMarketSummary.innerHTML = summaryItems
    .map(([label, value, description]) => `
      <article class="market-summary-card">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        <p>${escapeHtml(description)}</p>
      </article>
    `)
    .join("");
}

function renderScoreMarketSortChips() {
  scoreMarketSortList.innerHTML = Object.entries(marketSortOptions)
    .map(([key, option]) => {
      const isActive = key === marketSortKey;

      return `
        <button type="button" class="market-sort-chip${isActive ? " is-active" : ""}" data-market-sort="${escapeHtml(key)}" aria-pressed="${isActive}">
          ${escapeHtml(option.label)}
        </button>
      `;
    })
    .join("");
}

function getScoreMarketComment() {
  if (members.length === 0) {
    return "まだメンバーが登録されていません。架空メンバーを追加すると、スコア傾向を確認できます。";
  }

  const growthMembersCount = members.filter((member) => calculateScoreChange(member) > 0).length;
  const pointTotals = dashboardPointTypes.reduce((totals, type) => {
    totals[type] = members.reduce((sum, member) => sum + member.points[type], 0);
    return totals;
  }, {});
  const supportCounts = members.map(getSupportInvestmentCount);
  const maxSupportCount = Math.max(...supportCounts, 0);
  const totalSupportCount = supportCounts.reduce((sum, count) => sum + count, 0);

  if (totalSupportCount > 0 && maxSupportCount / totalSupportCount >= 0.55) {
    return "一部のメンバーに応援投資が集まっています。まだ見えにくい貢献にも目を向けることで、より多面的な信頼資産を蓄積できそうです。";
  }

  if (pointTotals.growth >= pointTotals.trust && pointTotals.growth >= pointTotals.collaboration) {
    return "成長期待ポイントが多く集まっており、次の挑戦機会につながる人財が見えやすい状態です。";
  }

  if (pointTotals.collaboration >= pointTotals.trust && pointTotals.collaboration >= pointTotals.growth) {
    return "協働ポイントが多く集まっており、また一緒に働きたいと思われる関係性が可視化されています。";
  }

  if (growthMembersCount >= Math.ceil(members.length * 0.6)) {
    return "全体として、成長変化が前向きに表れています。応援投資や具体的なフィードバックが、メンバーの成長機会を見えやすくしています。";
  }

  return "多面的なフィードバックが増えると、さらに納得感が高まりそうです。信頼資産と協働価値の蓄積を、次の機会接続に活かせそうです。";
}

function renderScoreMarketCards() {
  const sortedMembers = getMarketSortedMembers();

  if (sortedMembers.length === 0) {
    scoreMarketList.innerHTML = `<p class="empty-member-message" role="status">まだメンバーが登録されていません。まずは架空メンバーを追加してみましょう。</p>`;
    return;
  }

  scoreMarketList.innerHTML = sortedMembers
    .map((member) => {
      const score = calculateScore(member);
      const scoreChange = calculateScoreChange(member);
      const growthRate = calculateGrowthRate(member);
      const changeClass = getScoreChangeClass(scoreChange);
      const status = getInvestmentStatus(member);
      const supportCount = getSupportInvestmentCount(member);

      return `
        <article class="score-market-card">
          <div class="score-market-card-header">
            <div>
              <span class="market-status-pill">${escapeHtml(status)}</span>
              <h3>${escapeHtml(member.name)}</h3>
              <p>${escapeHtml(member.role)}</p>
            </div>
            <div class="market-score-block">
              <span>人財スコア</span>
              <strong>${formatNumber(score)}</strong>
            </div>
          </div>

          <div class="market-metric-row">
            <div class="market-change ${changeClass}"><span>前回比</span><strong>${formatScoreChange(scoreChange)}pt</strong></div>
            <div class="market-change ${changeClass}"><span>成長変化率</span><strong>${formatGrowthRate(growthRate)}</strong></div>
            <div><span>応援投資数</span><strong>${formatNumber(supportCount)}件</strong></div>
          </div>

          <div class="market-point-grid">
            <div><span>信頼ポイント</span><strong>${formatNumber(member.points.trust)}</strong></div>
            <div><span>成長期待ポイント</span><strong>${formatNumber(member.points.growth)}</strong></div>
            <div><span>感謝ポイント</span><strong>${formatNumber(member.points.thanks)}</strong></div>
            <div><span>協働ポイント</span><strong>${formatNumber(member.points.collaboration)}</strong></div>
          </div>

          <div class="market-chart-block">
            <div class="market-chart-heading"><span>スコア推移</span><strong>過去5回</strong></div>
            ${renderMiniScoreChart(member)}
          </div>

          <button type="button" class="support-invest-button" data-member-id="${escapeHtml(member.id)}">応援投資する</button>
        </article>
      `;
    })
    .join("");
}

function renderScoreMarket() {
  const marketData = getScoreMarketData();

  renderScoreMarketSummary(marketData);
  renderScoreMarketSortChips();
  scoreMarketComment.textContent = getScoreMarketComment();
  renderScoreMarketCards();
}

function renderPortfolio() {
  const rankedMembers = getRankedMembers();

  if (rankedMembers.length === 0) {
    portfolioList.innerHTML = `<p class="empty-member-message" role="status">まだメンバーが登録されていません。まずは架空メンバーを追加してみましょう。</p>`;
    return;
  }

  const maxScore = Math.max(...rankedMembers.map(calculateScore), 1);

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
        ${members.length === 0 ? "まだメンバーが登録されていません。まずは架空メンバーを追加してみましょう。" : "条件に一致するメンバーがいません"}
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
  const topMatches = getMemberOpportunityMatches(member).slice(0, 3);

  return `
    <div class="member-opportunity-note">候補として確認できる架空の機会です。面談や育成計画の参考情報として扱ってください。</div>
    <div class="member-opportunity-match-list">
      ${topMatches
        .map((match) => `
          <article class="member-opportunity-match">
            <div class="member-opportunity-match-heading">
              <h4>${escapeHtml(match.opportunity.name)}</h4>
              <span>${match.matchRate}%</span>
            </div>
            <p>${escapeHtml(match.reasons[0])}</p>
          </article>
        `)
        .join("")}
    </div>
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

function getMemberBalanceMemo(member) {
  const feedbackItems = getFeedbackForMember(member.id);
  const dominantPointType = getDominantPointType(member.points);

  if (feedbackItems.length < 2) {
    return {
      level: "caution",
      message: "このメンバーに関するフィードバックはまだ少なめです。具体的な行動や貢献が蓄積されると、より納得感のある成長レポートになります。",
    };
  }

  if (dominantPointType && dominantPointType.ratio >= 0.5) {
    return {
      level: "info",
      message: "一部のポイントが強く表れています。別の観点でのフィードバックも集まると、より多面的に強みを確認できます。",
    };
  }

  return {
    level: "info",
    message: "複数の観点からポイントが集まっており、比較的バランスよく成長傾向を確認できます。",
  };
}

function renderMemberBalanceMemo(member) {
  const memo = getMemberBalanceMemo(member);

  return `
    <div class="modal-section balance-memo-section is-${escapeHtml(memo.level)}">
      <h3>評価バランスのメモ</h3>
      <p>${escapeHtml(memo.message)}</p>
    </div>
  `;
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

function getPointTrendSummary(member) {
  return [
    `${pointLabels.trust} ${formatNumber(member.points.trust)}pt`,
    `${pointLabels.growth} ${formatNumber(member.points.growth)}pt`,
    `${pointLabels.thanks} ${formatNumber(member.points.thanks)}pt`,
    `${pointLabels.collaboration} ${formatNumber(member.points.collaboration)}pt`,
  ].join(" / ");
}

function getCareerTrustSummary(member, feedbackItems, topPointType) {
  const hasFeedback = feedbackItems.length > 0;
  const feedbackPhrase = hasFeedback
    ? `タイムラインには${formatNumber(feedbackItems.length)}件の具体的なフィードバックがあり、${pointLabels[topPointType].replace("ポイント", "")}に関する行動の手がかりが見られます。`
    : "タイムライン上のフィードバックはまだ少なめのため、今後さらに具体的な場面が蓄積されると説得力が高まりそうです。";

  return `これまでのポイント傾向から、${member.specialty}や周囲との関わりに関する評価が集まりつつあります。信頼ポイントは${formatNumber(member.points.trust)}pt、協働ポイントは${formatNumber(member.points.collaboration)}ptです。${feedbackPhrase}断定的な評価ではなく、キャリア資産を説明するための参考材料として活用できそうです。`;
}

function getCareerCollaborationStyle(member, topPointType) {
  const tags = member.strengthTags.join("・");

  if (member.strengthTags.includes("データ分析")) {
    return "専門性を活かし、チームの意思決定を支えるスタイル";
  }

  if (member.strengthTags.includes("チーム支援")) {
    return "困っているメンバーを支援し、チーム全体の前進を助けるスタイル";
  }

  if (member.strengthTags.includes("アイデア創出")) {
    return "新しいアイデアを出しながら、周囲と一緒に形にしていくスタイル";
  }

  if (member.strengthTags.includes("課題整理") || member.strengthTags.includes("巻き込み力")) {
    return "課題を整理し、周囲を巻き込みながら前に進めるスタイル";
  }

  return `${collaborationStyleByPoint[topPointType]}（強みタグ：${tags}）`;
}

function getCareerGrowthExpectation(member, scoreChange) {
  const opportunity = member.growthOpportunities[0] || "小さなテーマのリード";
  const changeMessage = scoreChange >= 0
    ? `前回比は${formatScoreChange(scoreChange)}ptで、直近の変化にも前向きな兆しが見られます。`
    : `前回比は${formatScoreChange(scoreChange)}ptで、次の接点や挑戦機会を増やす余地がありそうです。`;

  return `${changeMessage}${opportunity}のような機会で経験を重ねると、今後さらに具体的な実績が蓄積され、プロフィールの説得力が高まりそうです。`;
}

function generateCareerAssetProfile(member) {
  const score = calculateScore(member);
  const scoreChange = calculateScoreChange(member);
  const topPointType = getTopPointType(member);
  const feedbackItems = getFeedbackForMember(member.id);
  const feedbackSummary = getFeedbackSummary(feedbackItems);
  const nextOpportunity = member.growthOpportunities[0] || "小さな改善テーマのリード";

  return {
    title: "キャリア資産プロフィール",
    name: member.name,
    role: member.role,
    catchphrase: `${careerHeadlineByPoint[topPointType]}の${member.role}`,
    specialty: member.specialty,
    strengthTags: member.strengthTags,
    trustSummary: getCareerTrustSummary(member, feedbackItems, topPointType),
    collaborationStyle: getCareerCollaborationStyle(member, topPointType),
    growthExpectation: getCareerGrowthExpectation(member, scoreChange),
    feedbackSummary,
    nextOpportunity: `${nextOpportunity}の場面で力を発揮しやすそうです。あわせて、フィードバック理由を具体的に残すことで、社外にも説明しやすい信頼実績として整理しやすくなりそうです。`,
    pointTrend: getPointTrendSummary(member),
    scoreSummary: `総合スコア ${formatNumber(score)}pt / 前回比 ${formatScoreChange(scoreChange)}pt`,
    warning: careerProfileWarning,
  };
}

function formatCareerAssetProfileText(profile) {
  return [
    `${profile.title}：${profile.name} さん`,
    `役割：${profile.role}`,
    `キャッチコピー：${profile.catchphrase}`,
    `得意領域：${profile.specialty}`,
    `強みタグ：${profile.strengthTags.join("、")}`,
    `ポイント傾向：${profile.pointTrend}`,
    `スコア概要：${profile.scoreSummary}`,
    `信頼実績サマリー：${profile.trustSummary}`,
    `協働スタイル：${profile.collaborationStyle}`,
    `成長期待ポイント：${profile.growthExpectation}`,
    `最近のフィードバック要約：${profile.feedbackSummary}`,
    `次に挑戦したい機会：${profile.nextOpportunity}`,
    `注意：${profile.warning}`,
  ].join("\n");
}

function renderCareerSharePreview(profile) {
  return `
    <section class="career-share-preview" data-career-share-preview hidden aria-label="共有プレビュー">
      <div class="career-share-card">
        <p class="eyebrow">Share Preview</p>
        <h4>${escapeHtml(profile.name)}</h4>
        <p class="career-share-role">${escapeHtml(profile.role)}</p>
        <p class="career-share-catch">${escapeHtml(profile.catchphrase)}</p>
        <dl class="career-share-list">
          <div>
            <dt>得意領域</dt>
            <dd>${escapeHtml(profile.specialty)}</dd>
          </div>
          <div>
            <dt>強みタグ</dt>
            <dd><div class="tag-list">${profile.strengthTags.map((tag) => `<span class="tag-label">${escapeHtml(tag)}</span>`).join("")}</div></dd>
          </div>
          <div>
            <dt>信頼実績サマリー</dt>
            <dd>${escapeHtml(profile.trustSummary)}</dd>
          </div>
          <div>
            <dt>協働スタイル</dt>
            <dd>${escapeHtml(profile.collaborationStyle)}</dd>
          </div>
          <div>
            <dt>最近のフィードバック要約</dt>
            <dd>${escapeHtml(profile.feedbackSummary)}</dd>
          </div>
        </dl>
        <p class="career-profile-warning">${escapeHtml(profile.warning)}</p>
      </div>
    </section>
  `;
}

function renderCareerAssetProfile(member) {
  const profile = generateCareerAssetProfile(member);
  const profileItems = [
    ["キャッチコピー", profile.catchphrase],
    ["得意領域", profile.specialty],
    ["強みタグ", `<div class="tag-list">${profile.strengthTags.map((tag) => `<span class="tag-label">${escapeHtml(tag)}</span>`).join("")}</div>`, true],
    ["信頼実績サマリー", profile.trustSummary],
    ["協働スタイル", profile.collaborationStyle],
    ["成長期待ポイント", profile.growthExpectation],
    ["最近のフィードバック要約", profile.feedbackSummary],
    ["次に挑戦したい機会", profile.nextOpportunity],
  ];

  return `
    <section class="career-profile-card" aria-labelledby="career-profile-title">
      <div class="career-profile-header">
        <div>
          <p class="eyebrow">Career Asset Profile</p>
          <h3 id="career-profile-title">${escapeHtml(profile.title)}</h3>
          <p>${escapeHtml(profile.scoreSummary)}</p>
        </div>
        <div class="career-profile-actions">
          <button type="button" class="copy-career-profile-button" data-member-id="${escapeHtml(member.id)}">プロフィールをコピー</button>
          <button type="button" class="share-preview-button" data-member-id="${escapeHtml(member.id)}" aria-expanded="false">共有プレビュー</button>
          <span class="career-profile-status" role="status" aria-live="polite"></span>
        </div>
      </div>
      <dl class="career-profile-list">
        ${profileItems
          .map(([label, content, isHtml]) => `
            <div class="career-profile-item">
              <dt>${escapeHtml(label)}</dt>
              <dd>${isHtml ? content : escapeHtml(content)}</dd>
            </div>
          `)
          .join("")}
      </dl>
      <p class="career-profile-warning">${escapeHtml(profile.warning)}</p>
      ${renderCareerSharePreview(profile)}
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

function setCareerProfileStatus(button, message, isSuccess = true) {
  const profileCard = button.closest(".career-profile-card");
  const status = profileCard ? profileCard.querySelector(".career-profile-status") : null;

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

function toggleCareerSharePreview(button) {
  const profileCard = button.closest(".career-profile-card");
  const preview = profileCard ? profileCard.querySelector("[data-career-share-preview]") : null;

  if (!preview) {
    return;
  }

  const willOpen = preview.hasAttribute("hidden");
  preview.toggleAttribute("hidden", !willOpen);
  preview.classList.toggle("is-visible", willOpen);
  button.setAttribute("aria-expanded", String(willOpen));
  button.textContent = willOpen ? "共有プレビューを閉じる" : "共有プレビュー";
}

function getScoreTrendComment(member) {
  const scoreChange = calculateScoreChange(member);

  if (scoreChange > 0) {
    return "直近ではスコアが上昇しており、周囲からの期待や信頼が高まっている傾向が見られます。";
  }

  if (scoreChange === 0) {
    return "スコアは安定しており、継続的な貢献が蓄積されています。";
  }

  return "直近ではスコアがやや落ち着いています。次の協働機会や具体的なフィードバックが増えると、成長変化が見えやすくなりそうです。";
}

function renderModalScoreTrend(member) {
  const score = calculateScore(member);
  const scoreChange = calculateScoreChange(member);
  const growthRate = calculateGrowthRate(member);
  const changeClass = getScoreChangeClass(scoreChange);

  return `
    <section class="modal-section modal-score-trend-section">
      <div class="modal-score-trend-heading">
        <div>
          <p class="eyebrow">Score Trend</p>
          <h3>人財スコア推移</h3>
        </div>
        <span class="market-status-pill">${escapeHtml(getInvestmentStatus(member))}</span>
      </div>
      <div class="modal-score-trend-grid">
        <div><span>現在人財スコア</span><strong>${formatNumber(score)}</strong></div>
        <div class="${changeClass}"><span>前回比</span><strong>${formatScoreChange(scoreChange)}pt</strong></div>
        <div class="${changeClass}"><span>成長変化率</span><strong>${formatGrowthRate(growthRate)}</strong></div>
      </div>
      ${renderMiniScoreChart(member, "人財スコア推移")}
      <p class="score-trend-comment">${escapeHtml(getScoreTrendComment(member))}</p>
    </section>
  `;
}


function getRelationshipComment(operatorUser, member, sentTotal, receivedTotal) {
  if (!operatorUser) {
    return "操作ユーザーを選ぶと、このメンバーとの関係性を確認できます。";
  }

  if (operatorUser.id === member.id) {
    return "これは現在の操作ユーザー自身のプロフィールです。";
  }

  if (sentTotal > 0 && receivedTotal > 0) {
    return "このメンバーとの双方向の応援投資が蓄積されています。";
  }

  if (sentTotal > 0) {
    return "このメンバーへの応援投資が蓄積されています。";
  }

  if (receivedTotal > 0) {
    return "このメンバーからのフィードバックが届いています。";
  }

  return "まだポイントのやり取りは少なめです。今後の協働で具体的なフィードバックを蓄積していきましょう。";
}

function renderRelationshipSection(member) {
  const operatorUser = getCurrentOperatorUser();

  if (!operatorUser) {
    return `
      <section class="modal-section relationship-section">
        <h3>このユーザーとの関係</h3>
        <p class="relationship-comment">操作ユーザーを選ぶと、このメンバーとの関係性を確認できます。</p>
      </section>
    `;
  }

  const sentItems = timeline.filter((item) => item.senderId === operatorUser.id && item.recipientId === member.id);
  const receivedItems = timeline.filter((item) => item.senderId === member.id && item.recipientId === operatorUser.id);
  const sentTotal = getTimelineTotal(sentItems);
  const receivedTotal = getTimelineTotal(receivedItems);
  const recentInteractions = [...sentItems, ...receivedItems]
    .sort((first, second) => timeline.indexOf(first) - timeline.indexOf(second))
    .slice(0, 3);

  return `
    <section class="modal-section relationship-section">
      <h3>このユーザーとの関係</h3>
      <div class="relationship-grid">
        <div><span>自分がこのメンバーに送ったポイント合計</span><strong>${formatNumber(sentTotal)}pt</strong></div>
        <div><span>このメンバーから自分が受け取ったポイント合計</span><strong>${formatNumber(receivedTotal)}pt</strong></div>
      </div>
      <div class="relationship-recent">
        <h4>最近のやり取り</h4>
        ${recentInteractions.length > 0
          ? `<ul>${recentInteractions.map((item) => {
              const sender = getTimelineSender(item);
              const recipient = getTimelineRecipient(item);
              return `<li>${escapeHtml(sender ? sender.name : "架空ユーザー")} → ${escapeHtml(recipient ? recipient.name : "架空メンバー")}｜${escapeHtml(pointLabels[item.type])} +${formatNumber(item.points)}｜${escapeHtml(item.date)}</li>`;
            }).join("")}</ul>`
          : `<p class="empty-feedback">最近のやり取りはまだありません。</p>`}
      </div>
      <p class="relationship-comment">${escapeHtml(getRelationshipComment(operatorUser, member, sentTotal, receivedTotal))}</p>
    </section>
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

    ${renderModalScoreTrend(member)}

    ${renderRelationshipSection(member)}

    ${renderGrowthReport(member)}

    ${renderCareerAssetProfile(member)}

    ${renderMemberBalanceMemo(member)}

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


function renderManagedMembers() {
  if (!managedMemberList) {
    return;
  }

  if (members.length === 0) {
    managedMemberList.innerHTML = `
      <div class="empty-member-message" role="status">
        まだメンバーが登録されていません。まずは架空メンバーを追加してみましょう。
      </div>
    `;
    return;
  }

  managedMemberList.innerHTML = members
    .map((member) => `
      <article class="managed-member-card">
        <div>
          <h3>${escapeHtml(member.name)}</h3>
          <p>${escapeHtml(member.role)} / 得意領域：${escapeHtml(member.specialty)}</p>
          <div class="managed-member-meta">
            <span>総合スコア ${formatNumber(calculateScore(member))}pt</span>
            <span>強み ${member.strengthTags.map(escapeHtml).join("、")}</span>
          </div>
        </div>
        <div class="managed-member-actions">
          <button type="button" class="edit-member-button" data-member-id="${escapeHtml(member.id)}">編集</button>
          <button type="button" class="delete-member-button" data-member-id="${escapeHtml(member.id)}">削除</button>
        </div>
      </article>
    `)
    .join("");
}

function setMemberEditorErrors(errors) {
  memberEditorErrors.hidden = errors.length === 0;
  memberEditorErrors.innerHTML = errors.length === 0
    ? ""
    : `<p>入力内容を確認してください。</p><ul>${errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}</ul>`;
}

function fillMemberEditorForm(member = null) {
  memberEditorForm.reset();
  setMemberEditorErrors([]);
  memberEditorModeInput.value = member ? "edit" : "add";
  memberEditorIdInput.value = member ? member.id : "";
  memberEditorTitle.textContent = member ? "メンバーを編集" : "新しいメンバーを追加";
  activeEditorMemberId = member ? member.id : null;

  if (!member) {
    return;
  }

  memberEditorForm.elements.name.value = member.name;
  memberEditorForm.elements.role.value = member.role;
  memberEditorForm.elements.specialty.value = member.specialty;
  memberEditorForm.elements.strengthTags.value = member.strengthTags.join(", ");
  memberEditorForm.elements.growthOpportunities.value = member.growthOpportunities.join(", ");
  memberEditorForm.elements.trust.value = member.points.trust;
  memberEditorForm.elements.growth.value = member.points.growth;
  memberEditorForm.elements.thanks.value = member.points.thanks;
  memberEditorForm.elements.collaboration.value = member.points.collaboration;
}

function openMemberEditor(memberId = null) {
  const member = memberId ? getMemberById(memberId) : null;

  if (memberId && !member) {
    return;
  }

  lastFocusedElement = document.activeElement;
  fillMemberEditorForm(member);
  memberEditorModal.classList.add("is-open");
  memberEditorModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  memberEditorCard.focus();
}

function closeMemberEditor() {
  if (!memberEditorModal.classList.contains("is-open")) {
    return;
  }

  memberEditorModal.classList.remove("is-open");
  memberEditorModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeEditorMemberId = null;

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function getMemberFormPayload(formData, existingMember = null) {
  const errors = [];
  const name = String(formData.get("name") || "").trim();
  const role = String(formData.get("role") || "").trim();

  if (!name) {
    errors.push("名前を入力してください。");
  }

  if (!role) {
    errors.push("役割を入力してください。");
  }

  const points = {
    trust: parsePointInput(formData.get("trust"), pointLabels.trust, errors),
    growth: parsePointInput(formData.get("growth"), pointLabels.growth, errors),
    thanks: parsePointInput(formData.get("thanks"), pointLabels.thanks, errors),
    collaboration: parsePointInput(formData.get("collaboration"), pointLabels.collaboration, errors),
  };

  const specialty = String(formData.get("specialty") || "").trim() || "未設定";
  const strengthTags = splitCommaValues(formData.get("strengthTags"), ["これから発見"]);
  const growthOpportunities = splitCommaValues(formData.get("growthOpportunities"), ["小さな挑戦機会から発見"]);

  return {
    errors,
    member: {
      ...(existingMember || {}),
      name,
      role,
      specialty,
      strengthTags,
      growthOpportunities,
      points,
    },
  };
}

function createMemberFromPayload(payload) {
  const currentScore = calculateScore(payload);

  return normalizeMemberData({
    ...payload,
    id: generateMemberId(payload.name),
    previousScore: Math.max(0, currentScore - 4),
    scoreHistory: generateScoreHistory(currentScore),
    createdAt: new Date().toISOString(),
    status: "active",
  });
}

function handleMemberEditorSubmit(event) {
  event.preventDefault();

  const formData = new FormData(memberEditorForm);
  const mode = formData.get("mode");
  const existingMember = mode === "edit" ? getMemberById(formData.get("memberId")) : null;
  const { errors, member: payload } = getMemberFormPayload(formData, existingMember);

  if (mode === "edit" && !existingMember) {
    errors.push("編集対象のメンバーが見つかりませんでした。");
  }

  if (errors.length > 0) {
    setMemberEditorErrors(errors);
    return;
  }

  if (mode === "edit") {
    const previousScore = calculateScore(existingMember);
    Object.assign(existingMember, payload);
    const currentScore = calculateScore(existingMember);

    if (currentScore !== previousScore) {
      existingMember.previousScore = previousScore;
      updateMemberScoreHistory(existingMember, currentScore);
    }
  } else {
    members.push(createMemberFromPayload(payload));
  }

  ensureOperatorUserId();
  saveData(true);
  renderAll();
  closeMemberEditor();
  formMessage.textContent = mode === "edit" ? "メンバー情報を更新しました。" : "新しい架空メンバーを追加しました。";
}

function deleteMember(memberId) {
  const member = getMemberById(memberId);

  if (!member) {
    return;
  }

  const confirmed = window.confirm("この架空メンバーを削除します。関連するタイムライン履歴も削除されます。よろしいですか？");

  if (!confirmed) {
    return;
  }

  members = members.filter((item) => item.id !== memberId);
  timeline = timeline.filter((item) => item.recipientId !== memberId && item.senderId !== memberId);
  ensureOperatorUserId();

  if (activeModalMemberId === memberId) {
    closeMemberModal();
  }

  saveData(true);
  renderAll();
  formMessage.textContent = `${member.name} さんを削除しました。`;
}

function renderTimeline() {
  renderTimelineFilters();

  const visibleTimeline = getFilteredTimeline();

  if (timeline.length === 0) {
    timelineList.innerHTML = `<p class="empty-member-message" role="status">まだ応援投資タイムラインはありません。</p>`;
    return;
  }

  if (visibleTimeline.length === 0) {
    timelineList.innerHTML = `<p class="empty-member-message" role="status">選択中のフィルターに一致する応援投資はありません。</p>`;
    return;
  }

  timelineList.innerHTML = visibleTimeline
    .map((item) => {
      const sender = getTimelineSender(item);
      const recipient = getTimelineRecipient(item);
      const senderName = escapeHtml(sender ? sender.name : "架空ユーザー");
      const recipientName = escapeHtml(recipient ? recipient.name : "架空メンバー");
      const pointName = escapeHtml(pointLabels[item.type]);
      const reason = escapeHtml(item.reason);
      const date = escapeHtml(item.date);

      return `
        <article class="timeline-item">
          <div class="timeline-icon" aria-hidden="true">＋</div>
          <div>
            <p class="timeline-title">${senderName} → ${recipientName}｜${pointName} +${formatNumber(item.points)}</p>
            <p class="timeline-meta">${date}</p>
            <p class="timeline-reason">${reason}</p>
          </div>
        </article>
      `;
    })
    .join("");
}
function renderOrganizationDashboard() {
  renderDashboard();
}

function renderAll() {
  ensureOperatorUserId();
  renderOperatorUserSelect();
  updateMemberSelectOptions();
  renderStats();
  renderOrganizationDashboard();
  renderPortfolio();
  renderScoreMarket();
  renderTagFilters();
  renderOpportunityFilters();
  renderGrowthMatching();
  renderMembers();
  renderManagedMembers();
  renderMyPortfolio();
  renderTimeline();
}

function renderApp() {
  renderAll();
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
    senderId: currentOperatorUserId,
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

if (operatorUserSelect) {
  operatorUserSelect.addEventListener("change", (event) => {
    currentOperatorUserId = event.target.value || null;
    ensureOperatorUserId(currentOperatorUserId);
    saveData(true);
    renderAll();
  });
}

if (timelineFilterList) {
  timelineFilterList.addEventListener("click", (event) => {
    const filterButton = event.target.closest(".timeline-filter-chip");

    if (!filterButton) {
      return;
    }

    activeTimelineFilter = filterButton.dataset.timelineFilter;
    renderTimeline();
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const operatorUser = getCurrentOperatorUser();

  if (!operatorUser) {
    formMessage.textContent = "操作ユーザーを選択してください。";
    return;
  }

  const formData = new FormData(form);
  const newItem = createTimelineItem(formData);
  const member = getMemberById(newItem.recipientId);

  if (!member || !newItem.type || newItem.points < 1 || !newItem.reason) {
    formMessage.textContent = "入力内容を確認してください。";
    return;
  }

  if (operatorUser.id === member.id) {
    const confirmed = window.confirm("自分自身へのポイント送信です。練習用として記録しますか？");

    if (!confirmed) {
      formMessage.textContent = "自分自身へのポイント送信をキャンセルしました。";
      return;
    }
  }

  const previousScore = calculateScore(member);

  member.points[newItem.type] += newItem.points;
  member.previousScore = previousScore;
  updateMemberScoreHistory(member, calculateScore(member));
  timeline.unshift(newItem);
  saveData(true);
  renderAll();

  if (memberModal.classList.contains("is-open") && activeModalMemberId) {
    const activeMember = getMemberById(activeModalMemberId);

    if (activeMember) {
      renderMemberModal(activeMember);
    }
  }

  form.reset();
  document.querySelector("#points").value = 10;
  formMessage.textContent = `${operatorUser.name} さんから ${member.name} さんへ ${formatNumber(newItem.points)}pt を送りました。`;
});

scoreMarketSortList.addEventListener("click", (event) => {
  const sortButton = event.target.closest(".market-sort-chip");

  if (!sortButton) {
    return;
  }

  marketSortKey = sortButton.dataset.marketSort;
  renderScoreMarket();
});

scoreMarketList.addEventListener("click", (event) => {
  const supportButton = event.target.closest(".support-invest-button");

  if (!supportButton) {
    return;
  }

  recipientSelect.value = supportButton.dataset.memberId;
  document.querySelector("#point-type").value = "growth";
  document.querySelector("#points").value = 10;
  document.querySelector("#send-point").scrollIntoView({ behavior: "smooth", block: "start" });
  recipientSelect.focus({ preventScroll: true });
  formMessage.textContent = "送信先と成長期待ポイントを初期選択しました。具体的な理由を添えて応援投資してください。";
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

opportunityFilterList.addEventListener("click", (event) => {
  const filterButton = event.target.closest(".opportunity-filter-button");

  if (!filterButton) {
    return;
  }

  selectedOpportunityCategory = filterButton.dataset.category;
  renderOpportunityFilters();
  renderGrowthOpportunityMatching();
});

resetMemberFiltersButton.addEventListener("click", resetMemberFilters);

memberList.addEventListener("click", (event) => {
  const detailButton = event.target.closest(".detail-button");

  if (!detailButton) {
    return;
  }

  openMemberModal(detailButton.dataset.memberId);
});

addMemberButton.addEventListener("click", () => openMemberEditor());

managedMemberList.addEventListener("click", (event) => {
  const editButton = event.target.closest(".edit-member-button");
  const deleteButton = event.target.closest(".delete-member-button");

  if (editButton) {
    openMemberEditor(editButton.dataset.memberId);
    return;
  }

  if (deleteButton) {
    deleteMember(deleteButton.dataset.memberId);
  }
});

memberEditorForm.addEventListener("submit", handleMemberEditorSubmit);
memberEditorCloseButton.addEventListener("click", closeMemberEditor);
memberEditorCancelButton.addEventListener("click", closeMemberEditor);
memberEditorModal.addEventListener("click", (event) => {
  if (event.target === memberEditorModal) {
    closeMemberEditor();
  }
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

memberModal.addEventListener("click", (event) => {
  const copyButton = event.target.closest(".copy-career-profile-button");

  if (!copyButton) {
    return;
  }

  const member = getMemberById(copyButton.dataset.memberId);

  if (!member) {
    setCareerProfileStatus(copyButton, "コピーできませんでした", false);
    return;
  }

  const profileText = formatCareerAssetProfileText(generateCareerAssetProfile(member));

  copyTextToClipboard(profileText)
    .then((copied) => {
      setCareerProfileStatus(copyButton, copied ? "コピーしました" : "コピー機能を利用できませんでした", copied);
    })
    .catch(() => {
      setCareerProfileStatus(copyButton, "コピー機能を利用できませんでした", false);
    });
});

memberModal.addEventListener("click", (event) => {
  const previewButton = event.target.closest(".share-preview-button");

  if (!previewButton) {
    return;
  }

  toggleCareerSharePreview(previewButton);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMemberModal();
    closeMemberEditor();
  }
});

loadData();
renderAll();
