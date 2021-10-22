enum Permission {
    ADMIN = 'ADMIN',
    USER = 'USER',
    READONLY = 'READONLY',
}

console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);

console.log(Permission["USER"]);