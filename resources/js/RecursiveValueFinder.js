class RecursiveValueFinder {
    constructor(inputString, fields) {
        this.parts = inputString.split('.'); // Splitting the string into individual parts.
        this.fields = fields; // Storing the field structure.
    }
  
    async process() {
        const discardedField = this.parts.shift(); // Getting and removing the first part of the string.
        
        if (this.parts.length === 0) {
            // If no more parts remain, return the value of the field for the last part.
            let field = this.findField(discardedField, this.fields);
            return Promise.resolve(field?.value || null);
        } else if (this.parts.length > 0) {
            let field = this.findField(discardedField, this.fields);
            
            if (field && field.relationshipType == 'belongsTo') {
                // If the field has a "belongsTo" relationship, fetch data from the server.
                return Nova.request().get(`/nova-api/${field.resourceName}/${field.belongsToId}`)
                    .then(result => {
                        this.fields = result.data.resource.fields; // Updating the field structure.
                        return this.process(); // Recursively call for the next part of the string.
                    });
            }
        }
    }

    findField(fieldName, fields) {
        // Find the field with the given name in the field structure.
        return fields.find(field => field.attribute === fieldName);
    }
}
  
export default RecursiveValueFinder;
