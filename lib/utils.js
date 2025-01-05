export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  // Another example utility function
  export function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }