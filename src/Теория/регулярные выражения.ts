// (1) *** Проверить, содержит ли строка только числа при помощи регулярных выражений: ***

const isOnlyNumbers = (string: string) => /^\d+$/.test(string);
// ^ — утверждает начало строки.
// \d — соответствует любой цифре (от 0 до 9).
// + — квантификатор, означающий «один или более раз»
// $ — утверждает конец строки.

// *** Теория ***
// https://sky.pro/wiki/javascript/proverka-stroki-na-soderzhanie-tolko-tsifr-v-java-script/
// https://sky.pro/wiki/javascript/kak-sostavit-regex-dlya-proverki-stroki-na-chisla/
