import express from 'express';
import { CreateChatSchema } from './types';

const app = express();

app.use(express.json());

app.post('/chat', (req,res) => {
    const {success, data}= CreateChatSchema.safeParse(req.body)

    if(!success){
        res.status(411).json({
            message: "Input exceeds maximum token limit."
        })
        return 
    }
    const { message } = data;

});

app.listen(3000);