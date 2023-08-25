# Nova TimeLine

## Installation

Install the package in to a Laravel app that uses Nova via composer:

```
composer require sylapi/nova-timeline
```
## Usage

```
Timeline::make()->relationship('histories', 'morphToMany')
                ->comment('message_internal')
                ->color('Status.color')
                ->icon('Status.icon'),
```