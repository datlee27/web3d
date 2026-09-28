# 🔍 UI Review Report - AboutUs Page

**Reviewed**: 2026-02-03  
**Viewport Tested**: 1920px, 1200px, 375px  
**Guidelines**: Vercel Web Interface Guidelines  

---

## 📊 Executive Summary

**Overall Status**: ⚠️ **NEEDS IMPROVEMENT**

The AboutUs page successfully implements percentage-based responsive design at 1920px (matching Figma 100%), but **lacks media queries** for smaller viewports, causing significant layout issues on tablet and mobile devices.

### Quick Stats
- ✅ **Passed**: 12 guidelines
- ⚠️ **Warnings**: 8 issues
- ❌ **Critical**: 5 issues
- **Total Issues**: 13

---

## 🚨 Critical Issues (Must Fix)

### 1. **Mobile Layout Completely Broken** ❌
**Location**: All components at 375px viewport  
**Guideline**: Safe Areas & Layout

**Issue**:
- Team members remain in single row, becoming invisible slivers
- Text elements overlap heavily
- Contact information cut off horizontally
- Page is unusable on mobile devices

**Fix**:
```css
@media (max-width: 768px) {
    /* Stack team members vertically */
    .team-member {
        width: 90% !important;
        position: relative !important;
        left: 5% !important;
        margin-bottom: 30px;
    }
}
```

**File**: All component files  
**Priority**: 🔴 CRITICAL

---

### 2. **Team Section Button Overlap** ❌
**Location**: `team-section/index.tsx:108`  
**Guideline**: Touch & Interaction, Safe Areas & Layout

**Issue**:
- "Schedule a call" button overlaps last team member at widths < 1400px
- Button position uses `calc(50% + 37%)` which breaks on smaller screens

**Current Code**:
```tsx
left: 'calc(50% + 37%)', // Breaks at < 1400px
```

**Fix**:
```tsx
// Option 1: Center the button
left: 'calc(50% - 70px)', // 70px = half of 140px button width

// Option 2: Add media query
@media (max-width: 1400px) {
    left: 'calc(50% - 70px)';
    top: '1500px'; // Move below team members
}
```

**File**: `src/pages/AboutUs/components/about-section/components/team-section/index.tsx:108`  
**Priority**: 🔴 CRITICAL

---

### 3. **Card Height Distortion** ❌
**Location**: `team-section/index.tsx:17-24`  
**Guideline**: Safe Areas & Layout, Content Handling

**Issue**:
- Fixed height `532px` with percentage width creates "tower-like" cards on small screens
- Names and roles cut off or crammed at bottom

**Current Code**:
```tsx
width: '22.03125%',  // Responsive
height: '532px',     // Fixed - PROBLEM!
```

**Fix**:
```tsx
width: '22.03125%',
minHeight: '532px',  // Allow height to grow
height: 'auto',      // Or use aspect-ratio

// Better: Use aspect-ratio
aspectRatio: '423/532', // Maintains proportions
```

**File**: `src/pages/AboutUs/components/about-section/components/team-section/index.tsx:17-24`  
**Priority**: 🔴 CRITICAL

---

### 4. **Missing Focus States** ❌
**Location**: All interactive elements  
**Guideline**: Focus States, Accessibility

**Issue**:
- Button has no visible focus state
- Links have no focus indicators
- Violates keyboard navigation accessibility

**Current Code**:
```tsx
<button style={{
    background: '#FF682A',
    // No focus styles!
}}>
```

**Fix**:
```tsx
<button 
    className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
    style={{
        background: '#FF682A',
        outline: 'none', // Only if using focus-visible
    }}
>

// Or inline:
<button style={{
    background: '#FF682A',
    outline: '2px solid transparent',
    outlineOffset: '2px',
}}
onFocus={(e) => e.target.style.outline = '2px solid #FF682A'}
onBlur={(e) => e.target.style.outline = '2px solid transparent'}
>
```

**Files**: 
- `team-section/index.tsx:73`
- `contact/index.tsx:50`

**Priority**: 🔴 CRITICAL

---

### 5. **Missing Image Alt Text** ❌
**Location**: Multiple image components  
**Guideline**: Accessibility, Images

