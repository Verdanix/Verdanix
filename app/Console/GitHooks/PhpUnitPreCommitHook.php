<?php

namespace App\Console\GitHooks;

use Closure;
use Igorsgm\GitHooks\Contracts\PreCommitHook;
use Igorsgm\GitHooks\Exceptions\HookFailException;
use Igorsgm\GitHooks\Git\ChangedFiles;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class PhpUnitPreCommitHook implements PreCommitHook
{
    /**
     * Get the name of the hook.
     */
    public function getName(): ?string
    {
        return 'PhpUnit';
    }

    /**
     * Execute the Hook.
     *
     * @param  ChangedFiles  $files  The list of changed files to analyze.
     * @param  Closure  $next  The next hook in the chain to execute.
     * @return mixed|null
     */
    public function handle(ChangedFiles $files, Closure $next): mixed
    {
        $exitCode = Artisan::call('test');
        if ($exitCode !== 0) {
            return throw new HookFailException(Artisan::output());
        }

        return $next($files);
    }

    public function setCommand(Command $command): void
    {
        // TODO: Implement setCommand() method.
    }
}
