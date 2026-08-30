# Code

This directory contains the released research notebooks for the CLiN project.

## Layout

- `llm-as-judge/LLMs_as_Judge.ipynb` — LLM-based scoring experiments using an OpenAI-compatible API.
- `proxies/Novelty_and_Quality.ipynb` — perplexity-based novelty, semantic diversity, and controlled quality experiments.
- `proxies/Proxy_Fluency_Lexical_Idea.ipynb` — lexical-idea proxy using ParsBERT contextual token representations and DBSCAN clustering.
- `proxies/Proxy_Elaboration_Ngram.ipynb` — lexical/unigram diversity proxy used for elaboration experiments.

## Notes on reproducibility

These notebooks are preserved from the original project repository as research artifacts. A few cells use experiment-specific local paths or placeholder file names (for example `file.csv`) and should be pointed to the CSV files under `../data/` before running.

The LLM-as-judge notebook requires an OpenAI-compatible endpoint and a user-provided API key. Never commit credentials to the repository.

Install the common dependencies from the repository root:

```bash
pip install -r requirements.txt
```

For the fluency proxy, the released notebook uses `HooshvareLab/bert-base-parsbert-uncased` with DBSCAN (`eps=0.4`, `min_samples=2`, cosine distance). The elaboration notebook uses Hazm normalization/stopword removal followed by unique content-token counting. The novelty notebook contains the original perplexity and semantic-diversity experiments.
