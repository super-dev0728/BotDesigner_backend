<?php
namespace App\Clauses;
class BaseClause
{
    public function isInductionClause(): bool
    {
        return false;
    }
}