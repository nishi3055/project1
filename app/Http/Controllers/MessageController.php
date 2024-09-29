<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function showChat(Event $event)
    {
        // イベントに関連するメッセージを取得
        $messages = $event->messages()->with('user')->latest()->get();
        return view('chat', compact('event', 'messages'));
    }

    public function index(Event $event)
    {
        $messages = $event->messages()->with('user')->latest()->get();
        return response()->json($messages);
    }

    public function store(Request $request, Event $event)
    {
        $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        $message = $event->messages()->create([
            'user_id' => auth()->id(),
            'content' => $request->content,
        ]);

        return response()->json($message->load('user'), 201);
    }
    
}