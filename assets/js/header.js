// 言語設定
const translations = {
    ja: {
        login: 'ログイン',
        about: '会社概要',
        home: 'ホーム',
        services: 'サービス',
        serviceItems: {
            website: '多言語HP作成',
            ec: '越境EC開設運用',
            content: '多言語コンテンツ制作',
            sns: '海外向けSNS運用'
        },
        pricing: '価格',
        resources: '資料',
        resourceItems: {
            download: '資料ダウンロード',
            blog: 'ブログ'
        },
        demo: 'デモ',
        start: '無料スタート',
        startMobile: '無料で始める',
        language: '日本語'
    },
    en: {
        login: 'Login',
        about: 'About',
        home: 'Home',
        services: 'Services',
        serviceItems: {
            website: 'Multilingual Website',
            ec: 'Cross-border EC',
            content: 'Multilingual Content',
            sns: 'Global SNS'
        },
        pricing: 'Pricing',
        resources: 'Resources',
        resourceItems: {
            download: 'Download',
            blog: 'Blog'
        },
        demo: 'Demo',
        start: 'Get Started Free',
        startMobile: 'Get Started Free',
        language: 'English'
    },
    'zh-hans': {
        login: '登录',
        about: '关于我们',
        home: '首页',
        services: '服务',
        serviceItems: {
            website: '多语言网站制作',
            ec: '跨境电商运营',
            content: '多语言内容制作',
            sns: '海外SNS运营'
        },
        pricing: '价格',
        resources: '资料',
        resourceItems: {
            download: '资料下载',
            blog: '博客'
        },
        demo: '演示',
        start: '免费开始',
        startMobile: '免费开始',
        language: '简体中文'
    }
};

// 現在の言語を取得（デモ用にローカルストレージから取得）
function getCurrentLanguage() {
    return localStorage.getItem('leap_language') || 'ja';
}

// 言語を変更
function changeLanguage(lang) {
    localStorage.setItem('leap_language', lang);
    updateContent();
    const languageDropdown = document.getElementById('languageDropdown');
    if (languageDropdown) {
        languageDropdown.classList.remove('active');
    }
}

// ページを更新
function updateContent() {
    const lang = getCurrentLanguage();
    const t = translations[lang];

    // 安全に要素を更新する関数
    function safeUpdate(id, content, isHTML = false) {
        const element = document.getElementById(id);
        if (element) {
            if (isHTML) {
                element.innerHTML = content;
            } else {
                element.textContent = content;
            }
        }
    }

    // 言語セレクター
    safeUpdate('currentLang', t.language);

    // 1行目
    safeUpdate('loginLink', t.login);
    safeUpdate('aboutLink', t.about);

    // 2行目 - デスクトップ
    safeUpdate('servicesLabel', t.services + ' ▼', true);
    safeUpdate('serviceWebsite', t.serviceItems.website);
    safeUpdate('serviceEc', t.serviceItems.ec);
    safeUpdate('serviceContent', t.serviceItems.content);
    safeUpdate('serviceSns', t.serviceItems.sns);
    safeUpdate('pricingLink', t.pricing);
    safeUpdate('resourcesLabel', t.resources + ' ▼', true);
    safeUpdate('resourceDownload', t.resourceItems.download);
    safeUpdate('resourceBlog', t.resourceItems.blog);
    safeUpdate('demoBtn', t.demo);
    safeUpdate('startBtn', t.start);

    // モバイルメニュー
    safeUpdate('mobileHome', t.home);
    safeUpdate('mobileServicesLabel', `<span>${t.services}</span><span>▼</span>`, true);
    safeUpdate('mobileServiceWebsite', t.serviceItems.website);
    safeUpdate('mobileServiceEc', t.serviceItems.ec);
    safeUpdate('mobileServiceContent', t.serviceItems.content);
    safeUpdate('mobileServiceSns', t.serviceItems.sns);
    safeUpdate('mobilePricing', t.pricing);
    safeUpdate('mobileResourcesLabel', `<span>${t.resources}</span><span>▼</span>`, true);
    safeUpdate('mobileResourceDownload', t.resourceItems.download);
    safeUpdate('mobileResourceBlog', t.resourceItems.blog);
    safeUpdate('mobileAbout', t.about);
    safeUpdate('mobileDemoBtn', t.demo);
    safeUpdate('mobileStartBtn', t.startMobile);

    // 言語ドロップダウンのアクティブ状態
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    let lastScroll = 0;
    const headerTop = document.getElementById('headerTop');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const languageCurrent = document.getElementById('languageCurrent');
    const languageDropdown = document.getElementById('languageDropdown');

    // 言語セレクターをクリックで開閉
    if (languageCurrent && languageDropdown) {
        languageCurrent.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });

        // ドロップダウン外をクリックで閉じる
        document.addEventListener('click', () => {
            languageDropdown.classList.remove('active');
        });

        // ドロップダウン内のクリックは伝播させない
        languageDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // スクロールで1行目を隠す
    if (headerTop) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                headerTop.classList.add('hidden');
            } else {
                headerTop.classList.remove('hidden');
            }

            lastScroll = currentScroll;
        });
    }

    // ハンバーガーメニュートグル
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // メニュー外クリックで閉じる
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ページロード時にコンテンツを更新
    updateContent();
});

// モバイルドロップダウントグル
function toggleMobileDropdown(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('span:last-child');
    
    content.classList.toggle('active');
    arrow.textContent = content.classList.contains('active') ? '▲' : '▼';
}