# Accessibility review: Adina Halter portfolio

- **Site:** https://haltersweb.github.io/generative-agentic-ai/
- **Repository:** haltersweb/generative-agentic-ai, master branch, commit 2c6665c
- **Date:** 2026-10-14
- **Target:** WCAG 2.2 AA
- **Reviewer:** Morgan Vintner

---

## Summary

The new rendered audition on the Wonderful Life project page is in good shape. The video has real captions with speaker names and sound cues, a full audio-described version, and a complete descriptive transcript. A deaf, blind or deafblind visitor can follow the scene start to finish.

There are no critical or serious issues. There is one moderate fix, one audio description line to check against the video, and some small polish.

| ID | Issue | Severity | Effort |
|---|---|---|---|
| P-01 | Captions start off, and at narrow widths the control is hidden | Moderate | Trivial |
| P-02 | One audio description may not match the picture | Moderate if wrong | Trivial |
| P-03 | The described-version switch acts like a button, and the player doesn't say which version is loaded | Minor | Small |
| P-04 | Small caption and audio track polish | Minor | Trivial |
| H-01 | An old, unused copy of the script is still in the repository | Housekeeping | Trivial |

## Scope and method

- **Checked:** Project and index pages, the audition video player, caption and description files, the transcript, and both MP4 files.
- **How:**
  - Read the code.
  - Opened the live page in Chromium only, including a 320px-wide reflow check (equivalent to 400% zoom).
  - Worked out contrast ratios from the colour tokens in `css/styles.css`.
  - Inspected the video streams with ffprobe and pulled individual frames.
- **Not done:** No screen reader was used. Anything about what a screen reader announces is predicted from the code. Safari and Firefox were not tested.

---

## Findings

### P-01 — Captions start off, and at narrow widths the control is hidden

- **Severity:** Moderate
- **Confidence:** Confirmed in Chromium
- **WCAG:** Passes SC 1.2.2 Captions (Prerecorded). This is a usability finding.
- **Location:** `js/main.js`, `renderReel()`, the `<track>` element

#### What's wrong

The caption track has no `default` attribute, so captions start off. At 320px wide (equivalent to 400% zoom), Chrome's native player moves the captions button into its ⋮ overflow menu.

#### Who this hurts

A late-deafened visitor using screen magnification has to know the captions control exists, then find it inside an overflow menu at high zoom. The text under the video says "Captions available in the player", but at that width the player doesn't visibly offer them.

#### Fix

```js
${m.captions ? `<track kind="captions" src="${esc(m.captions)}" srclang="en" label="English captions" default>` : ""}
```

The only change is adding `default` at the end of the tag.

#### Why this fix

Captions on by default cost hearing viewers very little, and save deaf viewers from hunting for a control. I tested it: captions stay on when someone switches to the audio-described version, so the swap won't undo this.

#### How to verify

1. Load the project page in Chrome, Firefox and Safari.
2. Press play without touching the player's settings. Captions should appear at 0:00.
3. Switch to the audio-described version. Captions should still be showing.

- **Effort:** Trivial

---

### P-02 — One audio description may not match the picture

- **Severity:** Moderate if the description is wrong
- **Confidence:** Needs human verification
- **WCAG:** SC 1.2.5 Audio Description (Prerecorded), accuracy
- **Location:** `media/daniel_audition_descriptions.en.vtt`, cue `ad-07` (0:47), plus the matching line in `media/daniel_audition_descriptive_transcript.txt`. The described MP4's narration track probably says the same thing.

#### What's wrong

The description says "Behind him, windows overlook a snowy town." Frames from 0:46 to 0:51 show brick buildings and a steeple, and no snow is visible. Separately, the window view changes to a sunny seaside city by about 2:20, and the descriptions don't mention that.

#### Who this hurts

A blind listener builds their picture of the scene from the descriptions. A detail that isn't on screen is worse than a missing one, because the listener has no way to know it's wrong.

