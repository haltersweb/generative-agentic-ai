## Licensing

This is a **mixed-license repository**. Please do not assume that one license applies to everything in the repository.

### Quick guide

| Content | Default location | License / status | What you may generally do |
|---|---|---|---|
| Open-source code | `/code/`, `/src/` | Apache License 2.0 | Use, modify, distribute, and use commercially under Apache-2.0 |
| Open agents | `/agents/open/` | Apache License 2.0 | Use, modify, fork, and build on them under Apache-2.0 |
| Open prompts | `/prompts/open/` | Apache License 2.0 unless a file says otherwise | Use, modify, and redistribute under Apache-2.0 |
| Showcase / advanced prompts | `/prompts/showcase/` | Reference Only / All Rights Reserved | View, study, link, and cite; no copying, redistribution, substantial adaptation, commercial reuse, or AI-training use unless permitted |
| Showcase / proprietary agents | `/agents/showcase/` | Reference Only / All Rights Reserved | View for education/inspiration; no copying, porting, derivative agents based on protected expression, commercial reuse, or AI-training use unless permitted |
| Articles and essays | `/articles/` | Reference Only / All Rights Reserved | Read, link, discuss, and cite; no republication or substantial reuse unless permitted |
| Tutorials / educational material | `/tutorials/` | Reference Only / All Rights Reserved | Read, link, discuss, and cite; no republication, course conversion, or substantial reuse unless permitted |
| Images / generated imagery | `/images/` | Reference Only / All Rights Reserved, to the extent applicable rights exist | View in the repository; no republication, remixing, commercial asset use, or AI-training use unless permitted |

The repository-level scope notice is in [`LICENSE`](./LICENSE).

The complete Apache License 2.0 text is in [`LICENSES/Apache-2.0.txt`](./LICENSES/Apache-2.0.txt).

Reference-only material is governed by [`LICENSES/PROPRIETARY-CONTENT-LICENSE.md`](./LICENSES/PROPRIETARY-CONTENT-LICENSE.md).

### Important: public does not mean open source

Some material is intentionally visible so that other developers, researchers, employers, and practitioners can study the work and understand the techniques demonstrated here. Making that material publicly viewable does **not** mean it has been released as open source or placed in the public domain.

Unless a file or directory is expressly identified as open and licensed under Apache-2.0 (or another stated license), original material should be treated as **Reference Only / All Rights Reserved**.

### Open-source file header

For files you intentionally release under Apache-2.0, you may use a short SPDX header such as:

```text
Copyright 2026 Adina Halter
SPDX-License-Identifier: Apache-2.0
```

For code, place the notice inside the appropriate comment syntax for the language.

### Reference-only file header

For protected prompts, agents, articles, tutorials, or other text files, you may use:

```text
Copyright © 2026 Adina Halter. All Rights Reserved.
Reference Only — not licensed for copying, redistribution, adaptation,
commercial use, AI/ML training, or incorporation into another agent/product.
See /LICENSES/PROPRIETARY-CONTENT-LICENSE.md.
```

For protected images, place the same information in adjacent documentation or metadata where practical.

### Prompts

Prompts in `/prompts/open/` are intended for reuse and modification under the license identified for that directory or file.

Prompts in `/prompts/showcase/` are displayed for study, demonstration, and inspiration. Unless separately licensed, you may not copy, redistribute, sell, package, substantially adapt, deploy, or incorporate their protected expression into another prompt library, agent, application, product, or service.

Copyright law may not protect every short, functional, or commonplace prompt element. These notices claim rights only to the extent applicable law provides them.

### Agents

Agents in `/agents/open/` are intended for reuse and modification under Apache-2.0 unless a more specific notice says otherwise.

Agents in `/agents/showcase/` are reference-only. You may study their architecture and learn from the general ideas and techniques, but no permission is granted to copy or adapt protected system prompts, orchestration text, routing rules, tool instructions, schemas, evaluation materials, curated examples, documentation, or other protectable expression into another agent or product.

Independently authored implementations based only on unprotected ideas, methods, facts, or techniques are not prohibited by these notices.

### AI/ML training and datasets

Reference-only material is **not licensed for model training, fine-tuning, preference optimization, distillation, synthetic-data generation, benchmarking/evaluation datasets, prompt corpora, reusable agent libraries, or systematic scraping for AI/ML development**.

It is also not licensed for creation of an embedding or retrieval corpus whose purpose is to reproduce, operationalize, imitate, or surface the protected material in another product or service.

This restriction is subject to applicable law and does not prohibit ordinary search indexing, GitHub's technical processing, or transient copies necessary for lawful viewing.

Apache-2.0 material may be used as permitted by Apache-2.0; users remain responsible for determining whether other laws, third-party rights, or platform terms apply to a particular AI/ML use.

### Generated and AI-assisted imagery

Some images in this repository may have been created or modified using generative-AI tools. Unless an image is expressly given a different license, it is presented as reference-only.

Restrictions apply only to rights that the repository owner actually owns or controls. No representation is made that every AI-generated element is independently copyrightable in every jurisdiction. Third-party model, service, stock, font, or asset terms may also apply.

### Articles and tutorials

Articles and tutorials may be read, linked to, discussed, and cited. Unless separately licensed, they may not be republished, substantially reproduced, translated and distributed, converted into another course or tutorial, or incorporated into a commercial publication or training product without permission, except where applicable law permits the use.

### Attribution and citation

When citing reference-only work, please identify the author/owner, title or file name, repository, and a permanent URL or commit URL when practical.

Suggested form:

```text
[TITLE OR FILE NAME], Adina Halter, https://github.com/haltersweb/generative-agentic-ai,
[PERMANENT LINK OR COMMIT URL], accessed [DATE].
```

Attribution is appreciated and may be required for particular licensed material, but **attribution does not convert reference-only material into reusable material**.

### Commercial use

Apache-2.0 material may be used commercially subject to Apache-2.0.

Reference-only material is not licensed for use in a commercial product, paid service, client deliverable, commercial dataset, paid course, monetized publication, subscription library, or similar revenue-generating activity without written permission.

### Third-party dependencies and content

Third-party packages, models, datasets, images, fonts, examples, and other dependencies retain their own licenses and terms. Their inclusion in this repository does not change those terms. Check the relevant dependency or file notice before reuse.

### Contributions

Unless a contribution is expressly marked **"Not a Contribution"** or is governed by a separate written agreement, contributions intentionally submitted for inclusion in an Apache-2.0-licensed portion of the project are expected to be provided on terms compatible with Apache-2.0.

Please do **not** submit third-party proprietary material or material that you do not have the right to contribute.

Contributions to reference-only/proprietary areas should not be assumed to transfer ownership or grant additional rights; contact the repository owner before contributing to those areas if rights need to be clarified.

### Permission requests

Need permission beyond the terms above? Contact **haltersweb@gmail.com** and identify:

- the specific file(s) or material you want to use;
- how you want to use them;
- whether the use is commercial;
- whether the material will be modified, redistributed, incorporated into an agent/product, or used for AI/ML purposes; and
- where the resulting work will appear.

> **Legal note:** This licensing structure is intended to make the repository owner's permissions clear, but it is not legal advice. Copyright protection and enforceability can vary by jurisdiction and by content type, especially for short/functional prompts and AI-generated material. For high-value proprietary material, legal review and/or keeping the underlying implementation private may provide stronger protection than a public repository notice alone.
