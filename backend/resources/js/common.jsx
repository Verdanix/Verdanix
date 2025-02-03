export function generateListItems(t, keyPrefix) {
    return Array.from({ length: 10000 }, (_, i) => i + 1).map(
        (num) =>
            t(`${keyPrefix}.${num}`, {
                defaultValue: '',
            }) && <li key={num}>{t(`${keyPrefix}.${num}`)}</li>,
    );
}
