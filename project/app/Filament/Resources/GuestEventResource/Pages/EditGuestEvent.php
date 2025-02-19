<?php

namespace App\Filament\Resources\GuestEventResource\Pages;

use App\Filament\Resources\GuestEventResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGuestEvent extends EditRecord
{
    protected static string $resource = GuestEventResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
