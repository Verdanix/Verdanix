<?php

return [
    '400' => [
        'seo' => [
            'meta_title' => '400 - Malformed Request',
            'meta_description' => 'The system could not parse the incoming request packet. Malformed syntax or corrupted telemetry detected.',
            'meta_keywords' => '400 error, bad request, malformed syntax, protocol error, invalid packet',
        ],
        'page' => [
            'title' => 'MALFORMED_REQUEST',
            'status_code' => 400,
            'description' => 'The server cannot process the request due to a perceived client anomaly. The incoming packet syntax is malformed or the request routing is corrupted.',
            'show_route' => false,
            'brain_fuck' => '-[------->+<]>.+[--->+<]>.++++++++.[->+++<]>-.+++++++++++.---.-----.-[--->+<]>-.---[->++++<]>-.++++++.+[->+++<]>.++++++.+[->+++<]>++.+[--->+<]>++.[---->+<]>++.+[->+++<]>+.+.[--->+<]>---.+++[->+++<]>.--.-[--->+<]>--.+++[->+++<]>.-.[->+++<]>++.',
            'bf_output' => 'Invalid syntax detected.',
        ],
    ],
    '401' => [
        'seo' => [
            'meta_title' => '401 - Unauthorized Access',
            'meta_description' => 'Authentication handshake required. Please provide valid credentials to access this secure terminal.',
            'meta_keywords' => '401 error, unauthorized, login required, auth handshake, secure terminal',
        ],
        'page' => [
            'title' => 'UNAUTHORIZED_ACCESS',
            'status_code' => 401,
            'description' => 'The requested resource requires an active authentication handshake. Your current session lacks the necessary security tokens for this directory.',
            'show_route' => true,
            'brain_fuck' => '+[--->++<]>+.+++[->++++<]>.+++++++.[--->+<]>-----.++[->+++<]>+.++++++++.----------.[--->+<]>----.+[---->+<]>+++.---[->++++<]>.------------.---.+++++++++++++.-------------.>----[---->+<]>.',
            'bf_output' => 'Who goes there?',
        ],
    ],
    '403' => [
        'seo' => [
            'meta_title' => '403 - Access Forbidden',
            'meta_description' => 'Access denied. Your security clearance is insufficient for this restricted mainframe sector.',
            'meta_keywords' => '403 error, forbidden, access denied, restricted sector, security clearance',
        ],
        'page' => [
            'title' => 'FORBIDDEN_SECTOR',
            'status_code' => 403,
            'description' => 'Security protocols have blocked this transmission. Your digital signature does not possess the required clearance level to interface with this namespace.',
            'show_route' => true,
            'brain_fuck' => '----[---->+<]>++.+[-->+++<]>..++.[--->+<]>----..+[---->+<]>+++.-[--->++<]>-.++++++++++.+[---->+<]>+++.---[----->++<]>.-------------.[--->+<]>----.+.--.---------.------.-[--->+<]>--.+++[->+++<]>.-.[->+++<]>++.',
            'bf_output' => 'Access is restricted.',
        ],
    ],
    '404' => [
        'seo' => [
            'meta_title' => '404 - Route Not found',
            'meta_description' => 'The page you are looking for does not exist. Please check the URL or return to the homepage.',
            'meta_keywords' => '404 error, page not found, missing page, broken link, invalid URL, not found, error page, missing content, page unavailable, return to homepage',
        ],
        'page' => [
            'title' => 'ROUTE_NOT_FOUND',
            'status_code' => 404,
            'description' => 'The requested namespace could not be resolved. The route you attempted to access does not exist within the current deployment manifest.',
            'show_route' => true,
            'brain_fuck' => '>+++++++[<++++++++++++>-]<.>>++++++++[<+++++++++++++>-]<.>>++++++++++[<++++++++++>-]<+.>>++++++++[<++++++++++++++>-]<++.>>++++++++++[<++++++++++>-]<+.>>++++++[<++++++>-]<+++.>>++++++++[<++++++++++++++>-]<+++.>>++++[<++++++++>-]<.>>+++++++++++[<++++++++++>-]<.>>+++++++++++[<++++++++++>-]<+.>>++++++++[<++++++++++++++>-]<++++.>>++++++++[<+++++++++++++>-]<.>>+++++++[<+++++++++++++++>-]<.>>+++++++++++[<++++++++++>-]<.>>++++++++++[<++++++++++>-]<+++.>>++++[<++++++++>-]<.>>++++++++[<+++++++++++++>-]<.>>++++++++++[<++++++++++>-]<+.>>++++++++[<++++++++++++++>-]<++.>>++++++++++[<++++++++++>-]<+.>>+++[<+++++++++++>-]<.',
            'bf_output' => 'There\'s nothing here!',
        ],
    ],
    '429' => [
        'seo' => [
            'meta_title' => '429 - Traffic Overload',
            'meta_description' => 'Too many requests. Connection throttled to prevent mainframe instability.',
            'meta_keywords' => '429 error, too many requests, rate limit, throttled, system stability',
        ],
        'page' => [
            'title' => 'TRAFFIC_OVERLOAD',
            'status_code' => 429,
            'description' => 'The mainframe has detected an abnormal request frequency. Your connection has been temporarily throttled to preserve system integrity. Please throttle your transmission.',
            'show_route' => false,
            'brain_fuck' => '-[--->+<]>--.--[--->++++<]>.+++.++++++++.+[---->+<]>++.+[->+++<]>+.+++++++++++.++++++++.---------.[----->++<]>.------------.-[--->++<]>--.-------.++.++++++++.------.+++++++++++++.++[++>---<]>.',
            'bf_output' => 'Slow down, hacker.',
        ],
    ],
    '500' => [
        'seo' => [
            'meta_title' => '500 - Critical Core Failure',
            'meta_description' => 'Internal server error. A fatal exception has occurred in the backend processing unit.',
            'meta_keywords' => '500 error, internal server error, core failure, fatal exception, system crash',
        ],
        'page' => [
            'title' => 'CORE_EXCEPTION_ERROR',
            'status_code' => 500,
            'description' => 'A critical hardware or software exception has occurred. The backend core dump suggests a fatal logic failure during packet processing.',
            'show_route' => false,
            'brain_fuck' => '-[--->+<]>--.-[-->+++<]>--.------.+.+++[->+++<]>.++++++++.[->+++++<]>-.++[--->++<]>.+++.--------.++.------.[--->+<]>-.+[->+++<]>.++++++++++++.---..-----------.-[++>-----<]>.+++.++++[->+++<]>.[->+++<]>-.',
            'bf_output' => 'System logic collapse.',
        ],
    ],
    '503' => [
        'seo' => [
            'meta_title' => '503 - Site Offline',
            'meta_description' => 'Service unavailable. Mainframe is currently undergoing scheduled maintenance or resource reallocation.',
            'meta_keywords' => '503 error, service unavailable, maintenance mode, system offline, resource reallocation',
        ],
        'page' => [
            'title' => 'MAINTENANCE_IDLE',
            'status_code' => 503,
            'description' => 'The requested service is currently offline for critical optimization. The mainframe is undergoing scheduled maintenance and resource reallocation.',
            'show_route' => false,
            'brain_fuck' => '-[--->+<]>---.+[----->+++<]>.---.+++++++++++++..+++++.-----------.+++++.-------.-[--->+<]>--.---[->++++<]>.------------.---.--[--->+<]>-.--[->++++<]>-.--------.+++.------.--------.[->+++<]>++.',
            'bf_output' => 'Rebooting the world.',
        ],
    ],
];
