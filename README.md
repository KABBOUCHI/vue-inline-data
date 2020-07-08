# vue-inline-data

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

#### Nested

```html
<div v-data="{}">
  <div v-data-child="{ message : 'my-message'}">{{ message }}</div>
  <div v-data-child="{ count : 10}">{{ count }}</div>
  <div v-data-child="{ count : 100}">{{ count }}</div>
</div>
```
