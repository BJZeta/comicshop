import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'ADMIN',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Clark Kent',
        email: 'ckent@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Lois Lane',
        email: 'llane@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;