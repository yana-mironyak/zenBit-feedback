import { useForm } from 'react-hook-form';
import { useCreateFeedbackMutation } from 'redux/feedbackApi';
import { Button, Form, Input, MessageInput } from './feedbackForm.styled';

export const FeedbackForm = () => {
    const [createFeedback] = useCreateFeedbackMutation();

    const {
        reset,
        register,
        handleSubmit,
    } = useForm();
    
    const onSubmit = async ({name, email, message}) => {
        try {
            await createFeedback({name, email, message});
            console.log('feedback saved');
        } catch(error) {
            console.log(error);
        }
        reset();
    }
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Name'
                {...register ('name', { required: true })}
                type='text'
                placeholder='Your name*'
            />
            <Input
                label='Email'
                {...register ('email', { required: true })}
                type='email'
                placeholder='Your e-mail*'
            />
            <MessageInput
                label='Message'
                {...register ('message', { required: true })}
                type='text'
                placeholder='Your message*' />
            <Button type='submit'>Send message</Button>
        </Form>
    )
}