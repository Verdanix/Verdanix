<?php

return [
    "register" => [
        "h2" => "Create New Account",
        "fields" => [
            "first" => [
                "label" => "First Name",
                "placeholder" => "First name"
            ],
            "last" => [
                "label" => "Last Name",
                "placeholder" => "Last name"
            ],
            "email" => [
                "label" => "Email",
                "placeholder" => "Enter your email"
            ],
            "password" => [
                "label" => "Password",
                "placeholder" => "Create a password"
            ],
            "confirm" => [
                "label" => "Confirm Password",
                "placeholder" => "Confirm your password"
            ]
        ],
        "submit" => "Create Account"
    ],
    "login" => [
        "h2" => "Login to Your Account",
        "fields" => [
            "google" => [
                "label" => "Continue with Google",
                "icon" => "/images/register/google.svg",
                "alt" => "the google logo"
            ],
            "linkedin-openid" => [
                "label" => "Continue with LinkedIn",
                "icon" => "/images/register/linkedin.svg",
                "alt" => "the linkedin logo"
            ],
            "github" => [
                "label" => "Continue with GitHub",
                "icon" => "/images/register/github.svg",
                "alt" => "the github logo"
            ],
            "email" => [
                "label" => "Email",
                "placeholder" => "Enter your email"
            ],
            "password" => [
                "label" => "Password",
                "placeholder" => "Enter your password"
            ],
            "remember" => [
                "label" => "Remember me"
            ],
            "forgot" => [
                "label" => "Forgot password?"
            ]
        ],
        "submit" => "Login"
    ],
    "unverified" => "Please verify your email before you login!"
];
