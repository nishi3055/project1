<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TweetController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\EventChatController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::get('/calendar', function () {
        return view('calendar');
    })->name('calendar');

    Route::get('/information', function () {
        return view('information');
    })->name('information');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('tweets', TweetController::class);

    // スケジュール登録関連
    Route::post('/schedule-add', [ScheduleController::class, 'scheduleAdd'])->name('schedule-add');
    Route::post('/schedule-get', [ScheduleController::class, 'scheduleGet'])->name('schedule-get');
    Route::post('/schedule-update', [ScheduleController::class, 'update'])->name('schedule-update');
    Route::post('/schedule-delete', [ScheduleController::class, 'delete'])->name('schedule-delete');

    // イベント関連
    Route::get('/events/{event}', [EventController::class, 'show'])->name('events.show');
    
    // チャット関連
    Route::get('/events/{event}/chat', [EventChatController::class, 'show'])->name('events.chat');
    Route::get('/events/{event}/messages', [MessageController::class, 'index'])->name('events.messages.index');
    Route::post('/events/{event}/messages', [MessageController::class, 'store'])->name('events.messages.store');
});

require __DIR__.'/auth.php';