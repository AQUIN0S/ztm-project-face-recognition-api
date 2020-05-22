import Express, { Response } from 'express';
import cors from 'cors';
import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'danny',
        database: 'face-recognition'
    }
});

const tableNames = {
    users: "users",
    login: "login"
}

const tableProps = {
    users: {
        id: `${tableNames.users}.id`,
        name: `${tableNames.users}.name`,
        email: `${tableNames.users}.email`,
        entries: `${tableNames.users}.entries`,
        joined: `${tableNames.users}.joined`
    },
    login: {
        id: `${tableNames.login}.id`,
        email: `${tableNames.login}.email`,
        hash: `${tableNames.login}.hash`
    }
}

const app = Express();

const validEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
};

const userExists = async (identifier: string | number) => {
    if (typeof identifier === 'string') {
        const { exists } = await db.first(
            db.raw(
                'EXISTS ? as exists',
                db.from(tableNames.users).select('id').where({email: identifier}).limit(1)
            )
        );
        return exists;
    } else if (typeof identifier === 'number') {
        const { exists } = await db.first(
            db.raw(
                'EXISTS ? as exists',
                db.from(tableNames.users).select('id').where({id: identifier}).limit(1)
            )
        );
        return exists;
    }
};

const sendUser = (res: Response, user: any) => {
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400).send("Sorry, can't find user");
    }
};

app.use(Express.json());
app.use(cors());

app.get('/', (_req, res) => {
    db.select("*").from(tableNames.users).then(data => res.json(data));
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;

    db.select("*").from(tableNames.users).where({ id: id }).then(user => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).send();
        }
    });
});

app.post('/signin', async (req, res) => {
    console.log(req.body);

    let { id, name, email, entries, joined } = tableProps.users;

    const user = await db.select(id, name, email, entries, joined)
        .from(tableNames.users)
        .join(tableNames.login, tableProps.users.email, "=", tableProps.login.email)
        .where({ [tableProps.users.email]: req.body.email, hash: req.body.password })
        .first();
    
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400).send();
    }
});

app.post('/register', async (req, res) => {
    const { email, name, password } = req.body;

    if (validEmail(email) && !(await userExists(email)) && name && password) {
        const newUser = (await db(tableNames.users)
            .returning('*')
            .insert({
                email: email,
                name: name,
                joined: new Date()
            }))[0];
        console.log(newUser);
        sendUser(res, newUser);
        const newLogin = await db(tableNames.login)
            .returning('*')
            .insert({
                email: email,
                hash: password
            });
        console.log(newLogin);
    } else {
        res.status(400).json("Email wasn't valid or other field(s) were empty!");
    }
});

app.put('/image', async (req, res) => {
    const id = req.body.id as number;

    const userEntries = 
        await db.select(tableProps.users.entries, tableProps.users.id)
            .from(tableNames.users)
            .where({ [tableProps.users.id]: id })
            .first();

    if (userEntries) {
        let newEntries = Number(userEntries.entries) + 1;
        console.log(newEntries);
        const value = (await db(tableNames.users)
            .update({ entries: newEntries })
            .where({ id: Number(userEntries.id) })
            .returning("entries"))[0];
        
        res.status(200).json(value);
    } else {
        res.status(404).send('No user found');
    }
    
});

app.listen(process.env.PORT || 5000, () => {
    console.log('\x1b[32m%s\x1b[0m', '[app] app is running on port 3000');
});