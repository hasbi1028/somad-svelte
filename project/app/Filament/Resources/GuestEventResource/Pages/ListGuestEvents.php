<?php

namespace App\Filament\Resources\GuestEventResource\Pages;

use App\Filament\Resources\GuestEventResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListGuestEvents extends ListRecords
{
    protected static string $resource = GuestEventResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
