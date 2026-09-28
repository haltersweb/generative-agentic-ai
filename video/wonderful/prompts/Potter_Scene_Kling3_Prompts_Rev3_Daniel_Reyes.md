# Potter Scene — Kling 3.0 Prompt Package, Revision 3 (Daniel Reyes)

Prepared 2026-09-28. Source for spoken words: *Rewritten Transcribed Potter Scene — v2* (director's sides), with "starting Monday" used both times. Format: *Kling Working Guide v1* (six sections, one speaker per clip, under 20 spoken words per clip).

Only the text inside each grey code block goes into Kling. Everything outside the blocks is for you.

---

## Before you render

**Settings for every clip.** Kling VIDEO 3.0, image-to-video, Native Audio ON, Multi-Shot OFF, 1:1 square, 720p.

**Element binding.** Each prompt contains `@Daniel_Reyes_34` in two places. After pasting, re-insert both through Kling's @ Element picker so they become real bindings rather than typed text. Confirm the Element's bound voice is selected in the interface, because typing a name does not attach the voice.

**Start frames.**
- C01 uses `daniel-reyes-R01a-start-square-v2.png` (the v3 "wary scrutiny" edit).
- Every later clip starts from the last frame of the previous approved take.
- Each clip's end state is written into its prompt so the chain holds together.

**Camera moves (only two).**
- **C18:** when George stands, the camera pedestals straight up with him, level and with no tilt, just enough to keep his head in frame, then locks again. C19–C24 inherit that raised frame from C18's last frame. Check that C18's final frame still shows the desk top. If Kling tilts instead of pedestalling, re-render C18 before continuing, because everything after it depends on that frame.
- **C25:** as George heads for the door, the camera pans right at his walking pace, settles on the door (just offscreen right of the original view), and locks there for the end of the scene. No earlier clip shows the door, so the C25 prompt describes it (frosted glass in a slim dark metal frame) to keep Kling's version consistent with the glass office.

Every other moment is fully locked off.

**Durations.** The durations below are requested lengths, and each includes a little handle for trimming. If your Kling build only offers fixed lengths, round up and trim in the edit.

**Potter's voice.** Potter has no bound voice, so every clip describes him in identical words. Expect some variation between clips. If it distracts, lay one temp Potter track in post.

**Interruption join.** At C13→C14, Potter jumps on George's last word. Cut these two clips tight in the edit, because a single generation can't overlap two speakers safely.

**If a speaker error still occurs.** Re-render once. If the wrong mouth still moves on a Potter line, use the guide's fallback: generate the same clip with the Potter dialogue removed (George listening silently), then lay the Potter audio from a good take over it in post.

---

## Clip map

| Clip | Speaker | Spoken words | Duration | Beat | End state |
|---|---|---|---|---|---|
| C01 | Potter | 13 | 8 s | Hand taps iPad, the offer | Seated, stunned, eyes on iPad |
| C02 | George | 6 | 6 s | Angles iPad up, "Three hun…" | iPad angled up, eyes on screen |
| C03 | Potter | 10 | 6 s | "…nicest house in town." | iPad still angled up, eyes on Potter |
| C04 | Potter | 15 | 7 s | "Your wife… two a year." | iPad flat on desk under his hands |
| C05 | Potter | 7 | 5 s | "…would you, George?" | Suppressed smile |
| C06 | George | 12 | 7 s | "Would I?" and looks around | Amused, on Potter |
| C07 | George | 10 | 6 s | Points at himself, "George Bailey." | Grin of disbelief |
| C08 | Potter | 18 | 7 s | "…ship has finally come in…" | Warming to it |
| C09 | George | 5 | 10 s | Chuckle, daydream, "what happens to Bailey?" | Sat back, brow furrowed |
| C10 | Potter | 8 | 5 s | "…afraid of success?" | Stung, jaw tight |
| C11 | Potter | 13 | 6 s | "…starting Monday. Yes or no?" | Conflicted |
| C12 | George | 18 | 8 s | "Well, Mr. Potter, I… I…" | Beginning to lean in |
| C13 | George | 18 | 7 s | "…twenty-four hours…" | Leaning in, hopeful |
| C14 | Potter | 14 | 5 s | "Sure, sure, sure…" | Relieved, faint nod |
| C15 | George | 5 | 4 s | "I'd like to do that." | Slight smile |
| C16 | Potter | 8 | 4 s | "…draw up the papers." | Listening |
| C17 | George | 3 | 4 s | "All right, sir." | Seated, respectful |
| C18 | Potter | 2 | 8 s | Both stand (camera pedestals up with George), hand offered and taken, "Okay, George?" | Standing, hands clasped; camera locked at new height |
| C19 | George | 3 | 10 s | Eager shake, then recoil (one continuous clip) | Standing, peering at Potter |
| C20 | George | 16 | 8 s | "No… no… no…" | Heat rising |
| C21 | George | 12 | 6 s | "…NO! Damn it!" | Breathing hard |
| C22 | George | 10 | 5 s | "You sit around here…" | Hand up, mid-sentence |
| C23 | George | 17 | 7 s | "…Well, it doesn't, Mr. Potter!" | Leaning forward |
| C24 | George | 19 | 9 s | "…scurvy little spider." | Holding the pinch |
| C25 | George | 9 | 12 s | Heads for door (camera pans right with him), "A small, sad spider…", exits | Holds on the closed door |

---

## C01 — The offer

Start frame: `daniel-reyes-R01a-start-square-v2.png` · 8 s · Potter speaks · Potter's hand enters

```
[Scene Setup]
8-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight, view down a small-town main street. Desk with two coffee cups and an iPad lying flat, its screen facing George. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left; his face and body never appear. Only Potter's right hand and forearm (dark suit sleeve, white shirt cuff, elderly hand) may enter frame, at the moment given below.

[Blocking & Eyeline]
George sits behind the desk, both hands resting on the desk beside the iPad. His eyeline is camera-left toward offscreen Potter, never into the lens. Potter's hand enters from frame left, taps the iPad screen twice with the index finger, and withdraws out of frame left.

[Performance & Audio Timeline]
0.0–1.0 s: George wary and guarded, jaw set, eyes narrowed on Potter. Silent.
1.0–3.5 s: Potter's hand enters from frame left, taps the iPad twice, withdraws out of frame left.
1.2–6.2 s: POTTER speaks offscreen. George is silent: lips closed, no mouth or jaw speech movement. His eyes drop to the iPad, read, and his guard cracks: brows lift, a caught breath, stillness.
6.2–8.0 s: Silence. George stays seated, staring at the iPad, stunned. Hands on the desk.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "I want you to manage my properties. Three hundred thousand a year. Starting Monday."

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone and two soft finger taps on glass. No music, narration or words beyond the script.
```

---

## C02 — "Three hun…"

Start frame: last frame of C01 · 6 s · George speaks

```
[Scene Setup]
6-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. Desk with two coffee cups and an iPad. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame in this clip.

[Blocking & Eyeline]
George sits behind the desk. He angles the iPad up to read the screen. His eyes stay on the iPad screen.

[Performance & Audio Timeline]
0.0–2.3 s: George angles the iPad up and reads it, incredulous, eyes scanning the iPad screen again. Lips closed, silent.
2.3–5.0 s: GEORGE speaks, flabbergasted, half to himself, eyes still on the iPad.
5.0–6.0 s: Silence. He keeps staring at the iPad screen.

[Dialogue Script]
GEORGE says: "Three hun... Three hundred thousand a year?"

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C03 — "The nicest house in town"

Start frame: last frame of C02 · 6 s · Potter speaks

```
[Scene Setup]
6-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, the iPad still angled up in his hands as at the start. His eyes are already on Potter at camera-left and stay there, never into the lens.

[Performance & Audio Timeline]
0.0–0.5 s: George looking at Potter, still stunned. Silent.
0.5–4.5 s: POTTER speaks offscreen. George is silent: lips closed, no mouth or jaw speech movement. Holding Potter's gaze, the first flicker of temptation shows in his eyes and a slower, deeper breath.
4.5–6.0 s: Silence. George keeps the iPad angled up, looking at Potter.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "You wouldn't mind living in the nicest house in town."

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone. No music, narration or words beyond the script.
```

---

## C04 — "Your wife… two a year"

Start frame: last frame of C03 · 7 s · Potter speaks

```
[Scene Setup]
7-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk. During the clip he slowly lowers the angled iPad and lays it flat on the desk, both hands resting on it. His eyes drift briefly to middle distance, then return to Potter at camera-left, never into the lens.

[Performance & Audio Timeline]
0.0–0.4 s: George looking at Potter. Silent.
0.4–5.8 s: POTTER speaks offscreen. George is silent: lips closed, no mouth or jaw speech movement. His eyes go briefly unfocused as he pictures his wife and the trips; the corners of his closed mouth begin to lift despite himself. He lowers the iPad flat onto the desk.
5.8–7.0 s: Silence. George's hands rest on the iPad; his eyes return to Potter.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "Your wife in clothes she didn't order off a screen. Real trips, two a year."

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone. No music, narration or words beyond the script.
```

---

## C05 — "Would you, George?"

Start frame: last frame of C04 · 5 s · Potter speaks

```
[Scene Setup]
5-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, hands resting on the iPad lying flat on the desk. Eyeline camera-left toward Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–3.3 s: POTTER speaks offscreen. George is silent: lips closed, no mouth or jaw speech movement. His suppressed smile grows; a breath of disbelieving laughter escapes through his nose only.
3.3–5.0 s: Silence. George looks at Potter with amused disbelief.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "You wouldn't mind that, would you, George?"

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone. No music, narration or words beyond the script.
```

---

## C06 — "Would I?"

Start frame: last frame of C05 · 7 s · George speaks

```
[Scene Setup]
7-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, hands on the desk. He turns his head to glance around the glass room (frame right, then up and back), then returns his eyeline to Potter at camera-left. He never looks into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–1.3 s: GEORGE speaks the first line, almost laughing, a slight smile.
1.3–2.8 s: Silent. He glances around the glass room, ironic, as if Potter must mean someone else.
2.8–5.8 s: GEORGE speaks the second line, still amused and disbelieving, eyes back on Potter.
5.8–7.0 s: Silence. Amused, looking at Potter.

[Dialogue Script]
GEORGE says: "Would I?"
GEORGE says: "You're not talking to somebody else around here, are you?"

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C07 — "George Bailey."

Start frame: last frame of C06 · 6 s · George speaks

```
[Scene Setup]
6-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk. He lifts his right hand and points at his own chest with his index finger, then lowers the hand back to the desk. Eyeline camera-left toward Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.4 s: Silent. Right hand rising to point at his chest.
0.4–4.6 s: GEORGE speaks, pointing at himself, disbelief building; his voice rises with wonder on "this is me".
4.6–6.0 s: Silence. Hand lowers to the desk; a grin of disbelief, eyes on Potter.

[Dialogue Script]
GEORGE says: "You know, this is me, you remember me? George Bailey."

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C08 — "Whose ship has finally come in"

Start frame: last frame of C07 · 7 s · Potter speaks

```
[Scene Setup]
7-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, hands on the desk. Eyeline camera-left toward Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–6.0 s: POTTER speaks offscreen. George is silent: lips closed, no mouth or jaw speech movement. His grin softens into real consideration; he is starting to enjoy the idea. Eyes on Potter, breathing easily.
6.0–7.0 s: Silence. George looking at Potter, warming to it.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "Oh, yes, George Bailey. Whose ship has finally come in, if he has the sense to board it."

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone. No music, narration or words beyond the script.
```

---

## C09 — "What happens to Bailey?"

Start frame: last frame of C08 · 10 s · George speaks

```
[Scene Setup]
10-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk and settles back in his chair, hands sliding back toward the desk edge. His eyes wander up and away (never to the lens) as he daydreams, then return to Potter at camera-left.

[Performance & Audio Timeline]
0.0–1.5 s: A soft chuckle; he settles back in his chair, shoulders easing. No words.
1.5–5.0 s: Silent. His eyes wander up and off as he pictures the house, the clothes, the trips; a small private smile.
5.0–7.0 s: Silent. The smile fades; his brow furrows. His eyes return to Potter.
7.0–8.8 s: GEORGE speaks, tentative but weighty, brow furrowed, eyes on Potter.
8.8–10.0 s: Silence. Sitting back, brow furrowed, waiting.

[Dialogue Script]
GEORGE says: "Well, what happens to Bailey?"

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone, a soft chuckle and natural breathing only. No music, narration or words beyond the script.
```

---

## C10 — "Are you afraid of success?"

Start frame: last frame of C09 · 5 s · Potter speaks

```
[Scene Setup]
5-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits back in his chair, hands near the desk edge. Eyeline camera-left toward Potter, dropping briefly to the desk. Never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–3.3 s: POTTER speaks offscreen with the first edge of impatience. George is silent: lips closed, no mouth or jaw speech movement. A slight flinch; his eyes drop to the desk; his jaw tightens.
3.3–5.0 s: Silence. George's eyes come back to Potter, stung.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "Oh, confound it, man, are you afraid of success?"

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous but now with a first edge of impatience, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone. No music, narration or words beyond the script.
```

---

## C11 — "Yes or no?"

Start frame: last frame of C10 · 6 s · Potter speaks

```
[Scene Setup]
6-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk. His eyes dart between Potter at camera-left and the iPad on the desk. Never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–4.8 s: POTTER speaks offscreen, pressing. George is silent: lips closed, no mouth or jaw speech movement. His eyes dart from Potter down to the iPad and back; he swallows; he doesn't want to lose this, but something underneath is uneasy.
4.8–6.0 s: Silence. Eyes on Potter, conflicted.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "I'm offering you three hundred thousand a year, starting Monday. Yes or no?"

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous with an edge of impatience, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone. No music, narration or words beyond the script.
```

---

## C12 — "Well, Mr. Potter, I… I…"

Start frame: last frame of C11 · 8 s · George speaks

```
[Scene Setup]
8-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, hands on the desk. His eyes dart between Potter at camera-left and the desk. Toward the end he begins to lean slightly forward toward camera-left. Never into the lens.

[Performance & Audio Timeline]
0.0–0.4 s: Silent. Conflicted.
0.4–7.0 s: GEORGE speaks, halting and stammering, eyes darting between Potter and the desk; he knows he should jump at it, and something stops him. The line trails off unfinished.
7.0–8.0 s: Silence. He starts leaning in toward Potter, mid-thought.

[Dialogue Script]
GEORGE says: "Well, Mr. Potter, I... I... I know I ought to jump at the chance, but I... I just..."

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Keep every repeated "I" and the trailing off. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C13 — "Twenty-four hours"

Start frame: last frame of C12 · 7 s · George speaks

```
[Scene Setup]
7-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, leaning slightly forward toward camera-left, hands on the desk. Eyeline on Potter at camera-left, never into the lens. He stays fully in frame.

[Performance & Audio Timeline]
0.0–0.3 s: Silent, leaning in.
0.3–5.8 s: GEORGE speaks, leaning in, looking at Potter as if hoping the request is reasonable. Polite, careful.
5.8–7.0 s: Silence. Still leaning in, eyebrows raised, waiting for the answer.

[Dialogue Script]
GEORGE says: "I wonder if it would be possible for you to give me twenty-four hours to think it over?"

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C14 — "Sure, sure, sure"

Start frame: last frame of C13 · 5 s · Potter speaks · Cut tight onto C13's last word in the edit.

```
[Scene Setup]
5-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, leaning slightly forward, then easing back a little. Eyeline camera-left toward Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.1 s: Silent.
0.1–4.0 s: POTTER speaks offscreen immediately, kindly and reasonably. George is silent: lips closed, no mouth or jaw speech movement. Relief shows in his shoulders and eyes; a faint nod begins.
4.0–5.0 s: Silence. George easing back, nodding faintly.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "Sure, sure, sure. You go on home and talk about it to your wife."

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous, now kind and encouraging, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone. No music, narration or words beyond the script.
```

---

## C15 — "I'd like to do that."

Start frame: last frame of C14 · 4 s · George speaks

```
[Scene Setup]
4-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, hands on the desk. Eyeline camera-left toward Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent, nodding.
0.3–2.0 s: GEORGE speaks, nodding in agreement.
2.0–4.0 s: Silence. A slight smile, eyes on Potter.

[Dialogue Script]
GEORGE says: "I'd like to do that."

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C16 — "I'll draw up the papers."

Start frame: last frame of C15 · 4 s · Potter speaks

```
[Scene Setup]
4-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, hands on the desk. Eyeline camera-left toward Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–2.8 s: POTTER speaks offscreen. George is silent: lips closed, no mouth or jaw speech movement. He listens; a small nod begins to form.
2.8–4.0 s: Silence. George looking at Potter.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "In the meantime, I'll draw up the papers."

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone. No music, narration or words beyond the script.
```

---

## C17 — "All right, sir."

Start frame: last frame of C16 · 4 s · George speaks

```
[Scene Setup]
4-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, sits offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George sits behind the desk, hands on the desk. Eyeline camera-left toward Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.4 s: Silent. He nods once.
0.4–1.6 s: GEORGE speaks, more quietly, with respect.
1.6–4.0 s: Silence. Seated, respectful, eyes on Potter.

[Dialogue Script]
GEORGE says: "All right, sir."

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C18 — Both stand; the hand is offered and taken

Start frame: last frame of C17 · 8 s · Potter speaks · Potter's hand enters · Camera pedestals up once as George stands, then locks.

```
[Scene Setup]
8-second continuous shot, 1:1 square. Tripod camera, locked off except for one move: as George stands, the camera rises straight up (pedestal up) at the same speed he rises, staying perfectly level — no tilt, no pan, no zoom, no dolly, no handheld shake, no cuts. It rises only enough to keep his whole head in frame with natural headroom, then locks and stays completely still. At the end, the desk top, the two cups, the iPad and the top of George's chair back are still visible at the bottom of frame. Keep the start image's background and lighting. Glass-walled fourth-floor office, soft daylight.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, stands offscreen at camera-left; his face and body never appear. Only Potter's right hand and forearm (dark suit sleeve, white shirt cuff, elderly hand) may enter frame, at the moment given below.

[Blocking & Eyeline]
George rises from his chair and stands behind the desk; the camera rises with him and his head stays fully in frame throughout. His eyeline lifts to follow Potter standing up offscreen at camera-left, never into the lens. Potter's right hand enters from frame left at standing chest height, open for a handshake. George takes it with his right hand; the clasped hands stay still, centred over the desk.

[Performance & Audio Timeline]
0.0–2.3 s: George's eyes lift as Potter rises offscreen; George pushes back his chair and stands, smiling, as the camera pedestals up level with him. Silent.
2.3–8.0 s: Camera locked and completely still from here on.
2.3–3.3 s: Potter's right hand enters from frame left at chest height, offered.
3.3–4.5 s: George, pleased, reaches out with his right hand and takes it. Hands clasped, not yet shaking.
4.8–6.0 s: POTTER speaks offscreen. George is silent: lips closed in a pleased smile, no mouth or jaw speech movement.
6.0–8.0 s: Silence. George standing, hands still clasped, smiling at Potter.

[Dialogue Script]
POTTER (OFFSCREEN VOICE ONLY) says: "Okay, George?"

[Audio Settings]
Potter, offscreen voice only: 81-year-old man, dry, unhurried, courteous, slightly thin with age. George makes no vocal sound in this clip. Quiet office room tone, a chair pushed back. No music, narration or words beyond the script.
```

---

## C19 — The handshake and the recoil (one continuous clip)

Start frame: last frame of C18 · 10 s · George speaks · Potter's hand in frame, then withdraws

```
[Scene Setup]
10-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, stands offscreen at camera-left; his face and body never appear. Only Potter's right hand and forearm (dark suit sleeve, white shirt cuff, elderly hand) are in frame, clasped in George's hand, until George lets go.

[Blocking & Eyeline]
George stands behind the desk, right hand clasping Potter's right hand. His eyes move between Potter's face offscreen at camera-left, the clasped hands, and back. He never looks into the lens. After he drops the hand, Potter's hand withdraws out of frame left and George's right hand falls to his side.

[Performance & Audio Timeline]
0.0–1.8 s: GEORGE speaks, smiling with a slight incredulous chuckle, pleased, shaking Potter's hand eagerly.
1.8–3.0 s: Silent. Still shaking, confident.
3.0–4.2 s: Silent. The shake slows; his smile freezes. A dawning physical revulsion, as if the hand is cold and clammy.
4.2–5.4 s: Silent. He looks down at the clasped hands as if something slimy has touched him.
5.4–6.4 s: Silent. He looks back up at Potter, suspicious.
6.4–7.3 s: Silent. He looks down at his hand again.
7.3–8.4 s: Silent. He lets go and drops the hand with a shudder; Potter's hand withdraws out of frame left; George's fingers flex at his side.
8.4–10.0 s: Silent. He peers intently at Potter's face at camera-left, trying to read what's behind his eyes.

[Dialogue Script]
GEORGE says: "Okay, Mr. Potter."

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone, natural breathing and one sharp uneasy breath at the recoil. No music, narration or words beyond the script.
```

---

## C20 — "No… no… no…"

Start frame: last frame of C19 · 8 s · George speaks

```
[Scene Setup]
8-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, stands offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George stands behind the desk. Small head shakes; his eyes go from the floor to Potter at camera-left. Never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–3.5 s: GEORGE speaks, partly to himself: babbling, head shaking, arguing with his own nervous system, no conviction yet.
3.5–4.0 s: Silent breath.
4.0–6.3 s: GEORGE speaks, suddenly vehement, eyes locked on Potter; the anger is starting to build.
6.3–8.0 s: Silence. Standing, heat rising, eyes on Potter.

[Dialogue Script]
GEORGE says: "No... no... no... no, now wait a minute, here!"
GEORGE says: "I don't have to talk to anybody!"

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Keep all four "no"s. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C21 — "NO! Damn it!"

Start frame: last frame of C20 · 6 s · George speaks

```
[Scene Setup]
6-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, stands offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George stands behind the desk. Eyeline locked on Potter at camera-left, never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–2.8 s: GEORGE speaks with growing force, certain now.
2.8–4.3 s: GEORGE speaks explosively, full volume.
4.3–6.0 s: Silence. Breathing hard, glaring at Potter.

[Dialogue Script]
GEORGE says: "I know right now, and the answer is no!"
GEORGE says: "NO! Damn it!"

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and hard breathing only. No music, narration or words beyond the script.
```

---

## C22 — "You spin your little webs"

Start frame: last frame of C21 · 5 s · George speaks

```
[Scene Setup]
5-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, stands offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George stands behind the desk, gesturing at Potter with his right hand toward camera-left. Eyeline on Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent, hand rising.
0.3–4.0 s: GEORGE speaks angrily, loud, gesturing at Potter. The sentence continues past the end of the clip.
4.0–5.0 s: Silent. Hand still raised toward Potter, mid-sentence.

[Dialogue Script]
GEORGE says: "You sit around here and you spin your little webs"

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C23 — "Well, it doesn't, Mr. Potter!"

Start frame: last frame of C22 · 7 s · George speaks

```
[Scene Setup]
7-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, stands offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George stands behind the desk, right hand gesturing at Potter. On the last line he leans forward over the desk toward camera-left, into Potter's space, staying fully in frame. Eyeline on Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.2 s: Silent, hand still raised.
0.2–4.0 s: GEORGE speaks, continuing the same angry sentence, gesturing.
4.0–6.0 s: GEORGE speaks forcefully, leaning into Potter's space.
6.0–7.0 s: Silence. Leaning forward, glaring at Potter.

[Dialogue Script]
GEORGE says: "and you think the whole world revolves around you and your money."
GEORGE says: "Well, it doesn't, Mr. Potter!"

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C24 — "Scurvy little spider"

Start frame: last frame of C23 · 9 s · George speaks

```
[Scene Setup]
9-second continuous shot, 1:1 square. Fixed tripod, locked-off camera: no pan, tilt, zoom, dolly, handheld shake, reframing or cuts. Keep the start image's framing, background and lighting exactly. Glass-walled fourth-floor office, soft daylight. The camera stays still; the actor may move.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, stands offscreen at camera-left and never appears; no hand enters frame.

[Blocking & Eyeline]
George stands behind the desk, gesturing broadly with both hands. On "scurvy little spider" he pinches his right thumb and forefinger together and thrusts them toward Potter at camera-left, as if holding a tiny spider he wants to crush. Eyeline on Potter, never into the lens.

[Performance & Audio Timeline]
0.0–0.3 s: Silent.
0.3–5.8 s: GEORGE speaks, gesturing wildly, searching for the words at first, then landing them; the pinch comes on the final three words.
5.8–9.0 s: Silence. He holds the pinch toward Potter, glaring, breathing hard.

[Dialogue Script]
GEORGE says: "In the... in the whole vast configuration of things, I'd say you were nothing but a scurvy little spider."

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Keep the stumble "In the... in the". Potter is silent in this clip. Quiet office room tone and natural breathing only. No music, narration or words beyond the script.
```

---

## C25 — The exit and the closed door

Start frame: last frame of C24 · 12 s · George speaks · Camera pans right once as George heads for the door, then locks on the door.

```
[Scene Setup]
12-second continuous shot, 1:1 square. Tripod camera, locked off except for one move: when George turns and heads for the door, the camera pans smoothly right on the tripod at his walking pace, staying level — no tilt, no zoom, no dolly, no handheld shake, no cuts. The pan stops when the office door, just offscreen to the right of the starting view, is framed, then the camera locks and stays completely still for the rest of the clip. Same room, background style and soft daylight as the start image. The door is a frosted-glass office door in a slim dark metal frame, set in the glass wall of this fourth-floor office.

[Character Identity]
George Bailey: @Daniel_Reyes_34, 34, clean-shaven, black side-parted hair, charcoal suit, pale blue open-collar shirt, wedding ring on left hand. He is the only person in frame. Mr. Potter, 81, stands offscreen at camera-left and never appears, not even as the camera pans; no hand enters frame.

[Blocking & Eyeline]
George lowers his hand, turns away from Potter and strides right toward the office door; the camera pans right with him, and the desk leaves frame left. At the frosted-glass door he opens it, stops, and looks back over his shoulder toward Potter, who is offscreen to the left. He speaks, steps through the doorway, and pulls the door closed behind him. He never looks into the lens.

[Performance & Audio Timeline]
0.0–0.8 s: Silent. George lowers his hand and turns toward frame right.
0.8–3.0 s: Silent. He strides toward the door; the camera pans right with him, level, and stops with the door framed. Camera locked from 3.0 s onward.
3.0–3.8 s: Silent. He opens the door, stops, and looks back over his shoulder toward Potter.
3.8–6.3 s: GEORGE speaks, lower now, cold and contemptuous, over his shoulder.
6.3–8.0 s: Silent. He steps through the doorway and pulls the door shut behind him; it closes at about 8 s.
8.0–12.0 s: The frame holds on the closed frosted-glass door; George's blurred shape fades away behind the frosted glass. No person in frame. Camera completely still.

[Dialogue Script]
GEORGE says: "A small, sad spider in a very expensive web."

[Audio Settings]
George speaks with the bound @Daniel_Reyes_34 voice: 34-year-old man, slight Latino accent, natural and unforced. Potter is silent in this clip. Footsteps, the door opening, the door closing firmly, then quiet office room tone. No music, narration or words beyond the script.
```

---

## Swapping in actor #2

To keep the audition fair, change only these things and leave everything else identical:

1. **Element tag.** Replace `@Daniel_Reyes_34` (two places per clip) with actor #2's Element, inserted through the @ picker.
2. **Identity line.** In each Character Identity section, replace the age, hair and wardrobe with actor #2's details. Keep the rest of that section unchanged.
3. **Voice line.** In the Audio Settings of George clips, replace the voice description and accent note.
4. **Start frame.** Make actor #2's C01 start frame with the same composition, props, iPad orientation, wary expression and headroom as Daniel's.

Leave all timings, blocking, dialogue and Potter descriptions exactly as they are, so any difference between the two auditions comes from the actor.

---

## Render log (per the Working Guide)

| Clip | Take | Output filename | Start frame used | Speaker correct? | Camera still? | Issue observed | Change tested | Keep? |
|---|---|---|---|---|---|---|---|---|
| C01 | 1 | | | | | | | |
