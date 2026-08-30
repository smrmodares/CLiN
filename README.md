<div align="center">

# CLiN

### Objective and Interpretable Creativity Evaluation for Short Persian Literary Texts

**Creativity as Lexical Ideas, Novelty, and N-grams**

[Project Page](https://smrmodares.github.io/CLiN/) · [Code](./code/) · [Data](./data/)

</div>

---

## Overview

**CLiN** is an objective, interpretable framework for evaluating three TTCT-derived dimensions of creativity in short literary text: **originality**, **fluency**, and **elaboration**. The project also systematically studies how reliably large language models act as creativity judges under zero-shot, few-shot, ensemble, reference-based, and multi-agent evaluation settings.

The central finding is simple: increasingly elaborate LLM-based judging strategies do not necessarily produce more reliable creativity evaluation. For the structured TTCT-derived dimensions studied in the paper, simple proxy metrics can achieve human alignment comparable to or better than the strongest zero-shot LLM judge while avoiding repeated API-based evaluation.

## CLiN at a glance

| Human-rated dimension | CLiN proxy | Intuition | Spearman ρ with human ratings |
|---|---|---|---:|
| **Originality** | **Novelty** | Combines global statistical surprise with topic-relative uniqueness | **0.45** |
| **Fluency** | **Lexical Idea** | Counts semantic idea clusters from contextual token representations | **0.46** |
| **Elaboration** | **N-gram diversity** | Uses lexical diversity as a simple elaboration proxy | **0.67** |

Correlations above are reported over all 200 texts in the paper.

## What the paper studies

The evaluation benchmark contains **200 short Persian literary texts**: 100 human-authored and 100 model-generated texts, covering five themes: **hope, despair, longing, love, and friendship**. Five native Persian annotators rate each text on six dimensions:

- TTCT-derived: **Originality, Fluency, Elaboration**
- Holistic/subjective: **Creativity, Attractiveness, Emotion**

Seven LLMs are evaluated as judges, including GPT-4.1, GPT-5, Claude 3.7 Sonnet, Gemini 2.5 Pro, LLaMA-4, Gemma-3, and DeepSeek-V3.

### Main findings

- LLM judges show stronger alignment on the more structured TTCT-derived dimensions than on subjective dimensions such as emotion and attractiveness.
- Prompt formulation matters: paraphrasing or jointly presenting evaluation questions can substantially change model judgments.
- Few-shot prompting, majority voting, and multi-agent debate do not consistently improve alignment with human ratings.
- On human-authored texts, the CLiN components are comparable to Claude 3.7 Sonnet on originality and fluency, and significantly better on elaboration in the paired bootstrap comparison reported in the paper.

## Repository structure

```text
CLiN/
├── index.html                    # GitHub Pages project website
├── assets/
│   ├── styles.css
│   └── site.js
├── code/
│   ├── README.md
│   ├── llm-as-judge/
│   │   └── LLMs_as_Judge.ipynb
│   └── proxies/
│       ├── Novelty_and_Quality.ipynb
│       ├── Proxy_Elaboration_Ngram.ipynb
│       └── Proxy_Fluency_Lexical_Idea.ipynb
├── data/
│   ├── README.md
│   ├── human_scores.csv
│   └── model_generated_scores.csv
├── requirements.txt
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

The research notebooks and CSV exports are copied from the original project repository. They are preserved as research artifacts; some notebook cells contain experiment-specific paths or intermediate analysis code and may require local path updates before execution.

## Environment

A convenient starting environment is:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

The LLM-as-judge notebook expects an OpenAI-compatible API endpoint and an API key supplied by the user. **Do not commit API keys to the repository.**

## Data

The two CSV files under [`data/`](./data/) contain the released human- and model-generated evaluation exports used by the project. See [`data/README.md`](./data/README.md) for details.

## Project website

The repository contains a responsive, static project page designed for GitHub Pages. Once Pages is enabled for the repository, the expected URL is:

**https://smrmodares.github.io/CLiN/**

The site includes scholarly metadata, structured data, a concise description of the method and results, links to code/data, and search-engine-friendly content for academic discovery.

## Citation

The archival citation will be added once final publication metadata is available. Until then, please cite the project by its title:

> **CLiN: an Objective Framework for Evaluating Creativity in Short Persian Literary Texts**

## Acknowledgment

This repository consolidates the code and data released in the original CLiN project repository and provides a cleaned public-facing structure and project website for reproducibility and dissemination.
