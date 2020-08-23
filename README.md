# vue-inline-data - experimental

#### Demo: https://kabbouchi.github.io/vue-inline-data/

![Screenshopt](https://kabbouchi.github.io/vue-inline-data/screenshot.png)

## Install

```html
<script src="https://unpkg.com/vue@2.6" defer></script>
<script src="https://unpkg.com/vue-inline-data" defer></script>
```

## Usage

#### Simple

```html
<div vi-data="{ open: false }">
  <button @click="open = true">Open Dropdown</button>

  <ul v-show="open" @click="open = false">
    Dropdown Body
  </ul>
</div>
```

#### Nested - Components

```html
<div vi-data>
  <div vi-data="{ message : 'my-message'}">{{ message }}</div>
  <div vi-data="{ count : 10}" vi-name="ComponentNameCounter">{{ count }}</div>
</div>
```

#### Component Props

```html
<div vi-data="{ count : 10}">
  <div vi-data vi-props="['value']" :value="count">
    {{ value }}
  </div>
</div>
```
