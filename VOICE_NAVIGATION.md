# 🎙️ Voice Navigation — Hafsa Portfolio

> **File:** `src/components/VoiceNavigator.jsx`  
> **Depends on:** Web Speech API (`SpeechRecognition`), `react-scroll`, `framer-motion`, `SettingsContext`

---

## Overview

The **Voice Navigator** lets visitors control the entire portfolio using their voice — no mouse or keyboard needed. A floating microphone button lives in the **bottom-right corner** of every page. Clicking it toggles listening on/off.

---

## How to Activate

1. Open the portfolio at `http://localhost:3000` (or your deployed URL).
2. Locate the **circular mic button** fixed to the **bottom-right** of the screen (above the footer bar).
3. Click it once — the browser will **ask for microphone permission**. Click **Allow**.
4. The button turns **teal/green** and pulses → it is now actively listening.
5. Speak a command clearly (see commands below).
6. A **feedback bubble** appears above the button showing what it heard and what it did.
7. Click the button again to **stop listening**.

> **Note:** Voice Navigation uses the browser's built-in Web Speech API, which requires an internet connection and a Chromium-based browser (Google Chrome, Microsoft Edge, Brave, Opera). Firefox and Safari have limited/no support.

---

## Supported Voice Commands

### 🧭 Navigation Commands

Speak any of these phrases to scroll to a section:

| Say…                              | Goes to…         |
|-----------------------------------|-----------------|
| `"go to home"` / `"show hero"`    | Top / Hero       |
| `"go to about"`                   | About section    |
| `"navigate to skills"`            | Skills section   |
| `"scroll to research"`            | Research section |
| `"show footprints"`               | Footprints       |
| `"go to experience"`              | Experience       |
| `"navigate to achievements"`      | Achievements     |
| `"go to contact"`                 | Contact form     |

**Trigger words:** `go to` · `show me` · `scroll to` · `navigate to` · `open`  
You can also say just the section name directly, e.g. `"contact"` or `"about"`.

---

### 🎨 Theme Commands

| Say…                    | Effect               |
|-------------------------|----------------------|
| `"dark mode"`           | Switch to Dark theme |
| `"light mode"`          | Switch to Light theme |
| `"vibrant mode"`        | Switch to Vibrant theme |
| `"neon mode"`           | Switch to Neon theme  |

---

## Visual Indicators

| State            | Button Appearance                        |
|------------------|------------------------------------------|
| **Off**          | Grey gradient, `MicOff` icon             |
| **Listening**    | Teal/green gradient, `Mic` icon, pulsing ring animation |
| **Feedback**     | Dark bubble above button with heard text + action taken |

---

## Technical Architecture

```
SettingsContext
  └── isVoiceEnabled (boolean)
  └── toggleVoice()       ← button click handler
  └── setTheme()          ← used by theme commands

VoiceNavigator.jsx
  ├── useEffect([isVoiceEnabled])
  │    ├── Creates SpeechRecognition instance
  │    ├── recognition.continuous = true   (keeps listening)
  │    ├── recognition.onresult → processCommand()
  │    └── recognition.onend → auto-restarts (unless _manualStop)
  │
  ├── processCommand(text)
  │    ├── Matches SECTION_MAP keys → scroller.scrollTo()
  │    └── Matches theme keywords → setTheme()
  │
  └── Cleanup: sets _manualStop = true → stops recognition cleanly
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Button doesn't respond | Check browser is Chrome/Edge. Open DevTools → Console for errors. |
| "Mic permission denied" shown | Go to browser settings → Site permissions → Microphone → Allow |
| Command not recognised | Speak clearly and slowly. Avoid background noise. |
| Keeps stopping | This is normal — the browser ends each session after silence. The component auto-restarts. |
| Not supported | Update Chrome/Edge to the latest version. Safari/Firefox users must use keyboard navigation. |

---

## WhatsApp Direct Link

The footer contains a **direct WhatsApp link** to the developer:

```
https://wa.me/8801400159183
```

Clicking **"WhatsApp Me"** in the footer opens a WhatsApp chat to **+880 1400 159183** (SAMI) directly — no need to save the number. Works on mobile and desktop (desktop opens WhatsApp Web).

---

## Developer Notes

- The mic button is positioned at `bottom-24 right-6` (fixed) so it clears the footer bar.
- The footer bar uses `pr-24` so the WhatsApp pill is never hidden behind the mic button.
- `SECTION_MAP` in `VoiceNavigator.jsx` is the single source of truth for command → scroll ID mapping. Add new sections there.
- The auto-restart on `onend` uses a 300 ms delay to avoid rapid-fire restart errors from the browser.

---

*Last updated: March 2026 — Developed by SAMI*
