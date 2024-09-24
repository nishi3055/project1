<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TweetController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ChatController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/calendar', function () {
    return view('calendar');
})->middleware(['auth', 'verified'])->name('calendar');

Route::get('/information', function () {
    return view('information');
})->middleware(['auth', 'verified'])->name('information');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('tweets', TweetController::class);

// イベント登録処理
Route::post('/schedule-add', [ScheduleController::class, 'scheduleAdd'])->name('schedule-add');
// イベント取得処理
Route::post('/schedule-get', [ScheduleController::class, 'scheduleGet'])->name('schedule-get');
Route::post('/schedule-update', [ScheduleController::class, 'update']);
Route::post('/schedule-delete', [ScheduleController::class, 'delete']);

Route::get('/events', [EventController::class, 'index'])->name('events.index'); // イベント一覧表示
Route::post('/events', [EventController::class, 'store']);
Route::get('/events/{event}', [EventController::class, 'show'])->name('events.show'); // イベント詳細とチャット
Route::post('/chat/send/{event}', [ChatController::class, 'send'])->name('chat.send'); // チャットメッセージ送信
Route::get('/chat/messages/{event}', [ChatController::class, 'fetchMessages'])->name('chat.messages'); // チャットメッセージ取得
Route::put('/events/{event}', [EventController::class, 'update']);
Route::delete('/events/{event}', [EventController::class, 'destroy']);


});
require __DIR__.'/auth.php';
