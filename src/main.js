// import { register } from '@tauri-apps/plugin-global-shortcut';
const { invoke } = window.__TAURI__.core;
console.log(window.__TAURI__);

// when using `"withGlobalTauri": true`, you may use
const { register } = window.__TAURI__.globalShortcut;
console.log(window.__TAURI__.globalShortcut);

await register('CommandOrControl+Shift+P', () => {
  console.log('Command Palette opened');
});

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});
