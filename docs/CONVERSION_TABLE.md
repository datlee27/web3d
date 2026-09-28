# 📊 Bảng Chuyển Đổi PX → % (Frame 1920px)

## 🎯 Công Thức
```
% = (px / 1920) × 100
```

## 📐 Bảng Chuyển Đổi Đầy Đủ

### **Widths (Chiều Rộng)**

| PX Value | % Value | Sử Dụng Cho | Component |
|----------|---------|-------------|-----------|
| 1920px | 100% | Full width container | ServiceAreas, TrustedBy |
| 1396px | 72.70833% | Main container | ContactForm, Testimonials, ServiceAreas |
| 1174px | 61.14583% | Logos grid | TrustedBy |
| 971px | 50.57292% | Sidebar image | ServicesSection |
| 852px | 44.375% | Heading text | ServiceAreas |
| 830px | 43.22917% | Content text | ServiceAreas |
| 829px | 43.17708% | Hero main container | Hero |
| 764px | 39.79167% | Background image | TrustedBy |
| 718px | 37.39583% | Blur effect | Hero |
| 698px | 36.35417% | Form section | ContactForm |
| 692px | 36.04167% | Content row | ServiceAreas |
| 688px | 35.83333% | Section container | Hero, ServicesSection |
| 687px | 35.78125% | Form fields | ContactForm |
| 556px | 28.95833% | Services list | ServicesSection |
| 546px | 28.4375% | Text content | ServiceAreas, ServicesSection |
| 522px | 27.1875% | Service item text | ServicesSection |
| 423px | 22.03125% | Team member card | TeamSection |
| 404px | 21.04167% | Hero text line | Hero |
| 400px | 20.83333% | About heading | Hero |
| 390px | 20.3125% | Testimonial card | Testimonials |
| 384px | 20% | Trusted by heading | TrustedBy |
| 364px | 18.95833% | Team member info | TeamSection |
| 312px | 16.25% | Testimonial item | Testimonials |
| 291px | 15.15625% | Hero text "is a" | Hero |
| 258px | 13.4375% | Logo BDM3d | TrustedBy |
| 249px | 12.96875% | Logo MiTra | TrustedBy |
| 223px | 11.61458% | Logo FPT | TrustedBy |
| 146px | 7.60417% | Logo VTC | TrustedBy |
| 140px | 7.29167% | Button width | TeamSection |
| 121px | 6.30208% | Service vector | ServiceAreas |
| 112px | 5.83333% | Scroll down | Hero |
| 56px | 2.91667% | Logo studio | ServiceAreas |

---

### **Left Positions (Vị Trí Ngang)**

| PX Value | % Value | Sử Dụng Cho | Component |
|----------|---------|-------------|-----------|
| 1613px | 84.01042% | Blur effect | Hero |
| 1546px | 80.52083% | Background image | TrustedBy |
| 1300px | 67.70833% | Testimonial card 1 | Testimonials |
| 1234px | 64.27083% | Team member 4 | TeamSection |
| 1159px | 60.36458% | Testimonial card 5 | Testimonials |
| 1015px | 52.86458% | Testimonial card 3 | Testimonials |
| 950px | 49.47917% | Sidebar image | ServicesSection |
| 894px | 46.5625% | Scroll down | Hero |
| 828px | 43.125% | Hero container | Hero |
| 811px | 42.23958% | Team member 3 | TeamSection |
| 772px | 40.20833% | Button offset | TeamSection |
| 596px | 31.04167% | Testimonial card 2 | Testimonials |
| 592px | 30.83333% | Testimonial card 6 | Testimonials |
| 388px | 20.20833% | Team member 2 | TeamSection |
| 309px | 16.09375% | Testimonial card 4 | Testimonials |
| 262px | 13.64583% | Section left margin | Hero, ServicesSection, ServiceAreas |
| 8px | 0.41667% | Container offset | TrustedBy |
| 1px | 0.05208% | Center offset | ServiceAreas |
| -33px | -1.71875% | Team member 1 (overflow) | TeamSection |

---

### **Calc() Expressions**