**Issue**:
- Team member images missing descriptive alt text
- Logo images have generic alt text
- Violates WCAG 2.1 Level A

**Current Code**:
```tsx
<img src={image} alt={name} />  // Generic
<img src={TB_logo_VTC} alt="VTC" />  // Too brief
```

**Fix**:
```tsx
<img 
    src={image} 
    alt={`${name}, ${title} at 3DARCHTECH`} 
/>

<img 
    src={TB_logo_VTC} 
    alt="VTC - Vietnam Television Corporation logo" 
/>
```

**Files**:
- `team-section/index.tsx:20-24`
- `trusted-by/index.tsx:34,37,40,46,49,52,55,61,64,67,70`

**Priority**: 🔴 CRITICAL

---

## ⚠️ Warnings (Should Fix)

### 6. **Form Inputs Missing Labels** ⚠️
**Location**: `contact/index.tsx:28-43`  
**Guideline**: Forms, Accessibility

**Issue**:
- Labels not properly associated with inputs
- No `htmlFor` or wrapping structure

**Current Code**:
```tsx
<span>Name</span>
<input type="text" />
```

**Fix**:
```tsx
<label htmlFor="contact-name">Name</label>
<input 
    id="contact-name"
    type="text" 
    name="name"
    autoComplete="name"
/>
```

**Priority**: 🟡 HIGH

---

### 7. **Form Inputs Missing Autocomplete** ⚠️
**Location**: `contact/index.tsx:29,36,43`  
**Guideline**: Forms

**Issue**:
- No `autocomplete` attributes
- No `name` attributes

**Fix**:
```tsx
// Name field
<input 
    type="text"
    name="name"
    autoComplete="name"
/>

// Email field
<input 
    type="email"
    name="email"
    autoComplete="email"
/>

// Message field
<textarea
    name="message"
    autoComplete="off"
/>
```

**Priority**: 🟡 HIGH

---

### 8. **Placeholder Missing Ellipsis** ⚠️
**Location**: `contact/index.tsx` (if placeholders exist)  
**Guideline**: Forms, Typography

**Issue**:
- Placeholders should end with `…` and show example pattern

**Fix**:
```tsx
<input 
    type="email"
    placeholder="your.email@example.com…"
/>
```

**Priority**: 🟢 MEDIUM

---

### 9. **Typography: Straight Quotes Instead of Curly** ⚠️
**Location**: Multiple text content  
**Guideline**: Typography

**Issue**:
- Using straight quotes `"` instead of curly quotes `""`

**Current**:
```tsx
"Schedule a call"
"Let's create your new project together!"
```

**Fix**:
```tsx
"Schedule a call"
"Let's create your new project together!"
```

**Priority**: 🟢 LOW

---

### 10. **Missing Touch Action Optimization** ⚠️
**Location**: All interactive elements  
**Guideline**: Touch & Interaction

**Issue**:
- No `touch-action: manipulation` to prevent double-tap zoom delay

**Fix**:
```tsx
<button style={{
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'rgba(255, 104, 42, 0.3)',
}}>
```

**Priority**: 🟢 MEDIUM

---

### 11. **Missing Loading States** ⚠️
**Location**: `contact/index.tsx:50`  
**Guideline**: Typography, Forms

**Issue**:
- Submit button has no loading state
- Should show "Sending…" with spinner

**Fix**:
```tsx
const [isSubmitting, setIsSubmitting] = useState(false);

<button disabled={isSubmitting}>
    {isSubmitting ? 'Sending…' : 'Send'}
</button>
```

**Priority**: 🟡 HIGH

---

### 12. **Images Missing Dimensions** ⚠️
**Location**: Multiple image tags  
**Guideline**: Images, Performance

**Issue**:
- Images using `w-full h-full` without explicit width/height
- Can cause Cumulative Layout Shift (CLS)

**Current**:
```tsx
<img src={image} className="w-full h-full object-cover" />
```

**Fix**:
```tsx
<img 
    src={image} 
    width={423}
    height={532}
    className="w-full h-full object-cover" 
/>
```

**Priority**: 🟡 HIGH

---

