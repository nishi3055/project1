<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FullCalendar in Laravel</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='{{ asset('css/app.css') }}' rel='stylesheet' />
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
        }
        #calendar-container {
            width: 80%;
            margin: 20px auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        #calendar {
            margin-top: 20px;
        }
        #eventModal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            width: 300px;
        }
        #eventModal input, #eventModal textarea {
            width: 100%;
            margin-bottom: 15px;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        #eventModal button {
            padding: 8px 15px;
            margin-right: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        #save-event {
            background-color: #4CAF50;
            color: white;
        }
        #delete-event {
            background-color: #f44336;
            color: white;
        }
        #cancel-event {
            background-color: #9e9e9e;
            color: white;
        }
    </style>
</head>
<body>
    <x-app-layout>
        <div id="calendar-container">
            <h1 class="text-2xl font-bold mb-4">イベントカレンダー</h1>
            <div id='calendar'></div>
        </div>

        <!-- モーダルウィンドウ -->
        <div id="eventModal">
            <h3 id="modalTitle" class="text-xl font-bold mb-4">イベントを追加/編集</h3>
            <input type="hidden" id="event-id">
            <label for="event-name">イベント名:</label>
            <input type="text" id="event-name" name="event-name" required>
            <label for="event-start">開始日時:</label>
            <input type="datetime-local" id="event-start" name="event-start" required>
            <label for="event-end">終了日時:</label>
            <input type="datetime-local" id="event-end" name="event-end" required>
            <label for="event-detail">詳細:</label>
            <textarea id="event-detail" name="event-detail" rows="3"></textarea>
            <button id="save-event">保存</button>
            <button id="delete-event">削除</button>
            <button id="cancel-event">キャンセル</button>
        </div>
    </x-app-layout>
</body>
</html>