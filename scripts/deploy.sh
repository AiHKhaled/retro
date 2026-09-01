#!/usr/bin/env bash
set -euo pipefail

project_dir="$(CDPATH= cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
target_dir="/var/www/portfolio"

if [[ ! -d "$target_dir" ]]; then
  printf 'Deployment target does not exist: %s\n' "$target_dir" >&2
  exit 1
fi

rsync -a --delete \
  --exclude '.git' \
  --exclude '.vscode' \
  "$project_dir/" "$target_dir/"

printf 'Deployed %s to %s\n' "$project_dir" "$target_dir"
