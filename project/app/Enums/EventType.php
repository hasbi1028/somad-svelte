<?php

namespace App\Enums;

use Spatie\Enum\Laravel\Enum;

/**
 * @method static self check_in()
 * @method static self check_out()
 * @method static self break_in()
 * @method static self break_out()
 * @method static self duty_start()
 * @method static self duty_end()
 */
class EventType extends Enum {}