#### Fix

Check 0:47 at full resolution. If there's no snow, change the line in the VTT, the transcript and the narration track. For example:

```
ad-07
00:00:47.050 --> 00:00:50.720
Behind him, windows overlook the town. His grin fades.
```

Whether to describe the seaside change is an editorial call. It's an AI continuity glitch, so mentioning it is optional.

#### How to verify

Watch the described version from 0:44 to 0:52 and confirm the narration matches what's on screen.

- **Effort:** Trivial for the text. More work if the described MP4's narration has to be re-recorded.

---

### P-03 — The described-version switch acts like a button, and the player doesn't say which version is loaded

- **Severity:** Minor
- **Confidence:** High (predicted from code)
- **WCAG:** None. Advisory.
- **Location:** `js/main.js`, the `[data-reel]` click handler and `renderReel()`

#### What's wrong

Without JavaScript, the "Watch the audio-described version" link opens the described file directly. With JavaScript, it swaps the video in place, changes its own text to "Switch back to the standard version", and a polite live region says "Audio-described version loaded." That's good progressive enhancement. The cost is that screen readers announce it as a link, so users expect to go somewhere and are surprised when nothing navigates.

There's a second, related gap. The video player's accessible name is "Daniel Reyes: Potter's offer, rendered tape" in both versions. A user who switches, moves elsewhere on the page, and later tabs back to the player can't tell which version is loaded.

#### Who this hurts

Screen reader users. The swap works, and the announcement explains what happened at the moment it happens. But the role is misleading, and the player doesn't say which version it's playing.

#### Current behavior to keep

Focus stays on the switch after it's activated. Keep it there. Someone comparing the two versions can switch back and forth without being moved around the page. Moving focus to the player wouldn't help anyway, because the player's name is the same in both versions.

#### Fix

Keep the link markup so it still works without JavaScript. Make it a button only once the script takes over, and update the player's label along with the swap:

```js
main.querySelectorAll("[data-reel]").forEach(a => {
  a.setAttribute("role", "button");
  a.addEventListener("keydown", e => {
    if (e.key === " ") { e.preventDefault(); a.click(); }
  });
  a.addEventListener("click", e => {
    /* existing swap logic, unchanged, ending with: */
    const status = document.getElementById(a.dataset.reel + "-status");
    if (status) status.textContent = toDescribed ? "Audio-described version loaded." : "Standard version loaded.";

    /* new: say which version the player holds */
    const label = document.getElementById(a.dataset.reel + "-label");
    if (label) {
      const base = label.dataset.base ??= label.textContent;
      label.textContent = toDescribed ? `${base}, audio-described version` : base;
    }
  });
});
```

The label code saves the original name the first time it runs, so switching back restores it exactly.

#### Why this fix

- **The role:** `role="button"` tells screen readers what the control actually does. Buttons respond to Space as well as Enter, so the keydown handler adds Space.
- **No pressed state:** Keep the changing label, and don't add `aria-pressed` as well. A changing label plus a pressed state reads confusingly.
- **The live region stays:** Screen readers often don't re-read a focused element when its text changes; VoiceOver in particular tends to stay quiet. The live region is the reliable announcement.
- **The player label:** It makes the version discoverable later, whenever the user returns to the player.

#### How to verify

With VoiceOver and Safari, or NVDA and Firefox:
1. Tab to the switch. You should hear "button".
2. Press Space. The video should swap, and you should hear "Audio-described version loaded."
3. Press Shift+Tab until you reach the video. Its name should end with "audio-described version".
4. Tab back to the switch and press Enter. You should hear "Standard version loaded." The video's name should return to "Daniel Reyes: Potter's offer, rendered tape".

#### Also note when testing

- **Double announcement:** NVDA may read both the new link text and the live region message. That's harmless.
- **Overlapping audio:** If the video is playing during the swap, the announcement is spoken over the soundtrack. Leave playback resuming, unless testers find this a problem.

