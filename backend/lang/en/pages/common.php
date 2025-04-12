<?php

$currentDate = date("Y");
return [
    "me" => [
        "name" => "Mason Root",
        "line" => "I shed light on new ideas and opportunities, illuminating the path forward.",
        "line2" => "Turning ideas into digital reality through code and creativity."
    ],
    "header" => [
        "mr" => "MR",
        "nav" => [
            "about" => "About",
            "projects" => "Projects",
            "services" => "Services",
            "contact" => "Contact",
            "register" => "Register",
        ],
    ],

    "contactform" => [
        "h2" => "Let's Work Together",
        "status" => [
            "success" => "I look forward to working with you! Please allow up to 3 days for a response!",
            "error" => "Something went extremely wrong. Please contact me directly at contact@masonroot.dev for inquiries."
        ]
    ],
    "footer" => [
        "titles" => [
            "quick" => "Quick Links",
            "contact" => "Contact",
            "connect" => "Let's Connect!"
        ],
        "links" => [
            "about" => "About",
            "projects" => "Projects",
            "services" => "Services",
            "contact" => "Contact",
            "email" => "contact@masonroot.dev",
            "location" => "San Francisco, CA"
        ],
        "connect" => [
            "github" => "https://github.com/Verdanix",
            "linkedin" => "https://linkedin.com/in/mason-root",
            "instagram" => "https://instagram.com/masonroot.dev"
        ],
        "images" => [
            "mail" => "an envelope icon",
            "location" => "a location indicator",
            "github" => "the github logo",
            "linkedin" => "the linkedin logo",
            "instagram" => "the instagram logo"
        ],
        "rights" => $currentDate . " Mason Root. All rights reserved."
    ],

    // Words
    "name" => "Name",
    "email" => "Email",
    "password" => "Password",
    "rememberme" => "Remember me",
    "resetpass" => "Reset Password",
    "forgotpass" => "Forgot Password?",
    "password_confirmation" => "Confirm Password",
    "subject" => "Subject",
    "message" => "Message",
    "send_message" => "Send Message",
];
