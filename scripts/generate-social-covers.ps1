Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$logoPath = 'D:\Imagens\ChatGPT Image 26 de jul. de 2026, 23_03_13.png'

if (-not (Test-Path -LiteralPath $logoPath)) {
  $logoPath = Join-Path $projectRoot 'public\favicon.png'
}

function New-RoundedPath {
  param(
    [System.Drawing.RectangleF]$Rectangle,
    [float]$Radius
  )

  $diameter = $Radius * 2
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddArc($Rectangle.X, $Rectangle.Y, $diameter, $diameter, 180, 90)
  $path.AddArc($Rectangle.Right - $diameter, $Rectangle.Y, $diameter, $diameter, 270, 90)
  $path.AddArc($Rectangle.Right - $diameter, $Rectangle.Bottom - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($Rectangle.X, $Rectangle.Bottom - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-SocialCover {
  param(
    [string]$OutputPath,
    [string]$Role,
    [string]$Headline,
    [string]$Description
  )

  $bitmap = New-Object System.Drawing.Bitmap 1200, 630
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  try {
    $canvas = New-Object System.Drawing.Rectangle 0, 0, 1200, 630
    $background = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
      $canvas,
      [System.Drawing.ColorTranslator]::FromHtml('#050509'),
      [System.Drawing.ColorTranslator]::FromHtml('#101329'),
      18
    )
    $graphics.FillRectangle($background, $canvas)
    $background.Dispose()

    $blueGlow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(42, 0, 102, 255))
    $violetGlow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(36, 139, 40, 255))
    $graphics.FillEllipse($blueGlow, -130, -190, 650, 650)
    $graphics.FillEllipse($violetGlow, 795, 285, 600, 600)
    $blueGlow.Dispose()
    $violetGlow.Dispose()

    $gridPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(13, 170, 194, 255)), 1
    for ($x = 20; $x -lt 1200; $x += 54) { $graphics.DrawLine($gridPen, $x, 0, $x, 630) }
    for ($y = 18; $y -lt 630; $y += 54) { $graphics.DrawLine($gridPen, 0, $y, 1200, $y) }
    $gridPen.Dispose()

    $panelRect = New-Object System.Drawing.RectangleF 42, 42, 1116, 546
    $panelPath = New-RoundedPath -Rectangle $panelRect -Radius 34
    $panelBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(224, 8, 10, 22))
    $panelPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(62, 129, 166, 255)), 2
    $graphics.FillPath($panelBrush, $panelPath)
    $graphics.DrawPath($panelPen, $panelPath)
    $panelBrush.Dispose()
    $panelPen.Dispose()
    $panelPath.Dispose()

    $displayFont = New-Object System.Drawing.Font 'Segoe UI', 50, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
    $roleFont = New-Object System.Drawing.Font 'Segoe UI', 22, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
    $bodyFont = New-Object System.Drawing.Font 'Segoe UI', 25, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)
    $brandFont = New-Object System.Drawing.Font 'Segoe UI', 20, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
    $siteFont = New-Object System.Drawing.Font 'Segoe UI', 23, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)

    $accentBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#8fb8ff'))
    $whiteBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#f8fafc'))
    $mutedBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#b7bfd2'))
    $quietBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#8290ad'))

    $graphics.DrawString('MARCELO HENRIQUE', $brandFont, $accentBrush, 92, 91)
    $graphics.DrawString($Role.ToUpperInvariant(), $roleFont, $quietBrush, 92, 137)
    $headlineRect = New-Object System.Drawing.RectangleF 92, 198, 620, 130
    $graphics.DrawString($Headline, $displayFont, $whiteBrush, $headlineRect)

    $descriptionRect = New-Object System.Drawing.RectangleF 94, 346, 585, 92
    $graphics.DrawString($Description, $bodyFont, $mutedBrush, $descriptionRect)

    $siteRect = New-Object System.Drawing.RectangleF 92, 465, 300, 64
    $sitePath = New-RoundedPath -Rectangle $siteRect -Radius 18
    $siteBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
      $siteRect,
      [System.Drawing.ColorTranslator]::FromHtml('#0b63f6'),
      [System.Drawing.ColorTranslator]::FromHtml('#8424e8'),
      0
    )
    $graphics.FillPath($siteBrush, $sitePath)
    $graphics.DrawString('marcelodev.online', $siteFont, $whiteBrush, 118, 482)
    $siteBrush.Dispose()
    $sitePath.Dispose()

    $ringBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
      (New-Object System.Drawing.Rectangle 744, 114, 354, 354),
      [System.Drawing.ColorTranslator]::FromHtml('#0a68ff'),
      [System.Drawing.ColorTranslator]::FromHtml('#a522ee'),
      35
    )
    $graphics.FillEllipse($ringBrush, 738, 108, 366, 366)
    $ringBrush.Dispose()

    $logo = [System.Drawing.Image]::FromFile($logoPath)
    try {
      $logoState = $graphics.Save()
      $logoClip = New-Object System.Drawing.Drawing2D.GraphicsPath
      $logoClip.AddEllipse(748, 118, 346, 346)
      $graphics.SetClip($logoClip)
      $graphics.DrawImage($logo, 748, 118, 346, 346)
      $graphics.Restore($logoState)
      $logoClip.Dispose()
    }
    finally {
      $logo.Dispose()
    }

    $graphics.DrawString('</>', $brandFont, $accentBrush, 1007, 495)
    $graphics.DrawString('UI/UX + CODE', $brandFont, $quietBrush, 814, 505)

    $accentBrush.Dispose()
    $whiteBrush.Dispose()
    $mutedBrush.Dispose()
    $quietBrush.Dispose()
    $displayFont.Dispose()
    $roleFont.Dispose()
    $bodyFont.Dispose()
    $brandFont.Dispose()
    $siteFont.Dispose()

    $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  }
  finally {
    $graphics.Dispose()
    $bitmap.Dispose()
  }
}

New-SocialCover `
  -OutputPath (Join-Path $projectRoot 'public\og-cover.png') `
  -Role 'Desenvolvedor Full Stack' `
  -Headline "Ideias que viram`nprodutos digitais." `
  -Description 'Sites, landing pages e sistemas web sob medida com design, tecnologia e propósito.'

New-SocialCover `
  -OutputPath (Join-Path $projectRoot 'public\og-cover-en.png') `
  -Role 'Full Stack Developer' `
  -Headline "Ideas turned into`ndigital products." `
  -Description 'Websites, landing pages and custom web apps built with design, technology and purpose.'
