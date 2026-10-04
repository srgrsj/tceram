# Фотографии продукции

Источник: архив «фото изделий.zip», присланный пользователем. В карусели используются 23 разных снимка; повторные ракурсы и изображения таблиц исключены. Оригиналы сохранены в исходном архиве. Подписи описывают видимые формы; фотографии в блоке сфер применения иллюстрируют ассортимент и не подтверждают конкретный отраслевой проект.

Размещение:
- `public/products/ceramic-assortment-cutout.png` — прозрачный акцент на главном экране, обработан встроенным image_gen из Nanokeramika-2.jpg.
- `public/products/photo-104.webp` — детали на чертежах в блоке полного цикла, исходник 2025-06-06 11-36-36.JPG.
- `app/lib/productPhotos.ts` — 23 снимка карусели, сгруппированные по форме изделий.
- `public/products/photo-*.webp` — фотографии до 1600 × 1200 и миниатюры; содержимое оригинальных снимков не ретушировалось.

## Первый промпт

Use case: background-extraction. Asset type: transparent PNG foreground product cutout for Nanoceramics technical ceramics website. Edit target: supplied photo Nanokeramika-2.jpg. Remove ONLY the blue-gray tabletop/background and its cast shadows. Preserve the exact photographed group of 12 ceramic products, every object's geometry, proportions, placement, orientation, texture, true white and terracotta colors, holes, grooves and cutouts. The group has six white ring/bushing parts, two terracotta circular parts, two terracotta rectangular plates and two terracotta saddle-shaped parts. Keep all photographed objects unchanged, do not beautify or reinterpret their shapes. Background and the space inside through holes must be genuinely transparent alpha. Crop the canvas close around the entire group with a modest 8% transparent margin, no part cut off. Photographic detail, crisp clean antialiased edges. No new objects, no text, no logos, no backdrop, no floor, no fake checkerboard, no opaque shadow.

## Уточнение прозрачного фона

Use case: background-extraction. Image 1 is the edit target, a generated ceramic product cutout. Image 2 is the original photograph, a fidelity reference only. The edit target still contains an unwanted blurry colored halo/glow around every product. Remove the halo completely. The output must contain ONLY clean product pixels with antialiased edges on truly transparent alpha. All empty space between products and through the ring holes must be completely transparent (alpha=0), not blurred, not colored, not cloudy. Product interiors should be fully opaque. Preserve the original photograph's precise geometry, grooves, holes and arrangement of all twelve ceramic parts. Do not thicken rings, do not smooth geometry. No cast shadows, no backdrop, no glow, no vignette, no floor, no text. Keep products and framing otherwise unchanged.
