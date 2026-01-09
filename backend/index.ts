import express from 'express';
import { CreateChatSchema } from './types';
import { createCompletion } from './openrouter';

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
    createCompletion(data);

});

app.listen(3000);