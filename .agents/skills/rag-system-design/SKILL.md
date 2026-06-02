---
name: rag-system-design
description: Design or review retrieval-augmented generation systems, document assistants, agentic search, embedding pipelines, chunking, reranking, grounding, and RAG evaluation. Use when Codex is asked to plan, debug, or improve RAG or document intelligence workflows.
---

# RAG System Design

Design RAG systems from the user problem backward.

1. Define the user task, answer shape, latency target, privacy constraints, and success metric.
2. Map the corpus: source systems, document types, update cadence, permissions, metadata, and expected noise.
3. Choose ingestion and indexing: parsing, OCR if needed, chunking, metadata, embeddings, vector store, and refresh strategy.
4. Choose retrieval: query rewriting, filters, hybrid search, reranking, context packing, citations, and refusal behavior.
5. Define generation: prompt contract, tool use, grounding rules, uncertainty handling, and response format.
6. Define evaluation: golden questions, hard negatives, retrieval metrics, answer quality rubric, hallucination checks, and regression tests.
7. Define operations: logging, feedback, monitoring, data retention, access control, and rollback.

For reviews, return:

- `Architecture`: current or proposed flow.
- `Main risks`: ranked by product impact.
- `Evaluation gaps`: what must be measured before trust.
- `Recommended next step`: the smallest change that improves reliability.

Avoid optimizing model choice before the data, retrieval quality, and eval set are clear.
