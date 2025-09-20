import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

function getUserProfile(req: Request, res: Response) {
    const user = (req as any).user;
    return res.json({ id: user.id, role: user.role });
}

function withAuthentication(handler: (req: Request, res: Response) => void) {
    const mockTokenValidation = (token: string) => {
        if (token === 'token-admin') {
            return { id: '1', role: 'admin' };
        } else if (token === 'token-user') {
            return { id: '2', role: 'user' };
        }
        return null;
    };

    return (req: Request, res: Response) => {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res
                .status(401)
                .json({ error: 'Unauthorized - no token present' });
        }

        const token = authHeader.replace('Bearer ', '');
        const user = mockTokenValidation(token);

        if (!user) {
            return res
                .status(401)
                .json({ error: 'Unauthorized - invalid token' });
        }

        (req as any).user = user;
        return handler(req, res);
    };
}

function withAuthorization(handler: (req: Request, res: Response) => void) {
    return (req: Request, res: Response) => {
        const user = (req as any).user;
        if (!user || user.role !== req.body.role) {
            return res
                .status(403)
                .json({ error: 'Forbidden - insufficient role' });
        }
        return handler(req, res);
    };
}

// Correct usage: wrap the handler with middleware
app.post('/user', withAuthentication(withAuthorization(getUserProfile)));

app.listen(3000, () => {
    console.log(`server is running on 3000`);
});
