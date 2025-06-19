<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{

    protected function stringIsNotTranslationKey($string): bool
    {
        return !preg_match('/^\w+\.[a-z0-9-_.]*\w+$/', $string);
    }
}
