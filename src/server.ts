import Express, { Response } from 'express';
import cors from 'cors';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    entries: number;
    joined: Date;
}

const app = Express();

const database = {
    users: [
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: 5,
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

let newId = 1;

const generateNewId = () => {
    let uniqueId = true;

    do {
        if (database.users.some((value) => {
            return value.id === newId;
        })) {
            uniqueId = false;
            newId++;
        } else {
            uniqueId = true;
        }
    } while (!uniqueId);

    return newId;
}

const validEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
}

const uniqueUser = (email: string) => {
    const emailAlreadyExists = database.users.some(user =>  email === user.email);
    return !emailAlreadyExists;
}

const sendUser = (res: Response, user: User | null) => {
    if (user) {
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            entries: user.entries,
            joined: user.joined
        });
    } else {
        res.status(400).send("Sorry, can't find user");
    }
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
        res.status(200).send();
    } else {
        res.status(400).send();
    }
});

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;

    if (validEmail(email) && uniqueUser(email) && name && password) {
        database.users.push({
            id: generateNewId(),
            name: name,
            email: email,
            password: password,
            entries: 0,
            joined: new Date()
        });
        sendUser(res, database.users[database.users.length - 1]);
    } else {
        res.status(400).json("Email wasn't valid or other field(s) were empty!");
    }
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