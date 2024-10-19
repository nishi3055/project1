<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use Carbon\Carbon;

class ScheduleController extends Controller
{
    /**
     * イベントを取得
     *
     * @param  Request  $request
     */
    public function scheduleGet(Request $request)
    {
        $request->validate([
            'start_date' => 'required|integer',
            'end_date' => 'required|integer'
        ]);

        $start = Carbon::createFromTimestampMs($request->input('start_date'));
        $end = Carbon::createFromTimestampMs($request->input('end_date'));

        $schedules = Schedule::query()
            ->where('end_date', '>=', $start)
            ->where('start_date', '<=', $end)
            ->get()
            ->map(function ($schedule) {
                return [
                    'id' => $schedule->id,
                    'title' => $schedule->event_name,
                    'start' => $schedule->start_date,
                    'end' => $schedule->end_date,
                    'extendedProps' => ['detail' => $schedule->event_detail]
                ];
            });

        return response()->json($schedules);
    }

    /**
     * イベントを登録
     *
     * @param  Request  $request
     */
    public function scheduleAdd(Request $request)
    {
        $validatedData = $request->validate([
            'event_name' => 'required|max:32',
            'event_detail' => 'nullable|string',
            'start_date' => 'required|integer',
            'end_date' => 'required|integer',
        ]);

        $schedule = new Schedule;
        $schedule->event_name = $validatedData['event_name'];
        $schedule->event_detail = $validatedData['event_detail'];
        $schedule->start_date = Carbon::createFromTimestampMs($validatedData['start_date'])->toDateTimeString();
        $schedule->end_date = Carbon::createFromTimestampMs($validatedData['end_date'])->toDateTimeString();
        $schedule->save();

        return response()->json([
            'id' => $schedule->id,
            'title' => $schedule->event_name,
            'start' => $schedule->start_date,
            'end' => $schedule->end_date,
            'extendedProps' => ['detail' => $schedule->event_detail]
        ]);
    }

    /**
     * イベントを更新
     *
     * @param  Request  $request
     */
    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required|integer',
            'event_name' => 'required|max:32',
            'event_detail' => 'nullable|string',
            'start_date' => 'required|integer',
            'end_date' => 'required|integer',
        ]);

        $schedule = Schedule::findOrFail($validatedData['id']);
        $schedule->event_name = $validatedData['event_name'];
        $schedule->event_detail = $validatedData['event_detail'];
        $schedule->start_date = Carbon::createFromTimestampMs($validatedData['start_date'], 'Asia/Tokyo')->toDateTimeString();
        $schedule->end_date = Carbon::createFromTimestampMs($validatedData['end_date'], 'Asia/Tokyo')->toDateTimeString();
        $schedule->save();

        return response()->json([
            'id' => $schedule->id,
            'title' => $schedule->event_name,
            'start' => $schedule->start_date,
            'end' => $schedule->end_date,
            'extendedProps' => ['detail' => $schedule->event_detail]
        ]);
    }

    /**
     * イベントを削除
     *
     * @param  Request  $request
     */
    public function delete(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
        ]);

        $schedule = Schedule::findOrFail($request->input('id'));
        $schedule->delete();

        return response()->json(['success' => true]);
    }
}