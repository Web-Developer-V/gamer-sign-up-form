# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Neutral

- Neutral 950: hsl(214 37% 4%)
- Neutral 900: hsl(210 39% 7%)
- Neutral 800: hsl(211 30% 13%)
- Neutral 700: hsl(211 22% 24%)
- Neutral 600: hsl(210 18% 42%)
- Neutral 500: hsl(211 14% 50%)
- Neutral 400: hsl(211 13% 55%)
- Neutral 300: hsl(211 18% 68%)
- Neutral 100: hsl(208 49% 92%)
- Neutral 50: hsl(204 60% 97%)

### Lime

- Lime 500: hsl(77 90% 59%)
- Lime 700: hsl(77 67% 39%)

### Red

- Red 400: hsl(4 100% 74%)

### Amber

- Amber 400: hsl(40 100% 65%)

### Navy

- Navy 950: hsl(214 60% 2%)

### Transparent

- Lime alpha 60: hsl(77 90% 59% / 0.6)
- Lime alpha 40: hsl(77 90% 59% / 0.4)
- Navy alpha 80: hsl(214 60% 2% / 0.8)
- Navy alpha 60: hsl(214 60% 2% / 0.6)

## Typography

### Body Copy

- Font size (inputs): 16px

### Fonts

- Family: [Orbitron](https://fonts.google.com/specimen/Orbitron)
  - Weights: 800
- Family: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
  - Weights: 400, 700

### Text presets

Uppercase text in the design is set with CSS (`text-transform: uppercase`), so write it in normal case in your HTML.

- Preset 1: Orbitron 800, 72px / 80px, letter spacing 0.04em, uppercase (tablet: 40px / 48px, mobile: 36px / 40px)
- Preset 2: Orbitron 800, 24px / 32px, letter spacing 0.04em
- Preset 3: Orbitron 800, 16px / 24px, letter spacing 0.16em
- Preset 4: JetBrains Mono 400, 16px / 24px (masked passwords: letter spacing 0.16em)
- Preset 5: JetBrains Mono 400, 14px / 24px
- Preset 5 (bold): JetBrains Mono 700, 14px / 24px, letter spacing 0.16em, uppercase
- Preset 6: JetBrains Mono 400, 12px / 16px, letter spacing 0.16em, uppercase
- Preset 7: JetBrains Mono 400, 12px / 16px

1. 좌측 영역
텍스트	Typography	Color
NEONCORE	Preset 3	Neutral 100
JOIN THE NEXUS	Preset 1	Neutral 100
// 장식	-	Lime 500
INITIALIZE YOUR NEONCORE IDENTITY	Preset 5	Neutral 400
OPERATOR ID	Preset 6	Neutral 400
0/5 READY	Preset 6	Neutral 400
UNASSIGNED	Preset 2	Neutral 300
CALLSIGN	Preset 6	Neutral 300
EMAIL	Preset 6	Neutral 300
PASSWORD	Preset 6	Neutral 300
CONFIRM	Preset 6	Neutral 300
TERMS	Preset 6	Neutral 300
PENDING	Preset 6	Neutral 500
REQUIRED	Preset 6	Neutral 500


2. 우측 영역
상단 헤더
텍스트	Typography	Color
NEW OPERATOR	Preset 6	Neutral 100
ALL FIELDS REQUIRED	Preset 6	Neutral 500


입력 필드
요소	Typography	Color
CALLSIGN	Preset 6	Neutral 300
EMAIL	Preset 6	Neutral 300
PASSWORD	Preset 6	Neutral 300
CONFIRM PASSWORD	Preset 6	Neutral 300
e.g. Vortex_07	Preset 4	Neutral 500
you@example.com	Preset 4	Neutral 500
실제 입력값	Preset 4	Neutral 100
입력창 배경	-	Navy 950
입력창 테두리	-	Neutral 600
비밀번호 표시 아이콘	-	Neutral 300
필드 앞 > 표시	-	Lime 500


비밀번호 영역
요소	Typography	Color
3–20 characters: letters, numbers, _ or -	Preset 7	Neutral 400
At least 8 characters	Preset 7	Neutral 400
비밀번호 강도 표시 바	-	Neutral 700
활성 강도 표시 바	-	Lime 500


약관 영역
텍스트	Typography	Color
I accept the	Preset 4	Neutral 300
Terms	Preset 4	Lime 500
and	Preset 4	Neutral 300
Privacy Policy	Preset 4	Lime 500
마침표	Preset 4	Neutral 300
체크박스 테두리	-	Neutral 600


버튼 및 하단 로그인
요소	Typography	Color
INITIALIZE ACCOUNT	Preset 5 Bold	Navy 950
버튼 배경	-	Lime 500
Already an operator?	Preset 4	Neutral 300
Log in	Preset 4	Lime 500


3. 전체 레이아웃 색상
요소	Color
전체 페이지 배경	Navy 950
회원가입 카드 배경	Neutral 900
카드 테두리	Neutral 700
카드 장식 모서리	Lime 500
배경 장식 선	Neutral 800 또는 Navy alpha 60
주요 구분선	Neutral 700

## Spacing and corners

- Spacing follows a 4px scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80
- Border radius: 0 everywhere

## Accessibility notes

- Errors that appear when a field loses focus aren't announced. Connect each message to its field with `aria-describedby`, so screen readers read it with the field.
- On an invalid submit, announce how many fields need attention, for example "3 fields need attention".

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma. The design file for this challenge also includes a design system and tablet layout to help you build a more accurate solution faster.
