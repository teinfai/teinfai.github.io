#!/usr/bin/env bash
set -euo pipefail
curl -fsSL https://raw.githubusercontent.com/teinfai/Universal-server-manager/main/install.sh | bash -s -- "$@"
