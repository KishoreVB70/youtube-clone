import { nameList } from "./constants";
import { randomDialogues } from "./constants";

export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

export function generateRandomDialogue() {
    return randomDialogues[Math.floor(Math.random() * randomDialogues.length)];
}