<?php

namespace Sylapi\Timeline;

use Laravel\Nova\ResourceTool;
use PhpOffice\PhpSpreadsheet\Calculation\Statistical\Distributions\F;

class Timeline extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Timeline';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'timeline';
    }

    public function relationship(string $relationship , string $relationshipType)
    {
        return $this->withMeta([
            'relationship' => $relationship,
            'relationshipType' => $relationshipType,
        ]);
    }


    public function comment(string $fieldName)
    {
        return $this->withMeta([
            'commentField' => $fieldName
        ]);
    }

    public function icon(string $fieldName)
    {
        return $this->withMeta([
            'iconField' => $fieldName
        ]);
    }

    public function color(string $fieldName)
    {
        return $this->withMeta([
            'colorField' => $fieldName
        ]);
    }
}
