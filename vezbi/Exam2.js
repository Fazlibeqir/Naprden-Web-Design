const add_to = (f) => {
    let values = [];
   
    return {
        insert(newValue) {
            if (values.length === 0) {
                values.push(newValue);
            }
            else {
                const current = values.pop();
                const updated = f(current, newValue);
                values.push(updated);
            }
        },
        result() {
            if (values.length === 0) {
                return null;
            }
            return values[0];
        }
    };
}