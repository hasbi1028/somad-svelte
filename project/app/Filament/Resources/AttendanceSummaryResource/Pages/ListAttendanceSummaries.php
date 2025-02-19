<?php

namespace App\Filament\Resources\AttendanceSummaryResource\Pages;

use App\Filament\Resources\AttendanceSummaryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAttendanceSummaries extends ListRecords
{
    protected static string $resource = AttendanceSummaryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
