To avoid this silent data type coercion issue, always validate and check data types before updating Firestore documents. Add explicit type checking in your application code to ensure consistent data types.

```javascript
// Correct data type handling in Cloud Firestore
function updateUser(userId, updatedData) {
  //Validate data types here, for example
  if (typeof updatedData.age !== 'number') {
    console.error('Error: Age must be a number.');
    return;
  }

  db.collection('users').doc(userId).update(updatedData)
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch(error => {
      console.error('Error updating document:', error);
    });
}

//Example usage
updateUser('someID', { age: 25 });
```
Implementing robust input validation prevents unexpected behavior and makes your application more reliable.