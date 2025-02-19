<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AttendanceSummaryResource\Pages;
use App\Filament\Resources\AttendanceSummaryResource\RelationManagers;
use App\Models\AttendanceSummary;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AttendanceSummaryResource extends Resource
{
    protected static ?string $model = AttendanceSummary::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('user_id')
                    ->required(),
                Forms\Components\DatePicker::make('attendance_date')
                    ->required(),
                Forms\Components\DateTimePicker::make('first_check_in'),
                Forms\Components\DateTimePicker::make('last_check_out'),
                Forms\Components\TextInput::make('total_break_duration')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('work_duration')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('duty_duration')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('status')
                    ->required(),
                Forms\Components\Textarea::make('notes')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('ID')
                    ->searchable(),
                Tables\Columns\TextColumn::make('user_id')
                    ->searchable(),
                Tables\Columns\TextColumn::make('attendance_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('first_check_in')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('last_check_out')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_break_duration')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('work_duration')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('duty_duration')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->searchable(),
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
            'index' => Pages\ListAttendanceSummaries::route('/'),
            'create' => Pages\CreateAttendanceSummary::route('/create'),
            'edit' => Pages\EditAttendanceSummary::route('/{record}/edit'),
        ];
    }
}
