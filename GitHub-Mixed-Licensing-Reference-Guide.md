# Mixed Licensing for a Generative & Agentic AI GitHub Repository

## Recommended structure

For a repository containing code, prompts, agents, generated imagery, tutorials, and articles with different reuse permissions, do not force everything under one license. Use a mixed-license structure with two principal categories:

1. **Open material** — code, prompts, and agents you want others to use, modify, distribute, and build on.
2. **Reference-only / showcase material** — advanced prompts, selected agents, articles, tutorials, and imagery that may be studied and cited but are not intentionally licensed for copying, redistribution, modification, commercial reuse, AI training, or incorporation into another product.

For the open portion, **Apache License 2.0** is a strong default. It is permissive and includes an explicit patent grant. For protected material, use an **All Rights Reserved / Reference-Only** notice rather than a Creative Commons license if you do not want to grant broad redistribution rights.

## Suggested mapping

| Repository material | Recommended status |
|---|---|
| General code | Apache License 2.0 |
| Open agents | Apache License 2.0 |
| Prompts intentionally offered for reuse | Apache License 2.0 (or another expressly chosen license) |
| Advanced/custom showcase prompts | Reference Only / All Rights Reserved |
| Articles and essays | Reference Only / All Rights Reserved |
| Tutorials | Reference Only / All Rights Reserved |
| Generated imagery | Reference Only / All Rights Reserved, to the extent applicable rights exist |
| Selected proprietary/showcase agents | Reference Only / All Rights Reserved |

## Recommended repository layout

```text
generative-agentic-ai/
├── LICENSE
├── LICENSES/
│   ├── Apache-2.0.txt
│   └── PROPRIETARY-CONTENT-LICENSE.md
├── README.md
├── code/
├── prompts/
│   ├── open/
│   └── showcase/
├── agents/
│   ├── open/
│   └── showcase/
├── articles/
├── tutorials/
└── images/
```

## Why not put Apache 2.0 directly over the entire repository?

A root license is easy for visitors to interpret as applying broadly. In a repository where some files are intentionally not open source, the scope should be unmistakable. A cleaner structure is:

- a root `LICENSE` that explains the repository is mixed-license;
- an unchanged `LICENSES/Apache-2.0.txt` for open material;
- a custom `LICENSES/PROPRIETARY-CONTENT-LICENSE.md` for reference-only material; and
- a README table mapping directories and content types to the applicable terms.

Per-file SPDX or copyright headers make the boundaries even clearer.

## Suggested headers

Open-source file:

```text
Copyright 2026 Adina Halter
SPDX-License-Identifier: Apache-2.0
```

Reference-only file:

```text
Copyright © 2026 Adina Halter. All Rights Reserved.
Reference Only — not licensed for copying, redistribution, adaptation,
commercial use, AI/ML training, or incorporation into another agent/product.
See /LICENSES/PROPRIETARY-CONTENT-LICENSE.md.
```

## Important AI-specific nuances

### Prompts
Short, highly functional, commonplace, or purely procedural prompts may receive limited or no copyright protection depending on jurisdiction. A rights notice is still useful for communicating your intended terms, but it should not claim exclusive rights to ideas, facts, techniques, or uncopyrightable expression.

### Agents
You can distinguish between open agents and showcase agents. For showcase agents, the notice can reserve rights in original system prompts, orchestration text, routing rules, tool instructions, schemas, evaluation materials, curated examples, and documentation while making clear that general ideas and independently developed techniques are not owned merely because they were demonstrated in the repository.

### AI-generated imagery
Copyright status for AI-generated material can depend on the amount and nature of human authorship and on jurisdiction. A repository notice should therefore state that restrictions apply only to rights the owner actually owns or controls and should not claim that every generated element is necessarily copyrightable.

### Training datasets and model use
For reference-only material, it is reasonable to expressly state that no permission is granted for model training, fine-tuning, distillation, preference optimization, synthetic-data generation, benchmark/evaluation datasets, prompt corpora, systematic scraping, or retrieval/embedding systems designed to reproduce or operationalize the protected material. Such restrictions remain subject to applicable law and platform terms.

## One practical limitation

If a prompt, agent, dataset, or workflow is genuinely valuable and you need strong practical control over copying, **not publishing the full implementation is stronger protection than publishing it with a restrictive notice**. A public repository is excellent for a portfolio and for demonstrating expertise, but it inherently makes technical copying easier.

## Bottom line

A strong structure for this repository is:

**Apache License 2.0 for explicitly open material + Reference-Only / All Rights Reserved terms for protected material.**

The licensing kit accompanying this guide implements that structure and includes language covering code, prompts, agents, derivative agents, articles, tutorials, generated imagery, attribution, commercial use, AI/ML training, datasets, embeddings, and third-party material.

> This guide is general information, not legal advice. For commercially valuable intellectual property, consider review by an attorney familiar with copyright, software licensing, and AI-related rights.
