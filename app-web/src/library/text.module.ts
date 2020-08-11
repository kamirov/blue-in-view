export const Text = {
    stripNonAscii
}

function stripNonAscii(text: string) {
    // Credit: https://stackoverflow.com/questions/20856197/remove-non-ascii-character-in-string
    return text.replace(/[^\x00-\x7F]/g, "");
}
