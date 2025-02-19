<?php

namespace App\Filament\Resources\ParentStudentResource\Pages;

use App\Filament\Resources\ParentStudentResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditParentStudent extends EditRecord
{
    protected static string $resource = ParentStudentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
