<?php

namespace App\Filament\Resources\OfficialDutyResource\Pages;

use App\Filament\Resources\OfficialDutyResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditOfficialDuty extends EditRecord
{
    protected static string $resource = OfficialDutyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
