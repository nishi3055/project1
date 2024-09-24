<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='{{ asset('css/app.css') }}' rel='stylesheet' />
    <title>イベント一覧</title>
</head>
<body>
    <h1>イベント一覧</h1>

    <ul>
        @foreach ($events as $event)
            <li>
                <a href="{{ route('events.show', $event->id) }}">
                    {{ $event->title }} - {{ $event->detail }}
                </a>
            </li>
        @endforeach
    </ul>

</body>
</html>
