/*=============================++++ HTML ++++=================================*/
<template>
    <div class="avatar-picker">
        <div class="avatar-picker__preview" @click="triggerFilePicker">
            <img v-if="previewUrl" :src="previewUrl" alt="Avatar choisi" />
            <span v-else class="mdi mdi-account-circle avatar-picker__placeholder"></span>
            <span class="avatar-picker__edit mdi mdi-camera-outline"></span>
        </div>
        <input
            ref="fileInput"
            type="file"
            accept="image/*"
            class="avatar-picker__input"
            @change="onFileChange"
        >
        <button v-if="previewUrl" type="button" class="avatar-picker__remove" @click="clear">
            Retirer
        </button>
    </div>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue'

const emit = defineEmits<{ (e: 'update:modelValue', file: File | null): void }>()

const fileInput = ref<HTMLInputElement | null>(null)
const previewUrl = ref<string | null>(null)

function triggerFilePicker() {
    fileInput.value?.click()
}

function onFileChange(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0] ?? null

    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = file ? URL.createObjectURL(file) : null

    emit('update:modelValue', file)
}

function clear() {
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = null
    if (fileInput.value) fileInput.value.value = ''
    emit('update:modelValue', null)
}

onBeforeUnmount(() => {
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
})
</script>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.avatar-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.avatar-picker__preview {
    position: relative;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    cursor: pointer;
    overflow: visible;
    background: rgba(255, 255, 255, 0.06);
    border: 1px dashed rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar-picker__preview img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.avatar-picker__placeholder {
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.4);
}

.avatar-picker__edit {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tertiary-color);
    color: var(--white);
    font-size: 13px;
    border: 2px solid rgba(30, 26, 40, 0.55);
}

.avatar-picker__input {
    display: none;
}

.avatar-picker__remove {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 11.5px;
    text-decoration: underline;
    cursor: pointer;
}

.avatar-picker__remove:hover {
    color: var(--white);
}
</style>
