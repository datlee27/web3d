# 🏗️ 3D Archtech Studio

> Website giới thiệu dịch vụ thiết kế 3D kiến trúc chuyên nghiệp — xây dựng bằng React + TypeScript + Vite.

---

## 📋 Mục Lục

- [Giới Thiệu](#-giới-thiệu)
- [Tech Stack](#-tech-stack)
- [Cài Đặt & Chạy Dự Án](#-cài-đặt--chạy-dự-án)
- [Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [Routing (Các Trang)](#-routing-các-trang)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [Tài Liệu Bổ Sung](#-tài-liệu-bổ-sung)

---

## 🎯 Giới Thiệu

**3D Archtech Studio** là website giới thiệu studio thiết kế 3D kiến trúc, bao gồm:

- 🏠 **Trang Chủ** — Hero section, services overview, trusted partners, testimonials
- 📂 **Work / Portfolio** — Danh sách dự án & chi tiết từng dự án
- 🛠️ **Services** — Các dịch vụ: AR/VR, Game 3D, Training, Web App, Visualization, Marketing
- 👥 **About Us** — Giới thiệu đội ngũ
- 📰 **Blog** — Bài viết & chi tiết blog
- 📞 **Contacts** — Form liên hệ & đặt lịch tư vấn (Schedule Call)

---

## 🛠️ Tech Stack

| Công nghệ | Mô tả |
|---|---|
| **React 19** | UI Library |
| **TypeScript** | Type-safe JavaScript |
| **Vite 6** | Build tool & dev server |
| **Chakra UI v2** | Component library & theming (dark/light mode) |
| **Framer Motion** | Animations & page transitions |
| **React Router DOM v7** | Client-side routing (SPA) |
| **Redux Toolkit + Redux Persist** | State management & persistence |
| **Axios** | HTTP client (API calls) |
| **Lenis** | Smooth scrolling |
| **React Spring** | Physics-based animations |
| **Tailwind CSS v4** | Utility-first CSS |

---

## 🚀 Cài Đặt & Chạy Dự Án

### Yêu Cầu

- **Node.js** >= 18
- **npm** >= 9

### Bước 1: Clone repo

```bash
git clone https://github.com/datlee27/web3d.git
cd web3d
```

### Bước 2: Cài dependencies

```bash
npm install
```

### Bước 3: Chạy dev server

```bash
npm run dev
```

Mở trình duyệt tại: **http://localhost:3000**

---

## 📁 Cấu Trúc Dự Án

```
3d_archtech_studio/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images, icons, fonts
│   │   ├── aboutus/
│   │   ├── blog/
│   │   ├── footer/
│   │   ├── icon/
│   │   ├── images/             # Ảnh chính (WebP format)
│   │   ├── imagesWork-page/    # Ảnh trang Work
│   │   ├── marketing-pipeline/
│   │   └── training-pipeline/
│   ├── components/             # Reusable components
│   │   ├── 404-custom/         # Trang 404
│   │   ├── animation/          # Animation components
│   │   ├── common/             # SmoothScroll, shared UI
│   │   ├── fuzzy-text/         # Fuzzy text effect
│   │   ├── gradient-text/      # Gradient text effect
│   │   ├── schedule-call-button/
│   │   ├── work-details-page/
│   │   └── work-page/
│   ├── contexts/               # React Context (Dark mode, etc.)
│   ├── hooks/                  # Custom hooks
│   ├── pages/                  # Page components
│   │   ├── AboutUs/
│   │   ├── Blog/
│   │   ├── Contacts/
│   │   ├── Services/           # AR/VR, Game 3D, Training, Web App, etc.
│   │   ├── home-page/
│   │   ├── layout/             # Main layout (Header + Footer)
│   │   ├── work-details-page/
│   │   └── work-page/
│   ├── redux/                  # Redux store & slices
│   ├── routes/                 # Router configuration
│   ├── themes/                 # Chakra UI themes (dark/default)
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # App entry point
│   ├── App.css                 # Global styles
│   └── main.tsx                # Vite entry point
├── docs/                       # Project documentation
├── vercel.json                 # Vercel deployment config
├── vite.config.ts              # Vite configuration + path aliases
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind CSS config
├── package.json
└── README.md
```

---

## 🗺️ Routing (Các Trang)

| Route | Component | Mô tả |
|---|---|---|
| `/` | `HomePage` | Trang chủ |
| `/work` | `WorkPage` | Danh sách dự án |
| `/work/:id` | `WorkDetailPage` | Chi tiết dự án |
| `/about-us` | `AboutUs` | Giới thiệu đội ngũ |
| `/contacts` | `Contacts` | Liên hệ |
| `/blog` | `Blog` | Danh sách bài viết |
| `/blog/:id` | `BlogDetail` | Chi tiết bài viết |
| `/services` | `ServicePage` | Tổng quan dịch vụ |
| `/services/ar-vr` | `ArVrPage` | Dịch vụ AR/VR |
| `/services/game-3d` | `Game3DPage` | Dịch vụ Game 3D |
| `/services/training` | `TrainingPage` | Dịch vụ đào tạo |
| `/services/web-app` | `WebAppPage` | Dịch vụ Web App |
| `/services/visualization` | `VisualizationPage` | Dịch vụ Visualization |
| `/services/marketing` | `MarketingPage` | Dịch vụ Marketing |
| `*` | `NotFound` | Trang 404 |

---

## 📜 Scripts

```bash
# Chạy dev server (port 3000)
npm run dev

# Build production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🌐 Deployment

### Vercel

Dự án đã được cấu hình để deploy trên **Vercel** với SPA rewrite:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Path Aliases

Vite config đã cấu hình các path alias để import gọn hơn:

```typescript
@components  → src/components
@assets      → src/assets
@pages       → src/pages
@routes      → src/routes
@redux       → src/redux
@themes      → src/themes
@hooks       → src/hooks
@contexts    → src/contexts
@utils       → src/utils
@configs     → src/configs
// ... và nhiều alias khác
```

---

## 📚 Tài Liệu Bổ Sung

Xem thêm tài liệu chi tiết trong thư mục [`docs/`](./docs/):

| Tài liệu | Mô tả |
|---|---|
| [Responsive Guide](./docs/RESPONSIVE_GUIDE.md) | Hướng dẫn chuyển đổi PX → % cho responsive design |
| [Conversion Table](./docs/CONVERSION_TABLE.md) | Bảng chuyển đổi PX → % đầy đủ |
| [Responsive Summary](./docs/RESPONSIVE_SUMMARY.md) | Tóm tắt các thay đổi responsive |
| [UI Review Report](./docs/UI_REVIEW_REPORT.md) | Báo cáo đánh giá UI/UX chi tiết |
| [Organization Summary](./docs/ORGANIZATION_SUMMARY.md) | Tổng quan cấu trúc dự án |
| [Git Local Files](./docs/GIT_LOCAL_FILES.md) | Hướng dẫn cấu hình file local |
| [Git Push Troubleshooting](./docs/git-push-troubleshooting.md) | Xử lý lỗi khi push Git |

---

## 🎨 Features

- ✅ **Dark / Light Mode** — Chuyển đổi theme với Chakra UI
- ✅ **Smooth Scrolling** — Lenis smooth scroll
- ✅ **Responsive Design** — Tương thích Desktop, Tablet, Mobile
- ✅ **Page Transitions** — Framer Motion animations
- ✅ **Schedule Call** — Nút đặt lịch tư vấn
- ✅ **SPA Routing** — React Router DOM v7
- ✅ **State Persistence** — Redux Persist
- ✅ **Custom 404 Page** — Trang lỗi tuỳ chỉnh
- ✅ **SEO Friendly** — Vercel SPA rewrite

---

## 👥 Đội Ngũ Phát Triển

**3D Archtech Studio** — Đội ngũ phát triển web

---

## 📝 License

Private project — All rights reserved.