### 13. **Missing Reduced Motion Support** ⚠️
**Location**: Any animations (if present)  
**Guideline**: Animation, Accessibility

**Issue**:
- No `prefers-reduced-motion` media query

**Fix**:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

**Priority**: 🟢 MEDIUM

---

## ✅ What's Working Well

1. ✅ **Semantic HTML**: Using proper `<h1>`, `<h2>`, `<h3>`, `<p>` tags
2. ✅ **Responsive Widths**: Percentage-based widths work perfectly at 1920px
3. ✅ **Gradient Text**: Beautiful gradient effects on headings
4. ✅ **Image Optimization**: Using `object-cover` and `object-contain` appropriately
5. ✅ **Consistent Spacing**: Good use of gap and padding
6. ✅ **Font Hierarchy**: Clear distinction between heading and body text
7. ✅ **Color Contrast**: Orange (#FF682A) on white has good contrast
8. ✅ **Button Styling**: Clear visual hierarchy with shadows
9. ✅ **Backdrop Blur**: Nice glassmorphism effect on testimonial cards
10. ✅ **Hover States**: Testimonial cards have interactive hover states
11. ✅ **Proper Form Types**: Using `type="email"` for email input
12. ✅ **Cursor Pointers**: Interactive elements have `cursor: pointer`

---

## 📋 Recommended Action Plan

### Phase 1: Critical Fixes (Do First) 🔴
1. Add media queries for mobile (375px) and tablet (768px, 1024px)
2. Fix button overlap in team section
3. Change fixed heights to min-height or aspect-ratio
4. Add focus states to all interactive elements
5. Add proper alt text to all images

### Phase 2: High Priority ⚠️
6. Add labels with `htmlFor` to form inputs
7. Add `autocomplete` and `name` to form fields
8. Add loading state to submit button
9. Add explicit width/height to images

### Phase 3: Polish 🟢
10. Replace straight quotes with curly quotes
11. Add touch-action optimization
12. Add reduced motion support
13. Add placeholder ellipsis

---

## 📱 Responsive Breakpoints Needed

```css
/* Mobile First Approach */

/* Mobile: 375px - 767px */
@media (max-width: 767px) {
    .team-section {
        flex-direction: column;
    }
    .team-member {
        width: 90% !important;
        position: relative !important;
        left: 5% !important;
        margin-bottom: 30px;
    }
    .schedule-button {
        left: calc(50% - 70px) !important;
        top: auto !important;
        bottom: 50px;
    }
}

/* Tablet: 768px - 1023px */
@media (min-width: 768px) and (max-width: 1023px) {
    .team-member {
        width: 45% !important;
    }
}

/* Laptop: 1024px - 1439px */
@media (min-width: 1024px) and (max-width: 1439px) {
    .team-member {
        width: 30% !important;
    }
}

/* Desktop: 1440px+ */
@media (min-width: 1440px) {
    /* Keep percentage-based layout */
}
```

---

## 🎯 Priority Matrix

| Issue | Impact | Effort | Priority |
|-------|--------|--------|----------|
| Mobile layout broken | 🔴 Critical | Medium | **P0** |
| Button overlap | 🔴 Critical | Low | **P0** |
| Card height distortion | 🔴 Critical | Low | **P0** |
| Missing focus states | 🔴 Critical | Low | **P0** |
| Missing alt text | 🔴 Critical | Low | **P0** |
| Form labels | 🟡 High | Low | **P1** |
| Form autocomplete | 🟡 High | Low | **P1** |
| Image dimensions | 🟡 High | Low | **P1** |
| Loading states | 🟡 High | Medium | **P1** |
| Touch optimization | 🟢 Medium | Low | **P2** |
| Typography quotes | 🟢 Low | Low | **P3** |
| Reduced motion | 🟢 Medium | Low | **P2** |
| Placeholder ellipsis | 🟢 Low | Low | **P3** |

---

## 📸 Screenshots Reference

Browser recording saved at:
`file:///Users/mac/.gemini/antigravity/brain/f18d3ed6-3cf0-4217-afab-3ec19d44f9f7/aboutus_page_review_1770128689292.webp`

---

## 🔗 Resources

- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

**Next Steps**: Would you like me to implement the critical fixes (Phase 1) first?
