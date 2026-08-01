# Install notes

Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
Installed from: `.claude/skills/ui-ux-pro-max/` in that repository (main branch).

Installed as a **project skill**, so it is available to any Claude Code session
working in this repository.

## Local modification

The upstream `SKILL.md` invokes the search script via
`${CLAUDE_PLUGIN_ROOT}/.claude/skills/ui-ux-pro-max/scripts/search.py`, which is
only set when the skill is loaded as a plugin. Those paths were rewritten to the
repo-relative `.claude/skills/ui-ux-pro-max/scripts/search.py` so the script
resolves when the skill is used as a project skill. No other changes were made.

## Requirements

Python 3.x, no external dependencies.

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system
```
