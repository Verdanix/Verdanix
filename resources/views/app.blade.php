<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="referrer" content="strict-origin-when-cross-origin">

    <!-- Base -->
    <title>{{ trim($page['props']['meta_title'] ?? '') ?: 'Default Title' }}</title>
    <meta name="description" content="{{ trim($page['props']['meta_description'] ?? '') ?: 'Default Description' }}">
    <meta name="keywords" content="{{ trim($page['props']['meta_keywords'] ?? '') ?: 'Default Keywords' }}">
    <meta name="author" content="{{ trim($page['props']['meta_author'] ?? '') ?: 'Mason Root' }}">

    <!-- Open Graph -->
    <meta name="og:title" content="{{ trim($page['props']['meta_title'] ?? '') ?: 'Default Title' }}">
    <meta name="og:url" content="https://masonroot.dev/">
    <meta name="og:description" content="{{ trim($page['props']['meta_description'] ?? '') ?: 'Default Description' }}">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="<Mason Root>" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
<div id="root"></div>
@inertia
</body>
</html>
