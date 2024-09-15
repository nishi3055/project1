<div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
    <div class="shrink-0 flex items-center">
        <a href="{{ route('dashboard') }}">
        <x-home-logo class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
        <p>home</p>
        </a>
    </div>
    <div class="shrink-0 flex items-center">
        <a href="{{ route('calendar') }}">
        <x-calendar-logo class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
        <p>calendar</p>
        </a>
    </div>
        <div class="shrink-0 flex items-center">
        <a href="{{ route('tweets.index') }}">
        <x-chat-logo class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
        <p>chat</p>
        </a>
    </div>
    <div class="shrink-0 flex items-center">
        <a href="{{ route('tweets.create') }}">
        <x-journal-logo class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
        <p>journal</p>
        </a>
    </div>
    <div class="shrink-0 flex items-center">
        <a href="{{ route('tweets.create') }}">
        <x-menu-logo class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
        <p>menu</p>
        </a>
    </div>
</div>