| Original | Converted | Sử Dụng |
|----------|-----------|---------|
| `calc(50% - 1396px/2)` | `calc(50% - 36.35417%)` | Center container |
| `calc(50% - 140px/2 + 772px)` | `calc(50% + 40.20833%)` | Button position |
| `calc(50% - 182px)` | `calc(50% - 9.47917%)` | Team member info |
| `calc(50% - 1920px/2 + 1px)` | `calc(50% - 50% + 0.05208%)` | Full width center |

---

## 🎨 Component-Specific Conversions

### **Hero Component**
```typescript
{
    container: { width: '43.17708%', left: '43.125%' },
    aboutUs: { width: '35.83333%', left: '13.64583%' },
    scrollDown: { left: '46.5625%' },
    blurEffect: { width: '37.39583%', left: '84.01042%' }
}
```

### **Team Section**
```typescript
{
    memberWidth: '22.03125%',
    positions: ['-1.71875%', '20.20833%', '42.23958%', '64.27083%'],
    button: { left: 'calc(50% + 40.20833%)' }
}
```

### **Services Section**
```typescript
{
    heading: { width: '35.83333%', left: '13.64583%' },
    list: { width: '28.95833%', left: '13.64583%' },
    image: { width: '50.57292%', left: '49.47917%' }
}
```

### **Service Areas**
```typescript
{
    fullWidth: '100%',
    container: { width: '72.70833%', left: '13.64583%' },
    content: { width: '43.22917%', left: '13.64583%' }
}
```

### **Trusted By**
```typescript
{
    container: { width: '100%', left: '0.41667%' },
    heading: { width: '20%' },
    grid: { width: '61.14583%' },
    background: { width: '39.79167%', left: '80.52083%' }
}
```

### **Testimonials**
```typescript
{
    heading: { width: '72.70833%', left: 'calc(50% - 36.35417%)' },
    cards: [
        { left: '67.70833%' },  // 1300px
        { left: '31.04167%' },  // 596px
        { left: '52.86458%' },  // 1015px
        { left: '16.09375%' },  // 309px
        { left: '60.36458%' },  // 1159px
        { left: '30.83333%' }   // 592px
    ]
}
```

### **Contact Form**
```typescript
{
    container: { width: '72.70833%', left: 'calc(50% - 36.35417%)' },
    heading: { width: '49.28%' },
    form: { width: '50%', left: '0.79%' }
}
```

---

## 🔢 Conversion Calculator

### **JavaScript Function**
```javascript
const pxToPercent = (px) => ((px / 1920) * 100).toFixed(5) + '%';

// Examples:
pxToPercent(1920); // "100.00000%"
pxToPercent(1396); // "72.70833%"
pxToPercent(829);  // "43.17708%"
pxToPercent(688);  // "35.83333%"
pxToPercent(423);  // "22.03125%"
pxToPercent(262);  // "13.64583%"
```

### **Excel/Google Sheets Formula**
```
=TEXT((A1/1920)*100, "0.00000") & "%"
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | % at 1920px | Notes |
|------------|-------|-------------|-------|
| Mobile | 375px | 19.53125% | Cần điều chỉnh layout |
| Tablet | 768px | 40% | Có thể giữ % |
| Laptop | 1024px | 53.33333% | Giữ % tốt |
| Desktop | 1440px | 75% | Giữ % tốt |
| Wide | 1920px | 100% | Perfect match |
| 4K | 3840px | 200% | Scale up 2x |

---

## ✅ Validation Checklist

- [ ] Tất cả widths đã convert sang %
- [ ] Tất cả left positions đã convert sang %
- [ ] Heights vẫn giữ px
- [ ] Top/bottom positions vẫn giữ px
- [ ] Font sizes vẫn giữ px
- [ ] Border radius vẫn giữ px
- [ ] Box shadows vẫn giữ px
- [ ] Test ở 1920px = 100% match Figma
- [ ] Test ở 1440px = responsive tốt
- [ ] Test ở 1024px = không vỡ layout
- [ ] Test ở 768px = cần breakpoint

---

**Tạo bởi**: Antigravity AI  
**Ngày**: 2026-02-03  
**Frame gốc**: 1920px  
**Precision**: 5 decimal places
