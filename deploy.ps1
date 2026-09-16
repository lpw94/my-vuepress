$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$dist = Join-Path $root 'docs\.vuepress\dist'
$repo = 'git@github.com:lpw94/lpw94.github.io.git'

Set-Location $root
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Set-Location $dist
if (-not (Test-Path '.git')) { git init | Out-Null }
git add -A
git commit -m ("deploy " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')) --allow-empty
git push -f $repo HEAD:master

Set-Location $root
if ($LASTEXITCODE -eq 0) { Write-Host 'Deploy finished.' -ForegroundColor Green }
exit $LASTEXITCODE
