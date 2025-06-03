import swap from "daisyui/components/swap";
import { swapTheme } from "./utils/swapTheme";

const elements = {
    themeSwap: document.getElementById('themeSwap'),
}

elements.themeSwap.addEventListener('change', () => {
    swapTheme();
});