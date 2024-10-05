<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Carbon\Carbon;

class EventController extends Controller
{
   public function index(Request $request)
{
    $start = Carbon::createFromTimestamp($request->input('start'));
    $end = Carbon::createFromTimestamp($request->input('end'));

    $events = Event::where(function($query) use ($start, $end) {
        $query->whereBetween('start_date', [$start, $end])
              ->orWhereBetween('end_date', [$start, $end])
              ->orWhere(function($q) use ($start, $end) {
                  $q->where('start_date', '<', $start)
                    ->where('end_date', '>', $end);
              });
    })->get();

    return response()->json($events->map(function ($event) {
        return [
            'id' => $event->id,
            'title' => $event->title,
            'start' => $event->start_date,
            'end' => $event->end_date,
            'extendedProps' => [
                'detail' => $event->detail
            ]
        ];
    }));
}

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'detail' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $event = Event::create($validatedData);

        return response()->json($event->getEventDetails());
    }

    public function update(Request $request, Event $event)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'detail' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $event->updateEvent($validatedData);

        return response()->json($event->getEventDetails());
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json(['message' => 'Event deleted successfully']);
    }
    public function show(Event $event)
    {
    return view('events.chat', compact('event'));
    }
}