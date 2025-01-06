<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO -->
    <!-- Base -->
    <title>{{ $page['props']['meta_title'] ?? 'Default Title' }}</title>
    <meta name="description" content="{{ $page['props']['meta_description'] ?? 'Default Description' }}">
    <meta name="keywords" content="{{ $page['props']['meta_keywords'] ?? 'Default Keywords' }}">
    <meta name="author" content="{{ $page['props']['meta_author'] ?? 'Mason Root' }}">

    <!-- Open Graph -->
    <meta name="og:title" content="{{ $page['props']['meta_title'] ?? 'Default Title' }}">
    <meta name="og:url" content="https://masonroot.dev/">
    <meta name="og:description" content="{{ $page['props']['meta_description'] ?? 'Default Description' }}">

    <!-- Twitter -->
    <meta name="twitter:card"
          content="{{ $page['props']['meta_twitter_card'] ?? $page['props']['meta_description'] ?? 'Default Description' }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>
<body>
@inertia
<noscript>
    <h1>Please enable javascript to view this web page.</h1>
</noscript>
</body>
</html>
