<?php

namespace Tests\Unit\Pages;

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Pages\AboutPageController;
use App\Http\Controllers\Pages\HomePageController;
use App\Http\Controllers\Pages\GalleryController;
use App\Http\Controllers\Pages\ServicesPageController;
use Tests\TestCase;

class SeoTest extends TestCase
{
    private array $controllers = [
        HomePageController::class,
        AboutPageController::class,
        ServicesPageController::class,
        AuthenticatedSessionController::class,
        RegisteredUserController::class,
        NewPasswordController::class,
        PasswordResetLinkController::class,
        EmailVerificationPromptController::class,
        GalleryController::class,
    ];

    public function testTitle()
    {
        foreach ($this->controllers as $controller) {
            $props = $controller::getProps();
            $this->assertTrue($this->stringIsNotTranslationKey($props['meta_title']), "Title for {$controller} is a translation key.");
        }
    }

    public function testDescription()
    {
        foreach ($this->controllers as $controller) {
            $props = $controller::getProps();
            $this->assertTrue($this->stringIsNotTranslationKey($props['meta_description']), "Description for {$controller} is a translation key.");
        }
    }

    public function testKeywords()
    {
        foreach ($this->controllers as $controller) {
            $props = $controller::getProps();
            $this->assertTrue($this->stringIsNotTranslationKey($props['meta_keywords']), "Keywords for {$controller} is a translation key.");
        }
    }
}
