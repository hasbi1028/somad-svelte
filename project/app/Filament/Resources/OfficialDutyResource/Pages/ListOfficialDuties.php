<?php

namespace App\Filament\Resources\OfficialDutyResource\Pages;

use App\Filament\Resources\OfficialDutyResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListOfficialDuties extends ListRecords
{
    protected static string $resource = OfficialDutyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
