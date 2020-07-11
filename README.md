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
<div v-data="{ open: false }">
  <button @click="open = true">Open Dropdown</button>

  <ul v-show="open" @click="open = false">
    Dropdown Body
  </ul>
</div>
```

#### Nested - Components

```html
<div v-data="{}">
  <div v-component="{ message : 'my-message'}">{{ message }}</div>
  <div v-component-data="{ message : 'my-message'}">{{ message }}</div>
  <div v-data-child="{ count : 10}">{{ count }}</div>
</div>
```

#### Component Props

```html
<div v-data="{ count : 10}">
  <div v-component v-props="['value']" :value="count">
    {{ value }}
  </div>
</div>
```
