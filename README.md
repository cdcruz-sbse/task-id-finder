# Task ID Finder

A Staffbase custom widget that lets an admin **browse and search tasks** across the
installations/lists they can see, and **copy a task's `installationId/taskId`** with one
click — ready to paste into the **[Task Selector widget](https://github.com/cdcruz-sbse/task-selector-widget)**
config in the Staffbase News editor.

It's a **duplicate of `my-tasks-widget`** (from `eirastaffbase/widgets`) with two additions:
1. a **keyword search** box over the task list, and
2. a **copy icon on each task** that copies the composite `installationId/taskId`.

Everything else (installation/list/task browsing, theming, i18n, store tabs) comes from
the original widget — which already loads all installations/lists/tasks (`showalltasks`)
and already contains a clipboard helper, so the additions are small.

## Why this exists (the workflow)

The Task Selector widget renders a checklist from a config field of task IDs, but the
Studio config form can't host a live picker. Rather than a separate companion page, the
admin uses **this widget inside Staffbase** to find a task and copy its ID, then pastes it
into the Selector's config. Keeps everything in-platform.

```
Task ID Finder  →  copy "installationId/taskId"  →  paste into Task Selector config  →  publish
```

## Status

| Item | State |
|---|---|
| Duplicate real source (renamed, imports fixed) | ✅ Done |
| Search box + per-task copy icon | ⏳ In progress |
| Build (`npm install && npm run build`) | ⏳ Needs Node 20+ |
| Deploy (host `dist/task-id-finder.js`) | ⏳ |

## Build (once Node 20+ is available)

```bash
npm install
npm run build   # → dist/task-id-finder.js
```

## Layout

```
task-id-finder.ts     # widget source (duplicated from my-tasks-widget.ts)
strings.ts            # i18n strings
shared/               # i18n.ts, theming.ts, linkify.ts (from the tasks monorepo)
resources/            # icon
webpack.config.js, tsconfig.json, package.json
```

## Provenance

Duplicated from `eirastaffbase/widgets` → `tasks/my-tasks-widget` (Apache-2.0).
