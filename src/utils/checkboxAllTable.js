export const checkAllTable = (table) => {
    if(!table) {
        return;
    }

    if(!table instanceof HTMLTableElement) {
        throw new Error('The provided element is not a table');
    }
    
    const firstCheckbox = table.querySelector('thead input[type="checkbox"]');
    const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');

    firstCheckbox.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });

    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            firstCheckbox.checked = false;
        });
    })

}
