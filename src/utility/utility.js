import * as SecureStore from 'expo-secure-store';

// Get Key
export async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result;
    } else {
        return null;
    }
}

// Save Key
export async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

// Remove Key-Value
export async function clear(key) {
    await SecureStore.deleteItemAsync(key);
}
