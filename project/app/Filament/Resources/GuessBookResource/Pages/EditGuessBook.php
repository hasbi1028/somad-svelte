<?php

namespace App\Filament\Resources\GuessBookResource\Pages;

use App\Filament\Resources\GuessBookResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGuessBook extends EditRecord
{
    protected static string $resource = GuessBookResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
