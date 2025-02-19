<?php

namespace App\Filament\Resources\GuessBookResource\Pages;

use App\Filament\Resources\GuessBookResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListGuessBooks extends ListRecords
{
    protected static string $resource = GuessBookResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
