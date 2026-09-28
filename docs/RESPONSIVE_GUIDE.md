# 📐 Hướng Dẫn Chuyển Đổi PX sang % - Responsive Design

## 🎯 Mục Tiêu
Chuyển đổi thiết kế Figma 1920px sang responsive layout sử dụng % trong khi vẫn giữ 100% layout gốc ở màn hình 1920px.

## 📊 Công Thức Chuyển Đổi

### **Công Thức Cơ Bản**
```
% = (giá_trị_px / container_width_px) × 100
```

### **Ví Dụ Cụ Thể (Frame 1920px)**
```javascript
// Width
423px → (423 / 1920) × 100 = 22.03125%
688px → (688 / 1920) × 100 = 35.83333%
1396px → (1396 / 1920) × 100 = 72.70833%

// Left Position
262px → (262 / 1920) × 100 = 13.64583%
828px → (828 / 1920) × 100 = 43.125%
1300px → (1300 / 1920) × 100 = 67.70833%
```

## ✅ Nguyên Tắc Áp Dụng

### **NÊN Dùng % Cho:**
- ✅ **Width** của containers, sections, cards
- ✅ **Left/Right** positioning (horizontal spacing)
- ✅ **Padding/Margin** theo chiều ngang
- ✅ **Max-width** cho responsive breakpoints

### **KHÔNG NÊN Dùng % Cho:**
- ❌ **Height** (dùng px hoặc auto để tránh méo tỷ lệ)
- ❌ **Top/Bottom** positioning (dùng px hoặc rem)
- ❌ **Font-size** (dùng px hoặc rem)
- ❌ **Border-radius, box-shadow** (giữ px)
- ❌ **Các phần tử nhỏ** như buttons, icons (giữ px)
- ❌ **Line-height** (dùng px hoặc unitless)

## 🔧 Helper Function

### **JavaScript/TypeScript**
```typescript
/**
 * Chuyển đổi px sang % dựa trên frame width
 * @param px - Giá trị pixel cần chuyển
 * @param baseWidth - Chiều rộng frame gốc (mặc định 1920)
 * @returns Chuỗi phần trăm (ví dụ: "22.03125%")
 */
const pxToPercent = (px: number, baseWidth: number = 1920): string => {
    return `${(px / baseWidth * 100).toFixed(5)}%`;
};

// Sử dụng:
const width = pxToPercent(423);  // "22.03125%"
const left = pxToPercent(262);   // "13.64583%"
```

### **CSS Calc Alternative**
```css
/* Thay vì hardcode % */
width: calc(423 / 1920 * 100%);
left: calc(262 / 1920 * 100%);
```

## 📝 Ví Dụ Chuyển Đổi

### **Trước (PX cứng)**
```tsx
<div style={{ 
    position: 'absolute',
    width: '829px',           // Container width
    left: '828px',            // Horizontal position
    top: '166px',             // Vertical position
    height: '432px'           // Height
}}>
```

### **Sau (Responsive %)**
```tsx
<div style={{ 
    position: 'absolute',
    width: '43.17708%',       // 829/1920 * 100 = 43.17708%
    left: '43.125%',          // 828/1920 * 100 = 43.125%
    top: '166px',             // GIỮ NGUYÊN px
    height: '432px'           // GIỮ NGUYÊN px
}}>
```

## 🎨 Các Components Đã Chuyển Đổi

### **1. Hero Component**
- ✅ Main container: 829px → 43.17708%
- ✅ Left position: 828px → 43.125%
- ✅ About Us section: 688px → 35.83333%
- ✅ Scroll down: 894px → 46.5625%

### **2. Team Section**
- ✅ Team member width: 423px → 22.03125%
- ✅ Member positions:
  - Member 1: -33px → -1.71875%
  - Member 2: 388px → 20.20833%
  - Member 3: 811px → 42.23958%
  - Member 4: 1234px → 64.27083%
- ✅ Button position: calc(50% + 40.20833%)

### **3. Services Section**
- ✅ Heading container: 688px → 35.83333%
- ✅ Services list: 556px → 28.95833%
- ✅ Sidebar image: 971px → 50.57292%

### **4. Service Areas**
- ✅ Full width sections: 1920px → 100%
- ✅ Heading: 1396px → 72.70833%
- ✅ Content text: 830px → 43.22917%

### **5. Trusted By**
- ✅ Container: 1920px → 100%
- ✅ Logos grid: 1174px → 61.14583%
- ✅ Background image: 764px → 39.79167%

### **6. Testimonials**
- ✅ Heading: 1396px → 72.70833%
- ✅ Card positions:
  - Card 1: 1300px → 67.70833%
  - Card 2: 596px → 31.04167%
  - Card 3: 1015px → 52.86458%
  - Card 4: 309px → 16.09375%
  - Card 5: 1159px → 60.36458%
  - Card 6: 592px → 30.83333%

### **7. Contact Form**
- ✅ Container: 1396px → 72.70833%
- ✅ Heading section: 688px → 49.28%
- ✅ Form section: 698px → 50%

## 🎯 Kết Quả

### **Ở màn 1920px (Desktop)**
- ✅ Layout GIỐNG 100% Figma
- ✅ Tất cả spacing và positioning chính xác

### **Ở màn nhỏ hơn (Tablet/Mobile)**
- ✅ Các phần tử co lại theo tỷ lệ
- ✅ Giữ khoảng cách tương đối
- ✅ Không bị vỡ layout

### **Ở màn lớn hơn (4K)**
- ✅ Các phần tử mở rộng theo tỷ lệ
- ✅ Giữ tỷ lệ thiết kế gốc

## 💡 Tips & Best Practices

### **1. Sử dụng CSS Variables**
```css
:root {
    --container-width: 72.70833%;  /* 1396px */
    --section-width: 35.83333%;    /* 688px */
    --spacing-left: 13.64583%;     /* 262px */
}
```

### **2. Responsive Breakpoints**
```css
/* Desktop: Giữ nguyên % */
@media (min-width: 1920px) {
    .container {
        width: 72.70833%;
    }
}

/* Tablet: Có thể tăng % */
@media (max-width: 1024px) {
    .container {
        width: 90%;
    }
}

/* Mobile: Full width */
@media (max-width: 768px) {
    .container {
        width: 95%;
    }
}
```

### **3. Kiểm Tra Layout**
```javascript
// Test ở các viewport khác nhau
const viewports = [1920, 1440, 1024, 768, 375];
viewports.forEach(width => {
    console.log(`At ${width}px: ${(423 / 1920 * width).toFixed(2)}px`);
});
```

## 📚 Tài Liệu Tham Khảo

- **Figma Frame**: 1920px
- **Base Unit**: px
- **Responsive Unit**: %
- **Precision**: 5 decimal places (ví dụ: 22.03125%)

## ⚠️ Lưu Ý Quan Trọng

1. **Luôn giữ heights trong px** để tránh méo tỷ lệ
2. **Font-size nên dùng rem** cho accessibility
3. **Test trên nhiều màn hình** trước khi deploy
4. **Sử dụng min-width/max-width** để kiểm soát responsive
5. **Cân nhắc dùng CSS Grid/Flexbox** cho layout phức tạp

---

**Tạo bởi**: Antigravity AI  
**Ngày**: 2026-02-03  
**Frame gốc**: 1920px  
**Mục đích**: Responsive design giữ nguyên layout Figma