- **Effort:** Small

---

### P-04 — Small caption and audio track polish

- **Severity:** Minor
- **Confidence:** Confirmed (captions). Needs Safari verification (audio track).
- **WCAG:** None. Advisory.
- **Location:** `media/daniel_audition_captions.en.vtt` and `.srt`, `media/daniel_audition_described_cc.mp4`

**Speaker label format.** Cue 1 puts the speaker on its own line:

```
Potter (off-screen):
I want you to manage my properties.
```

Every later cue puts the label inline ("Potter: Oh yes, George Bailey."). Pick one style. To match the rest:

```
1
00:00:00.420 --> 00:00:02.900
Potter (off-screen): I want you
to manage my properties.
```

Make the same change in the `.srt` file.

**Extra audio track.** The described MP4 has two English audio tracks:

- **Track 1 (default):** The described mix. This is correct, and it's what Chrome plays.
- **Track 2:** The original audio, unlabelled.

Safari may list both in its audio menu as two identical "English" entries. If it does, remove the extra track:

```sh
ffmpeg -i daniel_audition_described_cc.mp4 -map 0:v -map 0:a:0 -map 0:s? -c copy daniel_audition_described_cc_fixed.mp4
```

#### How to verify

Open the project page in Safari, play the described version, and open the player's audio menu. It should show one option, or two clearly named ones.

- **Effort:** Trivial

---

### H-01 — An old, unused copy of the script is still in the repository

- **Severity:** Housekeeping. Not an accessibility defect.
- **Location:** `media/main.js`

`index.html` loads `js/main.js`. The repository also has an older copy at `media/main.js`, without the video player or the `upcoming` project support. Nothing loads it, but sooner or later someone will fix a bug in the wrong file. Delete `media/main.js`.

---

## What's working well

Keep these as they are.

- **Captions:** Speaker names, sound cues ("[George chuckles]", "[door clicks shut]"), and no captions burned into the picture, so viewers never see two sets at once.
- **Audio description:** The described version's default audio track is correctly the described mix, so browsers that can't switch tracks still play the descriptions.
- **Descriptive transcript:** Complete, and in reading order with the dialogue.
- **Version swap:** Keeps the caption state and focus, and announces the change.
- **Spoken times:** Timecodes such as "1:42–1:51" have hidden spoken versions ("1 minute 42 seconds to 1 minute 51 seconds").
- **Contrast:** Every text pair passes AA, from 4.84:1 to 9.57:1. Focus rings are 5.3:1 or better on both the light and dark surfaces.
- **Reflow:** No horizontal scrolling at 320px.
- **Motion:** The snow animation stops at 4 seconds and is skipped entirely when reduced motion is on. Nothing autoplays.
- **Text styling:** No uppercase or justified text anywhere.
- **Earlier fixes still in place:**
  - The skip link and in-page links aren't caught by the router.
  - Headshot descriptions sit in hidden text next to the enlarge buttons, not inside them.

---

## Remediation order

1. **P-01:** Add `default` to the caption track. One word.
2. **P-02:** Check 0:47, and fix the description in the VTT, transcript and narration if needed.
3. **H-01:** Delete `media/main.js`.
4. **P-04:** Fix the cue 1 label in the VTT and SRT, and check the audio menu in Safari.
5. **P-03:** Make the version switch a button once JavaScript runs, and add the version to the player's label.

## Still needs testing

- **Screen readers:** VoiceOver with Safari (macOS and iOS) and NVDA with Firefox. Test the version swap, and confirm the live region announcement comes through.
- **Safari audio menu:** Whether the extra audio track appears (P-04).
- **Description accuracy:** Watch the full described version against the picture, not just 0:47.
- **Lightbox:** Check the headshot lightbox at small, medium and large screen sizes, including that the close button stays visible while scrolling. It wasn't rechecked in this pass.
- **Real users:** Ideally, a short session with a deaf viewer and a blind screen reader user watching the audition.
