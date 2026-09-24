# Kling casting working guide

Version 1 — September 23, 2026

Working reference for future audition prompt revisions. Based on the director's supplied Prompting_for_Kling_guide.docx and the reported problems with speaker assignment and unwanted camera movement. The original Word file is preserved unchanged. This Markdown companion can accumulate render findings without changing that source.

Source: /Users/adina/Git_Repositories/generative-agentic-ai/video/wonderful/Prompting_for_Kling_guide.docx

## Scope and authority

Use the director's current sides for spoken words and story facts. Use approved performer references for identity and current candidate references when no lock exists. Use this guide for prompt organization and rendering experiments. Examples in the source guide do not supersede the screenplay or cast new characters.

For Daniel's revised Potter scene: George is 34; the offer is $300,000 on an iPad. Preserve the opening “Starting Monday” and subsequent “starting today.” The earlier $310,000 legal pad in the guide's example is obsolete. Its 60-year-old Potter voice is also an example, not a casting decision; retain the established scene's older Potter until intentionally revised.

## Adopted prompting format

Use these sections in order:

1. [Scene Setup]
2. [Character Identity]
3. [Blocking & Eyeline]
4. [Performance & Audio Timeline]
5. [Dialogue Script]
6. [Audio Settings]

Keep metadata, UI settings, reference instructions and review notes outside the text pasted into Kling.

### Scene Setup

State duration, aspect ratio, framing, setting and lighting compactly. For these auditions: fixed tripod, locked-off camera, zero pan, tilt, zoom, dolly or handheld motion, no cuts. Frame enough space for all intended actor movement. Camera immobility does not require actor immobility.

### Character Identity

Put a compact identity and wardrobe description near the top. Select the actual candidate Element in Kling's interface when available; use the reference label inserted or recognized by that workflow. Do not assume typing an invented @name alone binds a character or voice. Reference images and bound voice selection must be set up separately.

### Blocking and Eyeline

Specify seat or standing position, gaze target, which hands are occupied, prop positions and permitted movements. Keep George's established eyeline camera-left toward Potter on his anatomical right. His left ear remains deaf. Use head-still instructions only when the specific beat calls for them; do not contradict scripted glances, leaning, pointing or standing.

Potter is offscreen voice only in ordinary dialogue clips. In the iPad tap and handshake clips, explicitly permit only Potter's right hand and forearm to enter. His face and body remain outside frame. Do not pair “Potter never appears” with an unexplained visible Potter hand.

### Performance and Audio Timeline

Assign non-overlapping speaking intervals, identify who speaks, and state what the visible performer does while listening. When Potter speaks, George is silent, lips gently closed with no speech articulation; eyes, breath and posture may react. Put acting instructions here, not inside the spoken quotation. Timeline intervals are requested timing, not a guarantee of precise model control.

### Dialogue Script

Use explicit labels:

GEORGE says: "Exact words from current sides."

POTTER (OFFSCREEN VOICE ONLY) says: "Exact words from current sides."

Prefer one speaking character per generation where practical. Keep total spoken dialogue below 20 words per clip as our initial production heuristic. Preserve word order, repetitions, incomplete phrases and interruptions. Divide long lines at natural boundaries rather than paraphrase or accelerate them. Preserve gesture state and vocal intention across splits.

Favor 5–10-second clips for short exchanges, with longer clips when a silent action needs room. Keep the eager handshake through bodily recoil in one continuous clip: its short spoken exchange fits the dialogue target. Do not cut away at the instant that proves the performance.

### Audio Settings

Separate George's selected voice from Potter's offscreen voice. Daniel's current brief includes the director's slight Latino accent preference. Do not describe a selected ElevenLabs voice as attached merely because it is named in a prompt. Specify natural breath and room tone, no extra words, score or narration. Keep speaker cues and directions out of spoken text.

## If speaker assignment still fails

Reduce to one speaker per generated clip. For a Potter line, generate a silent George listening shot and place the separately produced Potter audio over it in editing if necessary. This is an explicit post-production fallback. Check the join, room tone and response timing; seamless results are not assumed.

## What remains a hypothesis

The source guide's claims about the first 100–150 words receiving special attention, timeline instructions turning lip-generation logic off, and offscreen tags routing audio through a particular internal system are unverified explanations. The prompt techniques are useful experiments; we do not need to assume those internal mechanisms are correct. Binding, explicit labels and time ranges can help us organize and test outputs, but do not guarantee correct identity, lips, timing or camera behavior.

## Existing package status

The current package is [Potter revision 2](kling-video-3/potter-revised/v2/README.md): 28 clips, each with the six prescribed sections and fewer than 20 spoken words. Dialogue word order has been checked against the director’s sides. The original 13 prompt files remain as revision 1 for comparison. No rendered results yet establish whether revision 2 resolves speaker or camera errors.

## Render learning log

For each test record: date; exact model/workflow; prompt file and revision; input frame; Element and voice setup; duration and resolution; output filename; intended result; observed issue; one change tested; outcome.

Initial director report: previous renders assigned some lines to the wrong visible speaker and introduced unwanted camera movement. The supplied guide proposes stricter sectioning, explicit speaker labels, shorter dialogue and timed listening instructions. No local render comparison has yet established which change resolves each problem.

Promote a proposed tactic to a repeatable production rule after it works across multiple relevant renders. Record counterexamples and exceptions rather than silently replacing the rule. Preserve previous prompt versions so successful outputs can be reproduced.
