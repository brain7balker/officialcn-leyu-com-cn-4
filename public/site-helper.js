// 页面提示与关键词展示辅助模块
(function () {
  "use strict";

  // 配置数据：示例链接与关键词
  const CONFIG = {
    exampleUrl: "https://officialcn-leyu.com.cn",
    keywords: ["乐鱼体育", "体育赛事", "精彩活动", "品牌升级"],
    tipMessages: [
      "欢迎访问我们的示例站点",
      "热点关键词实时展示中",
      "点击徽章可查看详情（模拟）"
    ]
  };

  // 工具：创建带样式的元素
  function createStyledElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  }

  // 工具：添加全局样式
  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .site-helper-container {
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 9999;
        font-family: Arial, sans-serif;
        max-width: 280px;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        padding: 16px;
        transition: opacity 0.3s, transform 0.3s;
      }
      .site-helper-container.collapsed {
        opacity: 0.6;
        transform: scale(0.9);
      }
      .site-helper-container .tip-card {
        margin-bottom: 12px;
        padding: 8px 10px;
        background: #f8f9fa;
        border-left: 4px solid #007aff;
        border-radius: 4px;
        font-size: 14px;
        color: #333;
      }
      .site-helper-container .badge-group {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .site-helper-container .badge {
        display: inline-block;
        background: #eef3ff;
        color: #1a3c6e;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 500;
        cursor: default;
        transition: background 0.2s;
      }
      .site-helper-container .badge:hover {
        background: #d0e0ff;
      }
      .site-helper-container .access-link {
        display: block;
        margin-top: 10px;
        padding: 6px 0;
        font-size: 13px;
        color: #007aff;
        text-decoration: none;
        border-top: 1px solid #eee;
        padding-top: 10px;
        word-break: break-all;
      }
      .site-helper-container .access-link:hover {
        text-decoration: underline;
      }
      .site-helper-container .toggle-btn {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 24px;
        height: 24px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        color: #555;
        line-height: 1;
        box-shadow: 0 1px 4px rgba(0,0,0,0.1);
      }
      .site-helper-container .toggle-btn:hover {
        background: #f0f0f0;
      }
    `;
    document.head.appendChild(style);
  }

  // 主初始化函数
  function initSiteHelper() {
    injectStyles();

    // 构造容器
    const container = createStyledElement("div", "site-helper-container");
    const toggleBtn = createStyledElement("span", "toggle-btn", "−");
    container.appendChild(toggleBtn);

    // 添加提示卡片
    const tipMsg = CONFIG.tipMessages[Math.floor(Math.random() * CONFIG.tipMessages.length)];
    const tipCard = createStyledElement("div", "tip-card", tipMsg);
    container.appendChild(tipCard);

    // 添加关键词徽章组
    const badgeGroup = createStyledElement("div", "badge-group", "");
    CONFIG.keywords.forEach(function (kw) {
      const badge = createStyledElement("span", "badge", kw);
      badge.addEventListener("click", function () {
        // 模拟点击反馈（不发起真实请求）
        console.log("[模拟] 点击了关键词: " + kw);
      });
      badgeGroup.appendChild(badge);
    });
    container.appendChild(badgeGroup);

    // 添加访问说明链接（纯展示）
    const linkEl = createStyledElement("a", "access-link", "示例参考: " + CONFIG.exampleUrl);
    linkEl.href = "#"; // 仅示意，不跳转
    linkEl.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("[模拟] 访问链接: " + CONFIG.exampleUrl);
    });
    container.appendChild(linkEl);

    // 折叠/展开功能
    let isCollapsed = false;
    toggleBtn.addEventListener("click", function () {
      isCollapsed = !isCollapsed;
      container.classList.toggle("collapsed", isCollapsed);
      toggleBtn.textContent = isCollapsed ? "+" : "−";
    });

    // 挂载到页面
    document.body.appendChild(container);
  }

  // 等待 DOM 就绪后初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSiteHelper);
  } else {
    initSiteHelper();
  }

})();