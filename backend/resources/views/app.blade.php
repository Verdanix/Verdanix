<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO -->
    <meta name="google-site-verification" content="{{ config('app.google_verification') }}">
    <meta name="msvalidate.01" content="{{ config('app.bing_verification') }}" />

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

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Mason Root" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>
<body>
<noscript>
    <h1 style="text-align: center">Please enable javascript to view this web page.</h1>
</noscript>
@inertia
</body>
</html>
