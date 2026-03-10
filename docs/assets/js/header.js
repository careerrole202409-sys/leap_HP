// 言語設定
const translations = {
    ja: {
        login: 'ログイン',
        about: '会社概要',
        home: 'ホーム',
        services: 'サービス',
        serviceItems: {
            // ▼ 修正: HP・LP作成に変更
            website: '多言語HP・LP作成',
            ec: '越境EC開設運用',
            content: '多言語コンテンツ制作',
            sns: '海外向けSNS運用',
            matching: '代理店マッチング'
        },
        pricing: '価格',
        resources: '資料',
        resourceItems: {
            download: '資料ダウンロード',
            blog: 'ブログ'
        },
        demo: 'デモを申し込む',
        start: '無料スタート',
        startMobile: '無料で始める',
        language: '日本語'
    },
    en: {
        login: 'Login',
        about: 'About Us',
        home: 'Home',
        services: 'Services',
        serviceItems: {
            website: 'Multilingual Website & LP',
            ec: 'Cross-border EC',
            content: 'Multilingual Content',
            sns: 'Global SNS',
            matching: 'Distributor Matching'
        },
        pricing: 'Pricing',
        resources: 'Resources',
        resourceItems: {
            download: 'Downloads',
            blog: 'Blog'
        },
        demo: 'Request Demo',
        start: 'Start for Free',
        startMobile: 'Start for Free',
        language: 'English'
    },
    'zh-hans': {
        login: '登录',
        about: '公司简介',
        home: '首页',
        services: '服务',
        serviceItems: {
            website: '多语言建站・LP制作',
            ec: '跨境电商运营',
            content: '多语言内容制作',
            sns: '海外SNS运营',
            matching: '代理商匹配'
        },
        pricing: '价格方案',
        resources: '资料',
        resourceItems: {
            download: '资料下载',
            blog: '博客'
        },
        demo: '申请演示',
        start: '免费开始',
        startMobile: '免费开始',
        language: '简体中文'
    }
};

// 現在の言語をURLから取得
function getCurrentLanguage() {
    const path = window.location.pathname;
    const match = path.match(/^\/(ja|jp|en|zh-hans)(\/|$)/);
    if (!match) return 'ja'; 
    return match[1] === 'jp' ? 'ja' : match[1];
}

// 言語を変更（URLを変更して遷移）
function changeLanguage(newLang) {
    const currentPath = window.location.pathname;
    const langMatch = currentPath.match(/^\/(ja|jp|en|zh-hans)(\/|$)/);
    
    let newPath;
    if (langMatch) {
        const detectedLang = langMatch[1];
        newPath = currentPath.replace(`/${detectedLang}`, `/${newLang}`);
    } else {
        newPath = `/${newLang}${currentPath}`;
    }
    window.location.href = newPath;
}

// ページを更新
function updateContent() {
    const lang = getCurrentLanguage();
    const t = translations[lang];

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

    // 各要素の更新
    safeUpdate('currentLang', t.language);
    safeUpdate('loginLink', t.login);
    safeUpdate('aboutLink', t.about);

    // デスクトップメニュー
    safeUpdate('servicesLabel', t.services + ' ▼', true);
    safeUpdate('serviceWebsite', t.serviceItems.website);
    safeUpdate('serviceEc', t.serviceItems.ec);
    safeUpdate('serviceContent', t.serviceItems.content);
    safeUpdate('serviceSns', t.serviceItems.sns);
    safeUpdate('serviceMatching', t.serviceItems.matching);
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
    safeUpdate('mobileServiceMatching', t.serviceItems.matching);
    safeUpdate('mobilePricing', t.pricing);
    safeUpdate('mobileResourcesLabel', `<span>${t.resources}</span><span>▼</span>`, true);
    safeUpdate('mobileResourceDownload', t.resourceItems.download);
    safeUpdate('mobileResourceBlog', t.resourceItems.blog);
    safeUpdate('mobileAbout', t.about);
    safeUpdate('mobileDemoBtn', t.demo);
    safeUpdate('mobileStartBtn', t.startMobile);

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
    const headerTop = document.getElementById('headerTop');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const languageCurrent = document.getElementById('languageCurrent');
    const languageDropdown = document.getElementById('languageDropdown');

    if (languageCurrent && languageDropdown) {
        languageCurrent.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            languageDropdown.classList.remove('active');
        });

        languageDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = option.dataset.lang;
                if (newLang) {
                    changeLanguage(newLang);
                }
            });
        });
    }

    if (headerTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                headerTop.classList.add('hidden');
            } else {
                headerTop.classList.remove('hidden');
            }
        });
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    updateContent();
});

// モバイルドロップダウントグル（グローバル関数として保持）
window.toggleMobileDropdown = function(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('span:last-child');
    
    content.classList.toggle('active');
    arrow.textContent = content.classList.contains('active') ? '▲' : '▼';
};