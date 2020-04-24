import Express from 'express';
import cors from 'cors';

const app = Express();

const database = {
    users: [
        {
            id: 123,
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: 124,
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.use(Express.json());
app.use(cors());

app.get('/', (_req, res) => {
    res.send(database.users);
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let status = 404;
    let response: object | string = "no such user";

    database.users.some(user => {
        if (user.id === Number(id)) {
            response = user;
            status = 200;
            return true;
        }
    });

    res.status(status).json(response);
});

app.post('/signin', (req, res) => {
    console.log(req.body);

    if (database.users.some((value) => {
        return req.body.email === value.email && req.body.password === value.password;
    })) {
        res.json('success');
    } else {
        res.status(400).json('Error logging in');
    }
});

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: 125,
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });
    res.json(database.users[database.users.length - 1]);
});

app.put('/image', (req, res) => {
    const { id } = req.body;
    let status = 404;
    let response: number | string = "no such user";

    database.users.some(user => {
        if (user.id === id) {
            user.entries++;
            response = user.entries;
            status = 200;
            return true;
        }
    });

    res.status(status).json(response);
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});