// フッター用の翻訳データ
const footerTranslations = {
    ja: {
        featuresTitle: '人気の機能',
        website: '多言語HP作成',
        ec: '越境EC開設・運用',
        content: '多言語コンテンツ制作',
        sns: '海外向けSNS運用',
        toolsTitle: '無料ツール',
        blog: 'ブログ',
        resources: '資料ダウンロード',
        companyTitle: '会社',
        about: '会社概要',
        contact: 'お問い合わせ',
        copyright: 'Copyright © 2025 Leap, Inc.',
        privacy: 'プライバシーポリシー',
        terms: '利用規約',
        commerce: '特定商取引法に基づく表示',
        withdrawal: '退会規定'
    },
    en: {
        featuresTitle: 'Popular Features',
        website: 'Multilingual Website',
        ec: 'Cross-border EC',
        content: 'Multilingual Content',
        sns: 'Global SNS',
        toolsTitle: 'Free Tools',
        blog: 'Blog',
        resources: 'Resources',
        companyTitle: 'Company',
        about: 'About',
        contact: 'Contact',
        copyright: 'Copyright © 2025 Leap, Inc.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        commerce: 'Commercial Transaction Act',
        withdrawal: 'Withdrawal Policy'
    },
    'zh-hans': {
        featuresTitle: '热门功能',
        website: '多语言网站制作',
        ec: '跨境电商运营',
        content: '多语言内容制作',
        sns: '海外SNS运营',
        toolsTitle: '免费工具',
        blog: '博客',
        resources: '资料下载',
        companyTitle: '公司',
        about: '关于我们',
        contact: '联系我们',
        copyright: 'Copyright © 2025 Leap, Inc.',
        privacy: '隐私政策',
        terms: '使用条款',
        commerce: '特定商业交易法',
        withdrawal: '退会规定'
    }
};

// 現在の言語を取得
function getCurrentLanguage() {
    return localStorage.getItem('leap_language') || 'ja';
}

// フッターのコンテンツを更新
function updateFooterContent() {
    const lang = getCurrentLanguage();
    const t = footerTranslations[lang];

    // 安全に要素を更新する関数
    function safeUpdate(id, content) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = content;
        }
    }

    // デスクトップ版
    safeUpdate('footerFeaturesTitle', t.featuresTitle);
    safeUpdate('footerWebsite', t.website);
    safeUpdate('footerEc', t.ec);
    safeUpdate('footerContent', t.content);
    safeUpdate('footerSns', t.sns);
    safeUpdate('footerToolsTitle', t.toolsTitle);
    safeUpdate('footerBlog', t.blog);
    safeUpdate('footerResources', t.resources);
    safeUpdate('footerCompanyTitle', t.companyTitle);
    safeUpdate('footerAbout', t.about);
    safeUpdate('footerContact', t.contact);

    // モバイル版
    safeUpdate('footerMobileFeaturesTitle', t.featuresTitle);
    safeUpdate('footerMobileWebsite', t.website);
    safeUpdate('footerMobileEc', t.ec);
    safeUpdate('footerMobileContent', t.content);
    safeUpdate('footerMobileSns', t.sns);
    safeUpdate('footerMobileToolsTitle', t.toolsTitle);
    safeUpdate('footerMobileBlog', t.blog);
    safeUpdate('footerMobileResources', t.resources);
    safeUpdate('footerMobileCompanyTitle', t.companyTitle);
    safeUpdate('footerMobileAbout', t.about);
    safeUpdate('footerMobileContact', t.contact);

    // 共通部分
    safeUpdate('footerCopyright', t.copyright);
    safeUpdate('footerPrivacy', t.privacy);
    safeUpdate('footerTerms', t.terms);
    safeUpdate('footerCommerce', t.commerce);
    safeUpdate('footerWithdrawal', t.withdrawal);
}

// アコーディオンのトグル
function toggleFooterAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.mobile-accordion-icon');
    const isActive = content.classList.contains('active');
    
    // すべてのアコーディオンを閉じる
    document.querySelectorAll('.mobile-accordion-content').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.mobile-accordion-icon').forEach(item => {
        item.style.transform = 'rotate(0deg)';
    });
    
    // クリックされたアコーディオンが閉じていた場合は開く
    if (!isActive) {
        content.classList.add('active');
        icon.style.transform = 'rotate(90deg)';
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    updateFooterContent();

    // 言語変更を監視（ヘッダーから言語変更があった場合に対応）
    window.addEventListener('storage', (e) => {
        if (e.key === 'leap_language') {
            updateFooterContent();
        }
    });

    // カスタムイベントで言語変更を監視
    window.addEventListener('languageChanged', () => {
        updateFooterContent();
    });
});

// 既存のchangeLanguage関数をラップして、フッターも更新
if (typeof window !== 'undefined') {
    const originalChangeLanguage = window.changeLanguage;
    if (typeof originalChangeLanguage === 'function') {
        window.changeLanguage = function(lang) {
            originalChangeLanguage(lang);
            updateFooterContent();
        };
    }
}