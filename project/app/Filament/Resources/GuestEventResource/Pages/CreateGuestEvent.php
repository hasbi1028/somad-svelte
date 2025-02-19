<?php

namespace App\Filament\Resources\GuestEventResource\Pages;

use App\Filament\Resources\GuestEventResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateGuestEvent extends CreateRecord
{
    protected static string $resource = GuestEventResource::class;
}
