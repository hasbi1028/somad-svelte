<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GuestEventResource\Pages;
use App\Filament\Resources\GuestEventResource\RelationManagers;
use App\Models\GuestEvent;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GuestEventResource extends Resource
{
    protected static ?string $model = GuestEvent::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('guest_id')
                    ->required(),
                Forms\Components\TextInput::make('event_type')
                    ->required(),
                Forms\Components\DateTimePicker::make('event_time')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('ID')
                    ->searchable(),
                Tables\Columns\TextColumn::make('guest_id')
                    ->searchable(),
                Tables\Columns\TextColumn::make('event_type')
                    ->searchable(),
                Tables\Columns\TextColumn::make('event_time')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGuestEvents::route('/'),
            'create' => Pages\CreateGuestEvent::route('/create'),
            'edit' => Pages\EditGuestEvent::route('/{record}/edit'),
        ];
    }
}
